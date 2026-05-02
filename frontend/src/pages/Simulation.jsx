import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Simulation.css';

const SCENARIOS = [
  {
    id: 1,
    type: 'phishing',
    title: 'Suspicious Bank Email',
    description:
      'You receive an urgent email with the subject: "URGENT: Your Account Has Been Suspended!" The sender appears to be from your bank.',
    emailPreview: {
      from: 'security@paypa1.com',
      subject: '⚠️ URGENT: Your Account Has Been Suspended!',
      body: `Dear Valued Customer,

We have detected unusual activity on your PayPal account. Your account has been temporarily suspended to protect your security.

You MUST verify your identity within 24 hours or your account will be permanently closed and funds withheld.

Click here to RESTORE ACCESS immediately.

PayPal Security Team`,
    },
    options: [
      { text: 'Click the link immediately — I need my account!', outcome: 'danger', icon: '☠️' },
      { text: 'Inspect the sender — "paypa1.com" is suspicious. Report it as phishing.', outcome: 'safe', icon: '✅' },
      { text: 'Reply to the email asking for clarification', outcome: 'risky', icon: '⚠️' },
      { text: 'Open a new browser tab and go to paypal.com directly', outcome: 'safe', icon: '✅' },
    ],
    feedback: {
      danger: {
        title: 'You fell for a phishing attack!',
        message: 'By clicking the link, you likely navigated to a fake PayPal login page that stole your credentials. Notice "paypa1.com" — it uses the number 1 instead of the letter L. Always check the sender domain before clicking any link.',
        color: 'red',
        lesson: 'Always verify sender domains. Hover over links before clicking. Contact companies through their official websites.',
      },
      safe: {
        title: 'Excellent decision!',
        message: 'You correctly identified the phishing attempt. "paypa1.com" (with a number 1) is a classic domain spoofing technique. Legitimate companies will never suspend your account via email and ask you to click an embedded link.',
        color: 'green',
        lesson: 'Great work spotting the misspelled domain. Reporting phishing emails helps protect others from the same attack.',
      },
      risky: {
        title: 'Risky move — avoid this!',
        message: 'Replying to a phishing email confirms that your address is active, inviting more targeted attacks. Engaging with phishers is never safe — always report and delete suspicious emails without replying.',
        color: 'orange',
        lesson: 'Never reply to suspicious emails. Report them using your email client\'s phishing report feature, then delete.',
      },
    },
  },
  {
    id: 2,
    type: 'malware',
    title: 'Suspicious Software Pop-up',
    description:
      'While reading a news article online, a large pop-up appears blocking the page.',
    popupPreview: {
      title: '⚠️ CRITICAL SECURITY ALERT',
      message: 'Your Flash Player is critically outdated and your device may be infected! Download the latest version NOW to continue browsing safely.',
      button: '🔴 DOWNLOAD FLASH PLAYER NOW',
    },
    options: [
      { text: 'Click "Download Flash Player" — my security is at risk!', outcome: 'danger', icon: '☠️' },
      { text: 'Close the pop-up and go to Adobe\'s official website to verify', outcome: 'safe', icon: '✅' },
      { text: 'Close the tab and run a malware scan', outcome: 'safe', icon: '✅' },
      { text: 'Ignore the pop-up and keep browsing on the same page', outcome: 'risky', icon: '⚠️' },
    ],
    feedback: {
      danger: {
        title: 'Malware installed!',
        message: 'You downloaded and likely ran malware. Adobe Flash Player was permanently discontinued in December 2020. No legitimate website will ever prompt you to install Flash. These pop-ups install adware, spyware, or ransomware.',
        color: 'red',
        lesson: 'Adobe Flash is dead. Any prompt to install it is malware. Never download software from pop-up alerts.',
      },
      safe: {
        title: 'Smart choice!',
        message: 'Correct! Adobe Flash Player was discontinued in 2020 and no longer exists as a product. Any pop-up claiming you need Flash is 100% a malware distribution attempt. Closing the tab and verifying from official sources is exactly right.',
        color: 'green',
        lesson: 'Always download software updates from the official developer\'s website only. If in doubt, close the tab and search for the official site.',
      },
      risky: {
        title: 'Somewhat safe, but incomplete',
        message: 'Ignoring is better than clicking, but some malicious pages use drive-by download techniques that can execute code just from the page being open. Closing the tab entirely and running a scan is the safer approach.',
        color: 'orange',
        lesson: 'When you encounter malicious pop-ups, close the entire tab immediately. Consider running an antivirus scan to be safe.',
      },
    },
  },
  {
    id: 3,
    type: 'password',
    title: 'Password Creation Challenge',
    description:
      'You are setting up a new online banking account. The site requires you to create a password. Which would you choose?',
    options: [
      { text: 'password123', outcome: 'danger', icon: '☠️' },
      { text: 'JohnSmith1985!', outcome: 'risky', icon: '⚠️' },
      { text: 'Tr0ub4dor&3!kL', outcome: 'safe', icon: '✅' },
      { text: 'Purple-Sunrise-Mountain-Bridge-77', outcome: 'safe', icon: '✅' },
    ],
    feedback: {
      danger: {
        title: 'Dangerously weak password!',
        message: '"password123" is one of the most commonly used passwords in the world, found in hundreds of millions of breach databases. It is cracked in milliseconds by any automated tool. Never use predictable sequences.',
        color: 'red',
        lesson: 'Common passwords are tried first in brute-force attacks. Use a password manager to generate truly random, unique passwords.',
      },
      risky: {
        title: 'Personal info — risky!',
        message: 'Your name and birth year are public information available on social media, making targeted attacks much more likely to succeed. While better than "password123", personal information makes passwords predictable.',
        color: 'orange',
        lesson: 'Avoid using any personal information in passwords. Attackers use social media to gather this data before attacking.',
      },
      safe: {
        title: 'Excellent password choice!',
        message: 'Both options you could have chosen here represent strong passwords. Long passphrases and complex random strings both provide excellent security when they are unique and not reused across sites.',
        color: 'green',
        lesson: 'Use a password manager to generate and store unique strong passwords for every account. Enable 2FA on top of it for maximum security.',
      },
    },
  },
];

export default function Simulation() {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [history, setHistory] = useState([]);

  const scenario = SCENARIOS[idx];

  const handleChoice = (i) => {
    if (selected !== null) return;
    const option = scenario.options[i];
    const fb = { ...scenario.feedback[option.outcome], outcome: option.outcome };
    setSelected(i);
    setFeedback(fb);
    if (option.outcome === 'safe') setScore((s) => s + 1);
    setHistory((h) => [...h, { scenario: scenario.title, outcome: option.outcome, choice: option.text }]);
  };

  const handleNext = () => {
    if (idx < SCENARIOS.length - 1) {
      setIdx((i) => i + 1);
      setSelected(null);
      setFeedback(null);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setIdx(0);
    setSelected(null);
    setFeedback(null);
    setScore(0);
    setCompleted(false);
    setHistory([]);
  };

  if (completed) {
    const pct = Math.round((score / SCENARIOS.length) * 100);
    const grade = pct === 100 ? 'Perfect' : pct >= 70 ? 'Good' : pct >= 40 ? 'Fair' : 'Needs Work';
    return (
      <div className="simulation-page">
        <div className="sim-complete-card">
          <div className="sim-complete-icon">{pct >= 70 ? '🏆' : '📚'}</div>
          <h2>Simulation Complete!</h2>
          <div className="score-ring">
            <div className="score-pct">{pct}%</div>
            <div className="score-grade">{grade}</div>
          </div>
          <p className="score-msg">
            {pct === 100
              ? 'Perfect score! You have strong cyber threat awareness.'
              : pct >= 70
              ? 'Good work! Review the scenarios you missed to reinforce your knowledge.'
              : 'Keep learning! Review the modules to build stronger cyber awareness.'}
          </p>

          <div className="sim-history">
            <h3>Your Decisions</h3>
            {history.map((h, i) => (
              <div key={i} className={`history-item history-${h.outcome}`}>
                <span className="history-icon">
                  {h.outcome === 'safe' ? '✅' : h.outcome === 'danger' ? '☠️' : '⚠️'}
                </span>
                <div>
                  <strong>{h.scenario}</strong>
                  <p>{h.choice}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="sim-complete-actions">
            <button onClick={handleRestart} className="btn-primary">Retry Simulation</button>
            <Link to="/modules" className="btn-secondary">Review Modules</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="simulation-page">
      <div className="sim-header">
        <div>
          <h1>Cyber Threat Simulation</h1>
          <p>Make decisions as a real user would. Every choice has consequences.</p>
        </div>
        <div className="sim-progress-info">
          <span>Scenario {idx + 1} / {SCENARIOS.length}</span>
          <div className="sim-progress-bar">
            <div className="sim-progress-fill" style={{ width: `${(idx / SCENARIOS.length) * 100}%` }}></div>
          </div>
        </div>
      </div>

      <div className="scenario-card">
        <div className={`type-badge type-${scenario.type}`}>
          {scenario.type === 'phishing' ? '🎣 Phishing' : scenario.type === 'malware' ? '🦠 Malware' : '🔑 Password'}
        </div>
        <h2>{scenario.title}</h2>
        <p className="scenario-desc">{scenario.description}</p>

        {scenario.emailPreview && (
          <div className="email-mock">
            <div className="email-mock-header">
              <span className="email-icon">📧</span> Email Preview
            </div>
            <div className="email-field">
              <span>From:</span>
              <strong className="suspicious-text">{scenario.emailPreview.from}</strong>
            </div>
            <div className="email-field">
              <span>Subject:</span> {scenario.emailPreview.subject}
            </div>
            <div className="email-body">{scenario.emailPreview.body}</div>
          </div>
        )}

        {scenario.popupPreview && (
          <div className="popup-mock">
            <div className="popup-header">
              <strong>{scenario.popupPreview.title}</strong>
            </div>
            <p>{scenario.popupPreview.message}</p>
            <div className="popup-fake-btn">{scenario.popupPreview.button}</div>
          </div>
        )}

        <div className="options-grid">
          {scenario.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleChoice(i)}
              disabled={selected !== null}
              className={`option-btn
                ${selected === i ? `option-selected-${scenario.options[i].outcome}` : ''}
                ${selected !== null && selected !== i ? 'option-dimmed' : ''}
              `}
            >
              <span className="option-icon">{opt.icon}</span>
              <span>{opt.text}</span>
            </button>
          ))}
        </div>

        {feedback && (
          <div className={`feedback-panel feedback-${feedback.outcome}`}>
            <h3>{feedback.title}</h3>
            <p>{feedback.message}</p>
            <div className="feedback-lesson">
              <strong>Key Lesson:</strong> {feedback.lesson}
            </div>
            <button onClick={handleNext} className="btn-primary">
              {idx < SCENARIOS.length - 1 ? 'Next Scenario →' : 'See Results'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
