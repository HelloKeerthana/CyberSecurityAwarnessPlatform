const mongoose = require('mongoose');

const quizAssignmentSchema = new mongoose.Schema({
  assignedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  moduleSlug: { type: String, enum: ['phishing', 'malware', 'password'], required: true },
  dueDate: { type: Date, default: null },
  note: { type: String, default: '' },
  completed: { type: Boolean, default: false },
  completedAt: { type: Date, default: null },
  assignedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('QuizAssignment', quizAssignmentSchema);
