const mongoose = require('mongoose');

const eventSchema = mongoose.Schema(
  {
    title: String,
    // active: Boolean,
    // timer: Boolean,
    // checklist: Boolean,
    // comments: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Comment',
    //   },
    // ]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Event', eventSchema);
