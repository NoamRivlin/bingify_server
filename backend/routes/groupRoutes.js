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
router.route('/').get(getGroups).post(protect, createGroup);
// TODO: join a group functionality
// Admin
router.route('/admin').get(protect, getAdminGroups);
router
  .route('/admin/:id')
  .delete(protect, deleteGroup)
  .put(protect, updateGroup);

module.exports = router;
