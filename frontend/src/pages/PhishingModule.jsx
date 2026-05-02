import { Link } from 'react-router-dom';
import '../styles/ModulePage.css';

export default function PhishingModule() {
  return (
    <div className="module-page">
      <div className="module-hero module-hero--phishing">
        <div className="module-hero-content">
          <span className="module-hero-icon">🎣</span>
          <h1>Phishing Awareness</h1>
          <p>Learn to identify and neutralize phishing attacks before they compromise your security.</p>
          <div className="module-hero-tags">
            <span>📊 Beginner</span>
            <span>⏱ ~15 min</span>
            <span>🎯 5 Quiz Questions</span>
          </div>
        </div>
      </div>

      <div className="module-content">
        <section className="content-section">
          <h2>What is Phishing?</h2>
          <p>
            Phishing is a form of social engineering attack where cybercriminals impersonate
            legitimate organizations — banks, companies, or even colleagues — to trick individuals
            into revealing sensitive information such as passwords, credit card details, or
            personal data.
          </p>
          <p>
            The name comes from "fishing" — attackers cast a wide net hoping someone will take
            the bait. Unlike technical hacking, phishing exploits human psychology: urgency,
            fear, and trust.
          </p>
          <div className="info-box info-box--danger">
            <span className="info-icon">⚠️</span>
            <div>
              <strong>Scale of the Problem</strong>
              <p>Over 3.4 billion phishing emails are sent every single day. It remains the #1
              attack vector, responsible for 91% of all data breaches.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Types of Phishing Attacks</h2>
          <div className="types-grid">
            <div className="type-card">
              <div className="type-icon">📧</div>
              <h4>Email Phishing</h4>
              <p>Mass emails disguised as legitimate companies. The most common form — designed to harvest credentials at scale.</p>
            </div>
            <div className="type-card type-card--highlight">
              <div className="type-icon">🎯</div>
              <h4>Spear Phishing</h4>
              <p>Highly targeted attacks using personal information (name, employer, colleagues) to appear credible to a specific victim.</p>
            </div>
            <div className="type-card">
              <div className="type-icon">📱</div>
              <h4>Smishing (SMS)</h4>
              <p>Phishing via text messages. Often impersonates delivery services, banks, or government agencies with urgent fake alerts.</p>
            </div>
            <div className="type-card">
              <div className="type-icon">📞</div>
              <h4>Vishing (Voice)</h4>
              <p>Fraudulent phone calls from fake "tech support", banks, or the IRS demanding immediate action or payment.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Red Flags — How to Spot Phishing</h2>
          <div className="checklist-grid">
            <div className="checklist-item">
              <span className="check-icon danger">✗</span>
              <div>
                <strong>Misspelled sender domain</strong>
                <p>"paypa1.com" or "amaz0n-secure.com" instead of the real domain</p>
              </div>
            </div>
            <div className="checklist-item">
              <span className="check-icon danger">✗</span>
              <div>
                <strong>Urgent or threatening language</strong>
                <p>"Your account will be CLOSED in 24 hours unless you act NOW!"</p>
              </div>
            </div>
            <div className="checklist-item">
              <span className="check-icon danger">✗</span>
              <div>
                <strong>Generic greetings</strong>
                <p>"Dear Customer" or "Dear User" instead of your actual name</p>
              </div>
            </div>
            <div className="checklist-item">
              <span className="check-icon danger">✗</span>
              <div>
                <strong>Suspicious links</strong>
                <p>Hover reveals a URL that doesn't match the displayed text</p>
              </div>
            </div>
            <div className="checklist-item">
              <span className="check-icon danger">✗</span>
              <div>
                <strong>Requests for sensitive data</strong>
                <p>Legitimate companies never ask for passwords or PINs via email</p>
              </div>
            </div>
            <div className="checklist-item">
              <span className="check-icon danger">✗</span>
              <div>
                <strong>Unexpected attachments</strong>
                <p>Especially .exe, .zip, .doc files from unknown senders</p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>How to Protect Yourself</h2>
          <div className="steps-list">
            <div className="step-item">
              <span className="step-num">01</span>
              <div>
                <h4>Verify the Sender's Domain</h4>
                <p>Always check the full email address, not just the display name. Look for subtle character substitutions: "rn" looks like "m", "0" looks like "o", "1" looks like "l".</p>
              </div>
            </div>
            <div className="step-item">
              <span className="step-num">02</span>
              <div>
                <h4>Hover Over Links Before Clicking</h4>
                <p>The URL shown in the email and the real destination can differ. Hover (don't click) to see the actual link. If it looks suspicious, don't click.</p>
              </div>
            </div>
            <div className="step-item">
              <span className="step-num">03</span>
              <div>
                <h4>Go Directly to the Official Site</h4>
                <p>Instead of clicking email links, open a new browser tab and type the company's URL directly. Log in from there to check any alerts.</p>
              </div>
            </div>
            <div className="step-item">
              <span className="step-num">04</span>
              <div>
                <h4>Enable Multi-Factor Authentication</h4>
                <p>Even if your password is stolen via phishing, MFA prevents attackers from accessing your account without the second factor.</p>
              </div>
            </div>
            <div className="step-item">
              <span className="step-num">05</span>
              <div>
                <h4>Report Suspicious Emails</h4>
                <p>Use your email client's "Report Phishing" button. This helps train spam filters and protects other users from the same attack.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="module-cta">
          <div className="cta-card">
            <h3>Ready to Test Your Knowledge?</h3>
            <p>Apply what you've learned in a live phishing scenario simulation or take the quiz.</p>
            <div className="cta-buttons">
              <Link to="/simulation" className="btn-primary">Try Simulation ⚡</Link>
              <Link to="/quiz/phishing" className="btn-secondary">Take Quiz 📝</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
