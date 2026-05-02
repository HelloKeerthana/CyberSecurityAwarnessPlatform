const express = require('express');
const {
  getQuizByModule,
  submitQuiz,
  getUserResults,
  getAllResults,
} = require('../controllers/quizController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/results/me', protect, getUserResults);
router.get('/results/all', protect, adminOnly, getAllResults);
router.get('/:slug', protect, getQuizByModule);
router.post('/submit', protect, submitQuiz);

module.exports = router;
