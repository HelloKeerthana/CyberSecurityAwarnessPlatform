const LearningModule = require('../models/LearningModule');

const getAllModules = async (req, res) => {
  try {
    const modules = await LearningModule.find().sort('order');
    res.json(modules);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getModuleBySlug = async (req, res) => {
  try {
    const module = await LearningModule.findOne({ slug: req.params.slug });
    if (!module) return res.status(404).json({ message: 'Module not found' });
    res.json(module);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createModule = async (req, res) => {
  try {
    const module = await LearningModule.create(req.body);
    res.status(201).json(module);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateModule = async (req, res) => {
  try {
    const module = await LearningModule.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    );
    if (!module) return res.status(404).json({ message: 'Module not found' });
    res.json(module);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteModule = async (req, res) => {
  try {
    const module = await LearningModule.findOneAndDelete({ slug: req.params.slug });
    if (!module) return res.status(404).json({ message: 'Module not found' });
    res.json({ message: 'Module deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllModules, getModuleBySlug, createModule, updateModule, deleteModule };
