import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, googleProvider } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import butterflyHug from '../assets/12832320200827459butterflyhug.png';
import googlelogo from '../assets/Other-Pay-Method.png';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Handle Email/Password Login
  const handleSignIn = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      setErrorMessage('Email atau password salah');
    }
  };

  // Handle Google Login
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/dashboard');
    } catch (error) {
      setErrorMessage('Gagal login dengan Google');
    }
  };

  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="illustration-section">
        <img src={butterflyHug} alt="Butterfly Hug" />
      </div>

      {/* Right Section */}
      <div className="login-form">
        <h2 className="welcome-text">Senang bertemu denganmu lagi</h2>
        <form onSubmit={handleSignIn}>
          <label>Login</label>
          <input
            type="email"
            placeholder="Email atau phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? '👁️‍🗨️' : '👁️'}
            </span>
          </div>

          <div className="options">
            <label className="remember-me">
              <input type="checkbox" />
              <span className="switch"></span> Ingat saya
            </label>
            <a href="/forgot-password" className="forgot-password">
              Lupa password?
            </a>
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button type="submit" className="btn-primary">
            Sign in
          </button>

          <button type="button" className="btn-google" onClick={handleGoogleSignIn}>
            <img src={googlelogo} alt="GoogleLogo" /> Sign in with Google
          </button>
        </form>

        <p>
          Don't have an account? <a href="/register">Sign up now</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
