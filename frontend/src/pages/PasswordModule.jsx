import { Link } from 'react-router-dom';
import '../styles/ModulePage.css';

export default function PasswordModule() {
  return (
    <div className="module-page">
      <div className="module-hero module-hero--password">
        <div className="module-hero-content">
          <span className="module-hero-icon">🔑</span>
          <h1>Password Hygiene</h1>
          <p>Master the art of creating and managing secure passwords to protect your digital identity.</p>
          <div className="module-hero-tags">
            <span>📊 Beginner</span>
            <span>⏱ ~15 min</span>
            <span>🎯 5 Quiz Questions</span>
          </div>
        </div>
      </div>

      <div className="module-content">
        <section className="content-section">
          <h2>Why Password Security Matters</h2>
          <p>
            Your password is the primary key to your digital life. Weak, reused, or
            compromised passwords are responsible for the majority of account takeovers,
            identity theft, and data breaches that affect individuals every year.
          </p>
          <div className="info-box info-box--warning">
            <span className="info-icon">💥</span>
            <div>
              <strong>Shocking Statistics</strong>
              <p>"123456" appears in over 23 million breached accounts. The most common
              passwords are cracked in under one second using modern tools.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Anatomy of a Strong Password</h2>
          <div className="password-rules-grid">
            <div className="rule-card rule-good">
              <span>✅</span>
              <div>
                <strong>At least 12 characters long</strong>
                <p>Length is the single most important factor. Every extra character multiplies cracking time exponentially.</p>
              </div>
            </div>
            <div className="rule-card rule-good">
              <span>✅</span>
              <div>
                <strong>Mixed case letters</strong>
                <p>Combining uppercase and lowercase dramatically increases the number of possible combinations.</p>
              </div>
            </div>
            <div className="rule-card rule-good">
              <span>✅</span>
              <div>
                <strong>Numbers and symbols</strong>
                <p>Including digits (0-9) and special characters (!@#$%^&*) makes passwords exponentially harder to crack.</p>
              </div>
            </div>
            <div className="rule-card rule-good">
              <span>✅</span>
              <div>
                <strong>Unique for every account</strong>
                <p>Each account needs its own password. Password reuse is the primary cause of credential stuffing attacks.</p>
              </div>
            </div>
            <div className="rule-card rule-bad">
              <span>❌</span>
              <div>
                <strong>No personal information</strong>
                <p>Birthdays, names, pet names, and hometowns are easy to find on social media and guess.</p>
              </div>
            </div>
            <div className="rule-card rule-bad">
              <span>❌</span>
              <div>
                <strong>No dictionary words</strong>
                <p>Dictionary attacks systematically try real words. "Dragon", "sunshine", and "football" fall instantly.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Password Strength Comparison</h2>
          <div className="password-examples">
            <div className="password-ex pw-weak">
              <div className="pw-strength-bar"><div className="pw-fill" style={{ width: '10%' }}></div></div>
              <div className="pw-label">WEAK</div>
              <code>password123</code>
              <p>Cracked in milliseconds. Found in millions of breach databases.</p>
            </div>
            <div className="password-ex pw-medium">
              <div className="pw-strength-bar"><div className="pw-fill" style={{ width: '45%' }}></div></div>
              <div className="pw-label">MODERATE</div>
              <code>MyDog$Rocky!1</code>
              <p>Cracked in minutes to hours. Personal info makes it guessable.</p>
            </div>
            <div className="password-ex pw-strong">
              <div className="pw-strength-bar"><div className="pw-fill" style={{ width: '100%' }}></div></div>
              <div className="pw-label">STRONG</div>
              <code>Purple-Mountain-Sunrise-99!</code>
              <p>Would take centuries to crack. Long passphrase = memorable + secure.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Best Practices</h2>
          <div className="steps-list">
            <div className="step-item">
              <span className="step-num">01</span>
              <div>
                <h4>Use a Password Manager</h4>
                <p>Tools like Bitwarden (free), 1Password, or Dashlane generate, store, and autofill unique complex passwords for every site. You only need to remember one master password.</p>
              </div>
            </div>
            <div className="step-item">
              <span className="step-num">02</span>
              <div>
                <h4>Enable Two-Factor Authentication (2FA)</h4>
                <p>Even if your password is stolen, 2FA prevents attackers from logging in. Use an authenticator app (Google Authenticator, Authy) rather than SMS when possible.</p>
              </div>
            </div>
            <div className="step-item">
              <span className="step-num">03</span>
              <div>
                <h4>Never Reuse Passwords</h4>
                <p>When one site is breached (and it will be), attackers try those credentials across other services — called "credential stuffing". Unique passwords contain the damage.</p>
              </div>
            </div>
            <div className="step-item">
              <span className="step-num">04</span>
              <div>
                <h4>Use Passphrases</h4>
                <p>A string of random words like "Coffee-Sunset-Bridge-Penguin-42!" is easy to remember, extremely long, and incredibly hard to crack — the ideal combination.</p>
              </div>
            </div>
            <div className="step-item">
              <span className="step-num">05</span>
              <div>
                <h4>Monitor for Breaches</h4>
                <p>Visit HaveIBeenPwned.com to check if your email appeared in known data breaches. Change passwords for any compromised accounts immediately.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="module-cta">
          <div className="cta-card">
            <h3>Ready to Test Your Knowledge?</h3>
            <p>Take the Password Hygiene quiz and prove your understanding.</p>
            <div className="cta-buttons">
              <Link to="/quiz/password" className="btn-primary">Take Quiz 📝</Link>
              <Link to="/modules" className="btn-secondary">Back to Modules</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
