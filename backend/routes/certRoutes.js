const express = require('express');
const { getCertStatus, submitExam, getCertificate } = require('../controllers/certController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/status', protect, getCertStatus);
router.post('/submit', protect, submitExam);
router.get('/my', protect, getCertificate);

module.exports = router;
