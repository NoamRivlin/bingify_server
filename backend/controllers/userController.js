const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

const register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || username.length < 3) {
    res.status(404);
    throw new Error('Username is mandatory and is at least 3 characters long');
  }
  if (!email) {
    res.status(404);
    throw new Error('Enter email');
  }
  if (!password) {
    res.status(404);
    throw new Error('Enter password');
  }

  const UserExists = await User.findOne({ email });
  if (UserExists) {
    res.status(400).json({ message: 'User already exists' });
    throw new Error('User already exists');
  }

  // hash password
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: 'Invaild user' });
    throw new Error('Invaild user');
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({ email: user.email, token: generateToken(user._id) });
  } else {
    res.status(400).json({ message: 'Invaild credentials' });
    throw new Error('Invaild credentials');
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  const { _id, username, email } = await User.findById(req.user.id);
  res.status(201).json({ id: _id, username, email });
});

module.exports = {
  register,
  login,
  getUserProfile,
};
