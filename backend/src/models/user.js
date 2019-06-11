const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      validate(email) {
        if (!validator.isEmail(email)) throw new Error("Email is invalid!");
      }
    },
    password: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true,
      trim: true
    }
  }, { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;