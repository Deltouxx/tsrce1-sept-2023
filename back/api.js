const express = require("express");

const app = express.Router();

app.get("/random-config", (req, res) => {
  res.json({ sample: 123, multiplicationfactor: 97 });
});

module.exports = app;
