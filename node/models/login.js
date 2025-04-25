const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
  email: String,
  loginTime: { type: Date, default: Date.now },
  ipAddress: String,
});

module.exports = mongoose.model('Login', loginSchema);
