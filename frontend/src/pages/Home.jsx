import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Home.css';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">Cybersecurity Awareness Training</div>
          <h1>
            Stay Safe in the <span className="gradient-text">Digital World</span>
          </h1>
          <p className="hero-desc">
            Learn to identify phishing attacks, defend against malware, and master
            password hygiene through interactive simulations and real-world scenarios.
          </p>
          <div className="hero-buttons">
            {user ? (
              <Link to="/dashboard" className="btn-primary">Go to Dashboard →</Link>
            ) : (
              <>
                <Link to="/register" className="btn-primary">Start Training Free →</Link>
                <Link to="/login" className="btn-secondary">Login</Link>
              </>
            )}
          </div>
          <div className="hero-trust">
            <span>🔒 Secure</span>
            <span>🎮 Interactive</span>
            <span>📊 Track Progress</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="shield-wrapper">
            <div className="shield-main">🛡️</div>
            <div className="shield-orbit orbit-1">🎣</div>
            <div className="shield-orbit orbit-2">🦠</div>
            <div className="shield-orbit orbit-3">🔑</div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="section-tag">What You Will Learn</div>
        <h2>Three Core Modules</h2>
        <p className="section-desc">
          Each module combines educational content, interactive scenarios, and assessed quizzes.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎣</div>
            <h3>Phishing Awareness</h3>
            <p>
              Identify fake emails, spoofed domains, smishing, vishing, and social engineering
              tactics used by cybercriminals every day.
            </p>
            <Link to={user ? '/modules/phishing' : '/register'} className="feature-link">
              Explore Module →
            </Link>
          </div>
          <div className="feature-card feature-card--highlight">
            <div className="feature-badge">Most Common Threat</div>
            <div className="feature-icon">🦠</div>
            <h3>Malware Defense</h3>
            <p>
              Understand ransomware, trojans, worms, and spyware — how they spread and
              how to keep your systems protected.
            </p>
            <Link to={user ? '/modules/malware' : '/register'} className="feature-link">
              Explore Module →
            </Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔑</div>
            <h3>Password Hygiene</h3>
            <p>
              Create uncrackable passwords, use password managers, and enable
              multi-factor authentication across all your accounts.
            </p>
            <Link to={user ? '/modules/password' : '/register'} className="feature-link">
              Explore Module →
            </Link>
          </div>
        </div>
      </section>

      <section className="simulation-promo">
        <div className="sim-promo-content">
          <div className="sim-promo-icon">⚡</div>
          <h2>Live Threat Simulation</h2>
          <p>
            Put your knowledge to the test. Make decisions in real-world cyber threat
            scenarios and instantly see the consequences of each choice.
          </p>
          <Link to={user ? '/simulation' : '/register'} className="btn-primary">
            Try Simulation
          </Link>
        </div>
      </section>

      <section className="stats">
        <div className="stat-item">
          <div className="stat-number">3.4B</div>
          <div className="stat-label">Phishing emails sent daily</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">95%</div>
          <div className="stat-label">Of breaches involve human error</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">91%</div>
          <div className="stat-label">Of attacks begin with phishing</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">450K</div>
          <div className="stat-label">New malware samples per day</div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Strengthen Your Cyber Defenses?</h2>
        <p>Join and complete all three modules to build foundational cybersecurity knowledge.</p>
        {!user && (
          <Link to="/register" className="btn-primary btn-large">
            Create Free Account
          </Link>
        )}
      </section>
    </div>
  );
}
