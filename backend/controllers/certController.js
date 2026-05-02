const Certification = require('../models/Certification');
const Result = require('../models/Result');

const REQUIRED_MODULES = ['phishing', 'malware', 'password'];
const PASS_THRESHOLD = 80;

const EXAM_QUESTIONS = [
  // Phishing
  {
    questionText: 'What is "vishing"?',
    options: [
      'Phishing via video calls',
      'Phishing conducted over voice/phone calls',
      'Phishing via QR codes',
      'Phishing through VPN tunnels',
    ],
    correctAnswer: 1,
    explanation: 'Vishing (voice phishing) uses phone calls to trick victims into revealing sensitive information, often by impersonating banks, government agencies, or tech support.',
  },
  {
    questionText: 'Which email authentication standards help detect forged sender addresses?',
    options: [
      'HTTPS and TLS',
      'SSH and SFTP',
      'SPF, DKIM, and DMARC',
      'OAuth and JWT',
    ],
    correctAnswer: 2,
    explanation: 'SPF, DKIM, and DMARC work together to authenticate email senders and help mail servers detect spoofed or forged "From" addresses used in phishing.',
  },
  {
    questionText: 'What is "smishing"?',
    options: [
      'Phishing targeting small businesses',
      'Phishing via social media DMs',
      'Phishing via SMS text messages',
      'Phishing via software pop-ups',
    ],
    correctAnswer: 2,
    explanation: 'Smishing (SMS phishing) sends fraudulent text messages containing malicious links or requests to steal credentials or install malware.',
  },
  {
    questionText: 'A link reads "docs.google.com.accounts-verify.ru/signin". What is the actual domain?',
    options: [
      'google.com — it starts with docs.google.com',
      'accounts-verify.ru — that is the real registered domain',
      'signin — it is a subdirectory',
      'docs — it is the subdomain',
    ],
    correctAnswer: 1,
    explanation: 'The actual domain is the last two segments before the first slash: "accounts-verify.ru". Everything before it ("docs.google.com") is just a subdomain used to deceive.',
  },
  {
    questionText: 'What is "whaling" in cybersecurity?',
    options: [
      'Mass phishing campaigns targeting thousands of users',
      'Phishing specifically targeting high-profile executives or senior personnel',
      'Phishing attacks using ocean-themed lures',
      'A type of DDoS attack on large corporations',
    ],
    correctAnswer: 1,
    explanation: 'Whaling is spear phishing aimed at "big fish" — CEOs, CFOs, or other executives whose access or authority can yield high-value information or financial fraud.',
  },
  // Malware
  {
    questionText: 'What distinguishes a "worm" from a traditional virus?',
    options: [
      'Worms only target Windows systems',
      'Worms self-replicate and spread across networks without needing a host file',
      'Viruses are always more destructive than worms',
      'Worms only infect mobile devices',
    ],
    correctAnswer: 1,
    explanation: 'Unlike viruses (which attach to host files), worms are standalone programs that self-propagate across networks — like WannaCry, which spread globally in hours.',
  },
  {
    questionText: 'What is a "zero-day exploit"?',
    options: [
      'A vulnerability discovered and patched within 24 hours',
      'A cyberattack that completes in under one second',
      'An attack exploiting a vulnerability unknown to the vendor, with no patch available',
      'A daily scheduled system vulnerability scan',
    ],
    correctAnswer: 2,
    explanation: 'Zero-day exploits target flaws that developers are unaware of ("zero days" to prepare a fix). They are extremely dangerous because no defensive patch exists at the time of attack.',
  },
  {
    questionText: 'How does fileless malware primarily evade traditional antivirus detection?',
    options: [
      'It encrypts itself and hides in a system partition',
      'It runs entirely in RAM using legitimate system tools like PowerShell or WMI',
      'It disguises itself with a legitimate application icon',
      'It changes its filename every 60 seconds',
    ],
    correctAnswer: 1,
    explanation: 'Fileless malware leaves no files on disk — it injects code into running processes or uses built-in tools (LOLBins). Signature-based antivirus cannot detect what it cannot find on disk.',
  },
  {
    questionText: 'What is a "botnet"?',
    options: [
      'A network of IoT security cameras managed by an IT team',
      'A collection of compromised devices (bots) controlled remotely by an attacker',
      'An automated network performance monitoring tool',
      'A bot-detection firewall product',
    ],
    correctAnswer: 1,
    explanation: 'A botnet is a group of malware-infected devices (often thousands or millions) controlled by a command-and-control server. They are used for spam, DDoS attacks, and credential theft.',
  },
  {
    questionText: 'What is "cryptojacking"?',
    options: [
      'Hacking cryptocurrency exchanges to steal coins',
      'Phishing users with fake crypto investment schemes',
      'Secretly using a victim\'s device resources to mine cryptocurrency without consent',
      'Breaking cryptographic encryption on digital wallets',
    ],
    correctAnswer: 2,
    explanation: 'Cryptojacking runs hidden mining scripts (often via malicious browser scripts or malware) on the victim\'s CPU/GPU, consuming resources and electricity for the attacker\'s profit.',
  },
  // Password
  {
    questionText: 'What does "salting" a password mean before storing it?',
    options: [
      'Encrypting it with AES-256 before saving to the database',
      'Adding a unique random string to each password before hashing to foil rainbow table attacks',
      'Storing a secondary copy in an encrypted ZIP file',
      'Hashing the password three times in sequence',
    ],
    correctAnswer: 1,
    explanation: 'A salt is a random value appended to a password before hashing. Even if two users share the same password, their stored hashes differ — making precomputed rainbow table attacks useless.',
  },
  {
    questionText: 'What is "credential stuffing"?',
    options: [
      'Physically hiding passwords inside hardware devices',
      'Testing a single password against one account repeatedly',
      'Automating login attempts using stolen username/password pairs from previous data breaches',
      'Brute-forcing passwords using a wordlist dictionary',
    ],
    correctAnswer: 2,
    explanation: 'Credential stuffing reuses breach dumps — attackers feed millions of stolen credentials into automated tools and test them across many services, exploiting password reuse.',
  },
  {
    questionText: 'Why are "security questions" (e.g., mother\'s maiden name) considered a weak authentication factor?',
    options: [
      'They are too long for users to remember accurately',
      'Databases never store them securely',
      'Answers are often publicly discoverable via social media or public records',
      'They expire too quickly to be useful',
    ],
    correctAnswer: 2,
    explanation: 'Security question answers (pet names, birthplaces, school names) are frequently findable through social media, LinkedIn, or public records — making them poor secrets.',
  },
  {
    questionText: 'What is a "passphrase" and why is it preferred over a complex short password?',
    options: [
      'A password of special characters only; preferred because it resists dictionary attacks',
      'A sequence of random words forming a long phrase; preferred because length is harder to brute-force and easier to remember',
      'A biometric token phrase; preferred because it is biologically unique',
      'A one-time password generated by an app; preferred because it expires quickly',
    ],
    correctAnswer: 1,
    explanation: 'Length dominates password strength. "correct-horse-battery-staple" (28 chars) is vastly harder to crack than "P@$$w0rd!" (9 chars) and far easier to remember.',
  },
  {
    questionText: 'What is TOTP (Time-based One-Time Password) and why is it secure?',
    options: [
      'A permanent backup code emailed during account recovery',
      'A password generated once and valid for the life of the account',
      'A short-lived numeric code derived from a shared secret and the current time, valid for ~30 seconds',
      'A cryptographic key used to encrypt stored passwords',
    ],
    correctAnswer: 2,
    explanation: 'TOTP (used in apps like Google Authenticator) generates a new code every 30 seconds. Even if intercepted, it is useless moments later — making replay attacks impossible.',
  },
];

const getCertStatus = async (req, res) => {
  try {
    const existing = await Certification.findOne({ user: req.user._id });
    const results = await Result.find({ user: req.user._id });

    const eligibility = {};
    for (const slug of REQUIRED_MODULES) {
      eligibility[slug] = results.some((r) => r.moduleSlug === slug && r.percentage >= 70);
    }
    const isEligible = REQUIRED_MODULES.every((s) => eligibility[s]);

    res.json({
      isEligible,
      eligibility,
      certificate: existing || null,
      totalQuestions: EXAM_QUESTIONS.length,
      passThreshold: PASS_THRESHOLD,
      examQuestions:
        isEligible && !existing
          ? EXAM_QUESTIONS.map((q) => ({ questionText: q.questionText, options: q.options }))
          : null,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const submitExam = async (req, res) => {
  try {
    const existing = await Certification.findOne({ user: req.user._id });
    if (existing) return res.status(400).json({ message: 'You are already certified.' });

    const results = await Result.find({ user: req.user._id });
    const isEligible = REQUIRED_MODULES.every((slug) =>
      results.some((r) => r.moduleSlug === slug && r.percentage >= 70)
    );
    if (!isEligible)
      return res.status(403).json({ message: 'Complete and pass all 3 modules before taking the exam.' });

    const { answers } = req.body;
    let score = 0;
    const evaluated = answers.map((ans, i) => {
      const isCorrect = EXAM_QUESTIONS[i]?.correctAnswer === ans.selectedAnswer;
      if (isCorrect) score++;
      return {
        questionIndex: i,
        selectedAnswer: ans.selectedAnswer,
        correctAnswer: EXAM_QUESTIONS[i]?.correctAnswer,
        explanation: EXAM_QUESTIONS[i]?.explanation,
        isCorrect,
      };
    });

    const percentage = Math.round((score / EXAM_QUESTIONS.length) * 100);
    const passed = percentage >= PASS_THRESHOLD;

    let cert = null;
    if (passed) {
      cert = await Certification.create({
        user: req.user._id,
        score,
        totalQuestions: EXAM_QUESTIONS.length,
        percentage,
      });
    }

    res.json({ score, totalQuestions: EXAM_QUESTIONS.length, percentage, passed, certificate: cert, evaluated });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCertificate = async (req, res) => {
  try {
    const cert = await Certification.findOne({ user: req.user._id }).populate('user', 'name email');
    if (!cert) return res.status(404).json({ message: 'No certificate found.' });
    res.json(cert);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getCertStatus, submitExam, getCertificate };
