const asyncHandler = require('express-async-handler');
const Event = require('../models/eventModel');
const Group = require('../models/groupModel');
// to do event functionality
const createEvent = asyncHandler(async (req, res) => {
  const group = await Group.find(ObjectId(req.body.groupId));

  const event = await Event.create({
    title: req.body.title,
  });
  group.updateOne(
    { id: req.body.groupId },
    {
      $push: { events: event.id },
    }
  );
  res.status(200).json({ event });
});

module.exports = {
  createEvent,
};
