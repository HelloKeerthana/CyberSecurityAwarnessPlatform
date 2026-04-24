import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Register from './pages/Register'
import Modules from './pages/Modules'
import Simulations from './pages/Simulations'
import About from './pages/About'
import Quiz from './pages/Quiz'
import QuizResults from './pages/QuizResults'
import AdminDashboard from './pages/AdminDashboard'
import AddModule from './pages/AddModule'
import CreateQuiz from './pages/CreateQuiz'
import Phishing from './pages/Phishing'
import Password from './pages/Password'
import Social from './pages/Social'
import Malware from './pages/Malware'
import Network from './pages/Network'
import Browsing from './pages/Browsing'

// Simulations
import PhishingSim from './pages/phishing-email'
import FakeWebsiteSim from './pages/fake-website'
import CallSimulation from './pages/otp-scam'

// Certification
import Certs from './pages/Certs'

// Protected Route
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

function App() {
  return (
    <Router> 
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />

        {/* PROTECTED ROUTES */}

        <Route path="/modules" element={
          <ProtectedRoute>
            <Modules />
          </ProtectedRoute>
        } />

        <Route path="/simulations" element={
          <ProtectedRoute>
            <Simulations />
          </ProtectedRoute>
        } />

        {/* MODULE PAGES */}
        <Route path="/module/module/phishing" element={
          <ProtectedRoute>
            <Phishing />
          </ProtectedRoute>
        } />
        
        <Route path="/module/module/password" element={
          <ProtectedRoute>
            <Password />
          </ProtectedRoute>
        } />

        <Route path="/module/social" element={
          <ProtectedRoute>
            <Social />
          </ProtectedRoute>
        } />

        <Route path="/module/malware" element={
          <ProtectedRoute>
            <Malware />
          </ProtectedRoute>
        } />

        <Route path="/module/network" element={
          <ProtectedRoute>
            <Network />
          </ProtectedRoute>
        } />

        <Route path="/module/browsing" element={
          <ProtectedRoute>
            <Browsing />
          </ProtectedRoute>
        } />

        {/* SIMULATIONS */}
        <Route path="/simulation/phishing-email" element={
          <ProtectedRoute>
            <PhishingSim />
          </ProtectedRoute>
        } />

        <Route path="/simulation/fake-website" element={
          <ProtectedRoute>
            <FakeWebsiteSim />
          </ProtectedRoute>
        } />

        <Route path="/simulation/otp-scam" element={
          <ProtectedRoute>
            <CallSimulation />
          </ProtectedRoute>
        } />

        {/* QUIZ */}
        <Route path="/quiz" element={
          <ProtectedRoute>
            <Quiz />
          </ProtectedRoute>
        } />

        <Route path="/quiz-results" element={
          <ProtectedRoute>
            <QuizResults />
          </ProtectedRoute>
        } />

        {/* CERTIFICATION EXAM */}
        <Route path="/certs" element={
          <ProtectedRoute>
            <Certs />
          </ProtectedRoute>
        } />

        {/* ADMIN (OPTIONAL PROTECT) */}
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />

        <Route path="/admin/add-module" element={
          <ProtectedRoute>
            <AddModule />
          </ProtectedRoute>
        } />

        <Route path="/admin/create-quiz" element={
          <ProtectedRoute>
            <CreateQuiz />
          </ProtectedRoute>
        } />

      </Routes>
    </Router>
  )
}

export default App