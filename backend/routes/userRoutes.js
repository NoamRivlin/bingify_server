const express = require('express');
const {
  login,
  register,
  getUserProfile,
} = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(register);
router.route('/login').post(login);
router.route('/profile').post(protect, getUserProfile);
