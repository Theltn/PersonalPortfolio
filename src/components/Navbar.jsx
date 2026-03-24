import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
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
        <nav className="actions">
          <NavLink to="/" className={({ isActive }) => (isActive ? "btn btn--primary" : "btn")}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "btn btn--primary" : "btn")}>Projects</NavLink>
          <NavLink to="/experience" className={({ isActive }) => (isActive ? "btn btn--primary" : "btn")}>Experience</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "btn btn--primary" : "btn")}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
