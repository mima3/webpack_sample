const express = require("express");
const app = express();
const fs = require('fs');
let broadcaster;
const port = 3000; // 1024以下にした場合は管理者権限が必要になります.

const http = require("http");
const server = http.createServer(app);

app.use(express.static(__dirname + "/public"));

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
