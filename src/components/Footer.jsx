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
          message: `A new user has subscribed: ${email}`
        })
      });

      if (response.ok) {
        setStatus("Subscribed!");
        setEmail("");
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus("Error. Try again.");
      }
    } catch (error) {
      setStatus("Error. Try again.");
    }
  };

  return (
    <footer className="footer-wrapper">
      {/* Background blobs */}
      <div className="footer-blob blob-1"></div>
      <div className="footer-blob blob-2"></div>

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-col">
          <h2 className="footer-logo">
            Weblyxa<span className="dot">.</span>
          </h2>

          <p className="footer-desc">
            We craft digital masterpieces. Turning complex ideas into
            stunning, high-performance websites that grow your business.
          </p>

          <form className="newsletter-box" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email for updates"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" disabled={status === "Sending..."}>
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
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li>New Delhi, India</li>
            <li><a href="mailto:weblyxa@gmail.com">weblyxa@gmail.com</a></li>
            <li><a href="tel:+918516012270">+91 85160 12270</a></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="footer-col">
          <h3>Follow</h3>
          <div className="socials">
            <a href="#"><FaFacebookF /></a>
            <a href="https://www.instagram.com/weblyxa/"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="https://wa.me/918516012270"><FaWhatsapp /></a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © 2026 Weblyxa Agency. Made with 💙 in India.
      </div>

      {/* STYLES */}
      <style>{`
        .footer-wrapper {
          background: #0f172a;
          color: #e2e8f0;
          padding: 5rem 8% 2rem;
          position: relative;
          overflow: hidden;
          border-top-left-radius: 60px;
          border-top-right-radius: 60px;
        }

        .footer-container {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 3rem;
          position: relative;
          z-index: 2;
        }

        .footer-logo {
          font-size: 2.3rem;
          font-weight: 800;
          color: white;
          text-shadow: 0 0 20px rgba(59,130,246,0.3);
        }

        .dot {
          color: #3b82f6;
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

        ul {
          list-style: none;
          padding: 0;
        }

        ul li {
          margin-bottom: 10px;
        }

        ul a {
          color: #94a3b8;
          text-decoration: none;
        }

        ul a:hover {
          color: #3b82f6;
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

        .socials {
          display: flex;
          gap: 10px;
        }

        .socials a {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
          color: white;
        }

        .socials a:hover {
          background: #3b82f6;
          transform: translateY(-5px);
        }

        .footer-bottom {
          margin-top: 3rem;
          text-align: center;
          font-size: 0.9rem;
          color: #64748b;
        }

        .footer-blob {
          position: absolute;
          width: 400px;
          height: 400px;
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

          .socials {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;