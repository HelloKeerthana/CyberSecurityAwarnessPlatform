const express = require('express');
const {
  getScenarios,
  getScenarioById,
  evaluateDecision,
} = require('../controllers/scenarioController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', protect, getScenarios);
router.get('/:id', protect, getScenarioById);
router.post('/evaluate', protect, evaluateDecision);

module.exports = router;
