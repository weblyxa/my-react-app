import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/weblyxa--png-.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header className="wb-navbar">
      {/* BRAND */}
      <Link to="/" className="wb-brand">
        <motion.img
          src={logo}
          alt="Weblyxa"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.15 }}
        />
        <span>Weblyxa</span>
      </Link>

      {/* HAMBURGER */}
      <div className={`wb-menu ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
        <span></span><span></span><span></span>
      </div>

      {/* NAV */}
      <nav className={`wb-nav ${open ? "show" : ""}`}>
        {["Home", "Services", "About", "Career", "Contact"].map((item) => (
          <Link
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            onClick={() => setOpen(false)}
            className="wb-nav-link"
          >
            {item}
          </Link>
        ))}

        <Link to="/contact" className="wb-cta">Get Quote</Link>

        <button className="dark-btn" onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* Styles */}
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body.dark {
          background: #020617;
          color: #e5e7eb;
        }

        /* NAVBAR */
        .wb-navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 16px 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          backdrop-filter: blur(12px);
          background: rgba(255,255,255,0.85);
          box-shadow: 0 8px 25px rgba(0,0,0,0.06);
        }

        body.dark .wb-navbar {
          background: rgba(2,6,23,0.85);
        }

        /* BRAND */
        .wb-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .wb-brand img {
          height: 42px;
        }

        .wb-brand span {
          font-size: 26px;
          font-weight: 800;
          background: linear-gradient(135deg,#14b8a6,#22d3ee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* NAV LINKS */
        .wb-nav {
          display: flex;
          align-items: center;
          gap: 26px;
        }

        .wb-nav-link {
          position: relative;
          text-decoration: none;
          color: #334155;
          font-weight: 500;
          padding: 4px 0;
        }

        body.dark .wb-nav-link {
          color: #e5e7eb;
        }

        /* Underline animation */
        .wb-nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0%;
          height: 2px;
          background: #14b8a6;
          transition: width 0.3s ease;
        }

        .wb-nav-link:hover::after {
          width: 100%;
        }

        /* CTA */
        .wb-cta {
          padding: 10px 22px;
          border-radius: 30px;
          background: linear-gradient(135deg,#14b8a6,#22d3ee);
          color: white !important;
          font-weight: 600;
          box-shadow: 0 8px 22px rgba(20,184,166,0.35);
          text-decoration: none;
        }

        /* DARK BUTTON */
        .dark-btn {
          border: none;
          background: none;
          font-size: 20px;
          cursor: pointer;
          margin-left: 10px;
        }

        /* MENU */
        .wb-menu {
          display: none;
          flex-direction: column;
          gap: 6px;
          cursor: pointer;
        }

        .wb-menu span {
          width: 26px;
          height: 3px;
          background: currentColor;
          border-radius: 10px;
        }

        @media (max-width:768px) {
          .wb-menu { display: flex; }

          .wb-nav {
            position: absolute;
            top: 75px;
            left: 0;
            width: 100%;
            flex-direction: column;
            background: inherit;
            padding: 24px 0;
            transform: translateY(-120%);
            transition: 0.4s;
            gap: 20px;
          }

          .wb-nav.show {
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
