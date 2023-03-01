const asyncHandler = require('express-async-handler');
const Group = require('../models/groupModel');

const getGroups = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json({ msg: goals });
});

const createGroup = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.text) {
    res.status(400);
    throw new Error('add text property in the body');
  }

  const group = await Group.create({
    text: req.body.text,
  });
  res.status(200).json({ msg: 'set' });
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
