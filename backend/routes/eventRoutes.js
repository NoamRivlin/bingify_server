const express = require('express');
const { createEvent } = require('../controllers/eventController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(protect, createEvent);

module.exports = router;
