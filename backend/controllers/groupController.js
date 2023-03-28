const asyncHandler = require('express-async-handler');
const Group = require('../models/groupModel');

// USER options
//not protected. later this will get only available groups
const getGroups = asyncHandler(async (req, res) => {
  const groups = await Group.find();
  if (!groups) {
    res.status(400);
    throw new Error('Groups not found');
  }
  res.status(200).json({ groups });
});

// shows the groups the user is a part of
// const getUserGroups = asyncHandler(async (req, res) => {
//   const groups = await Group.find({ user: req.user.id });
//   res.status(200).json({ groups });
// });

const createGroup = asyncHandler(async (req, res) => {
  const group = await Group.create({
    title: req.body.title,
    description: req.body.description,
    adminId: req.user.id,
    $push: { usersIds: req.user.id },
  });
  res.status(201).json({ group });
});

// ADMIN options
// get the groups the user is the admin of
// GET method
const getAdminGroups = asyncHandler(async (req, res) => {
  const groups = await Group.find({ adminId: req.user.id });
  if (!groups) {
    res.status(400);
    throw new Error('Groups not found');
  }
  res.status(200).json({ groups });
});
// PUT method
const updateGroup = asyncHandler(async (req, res) => {
  const group = await Group.findById(req.params.id);
  if (!group) {
    res.status(400);
    throw new Error('Group not found');
  }

  let { newTitle, newDescription, newEvents } = req.body;
  if (!newTitle) newTitle = group.title;
  if (!newDescription) newDescription = group.description;
  // if (!newEvents) newEvents = group.events;

  group.title = newTitle;
  group.description = newDescription;
  // group.events = newEvents;

  await group.save();
  res.status(201).json({ group });
});

// DELETE method
const deleteGroup = asyncHandler(async (req, res) => {
  const group = await Group.deleteOne({ _id: req.params.id });
  if (!group) {
    res.status(400);
    throw new Error('Group not found');
  }
  res.status(201).json({ msg: `delete ${req.params.id}, ${group}` });
});

module.exports = {
  getGroups,
  getAdminGroups,
  createGroup,
  updateGroup,
  deleteGroup,
};
