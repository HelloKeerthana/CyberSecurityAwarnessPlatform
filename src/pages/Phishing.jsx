import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation'

export default function Phishing() {
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(localStorage.getItem("phishingCompleted") === "true");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCompleteModule = () => {
    localStorage.setItem("phishingCompleted", "true");
    setIsCompleted(true);
    navigate("/modules");
  };

  return (
    <div className="bg-white min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
        
        * {
          scroll-behavior: smooth;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-border {
          0%, 100% {
            border-color: rgb(239, 68, 68);
          }
          50% {
            border-color: rgb(252, 165, 165);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
        }

        .animate-slide-left {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .observe-fade {
          opacity: 0;
        }

        .gradient-text {
          background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-card {
          transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
        }

        .section-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
        }

        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 4px;
          background: linear-gradient(90deg, #3B82F6, #1E40AF);
          z-index: 50;
          transition: width 0.3s ease;
        }

        .scenario-card {
          transition: all 0.3s ease;
        }

        .scenario-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      {/* Progress Bar */}
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>

      {/* Navbar */}
      <Navigation />

      {/* Main Content */}
      <main className="bg-gradient-to-b from-white via-blue-50 to-white min-h-screen">
        
        {/* Header Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-red-100 rounded-full opacity-20 animate-float blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-red-50 rounded-full opacity-30 blur-3xl"></div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-12 animate-slide-left">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-red-100 to-red-50 border border-red-200 mb-6 mx-auto">
                <span className="text-5xl">🎣</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
                Phishing <span className="gradient-text">Awareness</span> Module
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Learn how phishing attacks work, identify warning signs, and protect yourself from cyber threats.
              </p>

              {/* Completion Status */}
              <div className="mt-8 flex items-center justify-center gap-6">
                {isCompleted ? (
                  <div className="px-6 py-3 rounded-full bg-green-50 border border-green-300 flex items-center gap-2">
                    <span className="text-xl">✓</span>
                    <span className="text-green-700 font-semibold">Module Completed</span>
                  </div>
                ) : (
                  <div className="px-6 py-3 rounded-full bg-blue-50 border border-blue-300 flex items-center gap-2">
                    <span className="text-lg">📚</span>
                    <span className="text-blue-700 font-semibold">In Progress</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-6 max-w-5xl mx-auto space-y-8">

          {/* Section 1 - What is Phishing */}
          <div className="section-card observe-fade rounded-3xl bg-gradient-to-br from-red-50 to-red-100 border border-red-200 p-10 md:p-12">
            <div className="flex items-start gap-6">
              <div className="text-6xl flex-shrink-0">🔐</div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. What is Phishing?</h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    <span className="font-semibold">Phishing</span> is a cyber attack where attackers trick people into sharing sensitive information like passwords, OTPs, bank details, or personal data.
                  </p>
                  <p>
                    They <span className="font-semibold">pretend to be trusted sources</span> like a bank, website, email service, or company.
                  </p>
                  <div className="mt-6 p-6 rounded-2xl bg-white border-2 border-red-300">
                    <p className="text-red-600 font-bold text-lg">
                      👉 Goal: Make you trust them and act quickly without thinking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 - How Phishing Works */}
          <div className="section-card observe-fade rounded-3xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 p-10 md:p-12">
            <div className="flex items-start gap-6">
              <div className="text-6xl flex-shrink-0">🎯</div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">2. How Phishing Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      step: "1. Impersonation",
                      desc: "Attacker pretends to be from a legitimate company or service",
                      color: "bg-red-100"
                    },
                    {
                      step: "2. Urgency",
                      desc: "Creates panic with messages like 'Account blocked!' or 'Verify now'",
                      color: "bg-orange-100"
                    },
                    {
                      step: "3. Action",
                      desc: "Gets you to click a malicious link or enter your credentials",
                      color: "bg-yellow-100"
                    },
                    {
                      step: "4. Data Theft",
                      desc: "Your sensitive information is stolen and misused",
                      color: "bg-red-200"
                    }
                  ].map((item, idx) => (
                    <div key={idx} className={`p-6 rounded-2xl ${item.color} border-2 border-orange-200`}>
                      <p className="font-bold text-gray-900 mb-2">{item.step}</p>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 - Types of Phishing */}
          <div className="section-card observe-fade rounded-3xl bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 p-10 md:p-12">
            <div className="flex items-start gap-6">
              <div className="text-6xl flex-shrink-0">📧</div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Types of Phishing</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Email Phishing", desc: "Fake emails pretending to be from banks or services" },
                    { title: "Spear Phishing", desc: "Targeted attacks personalized to specific individuals" },
                    { title: "Smishing", desc: "Phishing through SMS text messages" },
                    { title: "Vishing", desc: "Voice phishing through phone calls" }
                  ].map((type, idx) => (
                    <div key={idx} className="p-5 rounded-xl bg-white border-2 border-yellow-200">
                      <p className="font-bold text-gray-900 mb-1">{type.title}</p>
                      <p className="text-sm text-gray-700">{type.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 4 - Warning Signs */}
          <div className="section-card observe-fade rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 p-10 md:p-12">
            <div className="flex items-start gap-6">
              <div className="text-6xl flex-shrink-0">⚠️</div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Warning Signs</h2>
                <div className="space-y-3">
                  {[
                    "🔍 Suspicious or misspelled email address (e.g., 'bank@bnak.com')",
                    "⏰ Urgent messages creating panic ('Act now or account will be closed')",
                    "🔗 Unknown links or shortened URLs (bit.ly, tinyurl, etc.)",
                    "❌ Poor grammar, spelling mistakes, or awkward language",
                    "💰 Requests for sensitive data (passwords, OTP, credit card numbers)",
                    "📎 Suspicious attachments or 'required documents'",
                    "🎭 Generic greetings ('Dear Customer' instead of your name)",
                    "🚩 Threats or unusual requests for immediate action"
                  ].map((sign, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white border-2 border-blue-200 flex items-center gap-4">
                      <span className="text-lg">{sign.split(' ')[0]}</span>
                      <span className="text-gray-700">{sign.substring(sign.indexOf(' ') + 1)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Real-Life Scenarios */}
          <div className="observe-fade">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">🎭 Real-Life Scenarios</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Scenario 1 */}
              <div className="scenario-card rounded-2xl bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 p-8">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-4xl">🏦</span>
                  <h3 className="text-2xl font-bold text-gray-900">Fake Bank Alert</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-white border border-red-300">
                    <p className="text-gray-900 font-semibold mb-2">"Suspicious Activity Detected"</p>
                    <p className="text-gray-700 text-sm">"Your account will be suspended. Click here to verify your identity immediately."</p>
                  </div>
                  <div className="p-4 rounded-lg bg-green-50 border-2 border-green-300">
                    <p className="text-green-700 font-bold flex items-center gap-2">
                      <span>✅</span> What to do:
                    </p>
                    <ul className="text-sm text-green-700 mt-2 space-y-1 ml-6 list-disc">
                      <li>Don't click the link</li>
                      <li>Go directly to the official bank website</li>
                      <li>Call the bank's verified number</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Scenario 2 */}
              <div className="scenario-card rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 p-8">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-4xl">💼</span>
                  <h3 className="text-2xl font-bold text-gray-900">Fake Job Offer</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-white border border-blue-300">
                    <p className="text-gray-900 font-semibold mb-2">"You've been selected!"</p>
                    <p className="text-gray-700 text-sm">"Congratulations! Pay ₹2000 processing fee to confirm your job. Transfer via UPI now."</p>
                  </div>
                  <div className="p-4 rounded-lg bg-green-50 border-2 border-green-300">
                    <p className="text-green-700 font-bold flex items-center gap-2">
                      <span>✅</span> What to do:
                    </p>
                    <ul className="text-sm text-green-700 mt-2 space-y-1 ml-6 list-disc">
                      <li>Legitimate jobs don't ask for upfront fees</li>
                      <li>Verify directly with the company</li>
                      <li>Report to cyber police</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Scenario 3 */}
              <div className="scenario-card rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 p-8">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-4xl">🔑</span>
                  <h3 className="text-2xl font-bold text-gray-900">OTP Scam</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-white border border-purple-300">
                    <p className="text-gray-900 font-semibold mb-2">"Verify Your Account"</p>
                    <p className="text-gray-700 text-sm">"We need your OTP to confirm your identity. Please share the 6-digit code you received."</p>
                  </div>
                  <div className="p-4 rounded-lg bg-green-50 border-2 border-green-300">
                    <p className="text-green-700 font-bold flex items-center gap-2">
                      <span>✅</span> What to do:
                    </p>
                    <ul className="text-sm text-green-700 mt-2 space-y-1 ml-6 list-disc">
                      <li>NEVER share your OTP</li>
                      <li>OTP is only for you</li>
                      <li>Banks never ask for OTP via messages</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Scenario 4 */}
              <div className="scenario-card rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 p-8">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-4xl">📦</span>
                  <h3 className="text-2xl font-bold text-gray-900">Fake Delivery Notice</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-white border border-orange-300">
                    <p className="text-gray-900 font-semibold mb-2">"Package Delivery Failed"</p>
                    <p className="text-gray-700 text-sm">"Your package couldn't be delivered. Track here: bit.ly/delivery-xyz"</p>
                  </div>
                  <div className="p-4 rounded-lg bg-green-50 border-2 border-green-300">
                    <p className="text-green-700 font-bold flex items-center gap-2">
                      <span>✅</span> What to do:
                    </p>
                    <ul className="text-sm text-green-700 mt-2 space-y-1 ml-6 list-disc">
                      <li>Don't click shortened links</li>
                      <li>Use the official delivery app</li>
                      <li>Verify tracking on company website</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Key Takeaways */}
          <div className="observe-fade rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 p-12 text-center text-white">
            <div className="text-6xl mb-6">🧠</div>
            <h2 className="text-3xl font-bold mb-6">Key Takeaways</h2>
            <div className="space-y-4 max-w-2xl mx-auto text-lg">
              <p>
                <span className="font-bold">Phishing uses trust and urgency</span> to manipulate you into making mistakes.
              </p>
              <p>
                <span className="font-bold">Always verify before you act</span> — check sender details, hover over links, and call to confirm.
              </p>
              <p>
                <span className="font-bold">If something feels suspicious — it probably is.</span> When in doubt, reach out to the official source.
              </p>
              <p className="pt-4 border-t border-blue-400">
                <span className="font-bold">Remember:</span> No legitimate organization will ask for passwords or OTPs via email or message.
              </p>
            </div>
          </div>

          {/* Completion Section */}
          <div className="observe-fade rounded-3xl bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📚 Ready to Complete This Module?</h2>
            <p className="text-lg text-gray-700 mb-8">
              You've learned about phishing attacks, warning signs, and real-world scenarios. Mark this module as complete and continue to the next lesson!
            </p>
            {!isCompleted ? (
              <button
                onClick={handleCompleteModule}
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px]"
              >
                ✓ Mark as Complete
                <span>→</span>
              </button>
            ) : (
              <div className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-green-500 text-white font-bold text-lg">
                <span>✓</span>
                Module Completed!
              </div>
            )}
          </div>

        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white px-6 py-16 mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center text-xl font-bold">🛡️</div>
                  <h2 className="text-2xl font-bold">CyberShield</h2>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Empowering the world's workforce with cutting-edge cybersecurity awareness training.
                </p>
              </div>

              {[
                {
                  title: "Platform",
                  links: [
                    { label: "Modules", href: "/modules" },
                    { label: "Simulations", href: "/simulations" },
                    { label: "Exam", href: "/certs" },
                  ],
                },
                {
                  title: "Company",
                  links: [
                    { label: "About Us", href: "/about" },
                    { label: "Contact", href: "/contact" },
                  ],
                },
                {
                  title: "Legal",
                  links: [
                    { label: "Privacy Policy", href: "#" },
                    { label: "Terms of Service", href: "#" },
                    { label: "Cookie Policy", href: "#" },
                  ],
                },
              ].map((col, idx) => (
                <div key={idx} className="flex flex-col gap-4">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300">{col.title}</h4>
                  <ul className="flex flex-col gap-3">
                    {col.links.map((link, i) => (
                      <li key={i}>
                        <a href={link.href} className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
              © 2025 CyberShield Inc. All rights reserved. Designed for digital safety.
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}