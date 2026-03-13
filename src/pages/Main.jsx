import React from "react";
import "./Main.css";

function Main() {
  return (
    <div className="landing">

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="logo">
          🛡️ CyberShield
        </div>

        <ul className="nav-links">
          <li>Home</li>
          <li>Modules</li>
          <li>Simulations</li>
          <li>About</li>
        </ul>

        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>

      </nav>


      {/* HERO SECTION */}
      <section className="hero-section">

        {/* LEFT TEXT */}
        <div className="hero-text">

          <span className="badge">
            TRUSTED BY SECURITY PROS
          </span>

          <h1>
            Master Your <span>Digital Safety</span>
          </h1>

          <p>
            Empower yourself with the knowledge to stay safe online.
            Our interactive platform provides the tools you need to
            recognize and prevent evolving cyber threats.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Start Learning for Free
            </button>

            <button className="secondary-btn">
              ▶ Watch Demo
            </button>
          </div>

        </div>


        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
            alt="Cyber Security"
        />
        </div>

      </section>

    </div>
  );
}

export default Main;