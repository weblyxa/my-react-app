import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("Sending...");

    try {
      const response = await fetch("https://formsubmit.co/ajax/weblyxa@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          _subject: "New Newsletter Subscriber!",
          Email: email,
          message: `A new user subscribed: ${email}`
        })
      });

      if (response.ok) {
        setStatus("Subscribed!");
        setEmail("");
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus("Error. Try again.");
      }
    } catch {
      setStatus("Error. Try again.");
    }
  };

  return (
    <footer className="footer-wrapper">

      {/* BLOBS */}
      <div className="footer-blob blob-1"></div>
      <div className="footer-blob blob-2"></div>

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-col brand-col">
          <h2 className="footer-logo">
            Weblyxa<span className="dot"></span>
          </h2>

          <p className="footer-desc">
            We craft digital masterpieces. Turning complex ideas into
            stunning, high-performance websites that grow your business.
          </p>

          <form className="newsletter-box" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">
              {status === "Sending..." ? "..." : <FaPaperPlane />}
            </button>
          </form>

          {status && (
            <p className={`status ${status === "Subscribed!" ? "success" : "error"}`}>
              {status}
            </p>
          )}
        </div>

        {/* EXPLORE */}
        <div className="footer-col">
          <h3>Explore</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>Contact</h3>
          <ul className="contact-list">
            <li>New Delhi, India</li>
            <li><a href="mailto:weblyxa@gmail.com">weblyxa@gmail.com</a></li>
            <li><a href="tel:+918516012270">+91 85160 12270</a></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="footer-col">
          <h3>Follow</h3>
          <div className="social-grid">
            <a href="#" className="social-icon fb"><FaFacebookF /></a>
            <a href="https://www.instagram.com/weblyxa/" className="social-icon insta"><FaInstagram /></a>
            <a href="#" className="social-icon linkedin"><FaLinkedinIn /></a>
            <a href="https://wa.me/918516012270" className="social-icon tw"><FaWhatsapp /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Weblyxa Agency. Made with 💙 in India.
      </div>

      {/* STYLES */}
      <style>{`

        .footer-wrapper {
          background: #0f172a;
          color: #e2e8f0;
          padding: 6rem 8% 2rem;
          position: relative;
          overflow: hidden;
          border-top-left-radius: 60px;
          border-top-right-radius: 60px;
        }

        /* LOGO FIX (IMPORTANT 🔥) */
        .footer-logo {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #3b82f6, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        .dot {
          color: #3b82f6;
        }

        .footer-container {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1fr;
          gap: 3rem;
          position: relative;
          z-index: 2;
        }

        .footer-desc {
          margin: 1rem 0 2rem;
          color: #94a3b8;
          line-height: 1.6;
        }

        h3 {
          color: white;
          margin-bottom: 1rem;
        }

        .footer-links,
        .contact-list {
          list-style: none;
          padding: 0;
        }

        .footer-links li,
        .contact-list li {
          margin-bottom: 10px;
        }

        .footer-links a,
        .contact-list a {
          color: #94a3b8;
          text-decoration: none;
        }

        .footer-links a:hover {
          color: #3b82f6;
          transform: translateX(6px);
        }

        .newsletter-box {
          display: flex;
          background: rgba(255,255,255,0.05);
          border-radius: 50px;
          padding: 5px;
        }

        .newsletter-box input {
          flex: 1;
          background: transparent;
          border: none;
          color: white;
          padding: 10px;
          outline: none;
        }

        .newsletter-box button {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          border: none;
          color: white;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          cursor: pointer;
        }

        .status {
          margin-top: 10px;
          font-size: 0.9rem;
        }

        .success { color: #10b981; }
        .error { color: #ef4444; }

        .social-grid {
          display: flex;
          gap: 12px;
        }

        .social-icon {
          width: 45px;
          height: 45px;
          background: rgba(255,255,255,0.05);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: 0.4s;
        }

        .social-icon:hover {
          transform: translateY(-6px) rotate(360deg);
          background: #3b82f6;
        }

        .footer-bottom {
          margin-top: 4rem;
          text-align: center;
          font-size: 0.9rem;
          color: #64748b;
        }

        .footer-blob {
          position: absolute;
          width: 450px;
          height: 450px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
        }

        .blob-1 {
          background: #3b82f6;
          top: -150px;
          left: -100px;
        }

        .blob-2 {
          background: #a855f7;
          bottom: -150px;
          right: -100px;
        }

        @media(max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .social-grid {
            justify-content: center;
          }
        }

      `}</style>
    </footer>
  );
};

export default Footer;