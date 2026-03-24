import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isLightMode, setIsLightMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'light';
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLightMode]);

  const toggleTheme = () => setIsLightMode(prev => !prev);

  return (
    <header className="topbar">
      <div className="container topbar__inner">
        <div className="identity">
          <div className="avatar">TH</div>
          <div>
            <h1 className="name">Theodore Helton</h1>
            <p className="headline">Computer Science Student</p>
          </div>
        </div>
        <nav className="actions" style={{ alignItems: 'center' }}>
          <NavLink to="/" className={({ isActive }) => (isActive ? "btn btn--primary" : "btn")}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "btn btn--primary" : "btn")}>Projects</NavLink>
          <NavLink to="/experience" className={({ isActive }) => (isActive ? "btn btn--primary" : "btn")}>Experience</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "btn btn--primary" : "btn")}>Contact</NavLink>
          <button 
            onClick={toggleTheme} 
            className="btn" 
            style={{ marginLeft: '8px', padding: '6px 12px', fontSize: '1.2rem', background: 'transparent', border: 'none', cursor: 'pointer' }} 
            aria-label="Toggle Theme"
            title="Toggle Theme"
          >
            {isLightMode ? '🌙' : '☀️'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
