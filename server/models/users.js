const mongoose = require('mongoose');

const users = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const Users = mongoose.model('Users', users);
module.exports = Users;
