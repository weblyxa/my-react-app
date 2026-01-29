import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Navbar />

      <style>{`
        /* DARK MODE */
        body.dark .contact-hero,
        body.dark .contact-wrapper,
        body.dark .contact-box,
        body.dark .contact-form button {
          background: #12121d;
          color: #e5e7eb;
        }
        body.dark .contact-box {
          box-shadow: 0 20px 45px rgba(0,0,0,0.3);
        }
        body.dark .contact-form input,
        body.dark .contact-form textarea {
          background: #1f1f2b;
          border-color: #333;
          color: #e5e7eb;
        }
        body.dark .contact-form input:focus,
        body.dark .contact-form textarea:focus {
          border-color: #14b8a6;
          box-shadow: 0 0 0 3px rgba(20,184,166,.15);
        }
        body.dark .contact-details p {
          color: #cbd5e1;
        }
        body.dark .whatsapp-btn {
          box-shadow: 0 15px 35px rgba(0,0,0,0.35);
        }

        /* HERO */
        .contact-hero {
          padding: 120px 20px 80px;
          text-align: center;
          background: linear-gradient(135deg,#0f766e,#14b8a6);
          color: white;
        }
        .contact-hero h1 { font-size: 3rem; font-weight: 800; }
        .contact-hero p {
          margin-top: 10px;
          max-width: 720px;
          margin-inline: auto;
          opacity: .95;
        }

        /* MAIN WRAPPER */
        .contact-wrapper {
          padding: 90px 8%;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          background: #f8fafc;
        }

        /* BOXES */
        .contact-box {
          background: white;
          padding: 45px;
          border-radius: 22px;
          box-shadow: 0 20px 45px rgba(0,0,0,.08);
          transition: transform .35s ease, box-shadow .35s ease;
        }
        .contact-box:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(0,0,0,.15);
        }

        .contact-box h2 { color: #0f766e; margin-bottom: 15px; font-size: 2rem; }
        .contact-box p { color: #64748b; line-height: 1.6; }

        .contact-details p { margin-top: 12px; font-weight: 500; }

        /* FORM */
        .contact-form h3 { margin-bottom: 25px; color: #0f766e; }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          outline: none;
          margin-bottom: 15px;
          font-size: .95rem;
          transition: .25s;
        }
        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: #14b8a6;
          box-shadow: 0 0 0 3px rgba(20,184,166,.15);
        }

        .contact-form button {
          margin-top: 5px;
          padding: 14px 34px;
          border-radius: 999px;
          border: none;
          background: linear-gradient(135deg,#0f766e,#14b8a6);
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: .35s;
        }
        .contact-form button:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(20,184,166,.45);
        }

        /* WHATSAPP */
        .whatsapp-btn {
          position: fixed;
          right: 28px;
          bottom: 28px;
          background: #25D366;
          color: white;
          padding: 14px 22px;
          border-radius: 999px;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 15px 35px rgba(0,0,0,.2);
          transition: .3s;
          z-index: 1000;
        }
        .whatsapp-btn:hover { transform: translateY(-6px); }

        @media (max-width: 900px) {
          .contact-wrapper { grid-template-columns: 1fr; padding: 70px 6%; }
          .contact-hero h1 { font-size: 2.3rem; }
        }
      `}</style>

      {/* HERO */}
      <section className="contact-hero" data-aos="fade-down">
        <h1>Contact Weblyxa</h1>
        <p>
          Have a project idea or business query?  
          Let’s connect and create something impactful together.
        </p>
      </section>

      {/* CONTENT */}
      <section className="contact-wrapper">
        {/* INFO BOX */}
        <div className="contact-box" data-aos="fade-right">
          <h2>Let’s Talk</h2>
          <p>
            Share your project requirements with us and our team will
            get back to you within 24 hours.
          </p>

          <div className="contact-details">
            <p><strong>Email:</strong> hello@weblyxa.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Location:</strong> India · Remote Worldwide</p>
          </div>
        </div>

        {/* FORM BOX */}
        <form
          className="contact-box contact-form"
          onSubmit={handleSubmit}
          data-aos="fade-left"
        >
          <h3>Send Us a Message</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Project Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            rows="5"
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        WhatsApp Us
      </a>

      <Footer />
    </>
  );
};

export default Contact;
