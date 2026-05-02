import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMyResults } from '../services/api';
import '../styles/Results.css';

const MODULE_META = {
  phishing: { label: 'Phishing Awareness', icon: '🎣' },
  malware: { label: 'Malware Defense', icon: '🦠' },
  password: { label: 'Password Hygiene', icon: '🔑' },
};

export default function Results() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyResults()
      .then(({ data }) => setResults(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="results-page">
        <div className="results-loading">Loading your results...</div>
      </div>
    );
  }

  const avgScore = results.length
    ? Math.round(results.reduce((a, r) => a + r.percentage, 0) / results.length)
    : 0;
  const passedCount = results.filter((r) => r.percentage >= 70).length;
  const completedModules = [...new Set(results.map((r) => r.moduleSlug))];

  return (
    <div className="results-page">
      <div className="results-header">
        <h1>Quiz Results</h1>
        <p>Track your cybersecurity training progress over time.</p>
      </div>

      {results.length === 0 ? (
        <div className="no-results-card">
          <div className="no-results-icon">📊</div>
          <h3>No quiz results yet</h3>
          <p>Complete a module and take its quiz to see your results here.</p>
          <Link to="/modules" className="btn-primary">Start a Module</Link>
        </div>
      ) : (
        <>
          <div className="results-summary-row">
            <div className="summary-stat">
              <div className="summary-num">{results.length}</div>
              <div className="summary-label">Total Attempts</div>
            </div>
            <div className="summary-stat">
              <div className="summary-num">{avgScore}%</div>
              <div className="summary-label">Average Score</div>
            </div>
            <div className="summary-stat">
              <div className="summary-num">{passedCount}</div>
              <div className="summary-label">Quizzes Passed</div>
            </div>
            <div className="summary-stat">
              <div className="summary-num">{completedModules.length}/3</div>
              <div className="summary-label">Modules Covered</div>
            </div>
          </div>

          <div className="results-list">
            {results.map((r) => {
              const meta = MODULE_META[r.moduleSlug] || { label: r.moduleSlug, icon: '📝' };
              const passed = r.percentage >= 70;
              return (
                <div key={r._id} className={`result-card ${passed ? 'result-card--pass' : 'result-card--fail'}`}>
                  <div className="result-left">
                    <span className="result-module-icon">{meta.icon}</span>
                    <div>
                      <h3>{meta.label}</h3>
                      <span className="result-date">
                        {new Date(r.completedAt).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className="result-right">
                    <div className="result-score-info">
                      <span className="result-fraction">{r.score}/{r.totalQuestions}</span>
                      <span className="result-pct">{r.percentage}%</span>
                    </div>
                    <span className={`result-badge ${passed ? 'badge--pass' : 'badge--fail'}`}>
                      {passed ? '✅ PASS' : '❌ FAIL'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="results-footer">
            <Link to="/quiz/phishing" className="btn-outline">Retake Phishing Quiz</Link>
            <Link to="/quiz/malware" className="btn-outline">Retake Malware Quiz</Link>
            <Link to="/quiz/password" className="btn-outline">Retake Password Quiz</Link>
          </div>
        </>
      )}
    </div>
  );
}
