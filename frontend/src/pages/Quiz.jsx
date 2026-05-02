import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { submitQuiz } from '../services/api';
import '../styles/Quiz.css';

const QUIZ_DATA = {
  phishing: {
    title: 'Phishing Awareness Quiz',
    icon: '🎣',
    questions: [
      {
        questionText: 'Which of the following is the clearest sign of a phishing email?',
        options: [
          'The email contains a professional company logo',
          'The sender address uses a misspelled or spoofed domain name',
          'The email is addressed to you by your first name',
          'The email was sent during business hours',
        ],
        correctAnswer: 1,
        explanation:
          'Phishing emails often use domain spoofing — e.g., "paypa1.com" instead of "paypal.com". Always inspect the full sender email address, not just the display name.',
      },
      {
        questionText: 'You receive an email from your "bank" asking you to verify your login credentials by clicking a link. What should you do?',
        options: [
          'Click the link and enter your details to secure the account',
          'Forward the email to friends for advice',
          'Report it as phishing, delete it, and visit the bank website directly',
          'Reply and ask if the email is legitimate',
        ],
        correctAnswer: 2,
        explanation:
          'Legitimate banks never ask for credentials via email. Always access your account by typing the URL directly in your browser, not by clicking links in emails.',
      },
      {
        questionText: 'What is "spear phishing"?',
        options: [
          'Phishing attacks conducted via phone calls',
          'Mass phishing emails sent to millions of people',
          'Highly targeted phishing using the victim\'s personal information to appear credible',
          'Phishing attacks that target only financial institutions',
        ],
        correctAnswer: 2,
        explanation:
          'Spear phishing is a targeted attack where attackers research the victim (name, employer, colleagues) to create a convincing and personalized lure.',
      },
      {
        questionText: 'You receive an email saying "Congratulations! You\'ve won a $500 Amazon gift card. Claim it now!" from an unknown sender. What is the best action?',
        options: [
          'Click the link to claim your prize',
          'Reply asking for more details about the prize',
          'Download the attached PDF for prize claim instructions',
          'Delete the email immediately without clicking anything',
        ],
        correctAnswer: 3,
        explanation:
          'Unexpected prize emails are classic phishing attempts. Engaging in any way is risky. Delete without clicking links, opening attachments, or replying.',
      },
      {
        questionText: 'Which of these URLs is most likely a phishing attempt?',
        options: [
          'https://www.paypal.com/login',
          'https://paypal.com/secure',
          'https://www.paypa1.com/account-verify',
          'https://secure.paypal.com/signin',
        ],
        correctAnswer: 2,
        explanation:
          '"paypa1.com" substitutes the letter "l" with the number "1". This is a homograph/typosquatting attack commonly used in phishing to deceive users at a glance.',
      },
    ],
  },
  malware: {
    title: 'Malware Defense Quiz',
    icon: '🦠',
    questions: [
      {
        questionText: 'What type of malware encrypts your files and demands a ransom payment for decryption?',
        options: ['Spyware', 'Adware', 'Ransomware', 'Worm'],
        correctAnswer: 2,
        explanation:
          'Ransomware encrypts victim files and demands payment — usually cryptocurrency — for the decryption key. WannaCry and Ryuk are infamous examples.',
      },
      {
        questionText: 'A pop-up on a website says "Your Flash Player is outdated — Download now!" What is the safest response?',
        options: [
          'Click download immediately to stay secure',
          'Dismiss the pop-up and visit Adobe\'s official website to verify',
          'Download and run the file — it looks legitimate',
          'Ignore it and keep browsing on that same page',
        ],
        correctAnswer: 1,
        explanation:
          'Adobe Flash Player was discontinued in December 2020. Any prompt to install Flash is malware. Always verify software updates from official developer websites only.',
      },
      {
        questionText: 'What is a "Trojan horse" in cybersecurity?',
        options: [
          'A legitimate operating system update',
          'A type of network firewall rule',
          'Malware disguised as legitimate software to trick users into installing it',
          'A secure encryption protocol',
        ],
        correctAnswer: 2,
        explanation:
          'Trojans masquerade as legitimate programs (games, tools, utilities) to trick users into running them. Once installed, they open backdoors for attackers.',
      },
      {
        questionText: 'What is the BEST protection strategy against ransomware?',
        options: [
          'Pay the ransom immediately when attacked',
          'Disable antivirus software to improve system performance',
          'Regularly back up data to an offline or isolated location',
          'Only open email attachments from known contacts',
        ],
        correctAnswer: 2,
        explanation:
          'Regular offline backups are the most effective defense. If ransomware strikes, you can restore files without paying. Follow the 3-2-1 rule: 3 copies, 2 media types, 1 offsite.',
      },
      {
        questionText: 'Which is the safest source for downloading software?',
        options: [
          'Any website offering the software for free',
          'Peer-to-peer (P2P) file sharing networks',
          'A forum post with a "clean" download link',
          'The official developer\'s website or trusted app store',
        ],
        correctAnswer: 3,
        explanation:
          'Always download software exclusively from official sources. Unofficial sites frequently bundle malware with free software, including popular programs like VLC or WinRAR.',
      },
    ],
  },
  password: {
    title: 'Password Hygiene Quiz',
    icon: '🔑',
    questions: [
      {
        questionText: 'Which of the following represents the strongest password?',
        options: [
          'password123',
          'MyName1990',
          'Blue-Sky-Mountain-Penguin-77!',
          'qwerty!',
        ],
        correctAnswer: 2,
        explanation:
          'Length is the most critical factor. A long passphrase with mixed elements is both strong and memorable. "Blue-Sky-Mountain-Penguin-77!" would take centuries to crack.',
      },
      {
        questionText: 'What is Multi-Factor Authentication (MFA)?',
        options: [
          'Using multiple different passwords for the same account',
          'A verification method requiring two or more independent authentication factors',
          'Changing your password multiple times per month',
          'Sharing your password with a trusted contact as backup',
        ],
        correctAnswer: 1,
        explanation:
          'MFA requires multiple verification factors (e.g., password + OTP from authenticator app). Even if your password is stolen, attackers cannot log in without the second factor.',
      },
      {
        questionText: 'Why is reusing the same password across multiple accounts dangerous?',
        options: [
          'It is not dangerous — it is efficient',
          'It only matters for banking websites',
          'If one site suffers a breach, all accounts sharing that password become vulnerable',
          'Password managers cannot store reused passwords',
        ],
        correctAnswer: 2,
        explanation:
          'Credential stuffing attacks use stolen username/password pairs from one breach to try against other services. A single reused password can compromise dozens of accounts.',
      },
      {
        questionText: 'What is the recommended minimum length for a strong password?',
        options: [
          '4 characters',
          '6 characters',
          '8 characters',
          '12 or more characters',
        ],
        correctAnswer: 3,
        explanation:
          'Security experts recommend at least 12 characters. Each additional character multiplies cracking time exponentially. Modern hardware can crack an 8-character password in hours.',
      },
      {
        questionText: 'What is the most effective tool for managing unique, complex passwords across many accounts?',
        options: [
          'Writing them in a notebook',
          'Using the same strong password everywhere',
          'Saving them in a plain text file on your desktop',
          'A reputable password manager application',
        ],
        correctAnswer: 3,
        explanation:
          'Password managers like Bitwarden, 1Password, or Dashlane generate cryptographically random passwords and store them encrypted. You only need to remember one strong master password.',
      },
    ],
  },
};

export default function Quiz() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);

  const quiz = QUIZ_DATA[slug];

  if (!quiz) {
    return (
      <div className="quiz-error">
        <h2>Quiz not found for "{slug}"</h2>
        <Link to="/modules" className="btn-primary">Back to Modules</Link>
      </div>
    );
  }

  const question = quiz.questions[currentQ];
  const progress = Math.round((currentQ / quiz.questions.length) * 100);

  const handleSelect = (idx) => {
    if (showFeedback) return;
    setSelected(idx);
    setShowFeedback(true);
  };

  const handleNext = () => {
    const newAnswers = [...answers, { selectedAnswer: selected }];
    setAnswers(newAnswers);

    if (currentQ < quiz.questions.length - 1) {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setShowFeedback(false);
    } else {
      handleSubmit(newAnswers);
    }
  };

  const handleSubmit = async (finalAnswers) => {
    let score = 0;
    const gradedAnswers = finalAnswers.map((a, i) => {
      const isCorrect = quiz.questions[i].correctAnswer === a.selectedAnswer;
      if (isCorrect) score++;
      return { ...a, isCorrect };
    });
    const totalQuestions = quiz.questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);

    try {
      const { data } = await submitQuiz({
        moduleSlug: slug,
        answers: gradedAnswers,
        score,
        totalQuestions,
        percentage,
      });
      setResult(data.result);
    } catch {
      setResult({ score, totalQuestions, percentage });
    }
    setSubmitted(true);
  };

  if (submitted && result) {
    const pct = result.percentage;
    const passed = pct >= 70;
    return (
      <div className="quiz-page">
        <div className="quiz-result-card">
          <div className="result-header">
            <span className="result-big-icon">{passed ? '🎉' : '📚'}</span>
            <h2>{passed ? 'Quiz Passed!' : 'Quiz Complete'}</h2>
          </div>
          <div className="result-score-display">
            <div className={`score-circle ${passed ? 'score-pass' : 'score-fail'}`}>
              <span className="score-pct-text">{pct}%</span>
              <span className="score-fraction">{result.score}/{result.totalQuestions}</span>
            </div>
          </div>
          <p className="result-msg">
            {passed
              ? 'Excellent! You demonstrated strong knowledge of this topic.'
              : 'Not quite there. Review the module content and try again — aim for 70% to pass.'}
          </p>
          <div className="result-actions">
            <button onClick={() => navigate('/results')} className="btn-primary">
              View All Results
            </button>
            <button onClick={() => window.location.reload()} className="btn-secondary">
              Retake Quiz
            </button>
            <Link to="/modules" className="btn-outline">All Modules</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <div className="quiz-header">
        <div className="quiz-title-row">
          <span className="quiz-icon">{quiz.icon}</span>
          <h1>{quiz.title}</h1>
        </div>
        <div className="quiz-progress">
          <span>Question {currentQ + 1} of {quiz.questions.length}</span>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>

      <div className="question-card">
        <div className="question-num">Q{currentQ + 1}</div>
        <h2 className="question-text">{question.questionText}</h2>

        <div className="options-list">
          {question.options.map((opt, i) => {
            let cls = 'option-btn';
            if (showFeedback) {
              if (i === question.correctAnswer) cls += ' option-correct';
              else if (i === selected) cls += ' option-incorrect';
              else cls += ' option-neutral';
            } else if (selected === i) {
              cls += ' option-selected';
            }
            return (
              <button key={i} onClick={() => handleSelect(i)} disabled={showFeedback} className={cls}>
                <span className="option-letter">{String.fromCharCode(65 + i)}</span>
                <span>{opt}</span>
                {showFeedback && i === question.correctAnswer && <span className="option-check">✓</span>}
                {showFeedback && i === selected && i !== question.correctAnswer && (
                  <span className="option-cross">✗</span>
                )}
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div className={`quiz-feedback ${selected === question.correctAnswer ? 'fb-correct' : 'fb-incorrect'}`}>
            <strong>
              {selected === question.correctAnswer ? '✅ Correct!' : '❌ Incorrect'}
            </strong>
            <p>{question.explanation}</p>
            <button onClick={handleNext} className="btn-primary">
              {currentQ < quiz.questions.length - 1 ? 'Next Question →' : 'Submit Quiz'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
