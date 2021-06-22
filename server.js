import { resolve } from "path";
import { createServer } from "http";
import express from "express";
import bcrypt from "bcrypt";
import session from "express-session";
import connectMongoDBSession from "connect-mongodb-session";
import passport from "passport";
import "./passport.config.js";
import User, { databaseConnection } from "./database.js";
import config from "./webpack.config.cjs";

// Store session in MongoDB.
const MongoDBStore = connectMongoDBSession(session);
const sessionStore = new MongoDBStore({
  uri: process.env.DB_STRING,
  collection: "session",
});

const app = express();

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
  })
);

const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect("/login");
};

const unAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  return next();
};

app.use(passport.initialize());
app.use(passport.session());

// FIXME Debugging only!
app.use("/", (req, res, next) => {
  console.log(req.session);
  console.log(req.user);
  console.log("----------------------------------------");
  return next();
});

app.get("/login", unAuth);

app.get("/signup", unAuth);

app.post("/login", passport.authenticate("local"), (req, res, next) =>
  res.status(200).send(req.user)
);

app.post("/signup", unAuth, (req, res, next) => {
  if (req.session.viewCount) {
    req.session.viewCount += 1;
  } else {
    req.session.viewCount = 1;
  }

  User.findOne({ email: req.body.email }, async (dataErr, profile) => {
    try {
      if (profile) {
        throw dataErr;
      }

      const hashPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword,
      });
      await newUser.save();

      return req.login(newUser, (loginErr) => {
        if (loginErr) {
          return next(loginErr);
        }
        return res.status(200).send(req.user);
      });
    } catch (err) {
      return res.status(409).send({
        message: "User with this email already exists",
      });
    }
  });
});

app.get("/account", isAuth, (req, res, next) => next());

app.get("/logout", (req, res, next) => {
  req.logOut();
  return res.redirect("/login");
});

app.use(
  express.static(resolve("dist"), {
    extensions: ["htm", "html"],
    setHeaders: (res, path, stat) => {
      res.set("Cross-Origin-Embedder-Policy", "require-corp");
      res.set("Cross-Origin-Opener-Policy", "same-origin");
    },
  })
);

app.set("env", config.mode);

const options = { port: 3000, host: "localhost" };
const server = createServer(app);
server.listen(options, () => console.log(`Server listening at (http://${options.host}:${options.port}).`));
server.on("close", async (error) => {
  // Added '\n' to avoid showing on same line as SIGINT (Ctrl-C) command.
  console.log("\nClosing server...");
  databaseConnection.close();
  console.log("Successfully closed server!");
  return 0;
});

// FIXME Move the code to proper sub-files. For example, express app to
// `app.js`, HTTP server to `server.js`, and MongoDB session to `session.js`.
// [Source to SIGINT event listener](https://stackoverflow.com/a/20165643).
process.on("SIGINT", async (error) => {
  await server.close();
  return process.exit();
});
