import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TrackingPage.css";

const TrackingPage = () => {
  const navigate = useNavigate();
  const [identity, setIdentity] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
  });

  const [assessment, setAssessment] = useState({
    anxiety: "",
    sadness: "",
    sleepQuality: "",
    sleepHours: "",
    energyLevel: "",
    focus: "",
    appetite: "",
    irritability: "",
    stressLevel: "",
    physicalActivity: "",
    additionalDetails: "",
  });

  const [mood, setMood] = useState({
    overall: "",
    majorEvents: "",
    motivation: "",
    interestLoss: "",
    optimism: "",
    anger: "",
    frustration: "",
    contentment: "",
    boredom: "",
    socialSupport: "",
    additionalDetails: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const trackingData = {
      identity,
      assessment,
      mood,
    };

    localStorage.setItem("callmind-tracking-data", JSON.stringify(trackingData));
    alert("Data berhasil disimpan!");
    navigate("/recommendations");
  };

  return (
    <div className="tracking-page">
      
      <h1>Tracking</h1>
      <form onSubmit={handleSubmit}>
        {/* Identitas Diri */}
        <section className="tracking-section">
          <h2>Identitas Diri</h2>
          <label>Nama:</label>
          <input
            type="text"
            value={identity.name}
            onChange={(e) => setIdentity({ ...identity, name: e.target.value })}
          />
          <label>Usia:</label>
          <input
            type="number"
            value={identity.age}
            onChange={(e) => setIdentity({ ...identity, age: e.target.value })}
          />
          <label>Jenis Kelamin:</label>
          <select
            value={identity.gender}
            onChange={(e) => setIdentity({ ...identity, gender: e.target.value })}
          >
            <option value="">Pilih</option>
            <option value="male">Laki-laki</option>
            <option value="female">Perempuan</option>
          </select>
          <label>Tinggi Badan (cm):</label>
          <input
            type="number"
            value={identity.height}
            onChange={(e) => setIdentity({ ...identity, height: e.target.value })}
          />
          <label>Berat Badan (kg):</label>
          <input
            type="number"
            value={identity.weight}
            onChange={(e) => setIdentity({ ...identity, weight: e.target.value })}
          />
        </section>

        {/* Asesmen */}
        <section className="tracking-section">
          <h2>Asesmen</h2>
          {[
            { label: "Seberapa sering Anda merasa cemas?", stateKey: "anxiety" },
            { label: "Seberapa sering Anda merasa sedih?", stateKey: "sadness" },
            { label: "Apakah kualitas tidur Anda sudah baik?", stateKey: "sleepQuality" },
            { label: "Bagaimana tingkat energi Anda?", stateKey: "energyLevel" },
            { label: "Seberapa baik fokus Anda?", stateKey: "focus" },
            { label: "Bagaimana nafsu makan Anda?", stateKey: "appetite" },
            { label: "Seberapa sering Anda merasa iritasi?", stateKey: "irritability" },
            { label: "Apakah anda sering merasakan stres?", stateKey: "stressLevel" },
            { label: "Seberapa sering Anda melakukan aktivitas fisik?", stateKey: "physicalActivity" },
          ].map((question, index) => (
            <div key={index}>
              <label>{question.label}</label>
              <select
                value={assessment[question.stateKey]}
                onChange={(e) =>
                  setAssessment({
                    ...assessment,
                    [question.stateKey]: e.target.value,
                  })
                }
              >
                <option value="">Pilih</option>
                <option value="Tidak pernah">Tidak pernah</option>
                <option value="Jarang">Jarang</option>
                <option value="Kadang-kadang">Kadang-kadang</option>
                <option value="Sering">Sering</option>
                <option value="Sangat sering">Sangat sering</option>
              </select>
            </div>
          ))}
          <label>Tambahkan detail tambahan:</label>
          <textarea
            value={assessment.additionalDetails}
            onChange={(e) =>
              setAssessment({ ...assessment, additionalDetails: e.target.value })
            }
          />
        </section>

        {/* Deskripsi Mood */}
        <section className="tracking-section">
          <h2>Deskripsi Mood</h2>
          {[
            { label: "Bagaimana suasana hati Anda?", stateKey: "overall" },
            { label: "Apakah Anda merasa optimis dengan masa depan?", stateKey: "optimism" },
            { label: "Seberapa sering Anda merasa frustrasi?", stateKey: "frustration" },
            { label: "Seberapa puas Anda dengan kehidupan Anda?", stateKey: "contentment" },
            { label: "Apakah Anda merasa didukung oleh orang-orang sekitar?", stateKey: "socialSupport" },
          ].map((question, index) => (
            <div key={index}>
              <label>{question.label}</label>
              <select
                value={mood[question.stateKey]}
                onChange={(e) =>
                  setMood({ ...mood, [question.stateKey]: e.target.value })
                }
              >
                <option value="">Pilih</option>
                <option value="Sangat buruk">Sangat buruk</option>
                <option value="Buruk">Buruk</option>
                <option value="Cukup">Cukup</option>
                <option value="Baik">Baik</option>
                <option value="Sangat baik">Sangat baik</option>
              </select>
            </div>
          ))}
          <label>Tambahkan detail tambahan tentang suasana hati Anda:</label>
          <textarea
            value={mood.additionalDetails}
            onChange={(e) =>
              setMood({ ...mood, additionalDetails: e.target.value })
            }
          />
        </section>

        <button type="submit">Simpan Data</button>
      </form>
    </div>
  );
};

export default TrackingPage;


