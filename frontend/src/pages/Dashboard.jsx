import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getMyResults, getMyAssignments } from '../services/api';
import '../styles/Dashboard.css';

const MODULE_META = {
  phishing: { label: 'Phishing Awareness', icon: '🎣' },
  malware:  { label: 'Malware Defense',    icon: '🦠' },
  password: { label: 'Password Hygiene',   icon: '🔑' },
};

export default function Dashboard() {
  const { user } = useAuth();
  const [results, setResults]         = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading]         = useState(true);

  useEffect(() => {
    Promise.all([
      getMyResults().catch(() => ({ data: [] })),
      getMyAssignments().catch(() => ({ data: [] })),
    ]).then(([r, a]) => {
      setResults(r.data);
      setAssignments(a.data);
    }).finally(() => setLoading(false));
  }, []);

  const completedSlugs = [...new Set(results.map((r) => r.moduleSlug))];
  const avgScore = results.length
    ? Math.round(results.reduce((a, r) => a + r.percentage, 0) / results.length)
    : 0;
  const passedCount = results.filter((r) => r.percentage >= 70).length;

  const pendingAssignments = assignments.filter((a) => !a.completed);

  return (
    <div className="dashboard">
      <div className="dashboard-hero">
        <div className="dashboard-welcome">
          <h1>Welcome back, {user?.name}!</h1>
          <p>Continue your cybersecurity training journey.</p>
        </div>
        <div className={`user-role-badge ${user?.role === 'admin' ? 'badge-admin' : 'badge-student'}`}>
          {user?.role === 'admin' ? '👑 Administrator' : '🎓 Student'}
        </div>
      </div>

      {/* Admin shortcut banner */}
      {user?.role === 'admin' && (
        <div className="admin-banner">
          <span>You are logged in as an administrator.</span>
          <Link to="/admin" className="btn-primary">Go to Admin Panel →</Link>
        </div>
      )}

      {/* Assigned quizzes banner (students only) */}
      {user?.role !== 'admin' && pendingAssignments.length > 0 && (
        <div className="assignments-banner">
          <div className="assignments-banner-header">
            <span className="assignments-banner-title">📋 Assigned Quizzes ({pendingAssignments.length})</span>
            <span className="assignments-banner-sub">Your instructor assigned the following quizzes</span>
          </div>
          <div className="assigned-quiz-list">
            {pendingAssignments.map((a) => (
              <div key={a._id} className="assigned-quiz-item">
                <div className="aq-left">
                  <span className="aq-icon">{MODULE_META[a.moduleSlug]?.icon}</span>
                  <div>
                    <div className="aq-label">{a.moduleLabel}</div>
                    {a.dueDate && (
                      <div className="aq-due">
                        Due: {new Date(a.dueDate).toLocaleDateString()}
                      </div>
                    )}
                    {a.note && <div className="aq-note">"{a.note}"</div>}
                  </div>
                </div>
                <Link to={`/quiz/${a.moduleSlug}`} className="btn-sm">
                  Start Quiz →
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-icon">📚</div>
          <div className="stat-num">{completedSlugs.length}/3</div>
          <div className="stat-desc">Modules Done</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📝</div>
          <div className="stat-num">{results.length}</div>
          <div className="stat-desc">Quizzes Taken</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <div className="stat-num">{avgScore}%</div>
          <div className="stat-desc">Avg Score</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-num">{passedCount}</div>
          <div className="stat-desc">Quizzes Passed</div>
        </div>
      </div>

      <div className="dashboard-body">
        <div className="modules-section">
          <h2>Training Modules</h2>
          <div className="module-cards">
            {Object.entries(MODULE_META).map(([slug, meta]) => {
              const moduleResults = results.filter((r) => r.moduleSlug === slug);
              const isCompleted   = completedSlugs.includes(slug);
              const bestScore     = moduleResults.length
                ? Math.max(...moduleResults.map((r) => r.percentage))
                : null;
              const isAssigned = pendingAssignments.some((a) => a.moduleSlug === slug);
              return (
                <div key={slug} className={`module-card ${isCompleted ? 'module-done' : ''} ${isAssigned ? 'module-assigned' : ''}`}>
                  <div className="module-card-icon">{meta.icon}</div>
                  <div className="module-card-info">
                    <h3>{meta.label}</h3>
                    {isAssigned && !isCompleted && (
                      <span className="badge-assigned">📋 Assigned</span>
                    )}
                    {isCompleted ? (
                      <span className="badge-complete">
                        ✅ Completed {bestScore !== null && `· Best: ${bestScore}%`}
                      </span>
                    ) : !isAssigned && (
                      <span className="badge-pending">⏳ Not Started</span>
                    )}
                  </div>
                  <div className="module-card-actions">
                    <Link to={`/modules/${slug}`} className="btn-sm-outline">
                      {isCompleted ? 'Review' : 'Learn'}
                    </Link>
                    <Link to={`/quiz/${slug}`} className="btn-sm">Quiz</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="quick-actions-section">
          <h2>Quick Actions</h2>
          <div className="action-cards">
            <Link to="/simulation" className="action-card">
              <span className="action-icon">⚡</span>
              <div>
                <h4>Run Simulation</h4>
                <p>Test real-world threat decisions</p>
              </div>
            </Link>
            <Link to="/modules" className="action-card">
              <span className="action-icon">📚</span>
              <div>
                <h4>Browse Modules</h4>
                <p>View all training content</p>
              </div>
            </Link>
            <Link to="/results" className="action-card">
              <span className="action-icon">📊</span>
              <div>
                <h4>View Results</h4>
                <p>Check scores and progress</p>
              </div>
            </Link>
            <Link to="/certification" className="action-card">
              <span className="action-icon">🎓</span>
              <div>
                <h4>Certification Exam</h4>
                <p>Earn your cybersecurity certificate</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {loading && <div className="loading-bar">Loading your progress...</div>}

      {!loading && results.length > 0 && (
        <div className="recent-activity">
          <h2>Recent Quiz Activity</h2>
          <div className="activity-table-wrapper">
            <table className="activity-table">
              <thead>
                <tr>
                  <th>Module</th>
                  <th>Score</th>
                  <th>Percentage</th>
                  <th>Result</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {results.slice(0, 6).map((r) => (
                  <tr key={r._id}>
                    <td>
                      {MODULE_META[r.moduleSlug]?.icon} {MODULE_META[r.moduleSlug]?.label || r.moduleSlug}
                    </td>
                    <td>{r.score}/{r.totalQuestions}</td>
                    <td>{r.percentage}%</td>
                    <td>
                      <span className={r.percentage >= 70 ? 'tag-pass' : 'tag-fail'}>
                        {r.percentage >= 70 ? 'PASS' : 'FAIL'}
                      </span>
                    </td>
                    <td>{new Date(r.completedAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
