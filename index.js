//carregamos o modulo
const express = require("express");
let routesIndex = require("./routes/index");
let routesUsers = require("./routes/users");

let app = express();

app.listen(3000, "127.0.0.1", () => {
  console.log("servidor rodando!");
});

//agora vai no cmd > digita node index > vai no navegador e coloca localhost:3000.