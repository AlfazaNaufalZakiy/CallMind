import React, { useState, useEffect } from "react";
import "./DashboardPage.css"; // Menggunakan gaya dari DashboardPage
import { useNavigate } from "react-router-dom";
import profilePic from "../assets/profile-pic.png";
import chatIcon from "../assets/chat-icon.png";
import crisisIcon from "../assets/crisis-icon.png";
import recommendationsIcon from "../assets/recommendations-icon.png";
import trackingIcon from "../assets/tracking-icon.png";

const CrisisSupportPage = () => {
  const navigate = useNavigate();
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Fetch provinces
  useEffect(() => {
    fetch("https://rs-bed-covid-api.vercel.app/api/get-provinces")
      .then((response) => response.json())
      .then((data) => setProvinces(data.provinces));
  }, []);

  // Fetch cities based on selected province
  useEffect(() => {
    if (selectedProvince) {
      fetch(
        `https://rs-bed-covid-api.vercel.app/api/get-cities?provinceid=${selectedProvince}`
      )
        .then((response) => response.json())
        .then((data) => setCities(data.cities));
    }
  }, [selectedProvince]);

  // Fetch hospitals based on selected city
  useEffect(() => {
    if (selectedCity) {
      fetch(
        `https://rs-bed-covid-api.vercel.app/api/get-hospitals?provinceid=${selectedProvince}&cityid=${selectedCity}&type=1`
      )
        .then((response) => response.json())
        .then((dataCovid) => {
          fetch(
            `https://rs-bed-covid-api.vercel.app/api/get-hospitals?provinceid=${selectedProvince}&cityid=${selectedCity}&type=2`
          )
            .then((response) => response.json())
            .then((dataNonCovid) => {
              setHospitals([...dataCovid.hospitals, ...dataNonCovid.hospitals]);
            });
        });
    }
  }, [selectedProvince, selectedCity]);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="menu-bar">
        <h3 className="menu-title">Menu</h3>
        <ul className="menu-items">
          <li onClick={() => navigate("/dashboard")}>
            <img src={chatIcon} alt="Dashboard" /> Dashboard
          </li>
          <li className="active" onClick={() => navigate("/crisis-support")}>
            <img src={crisisIcon} alt="Crisis Support" /> Crisis Support
          </li>
          <li onClick={() => navigate("/recommendations")}>
            <img src={recommendationsIcon} alt="Recommendations" /> Recommendations
          </li>
          <li onClick={() => navigate("/tracking")}>
            <img src={trackingIcon} alt="Tracking" /> Tracking
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <header className="dashboard-header">
          <div className="search-tools">
            <input
              type="text"
              className="search-bar"
              placeholder="Cari fitur atau artikel..."
            />
            <button className="notification-button">🔔</button>
            <div className="profile">
              <img src={profilePic} alt="Profile" className="profile-pic" />
              <span className="profile-name">Alfaza</span>
            </div>
          </div>
        </header>

        {/* Emergency Section */}
        <main>
          <section className="selection-section">
            <h2>Kontak Darurat RS Terdekat</h2>
            <div className="dropdowns">
              <label>
                Pilih Provinsi:
                <select
                  value={selectedProvince}
                  onChange={(e) => setSelectedProvince(e.target.value)}
                >
                  <option value="">--Pilih Provinsi--</option>
                  {provinces.map((province) => (
                    <option key={province.id} value={province.id}>
                      {province.name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Pilih Kota/Kabupaten:
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  disabled={!selectedProvince}
                >
                  <option value="">--Pilih Kota/Kabupaten--</option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </section>

          <section className="hospital-section">
            <h2>Daftar Rumah Sakit</h2>
            <ul>
              {hospitals.map((hospital, index) => (
                <li key={index}>
                  <strong>{hospital.name}</strong>
                  <p>{hospital.address}</p>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default CrisisSupportPage;
