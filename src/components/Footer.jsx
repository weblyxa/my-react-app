import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPaperPlane,
  FaWhatsappSquare
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
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: "New Newsletter Subscriber!",
          Email: email,
          message: `A new user has subscribed to the newsletter. Their email is: ${email}`
        })
      });

      if (response.ok) {
        setStatus("Subscribed!");
        setEmail("");
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus("Error. Try again.");
        setTimeout(() => setStatus(""), 3000);
      }
    } catch (error) {
      console.error(error);
      setStatus("Error. Try again.");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <footer className="footer-wrapper">
      {/* ANIMATED BACKGROUND BLOBS (Aurora) */}
      <div className="footer-blob blob-1"></div>
      <div className="footer-blob blob-2"></div>

      <div className="footer-container">

        {/* COL 1: BRAND */}
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
            <button type="submit" aria-label="Subscribe" disabled={status === "Sending..."}>
              {status === "Sending..." ? "..." : <FaPaperPlane />}
            </button>
          </form>
          {status && (
            <p style={{
              fontSize: "0.9rem",
              color: status === "Subscribed!" ? "#10b981" : "#ef4444",
              marginTop: "10px"
            }}>
              {status}
            </p>
          )}
        </div>


        {/* COL 2: EXPLORE */}
        <div className="footer-col">
          <h3>Explore</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* COL 3: CONTACT */}
        <div className="footer-col">
          <h3>Get in Touch</h3>
          <ul className="contact-list">
            <li>New Delhi, India</li>
            <li><a href="mailto:weblyxa@gmail.com">weblyxa@gmail.com</a></li>
            <li><a href="tel:+918516012270">+91 85160 12270</a></li>
          </ul>
        </div>

        {/* COL 4: SOCIALS */}
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-grid">
            <a href="#" className="social-icon fb"><FaFacebookF /></a>
            <a href="https://www.instagram.com/weblyxa/" className="social-icon insta"><FaInstagram /></a>
            <a href="#" className="social-icon linkedin"><FaLinkedinIn /></a>
            <a href="https://wa.me/918516012270" className="social-icon wa"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Weblyxa Agency. Made with 💙 in India.</p>
      </div>

      {/* STYLES */}
      <style>{`
        /* --- FOOTER CONTAINER (Always Dark) --- */
        .footer-wrapper {
          position: relative;
          background: #0f172a; /* Deep Navy from Home Theme */
          color: #e2e8f0;
          padding: 6rem 8% 2rem;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
          /* Modern curve separating body from footer */
          border-top-left-radius: 60px; 
          border-top-right-radius: 60px;
          margin-top: 0;
        }

        /* Dark Mode Body Fix: Ensure contrast if body is also dark */
        body.dark .footer-wrapper {
          border-top: 1px solid rgba(255,255,255,0.05);
          background: #020617; /* Slightly darker in dark mode */
        }

        /* --- AURORA ANIMATION --- */
        .footer-blob {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.15;
          z-index: 0;
          animation: blobFloat 10s infinite alternate;
        }
        
        .blob-1 { top: -200px; left: -100px; background: #3b82f6; } /* Premium Blue */
        .blob-2 { bottom: -200px; right: -100px; background: #a855f7; animation-delay: 5s; } /* Purple */

        @keyframes blobFloat {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }

        .footer-container {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1fr;
          gap: 4rem;
        }

        /* --- TYPOGRAPHY --- */
        .footer-logo {
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
        }

        .dot { color: #3b82f6; }

        .footer-desc {
          color: #94a3b8;
          line-height: 1.7;
          margin-bottom: 2rem;
          font-size: 1rem;
          max-width: 90%;
        }

        h3 {
          color: white;
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        /* --- NEWSLETTER INPUT --- */
        .newsletter-box {
          display: flex;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50px;
          padding: 6px;
          max-width: 380px;
          transition: 0.3s;
        }
        
        .newsletter-box:focus-within {
          border-color: #3b82f6;
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.2);
        }
        
        .newsletter-box input {
          flex: 1;
          background: transparent;
          border: none;
          padding: 10px 20px;
          color: white;
          outline: none;
          font-size: 0.95rem;
        }

        .newsletter-box button {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
          border: none;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          cursor: pointer;
          transition: 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
        }

        .newsletter-box button:hover {
          transform: scale(1.1);
          box-shadow: 0 0 15px #3b82f6;
        }

        /* --- LINKS --- */
        .footer-links, .contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li, .contact-list li {
          margin-bottom: 14px;
        }

        .footer-links a, .contact-list a {
          color: #94a3b8;
          text-decoration: none;
          transition: 0.3s;
          display: inline-block;
          font-size: 0.95rem;
        }

        .contact-list li { color: #94a3b8; font-size: 0.95rem; }

        .footer-links a:hover {
          color: #3b82f6;
          transform: translateX(8px);
        }
        
        .contact-list a:hover { color: white; }

        /* --- SOCIAL ICONS (Super Spin) --- */
        .social-grid {
          display: flex;
          gap: 15px;
        }

        .social-icon {
          width: 45px;
          height: 45px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
          transition: 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
        }

        /* Brand Colors on Hover */
        .social-icon.fb:hover { background: #1877f2; border-color: #1877f2; }
        .social-icon.insta:hover { background: #e4405f; border-color: #e4405f; }
        .social-icon.linkedin:hover { background: #0a66c2; border-color: #0a66c2; }
        .social-icon.wa:hover { background: #25D366; border-color: #25D366; }

        .social-icon:hover {
          transform: translateY(-8px) rotate(360deg);
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }

        /* --- BOTTOM BAR --- */
        .footer-bottom {
          margin-top: 5rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.05);
          text-align: center;
          color: #64748b;
          font-size: 0.9rem;
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 1024px) {
          .footer-container {
             grid-template-columns: 1fr 1fr;
             gap: 3rem;
          }
        }

        @media (max-width: 600px) {
          .footer-wrapper { padding: 4rem 6% 2rem; }
          .footer-container {
             grid-template-columns: 1fr;
             text-align: center;
          }
          .newsletter-box { margin: 0 auto; }
          .social-grid { justify-content: center; }
          .footer-links a:hover { transform: none; color: #3b82f6; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;