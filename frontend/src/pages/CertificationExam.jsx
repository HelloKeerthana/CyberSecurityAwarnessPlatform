import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getCertStatus, submitCertExam } from '../services/api';
import '../styles/Certification.css';

const MODULE_LABELS = {
  phishing: 'Phishing Awareness',
  malware: 'Malware Defense',
  password: 'Password Hygiene',
};

export default function CertificationExam() {
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  // Exam state
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);
  const [evaluated, setEvaluated] = useState([]);

  useEffect(() => {
    getCertStatus()
      .then(({ data }) => setStatus(data))
      .catch(() => toast.error('Could not load certification status.'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="cert-page"><div className="loading">Loading certification status...</div></div>;
  }

  if (!status) return null;

  // Already certified
  if (status.certificate) {
    return (
      <div className="cert-page">
        <div className="cert-locked-card">
          <div className="cert-locked-icon">🏆</div>
          <h2>You Are Already Certified!</h2>
          <p>You passed the CyberShield certification exam with a score of <strong>{status.certificate.percentage}%</strong>.</p>
          <Link to="/certificate" className="btn-primary">View My Certificate</Link>
        </div>
      </div>
    );
  }

  // Not eligible
  if (!status.isEligible) {
    return (
      <div className="cert-page">
        <div className="cert-locked-card">
          <div className="cert-locked-icon">🔒</div>
          <h2>Complete All Modules First</h2>
          <p>You must pass all 3 training modules (≥70%) before taking the certification exam.</p>
          <div className="cert-eligibility-grid">
            {Object.entries(status.eligibility).map(([slug, passed]) => (
              <div key={slug} className={`cert-eligibility-item ${passed ? 'elig-pass' : 'elig-fail'}`}>
                <span className="elig-icon">{passed ? '✅' : '❌'}</span>
                <span>{MODULE_LABELS[slug]}</span>
              </div>
            ))}
          </div>
          <Link to="/modules" className="btn-primary">Go to Modules</Link>
        </div>
      </div>
    );
  }

  const questions = status.examQuestions;

  // Results screen
  if (submitted && result) {
    const passed = result.passed;
    return (
      <div className="cert-page">
        <div className="cert-result-card">
          <div className="cert-result-icon">{passed ? '🎓' : '📚'}</div>
          <h2>{passed ? 'Certification Earned!' : 'Exam Not Passed'}</h2>
          <div className={`cert-score-circle ${passed ? 'score-pass' : 'score-fail'}`}>
            <span className="cert-score-pct">{result.percentage}%</span>
            <span className="cert-score-frac">{result.score}/{result.totalQuestions}</span>
          </div>
          <p className="cert-result-msg">
            {passed
              ? 'Congratulations! You have demonstrated mastery of cybersecurity fundamentals.'
              : `You need at least 80% to earn the certificate. You scored ${result.percentage}%. Review the modules and try again.`}
          </p>

          {evaluated.length > 0 && (
            <div className="cert-review">
              <h3>Answer Review</h3>
              {evaluated.map((e, i) => (
                <div key={i} className={`cert-review-item ${e.isCorrect ? 'review-correct' : 'review-wrong'}`}>
                  <div className="review-q-num">{e.isCorrect ? '✅' : '❌'} Q{i + 1}</div>
                  <div className="review-explanation">{e.explanation}</div>
                </div>
              ))}
            </div>
          )}

          <div className="cert-result-actions">
            {passed ? (
              <Link to="/certificate" className="btn-primary">View Certificate</Link>
            ) : (
              <button onClick={() => window.location.reload()} className="btn-primary">Retake Exam</button>
            )}
            <Link to="/dashboard" className="btn-outline">Dashboard</Link>
          </div>
        </div>
      </div>
    );
  }

  // Exam in progress
  const question = questions[currentQ];
  const progress = Math.round((currentQ / questions.length) * 100);

  const handleSelect = (idx) => {
    if (showFeedback) return;
    setSelected(idx);
    setShowFeedback(true);
  };

  const handleNext = async () => {
    const newAnswers = [...answers, { selectedAnswer: selected }];
    setAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setShowFeedback(false);
    } else {
      try {
        const { data } = await submitCertExam({ answers: newAnswers });
        setResult(data);
        setEvaluated(data.evaluated || []);
      } catch (err) {
        toast.error(err.response?.data?.message || 'Submission failed.');
      }
      setSubmitted(true);
    }
  };

  return (
    <div className="cert-page">
      <div className="cert-exam-header">
        <div className="cert-exam-title-row">
          <span className="cert-exam-badge">CERTIFICATION EXAM</span>
          <h1>CyberShield Certification</h1>
          <p>15 questions · Pass with 80% · Covers all 3 modules</p>
        </div>
        <div className="cert-exam-progress">
          <span>Question {currentQ + 1} of {questions.length}</span>
          <div className="cert-progress-track">
            <div className="cert-progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      <div className="cert-question-card">
        <div className="cert-q-num">Q{currentQ + 1}</div>
        <h2 className="cert-q-text">{question.questionText}</h2>

        <div className="cert-options-list">
          {question.options.map((opt, i) => {
            let cls = 'cert-option-btn';
            if (showFeedback) {
              cls += ' cert-option-neutral';
            } else if (selected === i) {
              cls += ' cert-option-selected';
            }
            return (
              <button key={i} onClick={() => handleSelect(i)} disabled={showFeedback} className={cls}>
                <span className="cert-option-letter">{String.fromCharCode(65 + i)}</span>
                <span>{opt}</span>
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div className="cert-feedback">
            <p>Answer recorded. Click Next to continue.</p>
            <button onClick={handleNext} className="btn-primary">
              {currentQ < questions.length - 1 ? 'Next Question →' : 'Submit Exam'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
