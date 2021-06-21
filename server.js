import { createServer } from "http";
import app from "./app.js"

const options = { port: 3000, host: "localhost" };
createServer(app).listen(options, () => {
  console.log(`Server listening at (http://${options.host}:${options.port}).`)
});
