import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { useEffect, useRef } from "react";

export default function Home() {
  const observerRef = useRef(null);

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

  return (
    <div className="bg-white">
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

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
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

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
        }

        .animate-slide-left {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slide-right {
          animation: slideInRight 0.8s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 4s ease-in-out infinite;
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

        .glass-effect {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
          border-color: #3B82F6;
        }

        .btn-primary {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
        }

        .btn-primary:active {
          transform: translateY(0);
        }

        .smooth-scroll {
          scroll-snap-type: y mandatory;
        }

        .scroll-snap-section {
          scroll-snap-align: start;
          scroll-snap-stop: always;
        }
      `}</style>

      {/* NAVBAR */}
      <Navigation />

      {/* MAIN CONTENT */}
      <main className="bg-gradient-to-b from-white via-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-40 pb-12 px-6 overflow-hidden scroll-snap-section">
          {/* Animated Background Elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full opacity-20 animate-float blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-50 rounded-full opacity-30 blur-3xl"></div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Content */}
              <div className="flex flex-col gap-8 animate-slide-left">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 w-fit hover:bg-blue-100 transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                  <span className="text-blue-600 font-semibold text-sm">Trusted by 10,000+ Security Professionals</span>
                </div>

                <div className="flex flex-col gap-4">
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900">
                    Master Your{" "}
                    <span className="gradient-text">Digital Safety</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                    Empower yourself with the knowledge to stay safe online. Our interactive platform provides the tools you need to recognize and prevent evolving cyber threats.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/modules"
                    className="btn-primary inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-lg hover:from-blue-600 hover:to-blue-700 shadow-lg"
                  >
                    Start Learning Free
                    <span className="text-xl">→</span>
                  </Link>
                  
                </div>

                <div className="flex gap-8 pt-6">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-blue-600">10K+</span>
                    <span className="text-sm text-gray-500">Active Learners</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-blue-600">50+</span>
                    <span className="text-sm text-gray-500">Modules</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-blue-600">99%</span>
                    <span className="text-sm text-gray-500">Success Rate</span>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative animate-slide-right">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl animate-glow">
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?fm=jpg&q=80&w=2070&auto=format&fit=crop"
                    alt="Cybersecurity"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                  {/* Floating Status Card */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 glass-effect rounded-xl shadow-lg border border-white/20 backdrop-blur-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                      <div>
                        <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Security Status</div>
                        <div className="text-sm font-bold text-gray-900">Workspace Protected</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 scroll-snap-section">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 observe-fade">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose CyberShield?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Designed by security experts to be engaging, effective, and practical for everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "📚",
                  title: "Interactive Modules",
                  desc: "Engage with hands-on content through video, text, and active problem solving.",
                  link: "/modules",
                },
                {
                  icon: "🛡️",
                  title: "Real-world Scenarios",
                  desc: "Practice in safe environments that mimic phishing, malware, and social engineering attacks.",
                  link: "/simulations",
                },
                {
                  icon: "🏆",
                  title: "Gamified Quizzes",
                  desc: "Earn badges, level up your security score, and compete on the leaderboard.",
                  link: "/modules",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="card-hover observe-fade group p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 hover:border-blue-300 shadow-md"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.desc}</p>
                  <Link
                    to={feature.link}
                    className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 group-hover:text-blue-700"
                  >
                    Learn More
                    <span className="text-xl">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-700 scroll-snap-section">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { number: "10,000+", label: "Students Joined" },
                { number: "50+", label: "Learning Modules" },
                { number: "99%", label: "Success Rate" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center observe-fade" style={{ animationDelay: `${idx * 0.2}s` }}>
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-3">{stat.number}</div>
                  <div className="text-blue-100 font-semibold uppercase tracking-wider text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 px-6 scroll-snap-section">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 observe-fade">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                What We Offer
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive cybersecurity education designed to empower every learner with practical skills and knowledge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert-Designed Content",
                  description: "Curated courses developed by seasoned cybersecurity professionals with real-world experience.",
                  icon: "🎯",
                  color: "from-blue-50 to-blue-100",
                  border: "border-blue-200",
                  features: ["Industry-standard curriculum", "Regular updates", "Practical examples"]
                },
                {
                  title: "Interactive Learning",
                  description: "Engage through videos, quizzes, hands-on labs, and real-world scenario simulations.",
                  icon: "💻",
                  color: "from-green-50 to-green-100",
                  border: "border-green-200",
                  features: ["Live coding labs", "Interactive quizzes", "Real-world scenarios"]
                },
                {
                  title: "Certifications & Progress",
                  description: "Track your advancement with badges, certificates, and comprehensive skill assessments.",
                  icon: "🏆",
                  color: "from-purple-50 to-purple-100",
                  border: "border-purple-200",
                  features: ["Digital certificates", "Skill badges", "Progress tracking"]
                },
              ].map((offer, idx) => (
                <div
                  key={idx}
                  className={`card-hover observe-fade p-8 rounded-2xl bg-gradient-to-br ${offer.color} border ${offer.border}`}
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <div className="text-5xl mb-4">{offer.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{offer.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{offer.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {offer.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-lg">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-3 rounded-lg bg-white font-semibold text-gray-900 hover:shadow-md transition-all duration-300 hover:translate-y-[-2px]">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 scroll-snap-section">
          <div className="max-w-4xl mx-auto observe-fade">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 p-12 md:p-20 text-center shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -ml-48 -mb-48"></div>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to Secure Your Digital Life?
                </h2>
                <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
                  Join thousands of users and start your cybersecurity journey today. Professional certification tracks available.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/modules"
                    className="btn-primary inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-white text-blue-600 font-bold text-lg hover:bg-blue-50 shadow-lg"
                  >
                    Get Started Now
                    <span className="text-xl">→</span>
                  </Link>
                 
                </div>
              </div>
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
                  links: [{ label: "About Us", href: "/about" }],
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
                        <Link to={link.href} className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-300">
                          {link.label}
                        </Link>
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