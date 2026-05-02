const scenarios = [
  {
    id: 'phishing-email',
    type: 'phishing',
    title: 'Suspicious Bank Email',
    description:
      'You receive an urgent email from "security@paypa1.com" saying your account is suspended. It asks you to click a link to verify your identity immediately.',
    options: [
      { text: 'Click the link immediately to restore access', outcome: 'danger' },
      { text: 'Inspect the sender address — "paypa1" is suspicious, report it', outcome: 'safe' },
      { text: 'Reply asking for more information', outcome: 'risky' },
      { text: 'Call the bank directly using their official number', outcome: 'safe' },
    ],
    feedback: {
      danger:
        'You clicked a phishing link. This likely exposed your credentials or installed malware. The domain "paypa1.com" (number 1, not letter l) is a spoofed domain.',
      safe:
        'Excellent! You identified the red flag. "paypa1.com" replaces the letter L with the number 1. Always verify sender domains and contact companies via official channels.',
      risky:
        'Replying confirms your email is active and may invite further attacks. Never engage with suspicious emails — report or delete them instead.',
    },
  },
  {
    id: 'malware-download',
    type: 'malware',
    title: 'Fake Software Update Pop-up',
    description:
      'While browsing a news website, a pop-up appears: "Your Flash Player is critically outdated! Download the latest version NOW to continue."',
    options: [
      { text: 'Click "Download Now" on the pop-up', outcome: 'danger' },
      { text: 'Close the pop-up and visit Adobe\'s official site to verify', outcome: 'safe' },
      { text: 'Just close the tab and ignore it', outcome: 'risky' },
    ],
    feedback: {
      danger:
        'You installed malware! Adobe Flash was discontinued in December 2020. Any pop-up asking you to install Flash is malware. Run a full antivirus scan immediately.',
      safe:
        'Perfect decision! Adobe Flash Player has been discontinued since 2020. Always verify software updates from official developer websites only.',
      risky:
        'Better than clicking, but some malvertising can execute drive-by downloads just from the page being open. Close the tab and run an antivirus scan.',
    },
  },
  {
    id: 'password-choice',
    type: 'password',
    title: 'Creating a Banking Password',
    description:
      'You are setting up a new online banking account. The site requires a password. Which of these would you choose?',
    options: [
      { text: 'password123', outcome: 'danger' },
      { text: 'JohnSmith1990!', outcome: 'risky' },
      { text: 'Purple-Mountain-Sunrise-77!', outcome: 'safe' },
      { text: 'Tr0ub4dor&3', outcome: 'safe' },
    ],
    feedback: {
      danger:
        '"password123" is cracked in milliseconds. It appears in over 23 million breached accounts. Never use common passwords.',
      risky:
        'Using personal information (your name and birth year) makes your password vulnerable to targeted attacks using publicly available information.',
      safe:
        'Excellent choice! Long passphrases and complex passwords with mixed characters take centuries to crack through brute force methods.',
    },
  },
];

const getScenarios = (req, res) => {
  const summary = scenarios.map(({ id, type, title, description }) => ({
    id,
    type,
    title,
    description,
  }));
  res.json(summary);
};

const getScenarioById = (req, res) => {
  const scenario = scenarios.find((s) => s.id === req.params.id);
  if (!scenario) return res.status(404).json({ message: 'Scenario not found' });
  res.json(scenario);
};

const evaluateDecision = (req, res) => {
  const { scenarioId, choiceIndex } = req.body;
  const scenario = scenarios.find((s) => s.id === scenarioId);
  if (!scenario) return res.status(404).json({ message: 'Scenario not found' });
  const option = scenario.options[choiceIndex];
  if (!option) return res.status(400).json({ message: 'Invalid choice index' });
  res.json({
    outcome: option.outcome,
    feedback: scenario.feedback[option.outcome],
  });
};

module.exports = { getScenarios, getScenarioById, evaluateDecision };
