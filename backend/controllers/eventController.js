const asyncHandler = require('express-async-handler');
const Event = require('../models/eventModel');
const Group = require('../models/groupModel');
// to do event functionality
const createEvent = asyncHandler(async (req, res) => {
  // slower approach...
  // const group = await Group.find(ObjectId(req.body.groupId));
  // group.events.push(event.id);
  // group.save();
  // await group.save()

  const event = await Event.create({
    title: req.body.title,
    active: { type: Boolean, default: true },
    eventType: req.body.eventType,
    checklistNumber: req.body?.checklistNumber,
    groupId: req.body.groupId,
  });
  await Group.updateOne(
    { id: req.body.groupId },
    {
      $push: { eventsIds: event.id },
    }
  );

  res.status(200).json({ event });
});

module.exports = {
  createEvent,
};
