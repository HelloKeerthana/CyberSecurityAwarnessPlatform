const express = require('express');
const {
  getStudents,
  getPerformance,
  assignQuiz,
  getAssignments,
  deleteAssignment,
  getMyAssignments,
} = require('../controllers/adminController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();

// Student-accessible (own assignments)
router.get('/assignments/mine', protect, getMyAssignments);

// Admin-only
router.get('/students', protect, adminOnly, getStudents);
router.get('/performance', protect, adminOnly, getPerformance);
router.post('/assign', protect, adminOnly, assignQuiz);
router.get('/assignments', protect, adminOnly, getAssignments);
router.delete('/assignments/:id', protect, adminOnly, deleteAssignment);

module.exports = router;
