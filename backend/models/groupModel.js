const mongoose = require('mongoose');

const groupSchema = mongoose.Schema(
  {
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    usersIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
    ],
    title: {
      type: String,
      required: [true, 'Add a title value'],
      // validations to be moved to FE
      // validate: {
      //   // making sure the string is not empty or just whitespace
      //   validator: function (string) {
      //     return string.trim().length > 0;
      //   },
      //   message: 'Title cannot be empty',
      // },
      unique: [true, 'Group exists'],
    },
    description: {
      type: String,
      required: [true, 'Add a description value'],
    },
    eventsIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
      },
    ],
    private: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Group', groupSchema);
