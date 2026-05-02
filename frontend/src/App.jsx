import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Chatbot from './components/Chatbot';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Modules from './pages/Modules';
import PhishingModule from './pages/PhishingModule';
import MalwareModule from './pages/MalwareModule';
import PasswordModule from './pages/PasswordModule';
import Simulation from './pages/Simulation';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import CertificationExam from './pages/CertificationExam';
import Certificate from './pages/Certificate';
import AdminPanel from './pages/AdminPanel';
import { useAuth } from './context/AuthContext';

function AppContent() {
  const { user } = useAuth();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/modules" element={<PrivateRoute><Modules /></PrivateRoute>} />
        <Route path="/modules/phishing" element={<PrivateRoute><PhishingModule /></PrivateRoute>} />
        <Route path="/modules/malware"  element={<PrivateRoute><MalwareModule /></PrivateRoute>} />
        <Route path="/modules/password" element={<PrivateRoute><PasswordModule /></PrivateRoute>} />
        <Route path="/simulation" element={<PrivateRoute><Simulation /></PrivateRoute>} />
        <Route path="/quiz/:slug" element={<PrivateRoute><Quiz /></PrivateRoute>} />
        <Route path="/results" element={<PrivateRoute><Results /></PrivateRoute>} />
        <Route path="/certification" element={<PrivateRoute><CertificationExam /></PrivateRoute>} />
        <Route path="/certificate" element={<PrivateRoute><Certificate /></PrivateRoute>} />
        <Route path="/admin" element={<PrivateRoute><AdminPanel /></PrivateRoute>} />
      </Routes>
      {user && <Chatbot />}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}
