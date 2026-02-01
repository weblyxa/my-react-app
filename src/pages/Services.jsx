import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaPaintBrush, FaCode, FaBullhorn, FaLayerGroup, 
  FaVideo, FaMobileAlt, FaTools, FaPenNib, FaArrowRight
} from "react-icons/fa";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", once: true });
  }, []);

  return (
    <>
      <Navbar />

      <style>{`
        /* --- THEME & VARIABLES --- */
        :root {
          /* LIGHT MODE */
          --bg-main: linear-gradient(135deg, #f8f9fc 0%, #eef2f7 100%);
          --bg-card: rgba(255, 255, 255, 0.85);
          --text-main: #1a1a1a;
          --text-sub: #475569;
          --border-color: rgba(0, 0, 0, 0.08);
          --shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
          --blob-opacity: 0.6;
          --hero-overlay: linear-gradient(to bottom, rgba(248, 249, 252, 0.9), rgba(248, 249, 252, 0.6));
        }

        /* DARK MODE */
        body.dark {
          --bg-main: #0f172a;
          --bg-card: rgba(30, 41, 59, 0.7);
          --text-main: #f8fafc;
          --text-sub: #94a3b8;
          --border-color: rgba(255, 255, 255, 0.1);
          --shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          --blob-opacity: 0.25;
          --hero-overlay: linear-gradient(to bottom, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.6));
        }

        /* RESET */
        body {
          font-family: 'Inter', sans-serif;
          background: var(--bg-main);
          color: var(--text-main);
          margin: 0;
          overflow-x: hidden;
        }

        /* --- HERO SECTION --- */
        .hero-services {
          padding: 10rem 8% 6rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          min-height: 80vh; /* Taller hero for impact */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* BACKGROUND IMAGE WITH OVERLAY */
        .hero-bg-wrapper {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          z-index: 0;
        }

        .hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          /* Image thodi clear dikhegi */
          opacity: 0.4; 
          transition: transform 10s ease;
          animation: subtleZoom 20s infinite alternate;
        }
        
        @keyframes subtleZoom {
            from { transform: scale(1); }
            to { transform: scale(1.1); }
        }

        /* GRADIENT OVERLAY (To make text readable) */
        .hero-overlay {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: var(--hero-overlay);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2; /* Text sits on top */
          max-width: 800px;
        }

        .hero-services h1 {
          font-size: 4.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.1;
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

        .hero-services p {
          font-size: 1.3rem;
          color: var(--text-sub);
          font-weight: 500;
          line-height: 1.7;
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
        .glow-1 { top: -10%; left: -10%; background: radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%); }
        .glow-2 { bottom: -10%; right: -10%; background: radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, transparent 70%); }

        @keyframes floatGlow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }

        /* --- SERVICES SECTION --- */
        .services-section {
          padding: 4rem 5% 8rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        @media (min-width: 1400px) {
          .services-grid { grid-template-columns: repeat(4, 1fr); }
        }

        .service-card {
          background: var(--bg-card);
          min-height: 480px; 
          padding: 3rem 2rem;
          border-radius: 28px;
          border: 1px solid var(--border-color);
          backdrop-filter: blur(16px);
          transition: all 0.4s ease;
          box-shadow: var(--shadow);
          text-align: left;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        /* Dynamic Service Colors */
        .service-card:nth-child(1) { --s-color: #3b82f6; }
        .service-card:nth-child(2) { --s-color: #10b981; }
        .service-card:nth-child(3) { --s-color: #f59e0b; }
        .service-card:nth-child(4) { --s-color: #8b5cf6; }
        .service-card:nth-child(5) { --s-color: #ef4444; }
        .service-card:nth-child(6) { --s-color: #06b6d4; }
        .service-card:nth-child(7) { --s-color: #ec4899; }
        .service-card:nth-child(8) { --s-color: #6366f1; }

        .service-card:hover {
          transform: translateY(-15px);
          border-color: transparent;
          box-shadow: 0 30px 60px -10px var(--s-color), 0 0 0 1px var(--s-color) inset;
        }

        .service-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: 28px;
          padding: 3px;
          background: linear-gradient(135deg, var(--s-color), transparent, var(--s-color));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: 0.4s;
        }
        .service-card:hover::before { opacity: 1; }

        .icon-box {
          width: 90px;
          height: 90px;
          background: rgba(0,0,0,0.04);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: var(--s-color);
          margin-bottom: 2rem;
          transition: 0.5s;
        }
        body.dark .icon-box { background: rgba(255,255,255,0.05); }

        .service-card:hover .icon-box {
          background: var(--s-color);
          color: white;
          box-shadow: 0 15px 30px -5px var(--s-color);
          animation: spin3D 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
        }
        
        @keyframes spin3D {
          0% { transform: rotate(0deg) scale(1); }
          40% { transform: rotate(180deg) scale(1.2); }
          100% { transform: rotate(360deg) scale(1); }
        }

        .service-card h3 {
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: var(--text-main);
        }

        .service-card p {
          font-size: 1.1rem;
          color: var(--text-sub);
          line-height: 1.6;
        }

        /* --- PROCESS SECTION (Corrected Alignment) --- */
        .process {
          padding: 6rem 8% 10rem;
          text-align: center;
        }
        
        .process h2 {
          font-size: 3.5rem;
          margin-bottom: 5rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 3rem;
        }

        .process-card {
          background: var(--bg-card);
          padding: 3rem 2.5rem;
          border-radius: 32px;
          border: 1px solid var(--border-color);
          transition: 0.4s;
          position: relative;
          z-index: 1;
          backdrop-filter: blur(20px);
          overflow: hidden;
          text-align: left; /* Align Text Left */
          display: flex;
          flex-direction: column;
          align-items: flex-start; /* Items Left Aligned */
        }

        /* --- NEW STEP BADGE (PERFECTLY SET INSIDE) --- */
        .step-badge {
          /* No longer absolute to prevent cutoff */
          width: 65px;
          height: 65px;
          background: rgba(0,0,0,0.05);
          color: #1a1a1a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem; /* Space below badge */
          transition: 0.4s;
          border: 2px solid transparent;
        }

        body.dark .step-badge { background: rgba(255,255,255,0.1); color: white; }

        /* Specific Colors for numbers */
        .process-card:nth-child(1) .step-badge { color: #3b82f6; border-color: rgba(59, 130, 246, 0.3); }
        .process-card:nth-child(2) .step-badge { color: #10b981; border-color: rgba(16, 185, 129, 0.3); }
        .process-card:nth-child(3) .step-badge { color: #f59e0b; border-color: rgba(245, 158, 11, 0.3); }
        .process-card:nth-child(4) .step-badge { color: #8b5cf6; border-color: rgba(139, 92, 246, 0.3); }

        .process-card:hover .step-badge {
          background: #1a1a1a;
          color: white;
          border-color: transparent;
          transform: rotate(360deg) scale(1.1);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }
        
        body.dark .process-card:hover .step-badge { background: white; color: #1a1a1a; }

        .process-card h4 {
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: var(--text-main);
        }

        .process-card p {
          color: var(--text-sub);
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .process-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.1);
          border-color: #3b82f6;
        }
        
        body.dark .process-card:hover {
           box-shadow: 0 30px 60px rgba(0,0,0,0.4);
           background: rgba(30, 41, 59, 0.9);
        }

        /* --- CTA --- */
        .cta {
          padding: 0 8% 8rem;
          display: flex;
          justify-content: center;
        }

        .cta-box {
          width: 100%;
          background: linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%);
          border: 2px solid rgba(255,255,255,0.5);
          padding: 5rem;
          border-radius: 36px;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: var(--shadow);
        }

        body.dark .cta-box {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .cta-box h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: var(--text-main);
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #1a1a1a;
          color: white;
          padding: 1rem 3rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: bold;
          transition: 0.3s;
        }
        
        body.dark .cta-btn { background: white; color: #1a1a1a; }

        .cta-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .hero-services { min-height: 70vh; padding-top: 8rem; }
          .hero-services h1 { font-size: 3rem; }
          .services-grid { grid-template-columns: 1fr; }
          .process-grid { gap: 2rem; }
          .cta-box { padding: 3rem 1.5rem; }
        }
      `}</style>

      <div className="wrapper">
        <div className="bg-glow glow-1"></div>
        <div className="bg-glow glow-2"></div>

        {/* HERO */}
        <section className="hero-services">
          {/* Background Image Wrapper */}
          <div className="hero-bg-wrapper">
             <img 
               className="hero-bg-img"
               src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop" 
               alt="Creative Web Design Background" 
             />
             <div className="hero-overlay"></div>
          </div>

          <div className="hero-content">
            <h1 data-aos="fade-down">
              We Build Digital <br />
              <span className="shimmer-text">Masterpieces</span>
            </h1>
            <p data-aos="fade-up">
              From ideation to execution, we provide end-to-end digital solutions 
              designed to scale your business and engage your audience.
            </p>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="services-section">
          <div className="services-grid">
            {services.map((service, i) => (
              <div
                key={i}
                className="service-card"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="icon-box">{service.icon}</div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS (Fixed Badges) */}
        <section className="process">
          <h2 data-aos="fade-up">How We Work</h2>
          <div className="process-grid">
            {process.map((step, i) => (
              <div
                key={i}
                className="process-card"
                data-aos="zoom-in"
                data-aos-delay={i * 150}
              >
                {/* Badge placed normally in flow (Top Left) */}
                <div className="step-badge">{step.step}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta" data-aos="fade-up">
          <div className="cta-box">
            <h2>Ready to transform your ideas?</h2>
            <a href="/contact" className="cta-btn">
              Start Your Project <FaArrowRight />
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

/* DATA - 8 SERVICES */
const services = [
  { 
    icon: <FaPaintBrush />, 
    title: "UI / UX Design", 
    desc: "Clean, modern design systems that combine psychology and art to convert visitors into loyal customers." 
  },
  { 
    icon: <FaCode />, 
    title: "Web Development", 
    desc: "Robust, scalable, and lightning-fast websites built with React, Next.js, and modern technologies." 
  },
  { 
    icon: <FaBullhorn />, 
    title: "Digital Marketing", 
    desc: "Data-driven SEO, Google Ads, and social media strategies focused on high ROI and growth." 
  },
  { 
    icon: <FaLayerGroup />, 
    title: "Brand Strategy", 
    desc: "We craft your brand's voice, visual identity, and positioning to make you unforgettable." 
  },
  { 
    icon: <FaVideo />, 
    title: "Video Editing", 
    desc: "Professional cinematic editing, motion graphics, and reels that capture attention instantly." 
  },
  { 
    icon: <FaMobileAlt />, 
    title: "App Development", 
    desc: "Native and cross-platform mobile apps designed for seamless performance on iOS and Android." 
  },
  { 
    icon: <FaPenNib />, 
    title: "Content Writing", 
    desc: "Persuasive copywriting and blogs that tell your story and rank high on search engines." 
  },
  { 
    icon: <FaTools />, 
    title: "Maintenance", 
    desc: "24/7 monitoring, security updates, and performance optimization to keep your site running smoothly." 
  },
];

/* PROCESS DATA */
const process = [
  { step: "01", title: "Discover", desc: "We dive deep into your brand, goals, and audience to build a solid roadmap." },
  { step: "02", title: "Design", desc: "We craft stunning, user-centric prototypes that align with your vision." },
  { step: "03", title: "Build", desc: "We code using the latest tech stack ensuring speed, security, and scalability." },
  { step: "04", title: "Launch", desc: "We deploy your product and provide ongoing support to help you grow." },
];

export default Services;