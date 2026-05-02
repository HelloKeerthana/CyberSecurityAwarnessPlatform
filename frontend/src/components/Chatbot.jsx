import { useState, useRef, useEffect } from 'react';
import { sendChatMessage } from '../services/api';
import '../styles/Chatbot.css';

const WELCOME = {
  role: 'assistant',
  content: 'Hi! I\'m CyberShield AI. Ask me anything about phishing, malware, passwords, or cybersecurity in general.',
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, open]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { role: 'user', content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput('');
    setLoading(true);

    try {
      const history = next
        .filter((m) => m.role !== 'assistant' || m !== WELCOME)
        .map((m) => ({ role: m.role, content: m.content }));

      const { data } = await sendChatMessage(history);
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, I\'m unavailable right now. Please try again.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chatbot-container">
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <span className="chatbot-avatar">🛡️</span>
              <div>
                <div className="chatbot-name">CyberShield AI</div>
                <div className="chatbot-status">Cybersecurity Assistant</div>
              </div>
            </div>
            <button className="chatbot-close" onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg chat-msg--${msg.role}`}>
                {msg.role === 'assistant' && <span className="chat-msg-avatar">🛡️</span>}
                <div className="chat-msg-bubble">{msg.content}</div>
              </div>
            ))}
            {loading && (
              <div className="chat-msg chat-msg--assistant">
                <span className="chat-msg-avatar">🛡️</span>
                <div className="chat-msg-bubble chat-typing">
                  <span /><span /><span />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="chatbot-input-row">
            <input
              className="chatbot-input"
              type="text"
              placeholder="Ask about cybersecurity..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              disabled={loading}
            />
            <button className="chatbot-send" onClick={handleSend} disabled={loading || !input.trim()}>
              ➤
            </button>
          </div>
        </div>
      )}

      <button className="chatbot-fab" onClick={() => setOpen((o) => !o)} title="CyberShield AI">
        {open ? '✕' : '💬'}
      </button>
    </div>
  );
}
