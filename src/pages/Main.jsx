import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import "./Main.css";

function Main() {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    navigate('/modules');
  };

  return (
    <div className="landing">
      <Navigation />

      {/* HERO SECTION */}
      <section className="hero-section">

        {/* LEFT TEXT */}
        <div className="hero-text">

          <span className="badge">
            TRUSTED BY SECURITY PROS
          </span>

          <h1>
            Master Your <span className="highlight">Digital Safety</span>
          </h1>

          <p>
            Empower yourself with the knowledge to stay safe online.
            Our interactive platform provides the tools you need to
            recognize and prevent evolving cyber threats.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={handleStartLearning}>
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
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
            alt="Cyber Security"
            style={{width: '100%', height: '100%', objectFit: 'cover'}}
          />
        </div>

      </section>

    </div>
  );
}

export default Main;