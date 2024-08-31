import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CityPage from "./views/CityPage";
import ContactPage from "./views/ContactPage";
import AboutPage from "./views/AboutPage";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner"; // Импортируем компонент спиннера

const App = () => {
  const [loading, setLoading] = useState(true); // Управление состоянием загрузки

  const handleLoadingComplete = () => {
    setLoading(false); // Завершаем загрузку, когда данные получены
  };

  return (
    <Router>
      {loading && <LoadingSpinner />} {/* Показываем спиннер, пока идет загрузка */}
      {!loading && <Header />}
      <Routes>
        <Route path="/" element={<CityPage onLoadingComplete={handleLoadingComplete} />} />
        <Route path="/city/:cityName" element={<CityPage onLoadingComplete={handleLoadingComplete} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;