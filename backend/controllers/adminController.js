const User = require('../models/User');
const Result = require('../models/Result');
const Certification = require('../models/Certification');
const QuizAssignment = require('../models/QuizAssignment');

const MODULE_LABELS = {
  phishing: 'Phishing Awareness',
  malware: 'Malware Defense',
  password: 'Password Hygiene',
};

// GET /api/admin/students — all students with their progress summary
const getStudents = async (req, res) => {
  try {
    const students = await User.find({ role: 'student' }).select('-password').lean();
    const allResults = await Result.find({}).lean();
    const allCerts = await Certification.find({}).lean();

    const data = students.map((s) => {
      const results = allResults.filter((r) => r.user?.toString() === s._id.toString());
      const certified = allCerts.some((c) => c.user?.toString() === s._id.toString());

      const moduleBest = {};
      results.forEach((r) => {
        if (!moduleBest[r.moduleSlug] || r.percentage > moduleBest[r.moduleSlug]) {
          moduleBest[r.moduleSlug] = r.percentage;
        }
      });

      const avgScore = results.length
        ? Math.round(results.reduce((a, r) => a + r.percentage, 0) / results.length)
        : null;

      return {
        _id: s._id,
        name: s.name,
        email: s.email,
        completedModules: s.completedModules || [],
        quizzesTaken: results.length,
        avgScore,
        moduleBest,
        certified,
        createdAt: s.createdAt,
      };
    });

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/admin/performance — all quiz results with student info
const getPerformance = async (req, res) => {
  try {
    const results = await Result.find()
      .populate('user', 'name email')
      .sort('-completedAt')
      .lean();

    const enriched = results.map((r) => ({
      ...r,
      moduleLabel: MODULE_LABELS[r.moduleSlug] || r.moduleSlug,
    }));

    res.json(enriched);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/admin/assign — assign a quiz to a student
const assignQuiz = async (req, res) => {
  const { studentId, moduleSlug, dueDate, note } = req.body;
  if (!studentId || !moduleSlug) {
    return res.status(400).json({ message: 'studentId and moduleSlug are required.' });
  }
  try {
    const student = await User.findById(studentId);
    if (!student || student.role !== 'student') {
      return res.status(404).json({ message: 'Student not found.' });
    }

    const existing = await QuizAssignment.findOne({
      assignedTo: studentId,
      moduleSlug,
      completed: false,
    });
    if (existing) {
      return res.status(400).json({ message: 'This student already has an active assignment for that module.' });
    }

    const assignment = await QuizAssignment.create({
      assignedBy: req.user._id,
      assignedTo: studentId,
      moduleSlug,
      dueDate: dueDate || null,
      note: note || '',
    });

    const populated = await assignment.populate([
      { path: 'assignedTo', select: 'name email' },
      { path: 'assignedBy', select: 'name' },
    ]);

    res.status(201).json(populated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/admin/assignments — all assignments
const getAssignments = async (req, res) => {
  try {
    const assignments = await QuizAssignment.find()
      .populate('assignedTo', 'name email')
      .populate('assignedBy', 'name')
      .sort('-assignedAt')
      .lean();

    const enriched = assignments.map((a) => ({
      ...a,
      moduleLabel: MODULE_LABELS[a.moduleSlug] || a.moduleSlug,
    }));

    res.json(enriched);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE /api/admin/assignments/:id — remove an assignment
const deleteAssignment = async (req, res) => {
  try {
    await QuizAssignment.findByIdAndDelete(req.params.id);
    res.json({ message: 'Assignment removed.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/admin/assignments/mine — student's own assigned quizzes
const getMyAssignments = async (req, res) => {
  try {
    const assignments = await QuizAssignment.find({ assignedTo: req.user._id })
      .populate('assignedBy', 'name')
      .sort('-assignedAt')
      .lean();

    const enriched = assignments.map((a) => ({
      ...a,
      moduleLabel: MODULE_LABELS[a.moduleSlug] || a.moduleSlug,
    }));

    res.json(enriched);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getStudents, getPerformance, assignQuiz, getAssignments, deleteAssignment, getMyAssignments };
