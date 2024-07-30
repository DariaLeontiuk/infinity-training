import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import PageTemplate from './components/PageTemplate';
import './App.css';

function App() {
  return (
    <Router>
      <PageTemplate>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </PageTemplate>
    </Router>
  );
}

export default App;