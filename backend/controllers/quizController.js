const Quiz = require('../models/Quiz');
const Result = require('../models/Result');
const User = require('../models/User');

const getQuizByModule = async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ moduleSlug: req.params.slug });
    if (!quiz) return res.status(404).json({ message: 'Quiz not found for this module' });
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Accepts client-graded results (score/totalQuestions/percentage) when no DB quiz exists.
// This allows frontend-hardcoded quizzes to still record results in the database.
const submitQuiz = async (req, res) => {
  const { moduleSlug, answers, score: clientScore, totalQuestions: clientTotal, percentage: clientPct } = req.body;
  try {
    const quiz = await Quiz.findOne({ moduleSlug });

    let score, totalQuestions, percentage, evaluated;

    if (quiz) {
      score = 0;
      evaluated = answers.map((ans, i) => {
        const isCorrect = quiz.questions[i]?.correctAnswer === ans.selectedAnswer;
        if (isCorrect) score++;
        return { questionIndex: i, selectedAnswer: ans.selectedAnswer, isCorrect };
      });
      totalQuestions = quiz.questions.length;
      percentage = Math.round((score / totalQuestions) * 100);
    } else {
      // No DB quiz — use client-computed values
      score = clientScore ?? 0;
      totalQuestions = clientTotal ?? answers.length;
      percentage = clientPct ?? Math.round((score / totalQuestions) * 100);
      evaluated = answers.map((ans, i) => ({
        questionIndex: i,
        selectedAnswer: ans.selectedAnswer,
        isCorrect: ans.isCorrect ?? null,
      }));
    }

    const result = await Result.create({
      user: req.user._id,
      moduleSlug,
      score,
      totalQuestions,
      percentage,
      answers: evaluated,
    });

    await User.findByIdAndUpdate(req.user._id, {
      $addToSet: { completedModules: moduleSlug },
      $push: { scores: { module: moduleSlug, score: percentage } },
    });

    // Mark any active assignment for this student + module as completed
    try {
      const QuizAssignment = require('../models/QuizAssignment');
      await QuizAssignment.findOneAndUpdate(
        { assignedTo: req.user._id, moduleSlug, completed: false },
        { completed: true, completedAt: new Date() }
      );
    } catch (_) {}

    res.status(201).json({ result, quiz: quiz || null });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUserResults = async (req, res) => {
  try {
    const results = await Result.find({ user: req.user._id }).sort('-completedAt');
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllResults = async (req, res) => {
  try {
    const results = await Result.find()
      .populate('user', 'name email')
      .sort('-completedAt');
    res.json(results);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getQuizByModule, submitQuiz, getUserResults, getAllResults };
