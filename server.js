import dotenv from "dotenv"
dotenv.config()
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";
import express from "express";
import config from "./webpack.config.js";
import bcrypt, { compare } from "bcrypt";
import session from "express-session";
import { default as connectMongoDBSession} from 'connect-mongodb-session';
import passport from "passport"
import "./passport-config.js"
import User, { dbURI, connectMongodb} from "./database.js"

connectMongodb();

// store session in mongodb
const MongoDBStore = connectMongoDBSession(session);

// eequired in ES6 modules.
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();

app.use(express.json());

// store session
var sessionStore = new MongoDBStore({
  uri: dbURI,
  collection: 'session'
})

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: sessionStore
}))

const isAuth = (req, res, next) => {
  if(req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/login")
  }
}

const unAuth = (req, res, next) => {
  if(req.isAuthenticated()) {
    return res.redirect("/")
  }
  next();
}

app.use(passport.initialize());
app.use(passport.session());

// debugging
app.use("/", (req, res, next) => {
  console.log(req.session)
  console.log(req.user)
  console.log("----------------------------------------")
  next();
})
// debugging

app.get("/login", unAuth)

app.get("/signup", unAuth)

app.post("/login", passport.authenticate("local"), (req, res, next) => {
  res.status(200).send(req.user);
});

app.post("/signup", unAuth, (req, res, next) => {

  if(req.session.viewCount){
    req.session.viewCount++;
  } else {
    req.session.viewCount = 1;
  }

  User.findOne({ email: req.body.email }, async (err, profile) => {
    try {

      if (profile) {
        throw err;
      }

      const hashPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
      })
      await newUser.save();

      req.login(newUser, (err) => {
        if(err) {
          return(next(err))
        }
        res.status(200).send(req.user);
        // return res.redirect("/account")
        // OR return res.status(200).send()
        // res.redirect("account") auto sends a response 200 status.
      })

    } catch (err) {
      res.status(409).send({
        message: "User with this email already exists"
      })
    }
  })
}
);

app.get("/account", isAuth, (req, res, next) => {
  next();
})

app.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("/login")
}),

app.use(
  express.static(
    resolve(__dirname, "dist"),
    {
      extensions: ["htm", "html"],
      setHeaders: (res, path, stat) => {
        res.set("Cross-Origin-Embedder-Policy", "require-corp");
        res.set("Cross-Origin-Opener-Policy", "same-origin");
      },
    }
  )
);

app.set("env", config.mode);

const options = { port: 3000, host: "localhost" };
createServer(app).listen(options, () => {
  console.log(`Server listening at (http://${options.host}:${options.port}).`)
});
