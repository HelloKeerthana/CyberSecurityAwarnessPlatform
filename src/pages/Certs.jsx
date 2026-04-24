import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import "./certs.css";

export default function Certs() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [time, setTime] = useState(120);
  const [name, setName] = useState("");
  const [certReady, setCertReady] = useState(false);
  const [certURL, setCertURL] = useState("");
  const [showNameInput, setShowNameInput] = useState(false);

  // 🔐 MODULE CHECK
  const requiredModules = [
    "phishingCompleted",
    "fakewebsiteCompleted",
    "otpscamCompleted"
  ];

  const allCompleted = requiredModules.every(
    (m) => localStorage.getItem(m) === "true"
  );

  // ---------------- QUESTIONS ----------------
  const questions = [
    {
      question: "You receive an email claiming to be from your bank stating that your account will be suspended within 24 hours unless you verify your details through a provided link. The email looks urgent and contains official logos. What should you do?",
      options: [
        "Click the link and verify immediately",
        "Ignore the email completely",
        "Go to the official bank website/app and check",
        "Reply to the email asking for confirmation"
      ],
      answer: "Go to the official bank website/app and check",
    },
    {
      question: "A colleague suddenly sends you a message with a link to an important document and asks you to open it urgently, even though you were not expecting anything from them. What is the safest action?",
      options: [
        "Open the link quickly",
        "Ignore the message",
        "Verify with the colleague through another method",
        "Forward the link to others"
      ],
      answer: "Verify with the colleague through another method",
    },
    {
      question: "You receive a message saying your recent payment failed and asks you to click a link to retry the payment immediately. The message creates urgency and pressure. What should you do?",
      options: [
        "Click the link and retry",
        "Ignore the message",
        "Check through the official app or website",
        "Reply asking for help"
      ],
      answer: "Check through the official app or website",
    },
    {
      question: "You receive a password reset email for your account even though you did not request any reset. The email includes a link to change your password. What is the safest step?",
      options: [
        "Click the link and change password",
        "Ignore it",
        "Log in through official website and check activity",
        "Share the email with friends"
      ],
      answer: "Log in through official website and check activity",
    },
    {
      question: "You get a message saying you have won a big reward and must claim it within a limited time by clicking a link. The offer seems too good to be true. What should you do?",
      options: [
        "Click and claim reward",
        "Ignore the message",
        "Verify through official website",
        "Share with others"
      ],
      answer: "Verify through official website",
    },
    {
      question: "A caller claims to be from your bank and says there is a suspicious transaction on your account. They ask for your OTP to stop the transaction immediately. What should you do?",
      options: [
        "Share OTP quickly",
        "Wait and then share",
        "Refuse, disconnect, and contact bank directly",
        "Share partial OTP"
      ],
      answer: "Refuse, disconnect, and contact bank directly",
    },
    {
      question: "You receive a call stating that your KYC is incomplete and your account will be blocked unless you provide an OTP sent to your phone. The caller sounds professional. What is the safest action?",
      options: [
        "Share OTP",
        "Ask them to call later",
        "Update KYC through official channels",
        "Share if they sound genuine"
      ],
      answer: "Update KYC through official channels",
    },
    {
      question: "You come across a shopping website offering huge discounts (like 80%) on popular products, but the website URL looks slightly unusual. What should you do?",
      options: [
        "Proceed with purchase",
        "Enter card details quickly",
        "Verify website authenticity",
        "Trust the design"
      ],
      answer: "Verify website authenticity",
    },
    {
      question: "You click on a link and land on a login page that looks similar to a well-known service, but the URL is slightly different. It asks for your username and password. What should you do?",
      options: [
        "Enter credentials",
        "Refresh the page",
        "Check URL and go to official site",
        "Enter wrong details to test"
      ],
      answer: "Check URL and go to official site",
    },
    {
      question: "While making an online payment, a page asks you to enter your card number, CVV, OTP, and also your ATM PIN. This feels unusual. What should you do?",
      options: [
        "Enter all details",
        "Refresh the page",
        "Cancel and verify the platform",
        "Enter partial details"
      ],
      answer: "Cancel and verify the platform",
    }
  ];

  // ⏱ TIMER
  useEffect(() => {
    if (time > 0 && !completed) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    } else if (time === 0) {
      setCompleted(true);
    }
  }, [time, completed]);

  // 🎓 CERTIFICATE GENERATION - TEXT ON CERTIFICATE
  const generateCertificate = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = "/cert.png"; // MUST be inside public folder
    
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      
      // Draw the certificate background image
      ctx.drawImage(image, 0, 0);
      
      // ===== TEXT ON CERTIFICATE =====
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      
      // NAME - Very Large & Bold
      ctx.font = "bold 72px 'Poppins', 'Arial', sans-serif";
      ctx.fillStyle = "#000000";
      ctx.shadowColor = "rgba(0, 0, 0, 0.1)";
      ctx.shadowBlur = 2;
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;
      ctx.fillText(
        name || "Participant", 
        canvas.width / 2, 
        canvas.height * 0.95
      );
      
      // SCORE - Large text
      ctx.font = "bold 52px 'Poppins', 'Arial', sans-serif";
      ctx.fillStyle = "#1a1a1a";
      ctx.shadowColor = "rgba(0, 0, 0, 0.1)";
      ctx.shadowBlur = 2;
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;
      ctx.fillText(
        `Score: ${score}/${questions.length}`,
        canvas.width / 2,
        canvas.height * 0.68
      );
      
      // DATE - Medium text
      ctx.font = "bold 40px 'Poppins', 'Arial', sans-serif";
      ctx.fillStyle = "#333333";
      ctx.shadowColor = "rgba(0, 0, 0, 0.1)";
      ctx.shadowBlur = 2;
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;
      const today = new Date().toLocaleDateString();
      ctx.fillText(
        `Date: ${today}`,
        canvas.width / 2,
        canvas.height * 0.80
      );
      
      // Convert to image
      const url = canvas.toDataURL("image/png");
      setCertURL(url);
      setCertReady(true);
    };
  };

  // 📥 DOWNLOAD CERTIFICATE
  const downloadCertificate = () => {
    const link = document.createElement("a");
    link.href = certURL;
    link.download = `Certificate_${name || "Participant"}_${new Date().getTime()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // -------- LOCKED STATE --------
  if (!allCompleted) {
    return (
      <div className="locked">
        <Navigation />
        <h1>🔒 Exam Locked</h1>
        <p>Complete all modules to unlock the exam</p>
      </div>
    );
  }

  const percentage = (score / questions.length) * 100;
  const isPassed = percentage >= 70;
  const q = questions[current];

  // 🎯 RESULT SCREEN
  if (completed) {
    return (
      <div className="result-container">
        <Navigation />

        <div className="result-card">
          <h1 className="text-2xl font-bold mb-3">
            {isPassed ? "🎉 You Passed!" : "❌ You Failed"}
          </h1>

          <p className="mb-2 text-gray-600">Your Score</p>

          <p className="score">
            {score} / {questions.length}
          </p>

          <p className="mt-2 text-sm text-gray-500">
            {percentage.toFixed(0)}%
          </p>

          {/* ✅ FAIL → SHOW RETRY */}
          {!isPassed && (
            <button
              onClick={() => {
                setCurrent(0);
                setScore(0);
                setSelected(null);
                setCompleted(false);
                setTime(120);
                setShowNameInput(false);
                setCertReady(false);
                setCertURL("");
                setName("");
              }}
              className="mt-5 bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
            >
              Retry Exam
            </button>
          )}

          {/* ✅ PASS → SHOW CERTIFICATE OPTIONS */}
          {isPassed && !certReady && (
            <div className="mt-5">
              {!showNameInput ? (
                <button
                  onClick={() => setShowNameInput(true)}
                  className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600"
                >
                  Generate Certificate
                </button>
              ) : (
                <div className="name-input-container mt-5">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-3"
                  />
                  <button
                    onClick={() => {
                      if (name.trim()) {
                        generateCertificate();
                      } else {
                        alert("Please enter your name");
                      }
                    }}
                    className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                  >
                    Generate Certificate
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ✅ CERTIFICATE READY */}
          {isPassed && certReady && (
            <div className="mt-5 certificate-preview">
              <img
                src={certURL}
                alt="Certificate"
                className="w-full rounded-lg mb-4 shadow-lg"
              />
              <button
                onClick={downloadCertificate}
                className="w-full bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 mb-2"
              >
                ⬇️ Download Certificate
              </button>
              <button
                onClick={() => {
                  setCurrent(0);
                  setScore(0);
                  setSelected(null);
                  setCompleted(false);
                  setTime(120);
                  setShowNameInput(false);
                  setCertReady(false);
                  setCertURL("");
                  setName("");
                }}
                className="w-full bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600"
              >
                Retake Exam
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 📝 QUIZ SCREEN
  return (
    <div className="bg-gray-100 min-h-screen pt-24 flex justify-center items-center">
      <Navigation />

      <div className="quiz-card">
        <div className="quiz-header">
          <span>Question {current + 1} / {questions.length}</span>
          <span className="timer">⏱ {time}s</span>
        </div>

        <h2 className="question">{q.question}</h2>

        <div className="options">
          {q.options.map((opt, i) => (
            <button
              key={i}
              className={`option ${selected === opt ? "selected" : ""}`}
              onClick={() => handleOptionClick(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // 📋 HANDLE OPTION CLICK
  function handleOptionClick(option) {
    setSelected(option);

    if (option === questions[current].answer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setCompleted(true);
      }
    }, 400);
  }
}