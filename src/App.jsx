import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Modules from './pages/Modules'
import Simulations from './pages/Simulations'
import About from './pages/About'
import Quiz from './pages/Quiz'
import QuizResults from './pages/QuizResults'
import AdminDashboard from './pages/AdminDashboard'
import AddModule from './pages/AddModule'
import CreateQuiz from './pages/CreateQuiz'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/simulations" element={<Simulations />} />
        <Route path="/about" element={<About />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz-results" element={<QuizResults />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add-module" element={<AddModule />} />
        <Route path="/admin/create-quiz" element={<CreateQuiz />} />
      </Routes>
    </Router>
  )
}

export default App
