import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// Make sure to install: npm install react-icons
import { 
  FaPaperPlane, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, 
  FaPhoneAlt, FaRegCopy, FaCheck 
} from "react-icons/fa";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State for "Copied" tooltip
  const [copied, setCopied] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! We will contact you shortly.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  // Function to copy text to clipboard
  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <>
      <Navbar />

      <style>{`
        /* --- THEME VARIABLES (Synced with Home) --- */
        :root {
          /* LIGHT MODE */
          --bg-main: linear-gradient(135deg, #f8f9fc 0%, #eef2f7 100%);
          --bg-card: rgba(255, 255, 255, 0.7);
          --text-main: #1a1a1a;
          --text-sub: #64748b;
          --border-color: rgba(0, 0, 0, 0.08);
          --shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
          --blob-opacity: 0.6;
          --accent: #3b82f6;
        }

        /* DARK MODE */
        body.dark {
          --bg-main: #0f172a;
          --bg-card: rgba(30, 41, 59, 0.6);
          --text-main: #f8fafc;
          --text-sub: #94a3b8;
          --border-color: rgba(255, 255, 255, 0.1);
          --shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          --blob-opacity: 0.25;
          --accent: #38bdf8;
        }

        /* RESET */
        body {
          font-family: 'Inter', sans-serif;
          background: var(--bg-main);
          color: var(--text-main);
          margin: 0;
          overflow-x: hidden;
        }

        /* --- BACKGROUND BLOBS --- */
        .wrapper { position: relative; overflow: hidden; }
        .bg-glow {
          position: absolute;
          width: 700px; height: 700px;
          filter: blur(100px);
          opacity: var(--blob-opacity);
          z-index: -1;
          animation: floatGlow 12s infinite alternate;
        }
        .glow-1 { top: -10%; right: -10%; background: radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%); }
        .glow-2 { bottom: -10%; left: -10%; background: radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%); }

        @keyframes floatGlow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-40px, 40px); }
        }

        /* --- HERO SECTION --- */
        .contact-hero {
          padding: 10rem 8% 4rem;
          text-align: center;
          position: relative;
        }

        .contact-hero h1 {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          color: var(--text-main);
        }

        .shimmer-text {
          background: linear-gradient(to right, #1a1a1a 20%, #3b82f6 50%, #1a1a1a 80%);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }
        
        body.dark .shimmer-text {
          background: linear-gradient(to right, #ffffff 20%, #38bdf8 50%, #ffffff 80%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @keyframes shimmer { to { background-position: 200% center; } }

        .contact-hero p {
          font-size: 1.25rem;
          color: var(--text-sub);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* --- MAIN LAYOUT (Grid) --- */
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          padding: 2rem 10% 8rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* --- LEFT SIDE: INFO CARDS --- */
        .info-wrapper {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        /* Status Badge */
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
          width: fit-content;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }
        
        .pulse-dot {
          width: 10px; height: 10px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          animation: pulse-green 2s infinite;
        }

        @keyframes pulse-green {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        .info-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 0.5rem;
        }
        
        .info-subtitle {
          color: var(--text-sub);
          margin-bottom: 2rem;
          font-size: 1.1rem;
        }

        /* Interactive Info Cards */
        .info-card {
          background: var(--bg-card);
          padding: 1.5rem;
          border-radius: 20px;
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          gap: 1.5rem;
          cursor: pointer;
          transition: 0.3s;
          position: relative;
          backdrop-filter: blur(10px);
        }

        .info-card:hover {
          transform: translateX(10px);
          border-color: var(--accent);
          background: rgba(59, 130, 246, 0.05);
        }
        
        body.dark .info-card:hover { background: rgba(56, 189, 248, 0.1); }

        .icon-circle {
          width: 50px; height: 50px;
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
        }

        .info-content h4 { margin: 0; font-size: 0.9rem; color: var(--text-sub); }
        .info-content p { margin: 5px 0 0; font-size: 1.1rem; font-weight: 600; color: var(--text-main); }

        /* Copy Tooltip */
        .copy-icon {
          margin-left: auto;
          color: var(--text-sub);
          opacity: 0.5;
          transition: 0.3s;
        }
        .info-card:hover .copy-icon { opacity: 1; color: var(--accent); }

        .copied-tooltip {
          position: absolute;
          right: 10px; top: -10px;
          background: #10b981;
          color: white;
          font-size: 0.8rem;
          padding: 4px 10px;
          border-radius: 10px;
          animation: fadeUp 0.3s ease;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* --- RIGHT SIDE: FORM --- */
        .form-wrapper {
          background: var(--bg-card);
          padding: 3rem;
          border-radius: 32px;
          border: 1px solid var(--border-color);
          backdrop-filter: blur(20px);
          box-shadow: var(--shadow);
          position: relative;
          overflow: hidden;
        }

        /* Holographic Border Top */
        .form-wrapper::before {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 100%; height: 4px;
          background: linear-gradient(90deg, #3b82f6, #a855f7, #ec4899);
        }

        .form-group { margin-bottom: 1.5rem; position: relative; }

        .form-input, .form-textarea {
          width: 100%;
          padding: 16px 20px;
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          color: var(--text-main);
          font-size: 1rem;
          outline: none;
          transition: 0.3s;
          font-family: 'Inter', sans-serif;
        }

        body.dark .form-input, body.dark .form-textarea {
          background: rgba(0, 0, 0, 0.2);
        }

        .form-input:focus, .form-textarea:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
          background: transparent;
        }

        .form-btn {
          width: 100%;
          padding: 16px;
          border-radius: 16px;
          background: #1a1a1a;
          color: white;
          font-size: 1.1rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          position: relative;
          overflow: hidden;
        }
        
        body.dark .form-btn { background: white; color: #1a1a1a; }

        .form-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(59, 130, 246, 0.3);
        }

        /* Liquid Effect on Button */
        .liquid {
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: 0.5s;
        }
        .form-btn:hover .liquid { left: 100%; }

        /* --- WHATSAPP FLOATING BTN --- */
        .wa-float {
          position: fixed;
          bottom: 30px; right: 30px;
          background: #25D366;
          color: white;
          width: 60px; height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          box-shadow: 0 10px 20px rgba(37, 211, 102, 0.4);
          z-index: 100;
          transition: 0.3s;
          animation: bounce 2s infinite;
        }
        
        .wa-float:hover { transform: scale(1.1); }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-10px);}
          60% {transform: translateY(-5px);}
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .contact-hero h1 { font-size: 3rem; }
          .contact-container { grid-template-columns: 1fr; gap: 3rem; }
          .info-wrapper { order: 2; }
          .form-wrapper { order: 1; }
        }
      `}</style>

      <div className="wrapper">
        <div className="bg-glow glow-1"></div>
        <div className="bg-glow glow-2"></div>

        {/* HERO */}
        <section className="contact-hero">
          <h1 data-aos="fade-down">
            Let’s Build Something <br />
            <span className="shimmer-text">Extraordinary.</span>
          </h1>
          <p data-aos="fade-up">
            Have a project in mind? We'd love to hear about it. 
            Let's discuss how we can help your business grow.
          </p>
        </section>

        {/* MAIN CONTENT GRID */}
        <div className="contact-container">
          
          {/* LEFT: INFO & STATUS */}
          <div className="info-wrapper" data-aos="fade-right">
            <div>
              <div className="status-badge">
                <span className="pulse-dot"></span>
                Available for new projects
              </div>
              <h2 className="info-title">Get in touch</h2>
              <p className="info-subtitle">
                Fill out the form or reach us directly. We usually reply within 2 hours.
              </p>
            </div>

            {/* Click to Copy Card: Email */}
            <div className="info-card" onClick={() => handleCopy("hello@weblyxa.com", "email")}>
              <div className="icon-circle"><FaEnvelope /></div>
              <div className="info-content">
                <h4>Email Us</h4>
                <p>hello@weblyxa.com</p>
              </div>
              <FaRegCopy className="copy-icon" />
              {copied === "email" && <span className="copied-tooltip"><FaCheck/> Copied!</span>}
            </div>

            {/* Click to Copy Card: Phone */}
            <div className="info-card" onClick={() => handleCopy("+918516012270", "phone")}>
              <div className="icon-circle"><FaPhoneAlt /></div>
              <div className="info-content">
                <h4>Call Us</h4>
                <p>+91 85160 12270</p>
              </div>
              <FaRegCopy className="copy-icon" />
              {copied === "phone" && <span className="copied-tooltip"><FaCheck/> Copied!</span>}
            </div>

             {/* Location Card */}
             <div className="info-card">
              <div className="icon-circle"><FaMapMarkerAlt /></div>
              <div className="info-content">
                <h4>Visit Us</h4>
                <p>New Delhi, India</p>
              </div>
            </div>
          </div>

          {/* RIGHT: HOLOGRAPHIC FORM */}
          <div className="form-wrapper" data-aos="fade-left">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  className="form-input" 
                  placeholder="Your Name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  className="form-input" 
                  placeholder="Your Email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  className="form-input" 
                  placeholder="Subject (Optional)" 
                  value={formData.subject} 
                  onChange={handleChange} 
                />
              </div>

              <div className="form-group">
                <textarea 
                  rows="5" 
                  name="message" 
                  className="form-textarea" 
                  placeholder="Tell us about your project..." 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                ></textarea>
              </div>

              <button type="submit" className="form-btn">
                Send Message <FaPaperPlane />
                <div className="liquid"></div>
              </button>
            </form>
          </div>

        </div>

        {/* FLOATING WHATSAPP BUTTON */}
        <a 
          href="https://wa.me/918516012270" 
          target="_blank" 
          rel="noreferrer" 
          className="wa-float"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp />
        </a>

      </div>

      <Footer />
    </>
  );
};

export default Contact;