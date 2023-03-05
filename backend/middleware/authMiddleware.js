const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {
  let token = null;

  // if user is authorized and the bearer token is included in the headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findByID(decoded.id).select('-password');
      next();
    } catch (error) {
      console.log(error);

      res.status(401).json({ message: 'Not authorized' });
    }
  }
  if (!token) {
    res.status(401).json({ message: 'Missing JWT' });
  }
});

module.exports = protect;
