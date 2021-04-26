import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";
import express from "express";
import config from "./webpack.config.js";
import bcrypt from "bcrypt";

const __dirname = dirname(fileURLToPath(import.meta.url))  // required in ES6 modules.
const app = express();
const users = [];

app.use(express.urlencoded({extended : false}));

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

app.post("/signup", async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashPassword
    })
    res.redirect("/login");
  } catch {
    res.redirect("/signup");
  }
  console.log(users);
});

app.set("env", config.mode);

const options = { port: 3000, host: "localhost" };
createServer(app).listen(options, () => {
  console.log(`Server listening at (http://${options.host}:${options.port}).`)
});
