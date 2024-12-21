import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import illustration from '../assets/illustration.png';
import waveBackground from '../assets/wave-element.png';
import arrowIcon from '../assets/arrow-icon.png';

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Background Wave */}
      <div className="wave-background">
        <img src={waveBackground} alt="Wave Background" />
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="CallMind Logo" />
          <span className="navbar-title">CallMind</span>
        </div>
        <div className="navbar-right">
          <ul className="navbar-links">
            <li>Products <span className="dropdown">&#x25BC;</span></li>
            <li>Solutions <span className="dropdown">&#x25BC;</span></li>
            <li>Resources <span className="dropdown">&#x25BC;</span></li>
            <li>Pricing <span className="dropdown">&#x25BC;</span></li>
          </ul>
          <Link to="/login" className="navbar-button">Login</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>CalmMind - Personal Mental Wellness AI Advisor</h1>
          <p>
            CallMind merupakan konsultan Kesehatan mental pribadi berbasis AI. Kami memiliki
            beberapa fitur Utama, seperti Chatbot, Rekomendasi Personal, dan Crisis Support.
            Dengan adanya aplikasi CallMind, Anda memiliki partner untuk mendengarkan cerita Anda.
          </p>
          <Link to="/register" className="cta-button">
            Coba CallMind Gratis <img src={arrowIcon} alt="Arrow" className="arrow-icon" />
          </Link>
        </div>
        <div className="hero-image">
          <img src={illustration} alt="Mental Health Illustration" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;