import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import { useState, useEffect } from 'react';

export default function Modules() {
  const [completedModules, setCompletedModules] = useState({
    phishing: localStorage.getItem("phishingCompleted") === "true",
    password: localStorage.getItem("passwordCompleted") === "true",
    social: localStorage.getItem("socialCompleted") === "true",
    malware: localStorage.getItem("malwareCompleted") === "true",
    network: localStorage.getItem("networkCompleted") === "true",
    browsing: localStorage.getItem("browsingCompleted") === "true",
  });

  const allCompleted = Object.values(completedModules).every(val => val === true);
  const completedCount = Object.values(completedModules).filter(val => val === true).length;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll(".observe-fade");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const modules = [
    {
      id: "phishing",
      icon: "🎣",
      title: "Phishing Basics",
      description: "Learn how phishing attacks work and how to identify fake emails.",
      color: "from-red-50 to-red-100",
      borderColor: "border-red-200",
      link: "/module/phishing",
      difficulty: "Beginner",
      duration: "20 mins"
    },
    {
      id: "password",
      icon: "🔐",
      title: "Password Security",
      description: "Understand strong passwords and how to protect your accounts.",
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      link: "/module/password",
      difficulty: "Beginner",
      duration: "15 mins"
    },
    {
      id: "social",
      icon: "👥",
      title: "Social Engineering",
      description: "Learn how attackers manipulate people to gain access.",
      color: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      link: "/module/social",
      difficulty: "Intermediate",
      duration: "25 mins"
    },
    {
      id: "malware",
      icon: "🦠",
      title: "Malware Awareness",
      description: "Understand different types of malware and how to stay safe.",
      color: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      link: "/module/malware",
      difficulty: "Intermediate",
      duration: "30 mins"
    },
    {
      id: "network",
      icon: "🌐",
      title: "Network Security",
      description: "Learn basics of securing networks and detecting threats.",
      color: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      link: "/module/network",
      difficulty: "Advanced",
      duration: "35 mins"
    },
    {
      id: "browsing",
      icon: "🔍",
      title: "Safe Browsing",
      description: "Learn how to browse safely and avoid malicious websites.",
      color: "from-cyan-50 to-cyan-100",
      borderColor: "border-cyan-200",
      link: "/module/browsing",
      difficulty: "Beginner",
      duration: "18 mins"
    }
  ];

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

        .card-hover {
          transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
        }

        .card-hover:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
        }

        .progress-bar {
          transition: width 0.6s ease-out;
        }
      `}</style>

      <Navigation />

      <main className="bg-gradient-to-b from-white via-blue-50 to-white min-h-screen">
        
        {/* Header Section */}
        <section className="relative pt-32 pb-16 px-6 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full opacity-20 animate-float blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-50 rounded-full opacity-30 blur-3xl"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="animate-slide-left">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
                Cybersecurity <span className="gradient-text">Modules</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Learn, practice, and master cybersecurity concepts through our interactive modules. Progress at your own pace.
              </p>
            </div>

            {/* Progress Section */}
            <div className="observe-fade mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">Your Progress</p>
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">{completedCount} of {modules.length} Completed</h3>
                  <p className="text-gray-600">Keep learning to unlock all achievements!</p>
                </div>
                <div className="flex-1 md:flex-none min-w-[300px]">
                  <div className="w-full h-3 rounded-full bg-blue-200 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full progress-bar"
                      style={{ width: `${(completedCount / modules.length) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-right">
                    {Math.round((completedCount / modules.length) * 100)}% Complete
                  </p>
                </div>
              </div>
            </div>

            {/* Completion Badge */}
            {allCompleted && (
              <div className="observe-fade mt-8 p-6 rounded-2xl bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-300 text-center animate-fade-in-up">
                <p className="text-3xl mb-2">🎉</p>
                <h3 className="text-2xl font-bold text-green-900 mb-2">Congratulations!</h3>
                <p className="text-green-700">You have completed all modules. You're a cybersecurity expert!</p>
              </div>
            )}
          </div>
        </section>

        {/* Modules Grid Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            
            <div className="mb-12 observe-fade">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Modules</h2>
              <p className="text-lg text-gray-600">Start with beginner modules and progress to advanced topics</p>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module, idx) => (
                <div
                  key={module.id}
                  className={`card-hover observe-fade rounded-2xl bg-gradient-to-br ${module.color} border ${module.borderColor} p-8 relative overflow-hidden`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10 bg-current"></div>

                  {completedModules[module.id] && (
                    <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 border border-green-300">
                      <span className="text-green-600 text-sm font-semibold">✓ Completed</span>
                    </div>
                  )}

                  <div className="text-5xl mb-4">{module.icon}</div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{module.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{module.description}</p>

                  <div className="flex gap-4 mb-6 text-sm font-semibold">
                    <div className="px-3 py-1 rounded-lg bg-white/60">
                      <span className="text-gray-700">{module.difficulty}</span>
                    </div>
                    <div className="px-3 py-1 rounded-lg bg-white/60">
                      <span className="text-gray-700">⏱️ {module.duration}</span>
                    </div>
                  </div>

                  <Link to={module.link} className="w-full">
                    <button className="w-full py-3 rounded-xl bg-white font-semibold text-gray-900 hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] flex items-center justify-center gap-2">
                      {completedModules[module.id] ? "Review Module" : "Start Module"}
                      <span>→</span>
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Tips Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 observe-fade">
              <h2 className="text-4xl font-bold text-white mb-4">Learning Tips</h2>
              <p className="text-xl text-blue-100">Make the most of your cybersecurity learning journey</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "📚",
                  title: "Take Your Time",
                  desc: "Each module is designed to be completed at your own pace. Don't rush through the material."
                },
                {
                  icon: "💪",
                  title: "Practice Regularly",
                  desc: "Consistency is key. Try to complete at least one module per week for best results."
                },
                {
                  icon: "🎯",
                  title: "Apply Knowledge",
                  desc: "Use what you learn in real life. Stay vigilant and help others stay secure online."
                }
              ].map((tip, idx) => (
                <div 
                  key={idx}
                  className="observe-fade text-center text-white p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="text-5xl mb-4">{tip.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{tip.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto observe-fade">
            <div className="rounded-3xl bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-blue-300 p-12 md:p-16 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Choose a module below and begin your journey to becoming a cybersecurity expert. Each module includes interactive content, quizzes, and real-world scenarios.
              </p>
              <Link to="/module/phishing">
                <button className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px]">
                  Start First Module
                  <span>→</span>
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white px-6 py-16">
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