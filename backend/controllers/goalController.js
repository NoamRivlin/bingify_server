const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json({ msg: goals });
});

const setGoals = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.text) {
    res.status(400);
    throw new Error('add text property in the body');
  }

  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json({ msg: 'set' });
});
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `update ${req.params.id}` });
});
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `delete ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
};
