const express = require("express");
const app = express();
const config = require("./config");

app.get("/", (req, res) => {
  res.send(`Home Page`);
});

app.listen(config.PORT, () => {
  console.log(`Server is running on port: ${config.PORT}...`);
});
