import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <span className="brand-icon">🛡️</span>
          <span className="brand-name">CyberShield</span>
        </Link>
      </div>

      <ul className="navbar-links">
        {user ? (
          <>
            <li>
              <Link to="/dashboard" className={isActive('/dashboard')}>Dashboard</Link>
            </li>
            <li>
              <Link to="/modules" className={isActive('/modules')}>Modules</Link>
            </li>
            <li>
              <Link to="/simulation" className={isActive('/simulation')}>Simulation</Link>
            </li>
            <li>
              <Link to="/results" className={isActive('/results')}>Results</Link>
            </li>
            <li>
              <Link to="/certification" className={isActive('/certification')}>Certification</Link>
            </li>
            {user?.role === 'admin' && (
              <li>
                <Link to="/admin" className={`nav-admin-link ${isActive('/admin')}`}>Admin Panel</Link>
              </li>
            )}
            <li className="nav-user">
              <span className="nav-username">{user.name}</span>
              <button onClick={handleLogout} className="btn-logout">Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className={isActive('/login')}>Login</Link>
            </li>
            <li>
              <Link to="/register" className="btn-nav-register">Get Started</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
