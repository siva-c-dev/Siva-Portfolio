import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-section logo-social">
        <NavLink to="/" className="navbar-brand nav-link fs-4 text-dark">
          <img
            src="LOGO.png"
            alt="Logo"
            className="nav-icon-footer"
            style={{ height: "50px", width: "60px", color: "black" }}
          />
        </NavLink>
        <p className="tagline">Crafting clean and modern web experiences</p>

        <div className="social-icons">
          <a
            href="https://www.facebook.com/siva.bsc.2025/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/its__shivv_a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://github.com/siva-c-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>

      <div className="footer-section">
        <h4>Quick Links</h4>
        <NavLink to="/" className="nav-link">
          <i className="bi bi-house-door"></i> Home
        </NavLink>
        <NavLink to="/About" className="nav-link">
          <i className="bi bi-file-earmark-person"></i> About
        </NavLink>
        <NavLink to="/Certificates" className="nav-link">
          <i className="bi bi-file-earmark-pdf"></i> Cerificates
        </NavLink>
        <NavLink to="/Skills" className="nav-link">
          <i className="bi bi-stack-overflow"></i> Skills
        </NavLink>
        <NavLink to="/Contact" className="nav-link">
          <i className="bi bi-telephone-forward"></i> Contact
        </NavLink>
      </div>

      <div className="footer-section">
        <h4>Address</h4>
        <p>103/A, Middle Street</p>
        <p>Tirunelveli Near New Bus Stand</p>
        <p>Pin Code: 627108</p>
      </div>
    </div>
  );
}

export default Footer;
