import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="relative flex min-h-screen flex-col">
        {/* Top Navigation */}
        <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-6 py-3 sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <div className="text-primary">
              <span className="material-symbols-outlined text-3xl">shield_with_heart</span>
            </div>
            <h2 className="text-lg font-bold tracking-tight">CyberShield <span className="text-primary">Simulation</span></h2>
            <div className="ml-4 flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <span className="material-symbols-outlined text-sm">lock_open</span>
              SANDBOX MODE
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button className="flex size-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="flex size-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200">
                <span className="material-symbols-outlined">help</span>
              </button>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold">Alex Rivera</p>
                <p className="text-[10px] text-slate-500 uppercase">Security Analyst</p>
              </div>
              <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 overflow-hidden">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuV3Ql8797ANQmRITnx4xe_BLYAkVPDXlbGuzJDnA1SMMkdoPPucS8unI4TxyLjtVR_UOGYt2b76xhCkcj1aAj3t38MMY_DkNt5bDY2U-6QCRlKIX0c3Gw683ABGAgDjYz0_zDpJT4DR3KcFSmguHjsfkM_JIJ-WfV2eWeM30qgddZ25uahGmZ92msGPIJYqf59kKVQQha36HO-qQIGUBVSZs3KyoAbzVeDboVnzgcEuQSDcu-gMRwxazYi44vlBKDElAG2caGmwg"
                  alt="User profile"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="flex flex-1 overflow-hidden">
          {/* Sidebar Navigation */}
          <nav className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark p-4 hidden lg:flex flex-col justify-between">
            <div className="flex flex-col gap-1">
              <Link className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg" to="/">
                <span className="material-symbols-outlined">dashboard</span>
                <span className="text-sm font-medium">Dashboard</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg" to="/about">
                <span className="material-symbols-outlined">sports_esports</span>
                <span className="text-sm font-medium">Active Simulation</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg" to="/simulations">
                <span className="material-symbols-outlined">library_books</span>
                <span className="text-sm font-medium">Training Library</span>
              </Link>
              <a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg" href="#">
                <span className="material-symbols-outlined">analytics</span>
                <span className="text-sm font-medium">Performance Metrics</span>
              </a>
            </div>
            <div className="rounded-xl bg-slate-900 p-4 text-white">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Current Session</p>
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-primary">timer</span>
                <span className="text-lg font-mono tracking-widest">04:12</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] uppercase">
                  <span>Phishing Score</span>
                  <span>85%</span>
                </div>
                <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
          </nav>

          {/* Main Simulation Workspace */}
          <div className="flex-1 flex flex-col bg-slate-50 dark:bg-slate-900 p-6 overflow-y-auto">
            {/* Progress Header */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Scenario: Suspicious Account Activity</h1>
                <p className="text-slate-500 text-sm">Analyze the incoming message and decide the best course of action.</p>
              </div>
              <div className="flex items-center gap-4 bg-white dark:bg-background-dark p-2 rounded-lg border border-slate-200 dark:border-slate-800">
                <div className="flex -space-x-1">
                  <div className="size-6 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-white border-2 border-white dark:border-background-dark">1</div>
                  <div className="size-6 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-white border-2 border-white dark:border-background-dark">2</div>
                  <div className="size-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-500 border-2 border-white dark:border-background-dark">3</div>
                  <div className="size-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-500 border-2 border-white dark:border-background-dark">4</div>
                  <div className="size-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-500 border-2 border-white dark:border-background-dark">5</div>
                </div>
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400">STEP 2 OF 5</span>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
              {/* Email Client Sandbox */}
              <div className="xl:col-span-8 bg-white dark:bg-background-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col h-full min-h-[600px]">
                {/* Email Header */}
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="size-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-400">
                      <span className="material-symbols-outlined text-3xl">person</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg">IT Support Security Team</h3>
                        <span className="text-xs text-slate-400">Today, 10:42 AM</span>
                      </div>
                      <p className="text-sm text-slate-500 flex items-center gap-1">
                        To: <span className="text-slate-700 dark:text-slate-300">alex.rivera@cyber-shield.corp</span>
                      </p>
                      <div className="group relative inline-block mt-1">
                        <p className="text-xs text-primary font-medium cursor-help flex items-center gap-1">
                          From: <span className="underline decoration-dotted">security-alert@micros0ft-support.com</span>
                          <span className="material-symbols-outlined text-[14px]">info</span>
                        </p>
                        {/* Tooltip/Hotspot Feedback */}
                        <div className="absolute z-20 left-0 top-full mt-2 w-64 p-3 bg-slate-900 text-white rounded-lg text-xs invisible group-hover:visible shadow-xl border border-slate-700">
                          <p className="font-bold text-orange-400 mb-1 flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">warning</span> 
                            Suspicious Domain
                          </p>
                          Notice the "0" (zero) instead of "o" in "micros0ft". This is a common typo-squatting technique.
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold">URGENT: Your account password expires in 2 hours</h2>
                </div>

                {/* Email Content */}
                <div className="p-8 flex-1 overflow-y-auto space-y-4">
                  <p className="text-slate-700 dark:text-slate-300">Dear Employee,</p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Our security logs indicate that your corporate password is scheduled to expire today. Due to new security policies enforced by the IT department, you are required to update your credentials immediately to avoid being locked out of the network.
                  </p>
                  <div className="my-8 p-6 bg-slate-50 dark:bg-slate-800/30 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 text-center">
                    <p className="text-sm font-medium mb-4">Please click the button below to secure your account:</p>
                    <div className="relative group inline-block">
                      <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-md">
                        Update Password Now
                      </button>
                      {/* Hover Hotspot */}
                      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-slate-800 text-slate-300 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-slate-700 whitespace-nowrap z-10">
                        Link: http://bit.ly/secure-login-3921-update
                      </div>
                      {/* Interactive Tooltip */}
                      <div className="absolute -right-4 -top-4">
                        <span className="flex h-4 w-4">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
                        </span>
                      </div>
                      <div className="absolute z-20 left-full ml-4 top-0 w-64 p-3 bg-slate-900 text-white rounded-lg text-xs invisible group-hover:visible shadow-xl border border-slate-700">
                        <p className="font-bold text-orange-400 mb-1 flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs">link</span> 
                          URL Shortener Detected
                        </p>
                        Official company portals never use URL shorteners like bit.ly for credential management.
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Failure to comply within the next 2 hours will result in automatic account suspension.
                  </p>
                  <div className="pt-6 border-t border-slate-100 dark:border-slate-800 text-slate-500 text-sm">
                    <p>Thank you,</p>
                    <p className="font-bold text-slate-700 dark:text-slate-300">Global IT Security Division</p>
                    <p>Reference ID: #SEC-99210-AX</p>
                  </div>
                </div>
              </div>

              {/* Action Panel */}
              <div className="xl:col-span-4 space-y-6">
                {/* Main Actions */}
                <div className="bg-white dark:bg-background-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">touch_app</span>
                    What's your decision?
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    <button className="flex items-center gap-3 w-full p-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all text-left group">
                      <div className="size-10 rounded-lg bg-red-100 dark:bg-red-900/40 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined">report</span>
                      </div>
                      <div>
                        <p className="font-bold">Report as Phishing</p>
                        <p className="text-xs text-slate-500">Flag this email as a security threat</p>
                      </div>
                    </button>
                    <button className="flex items-center gap-3 w-full p-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 hover:border-primary hover:bg-primary/5 transition-all text-left group">
                      <div className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined">delete</span>
                      </div>
                      <div>
                        <p className="font-bold">Delete Email</p>
                        <p className="text-xs text-slate-500">Remove from inbox without reporting</p>
                      </div>
                    </button>
                    <button className="flex items-center gap-3 w-full p-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 hover:border-primary hover:bg-primary/5 transition-all text-left group">
                      <div className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined">reply</span>
                      </div>
                      <div>
                        <p className="font-bold">Reply for Clarification</p>
                        <p className="text-xs text-slate-500">Ask the sender for more details</p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Investigation Tools */}
                <div className="bg-white dark:bg-background-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-slate-500 mb-4">Sandbox Tools</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Domain Lookup</span>
                      <button className="text-primary text-xs font-bold hover:underline">Scan Domain</button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Header Analysis</span>
                      <button className="text-primary text-xs font-bold hover:underline">View Headers</button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Attachment Sandbox</span>
                      <span className="text-xs text-slate-400 italic">No attachments</span>
                    </div>
                  </div>
                </div>

                {/* Immediate Feedback */}
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800/50 p-6">
                  <div className="flex items-center gap-3 text-green-700 dark:text-green-400 mb-2">
                    <span className="material-symbols-outlined">check_circle</span>
                    <p className="font-bold">Correct Decision!</p>
                  </div>
                  <p className="text-sm text-green-800 dark:text-green-300 leading-relaxed">
                    Great job! You identified several red flags:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 opacity-80">
                    <li>Typo-squatted sender domain</li>
                    <li>Suspicious external bit.ly link</li>
                    <li>Induced sense of urgency/fear</li>
                  </ul>
                  <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg font-bold hover:bg-green-700">
                    Next Scenario
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Tooltip Instructions Footer */}
        <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-500 text-xs">
              <span className="material-symbols-outlined text-sm">mouse</span>
              <span>Hover over highlighted areas to inspect</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-xs">
              <span className="material-symbols-outlined text-sm">keyboard_command_key</span>
              <span>CMD+I to open Inspector</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-xs">
            <span>Simulation Instance: #XJ-992-K</span>
            <span className="material-symbols-outlined text-[10px]">fiber_manual_record</span>
            <span className="text-green-500 font-bold uppercase tracking-tighter">Live Sandbox</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
