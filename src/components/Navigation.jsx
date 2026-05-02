import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navigation() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(status === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <style>{`
        .nav-glass {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(59, 130, 246, 0.1);
        }

        .nav-link {
          position: relative;
          transition: all 0.3s ease;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0%;
          height: 2px;
          background: #3B82F6;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .btn-nav {
          transition: all 0.3s ease;
        }

        .btn-nav:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.25);
        }

        .mobile-menu {
          animation: fadeInUp 0.4s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }


          
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* NAV CONTAINER */}
      <div className="nav-glass shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white text-xl shadow-md group-hover:scale-110 transition-transform duration-300">
              🛡️
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              Cyber<span className="text-blue-600">Shield</span>
            </h2>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link className="nav-link text-gray-700 font-medium hover:text-blue-600" to="/">Home</Link>
            <Link className="nav-link text-gray-700 font-medium hover:text-blue-600" to="/about">About</Link>

            {isLoggedIn && (
              <>
                <Link className="nav-link text-gray-700 font-medium hover:text-blue-600" to="/modules">Modules</Link>
                <Link className="nav-link text-gray-700 font-medium hover:text-blue-600" to="/simulations">Simulations</Link>
                <Link className="nav-link text-gray-700 font-medium hover:text-blue-600" to="/certs">Exam</Link>
              </>
            )}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-4">
            {!isLoggedIn ? (
              <>
                <Link to="/login">
                  <button className="btn-nav px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100">
                    Login
                  </button>
                </Link>

                <Link to="/signup">
                  <button className="btn-nav px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-md">
                    Sign Up
                  </button>
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="btn-nav px-5 py-2.5 rounded-lg bg-red-600 text-white font-semibold shadow-md hover:bg-red-700"
              >
                Logout
              </button>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-gray-100 text-gray-800"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="mobile-menu lg:hidden bg-white border-t border-gray-200 px-6 py-6 flex flex-col gap-4 shadow-lg">
          
          <Link
            to="/"
            className="text-gray-700 font-medium py-2 hover:text-blue-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-gray-700 font-medium py-2 hover:text-blue-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>

          {isLoggedIn && (
            <>
              <Link to="/modules" className="text-gray-700 py-2 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Modules</Link>
              <Link to="/simulations" className="text-gray-700 py-2 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Simulations</Link>
              <Link to="/certs" className="text-gray-700 py-2 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Exam</Link>
            </>
          )}

          <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
            {!isLoggedIn ? (
              <>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full border border-gray-300 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100">
                    Login
                  </button>
                </Link>

                <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700">
                    Sign Up
                  </button>
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="w-full bg-red-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-700"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
