const mongoose = require("mongoose");

const User_Schema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const User = mongoose.model("user", User_Schema);
module.exports.user = User;
