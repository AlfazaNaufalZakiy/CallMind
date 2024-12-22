import React, { useEffect, useState } from "react";
import "./RekomendasiPersonalPage.css";

const RekomendasiPersonalPage = () => {
  const [userData, setUserData] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Ambil data dari localStorage
    const savedData = JSON.parse(localStorage.getItem("callmind-tracking-data"));
    if (savedData) {
      setUserData(savedData);
      generateRecommendations(savedData);
    } else {
      alert("Data tidak ditemukan. Silakan isi halaman Tracking terlebih dahulu.");
    }
  }, []);

  const generateRecommendations = (data) => {
    const recs = [];
    
    // Rekomendasi berdasarkan stres
    if (data.assessment.stressLevel === "Sering" || data.assessment.stressLevel === "Sangat sering") {
      recs.push("Cobalah meditasi atau teknik relaksasi untuk mengurangi stres.");
    }

    // Rekomendasi berdasarkan kualitas tidur
    if (data.assessment.sleepQuality === "Tidak Pernah" || data.assessment.sleepQuality === "Tidak Pernah") {
      recs.push("Tambahkan waktu tidur Anda dan coba jadwal tidur yang konsisten.");
    }

    // Rekomendasi berdasarkan suasana hati
    if (data.mood.overall === "Buruk" || data.mood.overall === "Sangat buruk" || data.mood.contentment === "Sangat buruk" || data.mood.contentment === "Buruk") {
      recs.push("Lakukan aktivitas yang Anda sukai untuk meningkatkan suasana hati.");
    }

    // Rekomendasi berdasarkan aktivitas fisik
    if (data.assessment.physicalActivity === "Jarang" ||data.assessment.physicalActivity === "Tidak pernah") {
      recs.push("Cobalah untuk berolahraga ringan setidaknya 30 menit sehari.");
    }

    // Rekomendasi tambahan untuk suasana hati baik
    if (data.mood.overall === "Baik" && data.assessment.stressLevel === "Tidak pernah") {
      recs.push("Pertahankan suasana hati yang positif dengan menjaga keseimbangan hidup.");
    }

    // Tambahkan rekomendasi default
    recs.push("Selalu jaga pola hidup sehat dan istirahat yang cukup.");

    setRecommendations(recs);
  };

  return (
    <div className="rekomendasi-container">
      <h1>Rekomendasi Personal</h1>
      {userData ? (
        <div>
          <div className="user-info">
            <p><strong>Nama:</strong> {userData.identity.name}</p>
            <p><strong>Usia:</strong> {userData.identity.age} tahun</p>
            <p><strong>Suasana Hati:</strong> {userData.mood.overall}</p>
{/*             <p><strong>Jam Tidur:</strong> {userData.assessment.sleepHours} jam</p> */}
          </div>
          <div className="recommendations">
            <h2>Rekomendasi:</h2>
            <ul>
              {recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Data tidak ditemukan. Silakan isi halaman Tracking terlebih dahulu.</p>
      )}
    </div>
  );
};

export default RekomendasiPersonalPage;
