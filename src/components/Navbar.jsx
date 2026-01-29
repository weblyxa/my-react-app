import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/weblyxa--png-.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="wb-navbar">
      {/* Logo */}
      <Link to="/" className="wb-logo-wrap">
        <img src={logo} alt="Weblyxa Logo" className="wb-logo-img" />
        <span className="wb-logo-text">Weblyxa</span>
      </Link>

      {/* Hamburger */}
      <div
        className="wb-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav */}
      <nav className={`wb-nav ${menuOpen ? "wb-open" : ""}`}>
        {["Home", "Services", "About", "Career", "Contact"].map((item) => (
          <Link
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="wb-nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </Link>
        ))}
      </nav>

      <style>{`
        /* ===== NAVBAR WRAPPER ===== */
        .wb-navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 60px;
          background: #ffffff;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 6px 20px rgba(0,0,0,0.05);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        /* ===== LOGO ===== */
        .wb-logo-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .wb-logo-img {
          height: 42px;
        }

        .wb-logo-text {
          font-size: 24px;
          font-weight: 800;
          letter-spacing: 1px;
          background: linear-gradient(135deg, #14b8a6, #1ec9b7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* ===== NAV LINKS ===== */
        .wb-nav {
          display: flex;
          gap: 30px;
        }

        .wb-nav-link {
          text-decoration: none;
          color: #334155;
          font-weight: 500;
          position: relative;
        }

        .wb-nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 0;
          height: 2px;
          background: #14b8a6;
          transition: width 0.3s ease;
        }

        .wb-nav-link:hover::after {
          width: 100%;
        }

        /* ===== HAMBURGER ===== */
        .wb-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
        }

        .wb-hamburger span {
          width: 26px;
          height: 3px;
          background: #334155;
          border-radius: 10px;
        }

        /* ===== MOBILE ===== */
        @media (max-width: 768px) {
          .wb-navbar {
            padding: 14px 24px;
          }

          .wb-hamburger {
            display: flex;
          }

          .wb-nav {
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background: #ffffff;
            flex-direction: column;
            align-items: center;
            gap: 22px;
            padding: 25px 0;
            box-shadow: 0 10px 25px rgba(0,0,0,0.08);
            transform: translateY(-120%);
            transition: transform 0.4s ease;
          }

          .wb-nav.wb-open {
            transform: translateY(0);
          }

          .wb-logo-img {
            height: 36px;
          }

          .wb-logo-text {
            font-size: 20px;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
