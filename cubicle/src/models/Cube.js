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
  imageUrl: {
    type: String,
    required: true,
  },
  difficultyLevel: {
    type: Number,
    min: 1,
    max: 6,
  },
  accessories: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Accessory",
    },
  ],
  onwer: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const Cube = new mongoose.model("Cube", cubeSchema);

module.exports = Cube;
