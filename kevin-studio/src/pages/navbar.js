import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../Logos/Logo.png";
// import Logo2 from "../Logos/House.svg"
import './CSS/navbar.css';

export default function navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <Link to='/' className="navbar-logo">
              {/* MyLogo */}
              <img src={Logo} alt="Logo" height={40} />
          </Link>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link to='/' className="navbar-link">Home</Link>
            </li>

            <li className="navbar-item">
              <Link to='/MyWork' className="navbar-link">My Work</Link>
            </li>

            <li className="navbar-item">
              <Link to='/About' className="navbar-link">About</Link>
            </li>

            <li className="navbar-item">
              <Link to='/Contact' className="navbar-link">Contact Us</Link>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  )
}
