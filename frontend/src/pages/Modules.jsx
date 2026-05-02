import { Link } from 'react-router-dom';
import '../styles/Modules.css';

const modules = [
  {
    slug: 'phishing',
    title: 'Phishing Awareness',
    icon: '🎣',
    color: 'blue',
    description:
      'Learn to identify phishing emails, spoofed websites, smishing, vishing, and social engineering attacks used to steal credentials and personal data.',
    topics: [
      'What is phishing and how it works',
      'Spear phishing and targeted attacks',
      'Smishing (SMS) and Vishing (Voice)',
      'How to inspect URLs and sender addresses',
      'Reporting and handling suspicious emails',
    ],
    duration: '~15 min',
    difficulty: 'Beginner',
  },
  {
    slug: 'malware',
    title: 'Malware Defense',
    icon: '🦠',
    color: 'red',
    description:
      'Understand ransomware, trojans, worms, spyware, and adware — how each type spreads, what damage they cause, and how to defend against them.',
    topics: [
      'Types of malware and their behaviors',
      'How ransomware works and spreads',
      'Drive-by downloads and infected attachments',
      'Antivirus tools and system patching',
      'Data backup strategies (3-2-1 rule)',
    ],
    duration: '~15 min',
    difficulty: 'Beginner',
  },
  {
    slug: 'password',
    title: 'Password Hygiene',
    icon: '🔑',
    color: 'green',
    description:
      'Master the science of strong passwords, understand multi-factor authentication, and learn to use password managers to protect your digital identity.',
    topics: [
      'What makes a strong password',
      'Why password reuse is dangerous',
      'Password managers: how to use them',
      'Multi-factor authentication (MFA/2FA)',
      'Checking if your accounts were breached',
    ],
    duration: '~15 min',
    difficulty: 'Beginner',
  },
];

export default function Modules() {
  return (
    <div className="modules-page">
      <div className="modules-header">
        <h1>Training Modules</h1>
        <p>
          Three comprehensive modules covering the most critical cybersecurity threats.
          Complete each module and pass the quiz to demonstrate your understanding.
        </p>
      </div>

      <div className="modules-grid">
        {modules.map((m) => (
          <div key={m.slug} className={`module-card-full border-${m.color}`}>
            <div className={`module-card-top bg-${m.color}`}>
              <span className="module-big-icon">{m.icon}</span>
              <div className="module-meta">
                <span className="meta-tag">⏱ {m.duration}</span>
                <span className="meta-tag">📊 {m.difficulty}</span>
              </div>
            </div>
            <div className="module-card-body">
              <h2>{m.title}</h2>
              <p>{m.description}</p>
              <h4>Topics Covered:</h4>
              <ul className="topics-list">
                {m.topics.map((t) => (
                  <li key={t}>✓ {t}</li>
                ))}
              </ul>
            </div>
            <div className="module-card-footer">
              <Link to={`/modules/${m.slug}`} className="btn-primary">
                Start Learning
              </Link>
              <Link to={`/quiz/${m.slug}`} className="btn-secondary">
                Take Quiz
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
