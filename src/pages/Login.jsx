import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    // Simple email validation
    setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email && password) {
      // Navigate to modules dashboard after successful login
      navigate('/modules');
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 lg:px-10 py-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary text-white rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">shield</span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">CyberShield</h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <span>Help</span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center p-6 relative">
          {/* Tech Pattern Background */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(#136dec 0.5px, transparent 0.5px), radial-gradient(#136dec 0.5px, #f6f7f8 0.5px)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px'
          }}></div>

          {/* Login Form Card */}
          <div className="w-full max-w-[480px] z-10">
            <div className="bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
              {/* Header Image Section */}
              <div className="relative h-48 w-full overflow-hidden bg-primary/10">
                <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800")'
                }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-8">
                  <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-black tracking-tight">Welcome back</h1>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Access your security training dashboard</p>
                </div>
              </div>

              {/* Form Section */}
              <form onSubmit={handleSignIn} className="px-8 pb-10 pt-2 space-y-6">
                <div className="space-y-4">
                  {/* Email Field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email address</label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="name@company.com"
                        value={email}
                        onChange={handleEmailChange}
                        className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-3 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
                      />
                      {isValidEmail && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
                          <span className="material-symbols-outlined text-xl">check_circle</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Password</label>
                      <a className="text-xs font-semibold text-primary hover:underline" href="#">Forgot password?</a>
                    </div>
                    <div className="relative flex items-stretch">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-3 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                      >
                        <span className="material-symbols-outlined text-xl">
                          {showPassword ? 'visibility_off' : 'visibility'}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Remember Me Checkbox */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-white dark:bg-slate-800 cursor-pointer"
                  />
                  <label className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer" htmlFor="remember">
                    Keep me logged in for 30 days
                  </label>
                </div>

                {/* Sign In Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={!email || !password}
                    className="w-full bg-primary hover:bg-primary/90 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98]"
                  >
                    Sign In to Portal
                  </button>
                </div>

                {/* Register Link */}
                <div className="text-center pt-4 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Don't have an account?{' '}
                    <a className="text-primary font-bold hover:underline" href="#">Register now</a>
                  </p>
                </div>
              </form>
            </div>

            {/* Footer Links */}
            <div className="mt-8 flex justify-center gap-6 text-slate-400 text-xs">
              <a className="hover:text-slate-600 dark:hover:text-slate-200 transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-slate-600 dark:hover:text-slate-200 transition-colors" href="#">Terms of Service</a>
              <a className="hover:text-slate-600 dark:hover:text-slate-200 transition-colors" href="#">System Status</a>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-6 px-10 text-center text-slate-400 text-sm">
          <p>© 2024 CyberShield Academy. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
