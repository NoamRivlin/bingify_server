const mongoose = require('mongoose');

const commentSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Event',
    },
    // validations to be moved to FE
    text: {
      type: String,
      required: true,
      trim: true,
      // validate: {
      //   validator: function (v) {
      //     return /^[a-zA-Z0-9]+$/.test(v);
      //   },
      //   message: 'Only alphanumeric characters are allowed in the text field',
      // },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Comment', commentSchema);
