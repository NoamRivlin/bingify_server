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

// shows groups the user is a part of
// const getUserGroups = asyncHandler(async (req, res) => {
//   const groups = await Group.find({ user: req.user.id });
//   res.status(200).json({ groups });
// });

const createGroup = asyncHandler(async (req, res) => {
  const group = await Group.create({
    title: req.body.title,
    description: req.body.description,
    admin: req.user.id,
  });
  res.status(200).json({ group });
});

// ADMIN options
const getAdminGroups = asyncHandler(async (req, res) => {
  const groups = await Group.find({ admin: req.user.id });
  if (!groups) {
    res.status(400);
    throw new Error('Groups not found');
  }
  res.status(200).json({ groups });
});

const updateGroup = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `update ${req.params.id}` });
});

const deleteGroup = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `delete ${req.params.id}` });
});

module.exports = {
  getGroups,
  getAdminGroups,
  createGroup,
  updateGroup,
  deleteGroup,
};
