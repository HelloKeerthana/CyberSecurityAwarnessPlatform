import Navigation from '../components/Navigation';
import { useEffect } from 'react';

export default function About() {
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
        }
      `}</style>

      {/* NAVBAR */}
<Navigation />

{/* MAIN CONTENT */}
<main className="bg-gradient-to-b from-white via-blue-50 to-white min-h-screen">
  
  {/* Hero Section */}
  <section className="relative pt-48 pb-10 px-6 overflow-hidden">
    {/* Animated Background Elements */}
    <div className="absolute top-32 right-10 w-72 h-72 bg-blue-100 rounded-full opacity-20 animate-float blur-3xl"></div>
    <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-50 rounded-full opacity-30 blur-3xl"></div>

    <div className="max-w-5xl mx-auto relative z-10">
      <div className="text-center mb-16 animate-slide-left">
        <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900 mb-6">
          About <span className="gradient-text">CyberShield</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Empowering the world with cybersecurity awareness, one learner at a time.
        </p>
      </div>
    </div>
  </section>

        {/* Main Content Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Mission Statement */}
            <div className="observe-fade mb-20">
              <div className="rounded-3xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 p-12 md:p-16 shadow-lg card-hover">
                <div className="text-blue-600 text-5xl mb-6">🎯</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We're a simple platform designed to explore ideas, learn new concepts, and build useful digital experiences. 
                  We focus on clarity, simplicity, and meaningful interaction to make cybersecurity education accessible to everyone.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <div className="observe-fade" style={{ animationDelay: "0.1s" }}>
                <div className="rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200 p-8 h-full card-hover">
                  <div className="text-5xl mb-4">🌱</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Growth & Learning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We believe that learning should be engaging and accessible to everyone. This space is created to experiment, grow, and understand things better through practical exposure.
                  </p>
                </div>
              </div>

              <div className="observe-fade" style={{ animationDelay: "0.2s" }}>
                <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 p-8 h-full card-hover">
                  <div className="text-5xl mb-4">✨</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation & Exploration</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sometimes things may feel random, and that is completely fine. Exploration often leads to unexpected discoveries and creative outcomes.
                  </p>
                </div>
              </div>

              <div className="observe-fade" style={{ animationDelay: "0.3s" }}>
                <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 p-8 h-full card-hover">
                  <div className="text-5xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Progress Over Perfection</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The goal is not perfection, but progress. Every small step contributes to something bigger over time.
                  </p>
                </div>
              </div>

              <div className="observe-fade" style={{ animationDelay: "0.4s" }}>
                <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 p-8 h-full card-hover">
                  <div className="text-5xl mb-4">🎓</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Improvement</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Keep building, keep learning, and keep moving forward. Your journey towards digital safety is our priority.
                  </p>
                </div>
              </div>
            </div>

            {/* Journey Section */}
            <div className="observe-fade mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
              
              <div className="space-y-8">
                {[
                  {
                    year: "2024",
                    title: "CyberShield Founded",
                    desc: "We started with a simple idea: make cybersecurity education accessible, engaging, and practical for everyone."
                  },
                  {
                    year: "2024",
                    title: "First 1,000 Learners",
                    desc: "Our community grew rapidly as people discovered the value in our interactive learning approach."
                  },
                  {
                    year: "2025",
                    title: "Expansion & Innovation",
                    desc: "We've expanded our module library, added real-world simulation labs, and introduced gamified learning paths."
                  },
                  {
                    year: "2025+",
                    title: "Global Impact",
                    desc: "Our vision is to become the leading platform for cybersecurity awareness training worldwide."
                  }
                ].map((milestone, idx) => (
                  <div key={idx} className="flex gap-6 observe-fade" style={{ animationDelay: `${0.2 + idx * 0.15}s` }}>
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-lg">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">{milestone.year}</p>
                      <h3 className="text-xl font-bold text-gray-900 mt-1">{milestone.title}</h3>
                      <p className="text-gray-600 mt-2 leading-relaxed">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="observe-fade mb-20">
              <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 p-12 md:p-16 text-white text-center shadow-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose CyberShield?</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div>
                    <div className="text-5xl mb-4">👨‍🏫</div>
                    <h3 className="text-xl font-bold mb-3">Expert-Led Content</h3>
                    <p className="text-blue-100">Designed by seasoned cybersecurity professionals with real-world experience</p>
                  </div>
                  <div>
                    <div className="text-5xl mb-4">💻</div>
                    <h3 className="text-xl font-bold mb-3">Practical Experience</h3>
                    <p className="text-blue-100">Hands-on labs and simulations that mimic real cybersecurity challenges</p>
                  </div>
                  <div>
                    <div className="text-5xl mb-4">📈</div>
                    <h3 className="text-xl font-bold mb-3">Measurable Progress</h3>
                    <p className="text-blue-100">Track your advancement with certificates, badges, and skill assessments</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="observe-fade mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Sarah Chen",
                    role: "Founder & CEO",
                    bio: "Former security architect with 15+ years of experience protecting enterprises.",
                    emoji: "👩‍💼"
                  },
                  {
                    name: "Marcus Rodriguez",
                    role: "Head of Content",
                    bio: "Passionate educator creating engaging cybersecurity courses for all skill levels.",
                    emoji: "👨‍🏫"
                  },
                  {
                    name: "Alex Kumar",
                    role: "Lead Developer",
                    bio: "Full-stack developer building intuitive, secure, and scalable learning platforms.",
                    emoji: "👨‍💻"
                  }
                ].map((member, idx) => (
                  <div key={idx} className="observe-fade text-center card-hover" style={{ animationDelay: `${0.1 + idx * 0.15}s` }}>
                    <div className="rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-8 h-full">
                      <div className="text-6xl mb-4">{member.emoji}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="observe-fade">
              <div className="rounded-3xl bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-blue-300 p-12 md:p-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Join Our Mission</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Help us empower individuals worldwide with the knowledge and skills to stay safe in the digital world.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/modules"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px]"
                  >
                    Start Learning
                    <span className="text-xl">→</span>
                  </a>
                  <a 
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold text-lg hover:bg-blue-50 transition-all duration-300"
                  >
                    Get in Touch
                    <span className="text-xl">✉️</span>
                  </a>
                </div>
              </div>
            </div>

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