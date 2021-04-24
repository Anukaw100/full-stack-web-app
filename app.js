import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";
import express from "express";
import config from "./webpack.config.js";

const __dirname = dirname(fileURLToPath(import.meta.url))  // required in ES6 modules.
const app = express();

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
