import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CityPage from './pages/CityPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header onCitySearch={(city) => { window.location.href = `/city/${city}`; }} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/city/:cityName" element={<CityPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;