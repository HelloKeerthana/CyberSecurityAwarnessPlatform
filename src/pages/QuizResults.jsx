import { useNavigate } from 'react-router-dom';

export default function QuizResults() {
  const navigate = useNavigate();

  const recommendations = [
    {
      id: 1,
      icon: 'history_edu',
      title: 'Social Engineering Depth',
      duration: '15 mins',
      level: 'Advanced',
      bgColor: 'bg-blue-100 dark:bg-blue-900/40',
      iconColor: 'text-primary'
    },
    {
      id: 2,
      icon: 'key',
      title: 'Password Security 2.0',
      duration: '10 mins',
      level: 'Intermediate',
      bgColor: 'bg-purple-100 dark:bg-purple-900/40',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col">
        {/* Top Navigation Bar */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 px-6 md:px-10 py-3 bg-background-light dark:bg-background-dark">
          <div className="flex items-center gap-4 text-slate-900 dark:text-slate-100">
            <div className="size-6 text-primary">
              <span className="material-symbols-outlined text-3xl">shield</span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em]">CyberShield</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="hidden md:flex items-center gap-9">
              <button onClick={() => navigate('/modules')} className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors cursor-pointer">Modules</button>
              <a className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Badges</a>
              <a className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Profile</a>
            </div>
            <button className="flex cursor-pointer items-center justify-center rounded-lg h-10 bg-primary/10 text-primary hover:bg-primary/20 transition-all px-3">
              <span className="material-symbols-outlined">notifications</span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-1 justify-center py-10 px-4">
          <div className="layout-content-container flex flex-col max-w-[800px] flex-1">
            {/* Hero Result Section */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-4 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-5xl">check_circle</span>
              </div>
              <h1 className="text-slate-900 dark:text-slate-100 tracking-tight text-[36px] font-bold leading-tight mb-2">Quiz Completed!</h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg">You've successfully mastered the Phishing Fundamentals module.</p>
            </div>

            {/* Progress Summary Card */}
            <div className="bg-white dark:bg-slate-800/50 border border-primary/10 rounded-xl p-8 mb-6 shadow-sm">
              <div className="flex flex-col gap-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Your Performance</p>
                    <h2 className="text-5xl font-black text-primary">90%</h2>
                  </div>
                  <div className="text-right">
                    <p className="text-green-600 dark:text-green-400 font-semibold text-lg flex items-center justify-end gap-1">
                      <span className="material-symbols-outlined">trending_up</span>
                      Passed
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Target Score: 80%</p>
                  </div>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 h-3 rounded-full overflow-hidden">
                  <div className="bg-primary h-full transition-all duration-1000" style={{ width: '90%' }}></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                  <div className="flex flex-col gap-1 p-4 rounded-lg bg-background-light dark:bg-slate-800 border border-primary/5">
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase">Correct</p>
                    <p className="text-slate-900 dark:text-slate-100 text-2xl font-bold">18/20</p>
                  </div>
                  <div className="flex flex-col gap-1 p-4 rounded-lg bg-background-light dark:bg-slate-800 border border-primary/5">
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase">Time Taken</p>
                    <p className="text-slate-900 dark:text-slate-100 text-2xl font-bold">4:25</p>
                  </div>
                  <div className="flex flex-col gap-1 p-4 rounded-lg bg-background-light dark:bg-slate-800 border border-primary/5">
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase">Accuracy</p>
                    <p className="text-slate-900 dark:text-slate-100 text-2xl font-bold">90%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Badge Section */}
            <div className="bg-primary/5 dark:bg-primary/10 border-2 border-dashed border-primary/30 rounded-xl p-8 mb-10 relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-white dark:bg-slate-900 rounded-full p-4 flex items-center justify-center size-32 shadow-xl border-4 border-primary">
                    <span className="material-symbols-outlined text-6xl text-primary">verified_user</span>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest mb-2 inline-block">New Achievement</span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Phishing Protector</h3>
                  <p className="text-slate-600 dark:text-slate-400 max-w-md">You've demonstrated exceptional skill in identifying malicious communication. This badge has been added to your profile.</p>
                  <button className="mt-4 text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                    View in Badge Gallery <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
              {/* Decorative background element */}
              <span className="material-symbols-outlined absolute -right-8 -bottom-8 text-[160px] opacity-5 text-primary rotate-12">military_tech</span>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 rounded-xl h-14 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                <span className="material-symbols-outlined">list_alt</span>
                Review Answers
              </button>
              <button onClick={() => navigate('/simulations')} className="flex-1 flex items-center justify-center gap-2 rounded-xl h-14 bg-primary text-white font-bold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
                Go to Next Module
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>

            {/* Additional Resources Section */}
            <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
              <h4 className="text-slate-900 dark:text-slate-100 font-bold mb-4">You might also like</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendations.map((rec) => (
                  <div key={rec.id} className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors cursor-pointer group">
                    <div className={`${rec.bgColor} p-3 rounded-lg ${rec.iconColor}`}>
                      <span className="material-symbols-outlined">{rec.icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm group-hover:text-primary transition-colors">{rec.title}</p>
                      <p className="text-xs text-slate-500">{rec.duration} • {rec.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-auto py-8 text-center text-slate-500 dark:text-slate-500 text-sm">
          <p>© 2024 CyberShield Education. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
