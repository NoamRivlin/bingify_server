const asyncHandler = require('express-async-handler');
const Group = require('../models/groupModel');

const getGroups = asyncHandler(async (req, res) => {
  const groups = await Group.find();
  res.status(200).json({ groups });
});

const createGroup = asyncHandler(async (req, res) => {
  const group = await Group.create({
    title: req.body.title,
    description: req.body.description,
    admin: req.user.id,
  });
  res.status(200).json({ group });
});
const updateGroup = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `update ${req.params.id}` });
});
const deleteGroup = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `delete ${req.params.id}` });
});

module.exports = {
  getGroups,
  createGroup,
  updateGroup,
  deleteGroup,
};
