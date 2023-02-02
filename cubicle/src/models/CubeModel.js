const mongoose = require("mongoose");

const cubeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxLength: 50,
  },
  ImageUrl: {
    type: String,
    required: true,
    // add http/ https validation
  },
  difficultyLevel: {
    type: Number,
    min: 1,
    max: 6,
  },
});

const Cube = new mongoose.model("Cube", cubeSchema);

module.exports = Cube;
