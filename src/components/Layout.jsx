import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Layout.css';

const Layout = ({ children }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="layout">
      <header className="app-header">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>Team Management Dashboard</h1>
          </Link>
          <nav className="navigation">
            <Link 
              to="/users" 
              className={`nav-link ${isActive('/users') ? 'active' : ''}`}
            >
              Users
            </Link>
            <Link 
              to="/add-user" 
              className={`nav-link ${isActive('/add-user') ? 'active' : ''}`}
            >
              Add User
            </Link>
          </nav>
        </div>
      </header>
      <main className="app-main">
        {children}
      </main>
    </div>
  );
};

export default Layout;


