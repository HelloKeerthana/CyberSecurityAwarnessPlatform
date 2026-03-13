import { Link } from 'react-router-dom'

export default function Simulations() {
  const modules = [
    {
      id: 1,
      title: 'Phishing Awareness',
      description: 'Learn how to identify and avoid suspicious emails and social engineering tactics.',
      level: 'Beginner',
      levelColor: 'primary',
      duration: '45 min',
      progress: 80,
      status: 'Continue Module',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFe-PXcVf7Pgb4IlModnNAP-W4jx1ApqM7ATItVHO4-KA-jXqc_PnR7GdBdIMSFzNPQertqnQD1lPeP5-cLf8715SnpO2BrnvDDdU9HhQKJvMttmmGYL9_Wb5xB-WpFOHyrs2_qhrjshUmD5V7Ji1DtJkP7rBhDSq-EHyMevzunXAuATlKdFCVDMZL2L-JgnbYhqeEljkkHYFCiZkH8XMC03hsdca403FpZeYvG6Htyz-4SvnKtlstDR-mnoEgwZ3SNNkQ4CVZluQ'
    },
    {
      id: 2,
      title: 'Malware Fundamentals',
      description: 'Understand different types of malware including viruses, trojans, and ransomware.',
      level: 'Intermediate',
      levelColor: 'orange-600',
      duration: '1.5 hours',
      progress: 0,
      status: 'Start Module',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6x-sCJmUHYm3br1aiud4kJ_88lDqDOPwJ7mExaCKR1VeSlwmogi6SZs1BCZRCC0JSCOPptm_y-iaiOj3zC3Iy0qmwpqfHsZ1buErtYsmP5mCJdeM2cL-ZBWBku3pfd_mGKDvwxaBsAQDJaJjOT5h7P3Ph4yiin0e_Sat7Y1bQzzbk9dnIrAX9Jd60mjd9EmjW867FLxYf-sJlGX3mSCmGBrBIOsnG-ikWO1HExWTQzOAW9hY6teqqkyd9hm7IOKiSm-IgxQgaFDE'
    },
    {
      id: 3,
      title: 'Password Security',
      description: 'Master the art of creating strong passwords and implementing Multi-Factor Authentication.',
      level: 'Beginner',
      levelColor: 'primary',
      duration: '30 min',
      progress: 35,
      status: 'Continue Module',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAhrlGhV7goW2LvG6aqrTnEHsbibT6K7aIK6orEHiMFWEowog-3YQbTkotTU0YeFV4PzfPuLIzao6mcVjecbMu6fAj8IFUvRXCTWyaxk5DVygwZsZ73uv6J475aFixA07zXIfCaWGCodiTy4XfjRCh7X0LEPstLYrOxdX0mJ9MOHrCZNwFBiPb7h_QPmBDsCoJuWjzsPFm4vy9FpnKvfziPjW7TJNOjndaezT4Bfvsofc82MSFtQespSf-9eyip2Jq-ljqVv0bWUk'
    },
    {
      id: 4,
      title: 'Social Engineering',
      description: 'Learn about advanced psychological manipulation techniques used by cyber criminals.',
      level: 'Advanced',
      levelColor: 'red-600',
      duration: '2.5 hours',
      progress: 0,
      status: 'Start Module',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmMmExu687VJIikk-Q0ukA0RB3u4e9Hqn5ox09mfBSeFQygh4s5KkiVSLt4hVSnMyQrrxjimkVF4BDIa2hyXYIyfUHDFZvpsqRYalAvHOdeSMaPFw25L1b3-JZNpt_8rYdwZhEyiL7YeNMv-DijryWN_5fvliLhuWD-HsvztDnv2Mlvm2mEamUyOru3-8Q-p2uJ6Q7lGwSZCA3ip2orcNLywAnVTeKNQLX-umYSrCVTQTVmaR95JtB-pm0dPrutLQvt-e4xWTbR2Q'
    },
    {
      id: 5,
      title: 'Remote Work Security',
      description: 'Essential safety practices for working outside the office environment.',
      level: 'Beginner',
      levelColor: 'primary',
      duration: '1 hour',
      progress: 0,
      status: 'Start Module',
      isNew: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSd6tr5zd-EzpCFLlZgc0y40eYLLts2KCcslDo0ctnM_5uIFkW-thfC9wH4Y2kPkjQ2LZhu6kKesxUUV4y1ypBGZZTVLU0WZArQPLv0H-II3EsgWOTBH1LOyJoejlyWmcR8ka3YHvrVA6chcmnW0iiivt_esvH6sdESOJ_NGPxaq_St78J-gI-MlRk_xPw-O5ebSZcgkphmQz8f2eD_Q_CwjjibUXE4XES4fgInKgS8r5-PdRvnAQ57pzZeSTs_srfI8pDosUIsbw'
    },
    {
      id: 6,
      title: 'Mobile Security',
      description: 'Best practices for securing personal and professional mobile devices.',
      level: 'Intermediate',
      levelColor: 'orange-600',
      duration: '50 min',
      progress: 15,
      status: 'Continue Module',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5-b_IGBKJNf2hiW1Q-7VR3RXlYV3afKviNY1fkwJzc5NDObebqMxxUULOUJ-_e2HNzNyvFuPFKYAM97Pena6EddSF3xOLHqAKbjhnTH5VTD_WJN2hU5u6BCC4TuPKcAcId9Md5h67AN_ElrPWumUOZ3VVGCEq9G5qWOnp6Cvt0EnSw1ez5czsRbd4G1M5nDnnYq4pZzNPk-y5zyLJDxw18O4ivMt3fM9TQPfB9x71H6SxnD7cnLqMEKJZnr_Yo_SueqjTJYqBPP4'
    }
  ]

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="flex min-h-screen">
        {/* Sidebar Navigation */}
        <aside className="w-64 border-r border-primary/10 bg-white dark:bg-background-dark flex flex-col fixed h-full">
          <div className="p-6 flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <span className="material-symbols-outlined text-primary">shield</span>
              </div>
              <div>
                <h1 className="text-slate-900 dark:text-white font-bold text-lg leading-tight">CyberShield</h1>
                <p className="text-slate-500 text-xs font-medium">Enterprise Security</p>
              </div>
            </div>
            <nav className="flex flex-col gap-1">
              <Link className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors" to="/">
                <span className="material-symbols-outlined">dashboard</span>
                <span className="text-sm font-medium">Dashboard</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 bg-primary text-white rounded-lg" to="/simulations">
                <span className="material-symbols-outlined">book_5</span>
                <span className="text-sm font-medium">Learning Modules</span>
              </Link>
              <a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors" href="#">
                <span className="material-symbols-outlined">report_problem</span>
                <span className="text-sm font-medium">Threat Reports</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors" href="#">
                <span className="material-symbols-outlined">analytics</span>
                <span className="text-sm font-medium">Analytics</span>
              </a>
              <div className="my-4 border-t border-primary/10"></div>
              <a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors" href="#">
                <span className="material-symbols-outlined">settings</span>
                <span className="text-sm font-medium">Settings</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors" href="#">
                <span className="material-symbols-outlined">account_circle</span>
                <span className="text-sm font-medium">Profile</span>
              </a>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <div className="bg-primary/5 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">JD</div>
                <div className="overflow-hidden">
                  <p className="text-xs font-bold truncate">Jane Doe</p>
                  <p className="text-[10px] text-slate-500 truncate">Security Analyst</p>
                </div>
              </div>
              <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[65%]"></div>
              </div>
              <p className="text-[10px] mt-1.5 text-slate-500">65% Course Progress</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 p-8">
          {/* Header Section */}
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Learning Modules</h2>
              <p className="text-slate-500 mt-1">Enhance your cybersecurity skills through interactive modules.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-primary/10 text-slate-600 dark:text-slate-300">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <div 
                className="h-10 w-10 rounded-full bg-cover bg-center border-2 border-primary"
                style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBmy37mmZggDQW6B-HhYNh-EugmLEvatFlGO4i_pNdSaiAFguuAVHUHQ9-lqDUomdwVHorwDbdXU_sGSNDcT8GZxwRv01rVltaw74bviIL953F3C9BStumr9pWTFmbStdcEmlSwdJcBSEiM__9WI2rJVuBG1P14csnIII2MQcnnpEEbJl1mUMXdMm2ooMjBgBlFVzU-MI48EcLOTrHCFbJZYlr-zvqjhNXVCBPlKCs9Jx02uCEUIPFHlicKbwLlcy36x6ojwdFKOWY')"}}
              ></div>
            </div>
          </header>

          {/* Search and Filter Bar */}
          <div className="bg-white dark:bg-background-dark rounded-xl p-4 mb-8 shadow-sm border border-primary/5">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                <input 
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm" 
                  placeholder="Search for modules (e.g., Phishing, Malware...)" 
                  type="text"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium">All Modules</button>
                <button className="px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary transition-all text-sm font-medium">Beginner</button>
                <button className="px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary transition-all text-sm font-medium">Intermediate</button>
                <button className="px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary transition-all text-sm font-medium">Advanced</button>
                <button className="px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/10 hover:text-primary transition-all text-sm font-medium">Newest</button>
              </div>
            </div>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modules.map((module) => (
              <div key={module.id} className="bg-white dark:bg-background-dark rounded-xl border border-primary/10 overflow-hidden flex flex-col group hover:shadow-lg transition-all relative">
                {module.isNew && (
                  <div className="absolute top-0 right-0 z-10 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">NEW</div>
                )}
                
                <div className="h-40 bg-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>
                  <img 
                    alt={module.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={module.image}
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded bg-white/90 dark:bg-slate-900/90 text-[10px] font-bold text-${module.levelColor} uppercase tracking-wider`}>
                      {module.level}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">{module.title}</h3>
                  <p className="text-xs text-slate-500 mb-4 line-clamp-2">{module.description}</p>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between text-[11px] font-medium text-slate-500 mb-2">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        <span>{module.duration}</span>
                      </div>
                      <span>{module.progress}% Complete</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full mb-4 overflow-hidden">
                      <div 
                        className="bg-primary h-full transition-all"
                        style={{width: `${module.progress}%`}}
                      ></div>
                    </div>
                    <button className={`w-full py-2.5 rounded-lg font-bold text-sm transition-all ${
                      module.progress > 0 
                        ? 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                        : 'bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20'
                    }`}>
                      {module.status}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Section */}
          <div className="mt-12 flex flex-col items-center justify-center text-center">
            <p className="text-slate-500 text-sm mb-4">Showing 6 of 24 available modules</p>
            <button className="px-8 py-3 rounded-lg border border-primary/20 text-primary font-bold hover:bg-primary/5 transition-all text-sm">
              Load More Modules
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}
