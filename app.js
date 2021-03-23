const path = require("path");
const http = require("http");
const express = require("express");

const app = express();
const config = require("./webpack.config.js");

app.use(
  // Options help from https://expressjs.com/en/4x/api.html#express.static
  express.static(
    path.resolve(__dirname, "dist"),
    {
      extensions: ["htm", "html"],
      setHeaders: (res, path, stat) => {
        // First identified from console:
        // https://developer.chrome.com/blog/enabling-shared-array-buffer/
        res.set("Cross-Origin-Embedder-Policy", "require-corp");
        res.set("Cross-Origin-Opener-Policy", "same-origin");
      },
    }
  )
);
app.set("env", config.mode);
const options = { port: 3000, host: "localhost" };

http.createServer(app).listen(options, () => {
  console.log(`Server listening at http://${options.host}:${options.port}`)
});
