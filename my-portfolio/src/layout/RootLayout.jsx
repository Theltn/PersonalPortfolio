import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="container layout">
        {/* Outlet acts as a placeholder for child routes to render their component */}
        <Outlet />
      </main>
      <footer className="container footer">
        <div className="footer__inner">
          <p className="muted">© 2026 Theodore Helton</p>
        </div>
      </footer>
    </>
  );
};

export default RootLayout;
