import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsSun, BsMoonStars } from "react-icons/bs"; // Icons for Dark Mode
import lightLogo from "../assets/weblyxa-logo-light-transparent.png";
import darkLogo from "../assets/weblyxa-logo-dark-transparent.png";

const THEME_KEY = "weblyxa-theme";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => {
    const storedTheme = localStorage.getItem(THEME_KEY);
    if (storedTheme === "dark") return true;
    if (storedTheme === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // 1. Dark Mode Logic (global + persistent across pages)
  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
  }, [dark]);

  // 2. Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`wb-navbar ${scrolled ? "scrolled" : ""}`}>
      {/* BRAND */}
      <Link to="/" className="wb-brand">
        <div className="logo-wrapper">
          <img
            src={dark ? darkLogo : lightLogo}
            alt="Weblyxa logo"
            className="logo-img"
          />
        </div>
      </Link>

      {/* NAV LINKS */}
      <nav className={`wb-nav ${open ? "mobile-open" : ""}`}>
        {["Home", "Services", "About", "Career"].map((item) => (
          <Link
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            {item}
            <span className="hover-dot"></span>
          </Link>
        ))}

        {/* CTA BUTTON */}
        <Link to="/contact" className="wb-cta-btn" onClick={() => setOpen(false)}>
          <span>Get Quote</span>
          <div className="liquid"></div>
        </Link>

        {/* DARK MODE TOGGLE (Mobile mein bhi dikhega) */}
        <button
          className="theme-toggle"
          onClick={() => setDark((prev) => !prev)}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          title={dark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {dark ? <BsSun className="sun-icon" /> : <BsMoonStars className="moon-icon" />}
        </button>
        
        {/* CLOSE BTN (Mobile) */}
        <div className="mobile-close" onClick={() => setOpen(false)}>
            <FaTimes />
        </div>
      </nav>

      {/* HAMBURGER */}
      <div className="wb-hamburger" onClick={() => setOpen(!open)}>
        <FaBars />
      </div>

      {/* CSS STYLES */}
      <style>{`
        /* --- NAVBAR BASE --- */
        .wb-navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 20px 8%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 9999;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: transparent;
        }

        /* LIGHT MODE GLASS */
        .wb-navbar.scrolled {
          padding: 12px 8%;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.5);
        }

        /* DARK MODE GLASS (Home Theme Color) */
        body.dark .wb-navbar.scrolled {
          background: rgba(3, 0, 20, 0.7); /* Deep Space Dark */
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        /* --- BRAND --- */
        .wb-brand {
          display: flex;
          align-items: center;
          gap: 0;
          text-decoration: none;
        }

        .logo-wrapper {
          width: 236px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .logo-img {
          width: 140%;
          max-height: 280%;
          height: auto;
          object-fit: contain;
          object-position: center;
          transition: transform 0.25s ease;
          display: block;
        }

        .wb-brand:hover .logo-img {
          transform: scale(1.015);
        }

        /* --- NAV LINKS --- */
        .wb-nav {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .nav-link {
          text-decoration: none;
          color: #4b5563;
          font-weight: 600;
          font-size: 1rem;
          position: relative;
          padding: 5px 0;
          transition: 0.3s;
        }

        body.dark .nav-link { color: #cbd5e1; }

        .nav-link:hover {
          color: #2563eb;
          transform: translateY(-2px);
        }
        
        body.dark .nav-link:hover { color: #60a5fa; }

        /* Dot Animation */
        .hover-dot {
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%) scale(0);
          width: 6px;
          height: 6px;
          background: #2563eb;
          border-radius: 50%;
          transition: transform 0.3s;
          box-shadow: 0 0 10px #2563eb;
        }

        .nav-link:hover .hover-dot {
          transform: translateX(-50%) scale(1);
        }

        /* --- TOGGLE BUTTON (Sun/Moon) --- */
        .theme-toggle {
          background: rgba(0,0,0,0.05);
          border: none;
          cursor: pointer;
          padding: 10px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: 0.3s;
          color: #1a1a1a;
        }

        body.dark .theme-toggle {
          background: rgba(255,255,255,0.1);
          color: #fbbf24; /* Sun Yellow */
        }

        .theme-toggle:hover {
          transform: rotate(20deg) scale(1.1);
          background: rgba(0,0,0,0.1);
        }
        
        body.dark .theme-toggle:hover {
          background: rgba(255,255,255,0.2);
          box-shadow: 0 0 15px #fbbf24;
        }

        /* --- GLOWING CTA BUTTON --- */
        .wb-cta-btn {
          position: relative;
          padding: 10px 24px;
          background: #1a1a1a;
          color: white;
          text-decoration: none;
          font-weight: 700;
          border-radius: 30px;
          overflow: hidden;
          transition: 0.4s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        body.dark .wb-cta-btn {
          background: white;
          color: #1a1a1a;
        }

        .wb-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(37, 99, 235, 0.4);
        }
        
        body.dark .wb-cta-btn:hover {
           box-shadow: 0 10px 20px rgba(255, 255, 255, 0.3);
        }

        /* Liquid animation inside button */
        .liquid {
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: 0.5s;
        }
        .wb-cta-btn:hover .liquid { left: 100%; }

        /* --- MOBILE MENU --- */
        .wb-hamburger {
          display: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #1a1a1a;
        }
        
        body.dark .wb-hamburger { color: white; }

        .mobile-close { display: none; }

        @media (max-width: 900px) {
          .logo-wrapper {
            width: 190px;
            height: 50px;
          }

          .wb-hamburger { display: block; }

          .wb-nav {
            position: fixed;
            top: 0; right: 0;
            width: 80%;
            height: 100vh;
            /* Light/Dark Mobile Background */
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            justify-content: center;
            transform: translateX(100%);
            transition: 0.5s cubic-bezier(0.77, 0, 0.175, 1);
            box-shadow: -10px 0 30px rgba(0,0,0,0.1);
            padding: 2rem;
            gap: 25px;
          }
          
          body.dark .wb-nav {
             background: #030014; /* Dark Mobile Bg */
          }

          .wb-nav.mobile-open { transform: translateX(0); }
          .nav-link { font-size: 1.4rem; }
          
          .mobile-close {
            display: block;
            position: absolute;
            top: 30px; right: 30px;
            font-size: 1.8rem;
            cursor: pointer;
            color: #ef4444;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;