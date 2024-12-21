// File: src/pages/RegisterPage.jsx
import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import butterflyHug from "../assets/12832320200827459butterflyhug.png";
import googleLogo from "../assets/Other-Pay-Method.png"; // Tambahkan logo Google

const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Handle Register dengan Email dan Password
  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    if (password !== confirmPassword) {
      setErrorMessage("Password dan konfirmasi password tidak cocok");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Akun berhasil dibuat!");
      navigate("/login");
    } catch (error) {
      setErrorMessage("Gagal mendaftarkan akun. " + error.message);
    }
  };

  // Handle Login dengan Google
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard"); // Arahkan ke dashboard jika sudah punya akun Google
    } catch (error) {
      setErrorMessage("Gagal masuk dengan Google. " + error.message);
    }
  };

  return (
    <div className="register-container">
      <div className="illustration-section">
        <img src={butterflyHug} alt="Butterfly Hug" className="illustration" />
      </div>

      <div className="form-section">
        <h2 className="form-title">Buat Akun Anda</h2>
        <form onSubmit={handleRegister}>
          <label>Nama Lengkap</label>
          <input
            type="text"
            placeholder="Masukkan nama lengkap"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <label>Alamat</label>
          <input
            type="text"
            placeholder="Masukkan alamat Anda"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <label>Email atau Nomor HP</label>
          <input
            type="email"
            placeholder="Masukkan email atau nomor HP"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Masukkan password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Konfirmasi Password</label>
          <input
            type="password"
            placeholder="Konfirmasi password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit" className="btn-primary">
            Daftar
          </button>
        </form>

        <button className="btn-google" onClick={handleGoogleSignIn}>
          <img src={googleLogo} alt="Google Logo" />
          Sign up with Google
        </button>

        <p className="signin-link">
          Sudah punya akun? <a href="/login">Login sekarang</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
