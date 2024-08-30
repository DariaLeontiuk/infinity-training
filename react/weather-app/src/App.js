import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CityPage from "./views/CityPage";
import ContactPage from "./views/ContactPage";
import AboutPage from "./views/AboutPage";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CityPage />} />
        <Route path="/city/:cityName" element={<CityPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
