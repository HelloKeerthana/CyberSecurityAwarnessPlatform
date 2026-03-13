import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'

export default function Modules() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 hidden md:flex flex-col sticky top-0 h-screen">
          <div className="p-6 flex items-center gap-3">
            <div className="bg-primary rounded-lg p-1.5 flex items-center justify-center">
              <span className="material-symbols-outlined text-white">shield</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">CyberShield</span>
          </div>
          <div className="px-4 py-6 flex flex-col gap-1 grow">
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
              <span className="text-sm font-semibold">Dashboard</span>
            </div>
            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/modules">
              <span className="material-symbols-outlined">menu_book</span>
              <span className="text-sm font-medium">My Modules</span>
            </Link>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
              <span className="material-symbols-outlined">security</span>
              <span className="text-sm font-medium">Scenarios</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
              <span className="material-symbols-outlined">quiz</span>
              <span className="text-sm font-medium">Quizzes</span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
              <span className="material-symbols-outlined">military_tech</span>
              <span className="text-sm font-medium">Achievements</span>
            </a>
            <div className="mt-auto border-t border-slate-200 dark:border-slate-800 pt-4">
              <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
                <span className="material-symbols-outlined">settings</span>
                <span className="text-sm font-medium">Settings</span>
              </a>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-4 border border-primary/20">
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Pro Access</p>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">Unlock advanced ethical hacking labs.</p>
              <button className="w-full bg-primary text-white text-xs font-bold py-2 rounded-lg hover:bg-primary/90 transition-colors">Go Premium</button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col p-4 md:p-8 lg:p-12 overflow-y-auto">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Welcome back, Alex! 👋</h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1">You've completed 4 modules this week. Great momentum!</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <span className="material-symbols-outlined text-lg">history</span>
                View History
              </button>
              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-primary overflow-hidden">
                <img 
                  alt="User Profile" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyeGP-kmR0fAs9V45y-4JORtdiaAB_mkgeOJY8AttiYtPlPgZHUG5qydqMyMPx7wYKSWtfHzCTfXXhcuToxnYCNvW1wtJDZ3nv756iNOpp1Y5Zx0d-5-oXdQnoX-MBWu7q7XfUmRNTABg6Va1v-_uEXX1rKq5a9vgROVIjQSuQVnQrWThXzw95d2kSYgQihOh3Z2ZYSUvwihJhICNFf1LWp3iibpsJTmwdMUY2cKr--oRCa8Va_roqore3N9pAaDH9Ck8F07t0si4"
                />
              </div>
            </div>
          </header>

          {/* Stats Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
              <div className="relative flex items-center justify-center w-16 h-16">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className="text-slate-100 dark:text-slate-800" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="6"></circle>
                  <circle className="text-primary" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeDasharray="175" strokeDashoffset="61" strokeWidth="6"></circle>
                </svg>
                <span className="absolute text-xs font-bold text-slate-900 dark:text-white">65%</span>
              </div>
              <div>
                <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Progress</h3>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">65% Completed</p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>show_chart</span>
              </div>
              <div>
                <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">Average Score</h3>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">85% Accuracy</p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>workspace_premium</span>
              </div>
              <div>
                <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">Earned Badges</h3>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">2 New Badges</p>
              </div>
            </div>
          </section>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Recommended */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                Recommended Next Step
              </h2>

              <div className="relative bg-slate-900 dark:bg-slate-800 rounded-2xl overflow-hidden min-h-[300px] flex items-end">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                <img 
                  alt="Cybersecurity lab" 
                  className="absolute inset-0 w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2w1UvpQzuOsM6AFYzy8h2J8-cCh1YG6UbR19dmOeTNeA_ukE-JDl3rB3tL-I4z76gxWWC3tc80Hi4CxjZ_3UJzyr8Cmp_wBb7Ry4BBfxmVNfX8Qy7wYiRqgEA1EdPXMtOOvBzmeVuaQg3n27PtgvIvDc83CMzVxXt13xFa7au_gdhmQJ7LwggPwbhRtW6shYUDXf69ANBgx11Y2gevYzuJYvtJLTonNAxUeXaogRnao-5PbU2A7hVmyrzXOQxv7zgzWcPcncREBc"
                />
                <div className="relative z-20 p-8 w-full flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="max-w-md">
                    <span className="bg-primary text-white text-[10px] uppercase font-black px-2 py-1 rounded mb-3 inline-block tracking-widest">Intermediate Module</span>
                    <h3 className="text-white text-3xl font-bold mb-2">Social Engineering 101</h3>
                    <p className="text-slate-300 text-sm">Master the psychology of security. Learn how to identify and prevent advanced phishing and manipulation tactics.</p>
                  </div>
                  <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2 shrink-0">
                    Resume
                    <span className="material-symbols-outlined text-base">play_arrow</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">lan</span>
                    </div>
                    <div>
                      <h4 className="text-slate-900 dark:text-white font-bold text-sm">Network Scanning</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-xs">Explore Nmap basics</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-300 dark:text-slate-700">chevron_right</span>
                </div>

                <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">lock_open</span>
                    </div>
                    <div>
                      <h4 className="text-slate-900 dark:text-white font-bold text-sm">Auth Bypass</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-xs">Insecure Direct Object Refs</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-slate-300 dark:text-slate-700">chevron_right</span>
                </div>
              </div>
            </div>

            {/* Right Column: Activity */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Completed</h2>
                <a className="text-primary text-xs font-bold hover:underline" href="#">View All</a>
              </div>

              <div className="flex flex-col gap-3">
                <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 group transition-all hover:border-primary/50">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined font-bold">check</span>
                  </div>
                  <div className="grow">
                    <h4 className="text-slate-900 dark:text-white font-bold text-sm">Phishing Basics</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">Completed yesterday • 100% Score</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 group transition-all hover:border-primary/50">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined font-bold">check</span>
                  </div>
                  <div className="grow">
                    <h4 className="text-slate-900 dark:text-white font-bold text-sm">Password Security</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">Completed 3 days ago • 95% Score</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 group transition-all hover:border-primary/50">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined font-bold">check</span>
                  </div>
                  <div className="grow">
                    <h4 className="text-slate-900 dark:text-white font-bold text-sm">Firewall Fundamentals</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">Completed 4 days ago • 80% Score</p>
                  </div>
                </div>
              </div>

              {/* Learning Streak */}
              <div className="bg-primary p-6 rounded-2xl text-white mt-4 overflow-hidden relative">
                <div className="relative z-10">
                  <h3 className="font-black text-xl mb-1 italic">4 DAY STREAK!</h3>
                  <p className="text-white/80 text-xs mb-4">Keep going to reach your weekly goal.</p>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded bg-white text-primary flex items-center justify-center text-xs font-bold">M</div>
                    <div className="w-8 h-8 rounded bg-white text-primary flex items-center justify-center text-xs font-bold">T</div>
                    <div className="w-8 h-8 rounded bg-white text-primary flex items-center justify-center text-xs font-bold">W</div>
                    <div className="w-8 h-8 rounded bg-white text-primary flex items-center justify-center text-xs font-bold">T</div>
                    <div className="w-8 h-8 rounded border border-white/30 text-white/50 flex items-center justify-center text-xs font-bold">F</div>
                    <div className="w-8 h-8 rounded border border-white/30 text-white/50 flex items-center justify-center text-xs font-bold">S</div>
                  </div>
                </div>
                <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-white/10 text-[120px] font-bold">local_fire_department</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
