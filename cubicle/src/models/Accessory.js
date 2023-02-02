const { Schema, model, ObjectID } = require("mongoose");

const accessorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxLength: 50,
  },
  // cubes: {
  //   type: ObjectID,
  //   ref: "Cube",
  // },
});

const Accessory = new model("Accessory", accessorySchema);

module.exports = Accessory;
