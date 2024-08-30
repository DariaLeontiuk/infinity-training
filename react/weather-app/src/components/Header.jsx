import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    if (city.trim() !== "") {
      navigate(`/city/${city}`);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="header-container">
      <Link to="/" className="header-title">
        Weather App
      </Link>
      <div className="header-right">
        <form className="search-box" onSubmit={handleSearch}>
          <button className="btn-search" type="submit">
            <i className="fas fa-search"></i>
          </button>
          <input
            type="text"
            className="input-search"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </form>
        <div className="nav-dropdown">
          <button onClick={toggleDropdown}>&#9776;</button>
          <div className={`nav-dropdown-menu ${dropdownOpen ? "show" : ""}`}>
            <Link to="/" onClick={() => setDropdownOpen(false)}>
              My Location
            </Link>
            <Link to="/contact" onClick={() => setDropdownOpen(false)}>
              Contact Us
            </Link>
            <Link to="/about" onClick={() => setDropdownOpen(false)}>
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
