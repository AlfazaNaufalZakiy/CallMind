// File: src/pages/DashboardPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DashboardPage.css";
import chatIcon from "../assets/chat-icon.png";
import crisisIcon from "../assets/crisis-icon.png";
import recommendationsIcon from "../assets/recommendations-icon.png";
import trackingIcon from "../assets/tracking-icon.png";
import emergencyIcon from "../assets/emergency-icon.png";
import profilePic from "../assets/profile-pic.png";
import helpIcon from "../assets/help-icon.png";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [locationActive, setLocationActive] = useState(false);

  return (
    <div className="dashboard-container">
      {/* Menu Bar */}
      <aside className="menu-bar">
        <h3 className="menu-title">Menu</h3>
        <ul className="menu-items">
          <li onClick={() => navigate("/dashboard")}>
            <img src={chatIcon} alt="Dashboard" /> Dashboard
          </li>
          <li onClick={() => navigate("/chat")}>
            <img src={chatIcon} alt="Obrolan" /> Obrolan
          </li>
          <li onClick={() => navigate("/crisis-support")}>
            <img src={crisisIcon} alt="Crisis Support" /> Crisis Support
          </li>
          <li onClick={() => navigate("/recommendations")}>
            <img src={recommendationsIcon} alt="Rekomendasi" /> Rekomendasi
          </li>
          <li onClick={() => navigate("/tracking")}>
            <img src={trackingIcon} alt="Tracking" /> Tracking
          </li>
        </ul>
        <div className="help-section">
          <img src={helpIcon} alt="Help" className="help-icon" />
          <p>Need help? Please check our docs</p>
          <button className="help-button">DOCUMENTATION</button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <header className="dashboard-header">
          <div className="search-tools">
            <div className="search-bar-container">
              <input
                type="text"
                className="search-bar"
                placeholder="Cari fitur atau artikel..."
              />
              <button className="search-icon">🔍</button>
            </div>
            <div className="location-switch">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={locationActive}
                  onChange={() => setLocationActive(!locationActive)}
                />
                <span className="slider"></span>
              </label>
              <span className="switch-label">
                {locationActive ? "Lokasi Aktif" : "Lokasi Nonaktif"}
              </span>
            </div>
            <select className="language-select">
              <option value="id">Bahasa Indonesia</option>
              <option value="en">English</option>
            </select>
            <button className="notification-button">🔔</button>
            <div className="profile">
              <img src={profilePic} alt="Profile" className="profile-pic" />
              <span className="profile-name">Anddy</span>
            </div>
          </div>
        </header>

        <main className="dashboard-main">
          <h3>Layanan Utama Kami</h3>
          <div className="services">
            <div className="service-card" onClick={() => navigate("/chat")}>
              <img src={chatIcon} alt="Obrolan" />
              <h4>Obrolan</h4>
              <p>Temukan teman cerita yang nyaman dengan teknologi AI kami.</p>
            </div>
            <div className="service-card" onClick={() => navigate("/crisis-support")}>
              <img src={crisisIcon} alt="Crisis Support" />
              <h4>Crisis Support</h4>
              <p>Dapatkan bantuan darurat kapan saja untuk Anda dan keluarga.</p>
            </div>
            <div className="service-card" onClick={() => navigate("/recommendations")}>
              <img src={recommendationsIcon} alt="Rekomendasi" />
              <h4>Rekomendasi Personal</h4>
              <p>Dapatkan rekomendasi terbaik dari AI berdasarkan data Anda.</p>
            </div>
            <div className="service-card" onClick={() => navigate("/tracking")}>
              <img src={trackingIcon} alt="Tracking" />
              <h4>Tracking</h4>
              <p>Simpan dan lacak data kesehatan mental Anda dengan mudah.</p>
            </div>
          </div>
        </main>
      </div>

      {/* Tombol Darurat */}
      <button className="emergency-button">
        <img src={emergencyIcon} alt="Emergency" />
      </button>
    </div>
  );
};

export default DashboardPage;
