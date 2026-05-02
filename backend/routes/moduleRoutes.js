const express = require('express');
const {
  getAllModules,
  getModuleBySlug,
  createModule,
  updateModule,
  deleteModule,
} = require('../controllers/moduleController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', protect, getAllModules);
router.get('/:slug', protect, getModuleBySlug);
router.post('/', protect, adminOnly, createModule);
router.put('/:slug', protect, adminOnly, updateModule);
router.delete('/:slug', protect, adminOnly, deleteModule);

module.exports = router;
