import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*]/.test(password)) strength++;
    
    return strength;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
      
      if (name === 'password') {
        setPasswordStrength(calculatePasswordStrength(value));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    if (!formData.agreeToTerms) {
      alert('Please agree to the Terms of Service and Privacy Policy');
      return;
    }
    
    // Navigate to login page after successful registration
    navigate('/login');
  };

  const getPasswordStrengthText = () => {
    switch(passwordStrength) {
      case 0: return 'Weak';
      case 1: return 'Fair';
      case 2: return 'Medium';
      case 3: return 'Strong';
      case 4: return 'Very Strong';
      default: return 'Weak';
    }
  };

  const getPasswordStrengthColor = () => {
    switch(passwordStrength) {
      case 0: return 'bg-red-500';
      case 1: return 'bg-orange-500';
      case 2: return 'bg-yellow-500';
      case 3: return 'bg-blue-500';
      case 4: return 'bg-green-500';
      default: return 'bg-slate-200 dark:bg-slate-700';
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 lg:px-40 py-4 bg-white dark:bg-background-dark">
          <div className="flex items-center gap-4 text-slate-900 dark:text-slate-100">
            <div className="size-8 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>shield_with_heart</span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-[-0.015em]">CyberShield</h2>
          </div>
          <div className="flex flex-1 justify-end items-center gap-4">
            <span className="hidden md:inline text-sm text-slate-500 dark:text-slate-400">Already have an account?</span>
            <button onClick={() => navigate('/login')} className="text-primary font-semibold text-sm hover:underline cursor-pointer">Log in</button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-1 justify-center py-12 px-4 md:px-0">
          <div className="layout-content-container flex flex-col w-full max-w-[520px] bg-white dark:bg-slate-900 p-8 md:p-12 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
            {/* Form Header */}
            <div className="flex flex-col gap-2 mb-8 text-center md:text-left">
              <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-black leading-tight tracking-[-0.033em]">Create your account</h1>
              <p className="text-slate-500 dark:text-slate-400 text-base font-normal">Secure your digital identity with enterprise-grade protection.</p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Full Name Field */}
              <div className="flex flex-col gap-2">
                <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold leading-normal">Full Name</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">person</span>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="flex w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-12 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-slate-400 dark:text-slate-100"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold leading-normal">Email Address</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">mail</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    className="flex w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-12 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-slate-400 dark:text-slate-100"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-2">
                <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold leading-normal">Password</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">lock</span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create a strong password"
                    className="flex w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-12 pl-12 pr-12 text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-slate-400 dark:text-slate-100"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                  >
                    <span className="material-symbols-outlined text-xl">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>

                {/* Password Strength Indicator */}
                <div className="flex gap-1 mt-1 px-1">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div
                      key={index}
                      className={`h-1 flex-1 rounded-full transition-colors ${
                        index < passwordStrength
                          ? getPasswordStrengthColor()
                          : 'bg-slate-200 dark:bg-slate-700'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 px-1">
                  Strength: <span className="text-primary font-medium">{getPasswordStrengthText()}</span>. Use 8+ characters with symbols.
                </p>
              </div>

              {/* Confirm Password Field */}
              <div className="flex flex-col gap-2">
                <label className="text-slate-900 dark:text-slate-100 text-sm font-semibold leading-normal">Confirm Password</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">lock_reset</span>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Repeat your password"
                    className="flex w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-12 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all placeholder:text-slate-400 dark:text-slate-100"
                  />
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3 mt-2">
                <input
                  type="checkbox"
                  id="terms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="mt-1 size-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer"
                />
                <label className="text-sm text-slate-500 dark:text-slate-400 leading-tight cursor-pointer" htmlFor="terms">
                  I agree to the <button className="text-primary hover:underline bg-transparent border-0 cursor-pointer p-0">Terms of Service</button> and <button className="text-primary hover:underline bg-transparent border-0 cursor-pointer p-0">Privacy Policy</button>.
                </label>
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                disabled={!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword || !formData.agreeToTerms}
                className="w-full bg-primary hover:bg-primary/90 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-lg transition-colors shadow-lg shadow-primary/20 mt-4"
              >
                Sign Up
              </button>
            </form>

            {/* Social Login Section */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col items-center gap-4">
              <p className="text-sm text-slate-500 dark:text-slate-400">Or sign up with</p>
              <div className="flex gap-4 w-full">
                <button
                  type="button"
                  className="flex-1 flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 h-11 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-slate-700 dark:text-slate-300"
                >
                  <img
                    alt="Google Logo"
                    className="size-5"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI_mh5a-gZhrEIIxZKlfWhXRR0yO61XOR1bzxHbVoyhK2uQg-a2c2BpTeTwoDBO3qB4J4ZbGoAAzF2r3fz8vc9ALY1ke4V5CphrSR8ujZgbLzK3vORWN8QtrWgLhTJDphfa3SWMcDc0nF6ag8Evl50qCfcHc_wzVC-TQST497rMNmGgPMjrrKpYYXroDrHnypa9fM-zRbgcXBS7W0knCrEZZeb-CXSkD9SckCnhVo7sJA5VxbY5eGVlOfnV5GpBmDK1e_ZG-76vlg"
                  />
                  <span className="text-sm font-medium">Google</span>
                </button>
                <button
                  type="button"
                  className="flex-1 flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 h-11 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-slate-700 dark:text-slate-300"
                >
                  <img
                    alt="GitHub Logo"
                    className="size-5 dark:invert"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeVbu7adLFLzETzUBeoibbK523vkngQ26Z-pU19TjymOTN2Z2sBU4ADO0Cmy4uvV42rcW0EggxpphE9g2OxBYWndJQXBBjSXSwaPbHN2Os3bRAYQSiztZfbHAmFNSCpVZLOjN-RP3Wvb83mXsKDt4h8R8D6epS0NnzRyeqzS9YellBsU8juSujYNCFs5063utqY3puwaxRyIrZHwoldgDLql5Z-w_H5gsQPTx8W7LxA6L06NnGVNs762lqM23qCNwJU4-I6l0gucU"
                  />
                  <span className="text-sm font-medium">GitHub</span>
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 text-center px-4">
          <p className="text-xs text-slate-400 dark:text-slate-600">
            © 2024 CyberShield Inc. All rights reserved.
            <br className="md:hidden" />
            <span className="hidden md:inline mx-2">•</span>
            Encrypted with AES-256 bits.
          </p>
        </footer>
      </div>
    </div>
  );
}
