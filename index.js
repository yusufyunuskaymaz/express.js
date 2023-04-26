const express = require("express");
const data = require("./data.js");

const server = express();

const port = 5000;

server.get("/", (req, res) => {
  res.send("Merhaba");
});

server.get("/aktorler", (req, res) => {
  res.status(200).json(data);
});

server.get("/aktorler/:id", (req, res) => {
  const { id } = req.params;
  const aktor = data.find((item) => item.id === Number(id));
//   console.log("req.params",req.params);
  console.log("req.query",req.query);
  if (aktor) {
    console.log("buraya girdi");
    res.status(200).json(aktor);
  } else {
    res.status(404).send("Aradığınız aktör bulunamadı");
  }
});

server.listen(port, () => {
  console.log(`http://localhost:${port} dinleniyor`);
});
