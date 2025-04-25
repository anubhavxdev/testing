// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String, // Consider hashing this!
});

module.exports = mongoose.model("User", userSchema);
