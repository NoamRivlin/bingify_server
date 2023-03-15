const express = require('express');
const router = express.Router();
const {
  getGroups,
  getAdminGroups,
  createGroup,
  updateGroup,
  deleteGroup,
} = require('../controllers/groupController');
const protect = require('../middleware/authMiddleware');
// User
router.route('/').get(protect, getGroups).post(protect, createGroup);
// Admin
router.route('/admin').get(protect, getAdminGroups);
router.route('/:id').delete(protect, deleteGroup).put(protect, updateGroup);

module.exports = router;
