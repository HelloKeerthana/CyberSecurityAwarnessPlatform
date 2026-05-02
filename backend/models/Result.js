const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    moduleSlug: { type: String, required: true },
    score: { type: Number, required: true },
    totalQuestions: { type: Number, required: true },
    percentage: { type: Number, required: true },
    answers: [
      {
        questionIndex: Number,
        selectedAnswer: Number,
        isCorrect: Boolean,
      },
    ],
    completedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Result', resultSchema);
