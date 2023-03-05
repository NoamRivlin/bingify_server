const mongoose = require('mongoose');

const groupSchema = mongoose.Schema(
  {
    // no users yet...
    // admin: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User',
    // },
    title: {
      type: String,
      required: [true, 'Add a title value'],
      unique: [true, 'Group exists'],
    },
    description: {
      type: String,
      required: [true, 'Add a description value'],
    },
    // users: {
    // type: Array, //check if queue is needed?
    // do i need to have some ref to user in here?
    // do i make validation here to check if user is valid?
    // },
    // by GPT:
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // validate: {
        //     validator: (userId) => {
        //         //Check if userId is a valid ObjectId
        //     }
        // }
      },
    ],

    //should i include events: type Array? as each group has watch events list
    // no, event will be its own model and each event will have a ref to a group
    // and theyll have timestamps and on the front they will be added to an array
    //  and displayed ordered by time
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Group', groupSchema);
