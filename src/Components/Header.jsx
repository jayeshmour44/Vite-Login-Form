import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Header.css'
import { UserContext } from '../Context/UserContext';
import { ThemeContext } from '../Context/ThemeContext';

const Header = ({ toggleSidebar }) => {
  const { user, setUser } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <header className="header">

      {/* === NEW HAMBURGER BUTTON === */}
      <button className="hamburger-btn" onClick={toggleSidebar}>
        ☰
      </button>

      <h2 className="logo">Welcome, {user}</h2>

      <nav className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/table">Table</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <button className='theme-btn' onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>

      <button className="logout-btn" onClick={logout}>Logout</button>
    </header>
  );
};

export default Header;
