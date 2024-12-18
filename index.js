//carregamos o modulo
const express = require("express");
const consign = require("consign");

let app = express();

consign().include("routes").into(app);

app.listen(3000, "127.0.0.1", () => {
  console.log("servidor rodando!");
});

//agora vai no cmd > digita node index > vai no navegador e coloca localhost:3000.
