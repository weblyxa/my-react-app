import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const accentColor = "#00acc1";

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-col">
          <h2 className="logo">Weblyxa</h2>
          <p className="desc">
            We craft digital experiences that elevate your brand and help your
            business grow online.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          {["Home", "About", "Services", "Contact"].map((link, i) => (
            <a key={i} href={`/#${link.toLowerCase()}`} className="footer-link">
              {link}
              <span className="underline"></span>
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact</h3>
          <p>📍 New Delhi</p>
          <p>
            📧{" "}
            <a href="mailto:contact@weblyxa.in" className="accent">
              contact@weblyxa.in
            </a>
          </p>
          <p>
            📞{" "}
            <a href="tel:8516012270" className="accent">
              +91 8516012270
            </a>
          </p>
        </div>

        {/* Social */}
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="socials">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
              (Icon, i) => (
                <span key={i} className="icon">
                  <Icon />
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026{" "}
        <a href="https://www.weblyxa.com" className="accent">
          Weblyxa
        </a>
        . All Rights Reserved.
      </div>

      {/* CSS */}
      <style>{`
        .footer {
          background: #f9fafb;
          padding: 60px 20px 30px;
          border-top: 2px solid #eaeaea;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
          transition: all 0.3s ease;
        }

        body.dark .footer {
          background: #020617;
          color: #e5e7eb;
          border-top-color: #333;
        }

        .footer-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }

        .footer-col h3 {
          font-size: 16px;
          margin-bottom: 15px;
          color: #333;
        }

        body.dark .footer-col h3 {
          color: #e5e7eb;
        }

        .logo {
          font-size: 28px;
          font-weight: bold;
          color: ${accentColor};
          margin-bottom: 10px;
        }

        .desc {
          font-size: 14px;
          color: #555;
          line-height: 1.6;
        }

        body.dark .desc {
          color: #ccc;
        }

        .footer-col a,
        .footer-col p {
          display: block;
          font-size: 14px;
          color: #555;
          text-decoration: none;
          margin-bottom: 10px;
          position: relative;
        }

        body.dark .footer-col a,
        body.dark .footer-col p {
          color: #ccc;
        }

        .footer-col a:hover {
          color: ${accentColor};
        }

        /* Hover underline animation for links */
        .footer-link {
          position: relative;
          display: inline-block;
        }

        .footer-link .underline {
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0%;
          height: 2px;
          background: ${accentColor};
          transition: width 0.3s ease;
        }

        .footer-link:hover .underline {
          width: 100%;
        }

        .accent {
          color: ${accentColor};
          text-decoration: none;
        }

        .socials {
          display: flex;
          gap: 15px;
          margin-top: 10px;
        }

        .icon {
          width: 38px;
          height: 38px;
          background: ${accentColor};
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .icon:hover {
          transform: scale(1.2);
          box-shadow: 0 4px 15px ${accentColor}55;
        }

        .footer-bottom {
          margin-top: 50px;
          padding-top: 20px;
          text-align: center;
          border-top: 1px solid #eaeaea;
          font-size: 14px;
          color: #555;
        }

        body.dark .footer-bottom {
          border-top-color: #333;
          color: #ccc;
        }

        /* ================= MOBILE ================= */
        @media (max-width: 900px) {
          .footer-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 500px) {
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
