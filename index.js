const http = require("http");
const PORT = 5000;

const fs = require("fs");
http
  .createServer((req, res) => {
    fs.readFile("index.html",  (req, res, err) => {
      if(err) console.log(err);
    })
  })
  .listen(PORT, (req, res, err) => {
    if (err) console.log(err);
    console.log("Server started http://localhost:" + PORT);
  });