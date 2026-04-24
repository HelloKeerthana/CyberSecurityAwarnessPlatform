import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify({ email, password }));
      localStorage.setItem("isLoggedIn", "true");
      setLoading(false);
      navigate("/modules");
    }, 800);
  };

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

        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
        }

        .animate-slide-right {
          animation: slideInRight 0.8s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        input:focus {
          outline: none;
          border-color: #3B82F6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>

      <Navigation />

      <main className="bg-gradient-to-b from-white via-blue-50 to-white min-h-screen flex items-center justify-center py-20 px-6">
        
        <div className="absolute top-32 right-10 w-72 h-72 bg-blue-100 rounded-full opacity-20 animate-float blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-50 rounded-full opacity-30 blur-3xl -z-10"></div>

        <div className="w-full max-w-md animate-fade-in-up">
          
          <div className="rounded-3xl bg-white border border-blue-100 p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200 mb-4">
                <span className="text-3xl">🔐</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Create Account</h1>
              <p className="text-gray-600">Join thousands of learners securing their digital future</p>
            </div>

            <form onSubmit={handleSignup} className="space-y-5">
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-300 hover:border-blue-300 focus:border-blue-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-300 hover:border-blue-300 focus:border-blue-500"
                  required
                />
                <p className="text-xs text-gray-500">Must be at least 6 characters</p>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 transition-all duration-300 hover:border-blue-300 focus:border-blue-500"
                  required
                />
              </div>

              {error && (
                <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                  <p className="text-sm text-red-600 font-medium">{error}</p>
                </div>
              )}

              <div className="flex items-start gap-3 pt-2">
                <input type="checkbox" id="terms" className="mt-1 w-4 h-4 cursor-pointer" required />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the <a href="#" className="text-blue-600 font-semibold hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 font-semibold hover:underline">Privacy Policy</a>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
                    <span>→</span>
                  </>
                )}
              </button>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-white text-gray-600">Already have an account?</span>
                </div>
              </div>

              <Link to="/login" className="w-full">
                <button
                  type="button"
                  className="w-full py-3 rounded-xl border-2 border-blue-500 text-blue-600 font-semibold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Sign In Instead
                  <span>→</span>
                </button>
              </Link>

            </form>

            <p className="text-center text-xs text-gray-500 mt-6">
              Your data is secure and encrypted. We never share your information.
            </p>

          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200">
              <span className="text-green-600 text-lg">✓</span>
              <span className="text-sm font-semibold text-green-700">Secure & Private</span>
            </div>
          </div>

        </div>

      </main>

      <footer className="bg-gray-900 text-white px-6 py-12 text-center">
        <p className="text-gray-400 text-sm">
          © 2025 CyberShield Inc. All rights reserved. Designed for digital safety.
        </p>
      </footer>

    </div>
  );
}