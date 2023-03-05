const mongoose = require('mongoose');
// self note:
// web simplifies show validation can be made in the Schema but
// it works with .save/.create.
// could be changed with runValidators: true
// https://mongoosejs.com/docs/validation.html
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please add username'],
    },
    password: {
      type: String,
      required: [true, 'Please add password'],
    },
    email: {
      type: String,
      unique: [true, 'Email already exists'],
      required: [true, 'Please add email'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
