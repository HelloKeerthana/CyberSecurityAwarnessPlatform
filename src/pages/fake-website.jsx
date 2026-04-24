import { useState } from "react";
import Navigation from "../components/Navigation";

export default function WebsiteSimulation() {
  const questions = [
    {
      question: "You find a shopping site with 80% discount (amaz0n-deals-official.store). What should you do?",
      options: [
        "Proceed with purchase",
        "Enter card details quickly",
        "Verify website authenticity",
        "Trust design"
      ],
      answer: "Verify website authenticity",
    },
    {
      question: "You land on a login page from a link (secure-login-account-verify.net). What should you do?",
      options: [
        "Enter credentials",
        "Refresh page",
        "Check URL and go to official site",
        "Enter wrong details"
      ],
      answer: "Check URL and go to official site",
    },
    {
      question: "Payment page asks for card, CVV, OTP and PIN. What should you do?",
      options: [
        "Enter all details",
        "Refresh page",
        "Cancel and verify platform",
        "Enter partial details"
      ],
      answer: "Cancel and verify platform",
    },
    {
      question: "You open a government site (not .gov.in) asking fee. What should you do?",
      options: [
        "Fill and pay",
        "Trust search result",
        "Verify official government website",
        "Submit basic details"
      ],
      answer: "Verify official government website",
    },
    {
      question: "You find free cracked software site. What is safest?",
      options: [
        "Download software",
        "Click download fast",
        "Avoid and use official source",
        "Disable antivirus"
      ],
      answer: "Avoid and use official source",
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
    localStorage.setItem("fakewebsiteCompleted", "true");
  }

    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark">
        <Navigation />

        <div className="flex justify-center items-center h-[80vh]">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg border text-center">

            <h1 className="text-2xl font-bold mb-4">
              Website Simulation Completed!
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
          Website Security Simulation
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