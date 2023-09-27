const express = require("express");

const app = express.Router();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/random-config", (req, res) => {
  res.json({ sample: 123, multiplicationfactor: 97 });
});

module.exports = app;
