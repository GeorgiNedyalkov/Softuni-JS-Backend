const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// we are going to do the hashing in the model which is not best practice
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    reqired: true,
    minlength: [3, "Username is too short"],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password is too short"],
  },
});

userSchema.method("validatePassword", function (password) {
  return bcrypt.compare(password, this.password);
});

userSchema.pre("save", function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;
    next();
  });
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
