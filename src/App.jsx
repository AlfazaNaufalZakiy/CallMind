import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CrisisSupportPage from './pages/CrisisSupportPage';
import RekomendasiPersonalPage from './pages/RekomendasiPersonalPage';
import TrackingPage from './pages/TrackingPage';
import DashboardPage from './pages/DashboardPage';
import ObrolanPage from './pages/ObrolanPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/chat" element={<ObrolanPage />} />
        <Route path="/crisis-support" element={<CrisisSupportPage />} />
        <Route path="/recommendations" element={<RekomendasiPersonalPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
      </Routes>
    </Router>
  );
};

export default App;