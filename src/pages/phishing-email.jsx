import { useState } from "react";
import Navigation from "../components/Navigation";

export default function PhishingSim() {
  const questions = [
    {
      question: "Bank email asks you to verify account via link. What should you do?",
      options: [
        "Click link and verify",
        "Ignore email",
        "Go to official bank website/app",
        "Reply asking details"
      ],
      answer: "Go to official bank website/app",
    },
    {
      question: "Colleague sends urgent document link unexpectedly. What is safest?",
      options: [
        "Open link",
        "Ignore email",
        "Verify through official communication",
        "Forward to others"
      ],
      answer: "Verify through official communication",
    },
    {
      question: "Payment failure message with link received. What should you do?",
      options: [
        "Click link",
        "Ignore",
        "Check via official app/website",
        "Reply to message"
      ],
      answer: "Check via official app/website",
    },
    {
      question: "Password reset email you didn’t request arrives. What to do?",
      options: [
        "Click link",
        "Ignore",
        "Login via official website and check",
        "Share with friends"
      ],
      answer: "Login via official website and check",
    },
    {
      question: "You get a reward claim message with link. What is correct action?",
      options: [
        "Claim reward",
        "Ignore",
        "Verify through official website",
        "Share with others"
      ],
      answer: "Verify through official website",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [completed, setCompleted] = useState(false);

  const handleOptionClick = (option) => {
    setSelected(option);

    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setCompleted(true);
      }
    }, 600);
  };

  const handleRetry = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setCompleted(false);
  };

  // ✅ RESULT SCREEN
  if (completed) {
    const percentage = (score / questions.length) * 100;

    // 🔥 THIS IS THE IMPORTANT LINE
    if (percentage >= 70) {
      localStorage.setItem("phishingCompleted", "true");
    }

    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark">
        <Navigation />

        <div className="flex justify-center items-center h-[80vh]">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg border text-center">

            <h1 className="text-2xl font-bold mb-4">
              Simulation Completed!
            </h1>

            <p className="text-lg mb-2">
              Score: {score} / {questions.length}
            </p>

            <p className="text-xl font-bold mb-4">
              {percentage.toFixed(0)}%
            </p>

            {percentage >= 70 ? (
              <p className="text-green-500 mb-4">✅ You passed!</p>
            ) : (
              <p className="text-red-500 mb-4">❌ Try again</p>
            )}

            <button
              onClick={handleRetry}
              className="bg-primary text-white px-4 py-2 rounded-lg"
            >
              Retry
            </button>

          </div>
        </div>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navigation />

      <main className="px-6 md:px-20 py-10 max-w-4xl mx-auto">

        <h1 className="text-3xl font-black mb-6 text-center">
          Phishing Simulation Questions
        </h1>

        {/* Question */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border mb-6">
          <p className="font-semibold">
            Q{current + 1}. {q.question}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleOptionClick(opt)}
              className={`w-full p-4 border rounded-lg text-left transition ${
                selected === opt
                  ? opt === q.answer
                    ? "bg-green-100 border-green-400"
                    : "bg-red-100 border-red-400"
                  : "hover:bg-slate-50"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Score: {score}
        </p>

      </main>
    </div>
  );
}