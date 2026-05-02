import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getMyCertificate } from '../services/api';
import '../styles/Certification.css';

export default function Certificate() {
  const { user } = useAuth();
  const [cert, setCert] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    getMyCertificate()
      .then(({ data }) => setCert(data))
      .catch((err) => {
        if (err.response?.status === 404) setNotFound(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="cert-page"><div className="loading">Loading certificate...</div></div>;
  }

  if (notFound) {
    return (
      <div className="cert-page">
        <div className="cert-locked-card">
          <div className="cert-locked-icon">📋</div>
          <h2>No Certificate Yet</h2>
          <p>You haven't earned your certificate yet. Complete all modules and pass the exam.</p>
          <Link to="/certification" className="btn-primary">Take the Exam</Link>
        </div>
      </div>
    );
  }

  const issuedDate = cert ? new Date(cert.issuedAt).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  }) : '';

  const certName = cert?.user?.name || user?.name || 'Student';

  return (
    <div className="cert-page">
      <div className="cert-actions-bar no-print">
        <button onClick={() => window.print()} className="btn-primary">🖨️ Print / Save as PDF</button>
        <Link to="/dashboard" className="btn-outline">← Dashboard</Link>
      </div>

      <div className="certificate-wrapper" id="certificate">
        <div className="certificate">
          <div className="cert-border-outer">
            <div className="cert-border-inner">
              <div className="cert-header">
                <div className="cert-logo">🛡️</div>
                <div className="cert-org">CyberShield</div>
                <div className="cert-org-sub">Cybersecurity Awareness Platform</div>
              </div>

              <div className="cert-title-block">
                <div className="cert-presents">This certifies that</div>
                <div className="cert-recipient-name">{certName}</div>
                <div className="cert-presents">has successfully completed the</div>
                <div className="cert-course-name">Cybersecurity Fundamentals Certification</div>
              </div>

              <div className="cert-details-row">
                <div className="cert-detail">
                  <div className="cert-detail-label">Score Achieved</div>
                  <div className="cert-detail-value">{cert?.percentage}%</div>
                </div>
                <div className="cert-detail-divider" />
                <div className="cert-detail">
                  <div className="cert-detail-label">Questions Correct</div>
                  <div className="cert-detail-value">{cert?.score}/{cert?.totalQuestions}</div>
                </div>
                <div className="cert-detail-divider" />
                <div className="cert-detail">
                  <div className="cert-detail-label">Date Issued</div>
                  <div className="cert-detail-value">{issuedDate}</div>
                </div>
              </div>

              <div className="cert-topics">
                <span className="cert-topic-badge">🎣 Phishing Awareness</span>
                <span className="cert-topic-badge">🦠 Malware Defense</span>
                <span className="cert-topic-badge">🔑 Password Security</span>
              </div>

              <div className="cert-footer">
                <div className="cert-signature-block">
                  <div className="cert-signature-line" />
                  <div className="cert-signature-name">CyberShield Platform</div>
                  <div className="cert-signature-title">Issuing Authority</div>
                </div>
                <div className="cert-seal">
                  <div className="cert-seal-inner">
                    <div className="cert-seal-icon">🛡️</div>
                    <div className="cert-seal-text">CERTIFIED</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
