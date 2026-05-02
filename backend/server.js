const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const moduleRoutes = require('./routes/moduleRoutes');
const quizRoutes = require('./routes/quizRoutes');
const scenarioRoutes = require('./routes/scenarioRoutes');
const certRoutes = require('./routes/certRoutes');
const chatRoutes = require('./routes/chatRoutes');
const adminRoutes = require('./routes/adminRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();
connectDB();

const app = express();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ status: 'CyberShield API running' }));

app.use('/api/auth', authRoutes);
app.use('/api/modules', moduleRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/scenarios', scenarioRoutes);
app.use('/api/cert', certRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/admin', adminRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`CyberShield server running on http://localhost:${PORT}`)
);
