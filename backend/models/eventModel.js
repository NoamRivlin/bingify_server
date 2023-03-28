const mongoose = require('mongoose');

const eventSchema = mongoose.Schema(
  {
    title: String,
    active: Boolean,
    // timer: Boolean,
    // checklist: Boolean,
    // checklistNumber: { type: Number, default: 0 },

    eventType: {
      type: String,
      enum: ['timer', 'checklist'],
      required: true,
    },
    checklistNumber: {
      type: Number,
      default: 0,
      // validations to be moved to FE
      // required: function () {
      //   return this.eventType === 'checklist';
      // },
      // validate: {
      //   validator: (number) => number > 0,
      //   message: 'checklistNumber must be greater than 0',
      // },
    },
    commentsIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Group',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Event', eventSchema);
