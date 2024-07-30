import React from 'react';
import { Link } from 'react-router-dom';
import './PageTemplate.css';

const PageTemplate = ({ children }) => {
  return (
    <div className="page-template">
      <nav className="sidebar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default PageTemplate;