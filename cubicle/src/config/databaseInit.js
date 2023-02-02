// script to initialize database
const mongoose = require("mongoose");
const config = require("../config");

const mongoURI = config.databaseURI;

async function initDatabase() {
  mongoose.set("strictQuery", false);
  await mongoose.connect(mongoURI);
  console.log("Database is initialized");
}

module.exports = initDatabase;
