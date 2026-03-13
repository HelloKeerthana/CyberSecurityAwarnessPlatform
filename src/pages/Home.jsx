import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'

export default function Home() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <Navigation />
          
          <main className="flex flex-col items-center">
            {/* Hero Section */}
            <div className="w-full max-w-[1200px] px-6 py-12 md:py-24">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex flex-col gap-8 lg:w-1/2">
                  <div className="flex flex-col gap-4 text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
                      <span className="material-symbols-outlined text-sm">verified_user</span>
                      Trusted by Security Pros
                    </div>
                    <h1 className="text-slate-900 dark:text-white text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
                      Master Your <span className="text-primary">Digital Safety</span>
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-[540px]">
                      Empower yourself with the knowledge to stay safe online. Our interactive platform provides the tools you need to recognize and prevent evolving cyber threats.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-lg font-bold hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-xl shadow-primary/25">
                      Start Learning for Free
                    </button>
                    <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                      <span className="material-symbols-outlined mr-2">play_circle</span>
                      Watch Demo
                    </button>
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 relative">
                  <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl"></div>
                  <div 
                    className="relative w-full aspect-square bg-gradient-to-tr from-primary/20 to-blue-400/20 rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex items-center justify-center"
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_vn54AYYmNdODz0vrpVHveYbhLx9MdYc56b_1N2BJnnJnHNF5LKrrMq7bauFCWnpzbIVhIhw8KwTgMyfG0ONx5qdC5jy7oo35sAvOkYpfsqufTxHqGW68tshO52Qttj9lgCjzDH7cUXXaSAtcGKe-l5Hjjd2_juiyfEysin4pNEHsHDdIFUCppst7JJLKjD2v5sHy2IUa9tyYlN52bfJ1KcSrBz4tBpuyb3OW2UuV3rMRUdoLXb-yT1jsetfWsHeC0G3a6_-VgLA")', backgroundSize: 'cover', backgroundPosition: 'center'}}
                  >
                    {/* Overlay with some UI elements for "safe workspace" feel */}
                    <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-xl border border-white/20 shadow-lg flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                        <span className="material-symbols-outlined">check_circle</span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-500 uppercase">Security Status</div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white">Workspace Protected</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="w-full bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
              <div className="max-w-[1200px] mx-auto px-6 py-12">
                <div className="flex flex-wrap justify-center gap-8 md:gap-24">
                  <div className="flex flex-col items-center gap-1 text-center">
                    <p className="text-primary text-4xl md:text-5xl font-black">10,000+</p>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-lg uppercase tracking-wide">Students Joined</p>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <p className="text-primary text-4xl md:text-5xl font-black">50+</p>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-lg uppercase tracking-wide">Learning Modules</p>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <p className="text-primary text-4xl md:text-5xl font-black">99%</p>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-lg uppercase tracking-wide">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="w-full max-w-[1200px] px-6 py-20">
              <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4 text-center max-w-[800px] mx-auto">
                  <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight">
                    Our Learning Experience
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg font-normal">
                    Designed by security experts to be engaging, effective, and practical for everyone from beginners to IT professionals.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Feature Card 1 */}
                  <div className="group flex flex-col gap-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 hover:shadow-2xl hover:border-primary/30 transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-3xl font-bold">menu_book</span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-slate-900 dark:text-white text-xl font-bold">Interactive Modules</h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Engage with hands-on content that keeps you focused. Learn through video, text, and active problem solving.
                      </p>
                    </div>
                    <Link className="text-primary font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all" to="/modules">
                      Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>

                  {/* Feature Card 2 */}
                  <div className="group flex flex-col gap-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 hover:shadow-2xl hover:border-primary/30 transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-3xl font-bold">security</span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-slate-900 dark:text-white text-xl font-bold">Real-world Scenarios</h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Practice your skills in safe sandbox environments that mimic actual phishing, malware, and social engineering attacks.
                      </p>
                    </div>
                    <Link className="text-primary font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all" to="/simulations">
                      Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>

                  {/* Feature Card 3 */}
                  <div className="group flex flex-col gap-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 hover:shadow-2xl hover:border-primary/30 transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-3xl font-bold">trophy</span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-slate-900 dark:text-white text-xl font-bold">Gamified Quizzes</h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        Test your knowledge with fun challenges. Earn badges, level up your security score, and compete on the leaderboard.
                      </p>
                    </div>
                    <Link className="text-primary font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all" to="/modules">
                      Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="w-full max-w-[1200px] px-6 py-20">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 dark:bg-primary py-16 px-8 md:px-20 text-center flex flex-col items-center gap-8">
                {/* Abstract BG patterns */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl opacity-50"></div>
                <h2 className="text-white text-3xl md:text-5xl font-black max-w-[720px] relative z-10 leading-tight">
                  Ready to secure your digital life?
                </h2>
                <p className="text-blue-100 text-lg md:text-xl font-normal max-w-[600px] relative z-10 opacity-90">
                  Join thousands of users and start your cybersecurity journey today. Professional certification tracks available.
                </p>
                <div className="flex justify-center w-full relative z-10">
                  <button className="w-full sm:w-auto min-w-[240px] cursor-pointer items-center justify-center rounded-xl h-14 px-10 bg-white text-primary text-lg font-bold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl">
                    Get Started Now
                  </button>
                </div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 px-6 md:px-20 py-12">
            <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
              <div className="col-span-2 md:col-span-1 flex flex-col gap-6">
                <div className="flex items-center gap-3 text-primary">
                  <span className="material-symbols-outlined text-3xl font-bold">shield_person</span>
                  <h2 className="text-slate-900 dark:text-slate-100 text-xl font-extrabold">CyberShield</h2>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Empowering the world's workforce with cutting-edge cybersecurity awareness training.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-slate-900 dark:text-white font-bold uppercase text-xs tracking-widest">Platform</h4>
                <ul className="flex flex-col gap-2 text-slate-500 text-sm">
                  <li><Link className="hover:text-primary transition-colors" to="/modules">Modules</Link></li>
                  <li><Link className="hover:text-primary transition-colors" to="/simulations">Simulations</Link></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Pricing</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Certifications</a></li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-slate-900 dark:text-white font-bold uppercase text-xs tracking-widest">Company</h4>
                <ul className="flex flex-col gap-2 text-slate-500 text-sm">
                  <li><Link className="hover:text-primary transition-colors" to="/about">About Us</Link></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Security</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-slate-900 dark:text-white font-bold uppercase text-xs tracking-widest">Legal</h4>
                <ul className="flex flex-col gap-2 text-slate-500 text-sm">
                  <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
                  <li><a className="hover:text-primary transition-colors" href="#">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="max-w-[1200px] mx-auto mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 text-center text-slate-400 text-xs">
              © 2024 CyberShield Inc. All rights reserved. Designed for digital safety.
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
