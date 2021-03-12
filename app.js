const path = require("path");
const http = require("http");
const express = require("express");

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.set("env", "development");
const options = {
    port: 3000,
    host: "localhost"
};

http.createServer(app).listen(options, () => {
    console.log("Server listening at http://localhost:3000")
});
