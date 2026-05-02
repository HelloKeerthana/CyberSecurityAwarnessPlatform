const SYSTEM_PROMPT = `You are CyberShield AI, a cybersecurity education assistant built into the CyberShield Awareness Platform.
Your role is to help students understand cybersecurity concepts clearly and concisely.

Topics you cover: phishing, malware, ransomware, password security, MFA, social engineering, network security, data privacy, encryption, and safe browsing habits.

Guidelines:
- Keep responses under 200 words unless the user explicitly asks for more detail
- Use plain language — avoid unnecessary jargon
- Give practical, actionable advice
- If asked something unrelated to cybersecurity or the platform, politely redirect the conversation back to cybersecurity topics
- Never provide advice that could be used for malicious purposes`;

const sendMessage = async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ message: 'Messages array is required.' });
  }

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.ANTHROPIC_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:5173',
        'X-Title': 'CyberShield',
      },
      body: JSON.stringify({
        model: 'anthropic/claude-3-haiku',
        max_tokens: 512,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      console.error('OpenRouter error:', errData);
      return res.status(500).json({ message: errData?.error?.message || 'AI service unavailable.' });
    }

    const data = await response.json();
    res.json({ reply: data.choices[0].message.content });
  } catch (err) {
    console.error('Chat error:', err.message);
    res.status(500).json({ message: 'AI service unavailable. Please try again.' });
  }
};

module.exports = { sendMessage };
