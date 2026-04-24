import { useState } from "react";
import Navigation from "../components/Navigation";

export default function CallSimulation() {
  const questions = [
    {
      question: "Bank calls asking OTP to stop a suspicious transaction. What should you do?",
      options: [
        "Share OTP",
        "Wait and then share",
        "Refuse, disconnect, contact bank",
        "Share partial OTP"
      ],
      answer: "Refuse, disconnect, contact bank",
    },
    {
      question: "Caller says KYC incomplete and asks OTP. What is safest?",
      options: [
        "Share OTP",
        "Ask them to call later",
        "Update via official channels",
        "Share if they sound genuine"
      ],
      answer: "Update via official channels",
    },
    {
      question: "Caller says refund is being processed and asks OTP. What should you do?",
      options: [
        "Share OTP",
        "Ignore",
        "Check via official app",
        "Share if amount is small"
      ],
      answer: "Check via official app",
    },
    {
      question: "Call says SIM will be blocked unless OTP shared. What should you do?",
      options: [
        "Share OTP",
        "Wait",
        "Contact provider directly",
        "Share if caller sounds professional"
      ],
      answer: "Contact provider directly",
    },
    {
      question: "Caller says they are sending money and asks OTP. What is correct?",
      options: [
        "Share OTP",
        "Share partial OTP",
        "Do not share and reject",
        "Share if trusted"
      ],
      answer: "Do not share and reject",
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

  if (completed) {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 70) {
    localStorage.setItem("otpscamCompleted", "true");
  }

    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark">
        <Navigation />

        <div className="flex justify-center items-center h-[80vh]">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg border text-center">

            <h1 className="text-2xl font-bold mb-4">
              Call Scam Simulation Completed!
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
          Call Scam Simulation
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