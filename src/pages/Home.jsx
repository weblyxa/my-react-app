import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// npm install react-icons
import { FaRocket, FaPaintBrush, FaCode, FaArrowRight, FaGem, FaLayerGroup } from "react-icons/fa";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", 
      once: true,
      mirror: false, // Mobile scroll fix
      offset: 50     // Trigger animations earlier on mobile
    });
  }, []);

  return (
    <>
      <Navbar />

      <style>{`
        /* --- THEME VARIABLES --- */
        :root {
          --bg-main: linear-gradient(135deg, #f8f9fc 0%, #eef2f7 100%);
          --bg-card: rgba(255, 255, 255, 0.8);
          --text-main: #1a1a1a;
          --text-sub: #64748b;
          --border-color: rgba(0, 0, 0, 0.08);
          --shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
          --hero-blob-opacity: 0.6;
          --btn-bg: #1a1a1a;
          --btn-text: #ffffff;
        }

        body.dark {
          --bg-main: #0f172a;
          --bg-card: rgba(30, 41, 59, 0.7);
          --text-main: #f8fafc;
          --text-sub: #94a3b8;
          --border-color: rgba(255, 255, 255, 0.1);
          --shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          --hero-blob-opacity: 0.25;
          --btn-bg: #ffffff;
          --btn-text: #0f172a;
        }

        /* --- GLOBAL RESET --- */
        * { box-sizing: border-box; }
        
        body {
          font-family: 'Inter', sans-serif;
          background: var(--bg-main);
          color: var(--text-main);
          overflow-x: hidden; /* Prevent horizontal scroll */
          margin: 0;
          transition: background 0.3s ease, color 0.3s ease;
        }

        /* --- BACKGROUND BLOBS --- */
        .wrapper {
          position: relative;
          width: 100%;
          overflow: hidden; /* Critical for mobile */
        }
        
        .bg-glow {
          position: absolute;
          width: 700px;
          height: 700px;
          filter: blur(100px);
          opacity: var(--hero-blob-opacity);
          z-index: -1;
          animation: floatGlow 12s infinite alternate;
        }
        
        .glow-1 { top: -10%; left: -10%; background: radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 60%); }
        .glow-2 { bottom: -10%; right: -10%; background: radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 60%); }

        @keyframes floatGlow {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(40px, 40px) rotate(10deg); }
        }

        /* --- HERO SECTION --- */
        .hero {
          min-height: 95vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8rem 8% 0;
          position: relative;
          z-index: 1;
        }

        .hero-content { max-width: 600px; width: 100%; }

        .hero h1 {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 1.5rem;
          letter-spacing: -1.5px;
          color: var(--text-main);
        }

        .shimmer-text {
          background: linear-gradient(to right, #1a1a1a 20%, #c0b283 40%, #1a1a1a 60%);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
          display: inline-block;
        }

        body.dark .shimmer-text {
          background: linear-gradient(to right, #ffffff 20%, #ffd700 40%, #ffffff 60%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .gradient-highlight {
          background: linear-gradient(90deg, #2563eb, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @keyframes shimmer { to { background-position: 200% center; } }

        .hero p {
          font-size: 1.2rem;
          color: var(--text-sub);
          line-height: 1.7;
          margin-bottom: 3rem;
          border-left: 3px solid #3b82f6;
          padding-left: 1.5rem;
        }

        /* --- BUTTON --- */
        .btn-glow {
          position: relative;
          padding: 1rem 3rem;
          border-radius: 50px;
          background: var(--btn-bg);
          color: var(--btn-text);
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
          overflow: hidden;
          transition: all 0.4s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 10px 20px -10px rgba(0,0,0,0.3);
        }

        .btn-glow:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px -10px #3b82f6;
          background: #3b82f6;
          color: white;
        }

        /* --- HERO IMAGE --- */
        .hero-img-wrapper {
          position: relative;
          perspective: 1500px;
          z-index: 2;
          width: 48%; /* Desktop width */
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 2px solid rgba(255,255,255,0.5);
          padding: 12px;
          border-radius: 24px;
          transform: rotateY(-12deg) rotateX(6deg) scale(0.95);
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: var(--shadow);
        }

        .hero-img-wrapper:hover .glass-card {
          transform: rotateY(0deg) rotateX(0deg) scale(1);
        }

        .hero-img {
          width: 100%;
          border-radius: 18px;
          display: block;
        }

        /* --- SERVICES --- */
        .services {
          padding: 8rem 8%;
          position: relative;
        }

        .section-header { text-align: center; margin-bottom: 5rem; }
        .section-header h2 { font-size: 3rem; margin-bottom: 1rem; color: var(--text-main); font-weight: 800; }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
        }

        .card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          padding: 3.5rem 2.5rem;
          border-radius: 24px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          backdrop-filter: blur(20px);
          box-shadow: var(--shadow);
        }

        .card:nth-child(1) { --card-color: #3b82f6; }
        .card:nth-child(2) { --card-color: #10b981; }
        .card:nth-child(3) { --card-color: #f97316; }
        .card:nth-child(4) { --card-color: #8b5cf6; }

        .card:hover {
          transform: translateY(-12px);
          border-color: transparent;
          box-shadow: 0 20px 50px -10px var(--card-color), 0 0 0 1px var(--card-color) inset;
        }

        .icon-circle {
          width: 70px; height: 70px;
          background: rgba(0,0,0,0.05); 
          border-radius: 20px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.8rem;
          color: var(--card-color);
          margin-bottom: 2rem;
          transition: 0.5s;
        }
        body.dark .icon-circle { background: rgba(255,255,255,0.05); }

        .card:hover .icon-circle {
          background: var(--card-color); color: white;
          box-shadow: 0 10px 25px -5px var(--card-color);
          animation: spin3D 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards; 
        }

        @keyframes spin3D {
          0% { transform: rotate(0deg) scale(1); }
          100% { transform: rotate(360deg) scale(1.1); }
        }

        .card h3 { font-size: 1.5rem; margin-bottom: 1rem; font-weight: 800; color: var(--text-main); }
        .card p { color: var(--text-sub); line-height: 1.6; font-size: 1.05rem; }

        /* --- CTA --- */
        .cta-section { padding: 6rem 8%; display: flex; justify-content: center; }
        .cta-inner {
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
        body.dark .cta-inner { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); border: 1px solid rgba(255,255,255,0.1); }
        .cta-content { position: relative; z-index: 1; }
        .cta-content h2 { color: var(--text-main); font-size: 3rem; margin-bottom: 1rem; }

        /* =========================================
           MOBILE RESPONSIVENESS (The Fixes)
           ========================================= */
        
        @media (max-width: 900px) {
          /* 1. Reset Hero Layout */
          .hero {
            flex-direction: column; /* Stack vertically */
            text-align: center;
            padding: 7rem 5% 4rem; /* Adjust padding */
            justify-content: center;
            min-height: auto; /* Remove fixed height */
          }

          /* 2. Hero Typography */
          .hero h1 {
            font-size: 2.5rem; /* Smaller Font */
            margin-bottom: 1rem;
          }

          .hero p {
            font-size: 1rem;
            border-left: none; /* Remove side border on mobile */
            padding-left: 0;
            margin-bottom: 2rem;
          }

          /* 3. Hero Image */
          .hero-img-wrapper {
            width: 100%;
            max-width: 400px;
            margin-top: 3rem;
            perspective: none; /* Remove 3D skew on mobile for clarity */
          }

          .glass-card {
            transform: none !important; /* Reset rotation */
            padding: 10px;
          }

          /* 4. Services Grid */
          .services { padding: 4rem 5%; }
          .section-header h2 { font-size: 2.2rem; }
          .cards-grid {
            grid-template-columns: 1fr; /* Single Column */
            gap: 1.5rem;
          }
          
          .card {
            padding: 2rem; /* Less padding inside cards */
          }

          /* 5. CTA Section */
          .cta-section { padding: 4rem 5%; }
          .cta-inner { padding: 3rem 1.5rem; }
          .cta-content h2 { font-size: 2rem; }
          
          /* 6. Background */
          .bg-glow { width: 300px; height: 300px; opacity: 0.4; }
        }

        /* Extra small devices */
        @media (max-width: 480px) {
          .hero h1 { font-size: 2.2rem; }
          .btn-glow { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="wrapper">
        <div className="bg-glow glow-1"></div>
        <div className="bg-glow glow-2"></div>

        {/* HERO */}
        <section className="hero">
          <div className="hero-content" data-aos="fade-up">
            <h1>
              <span className="shimmer-text">Design the Future.</span> <br />
              <span className="gradient-highlight">Build the Dream.</span>
            </h1>
            <p>
              We are a premium digital agency crafting award-winning websites 
              that blend art, psychology, and cutting-edge technology.
            </p>
            <a href="/contact" className="btn-glow">
              Start Project <FaArrowRight />
            </a>
          </div>

          <div className="hero-img-wrapper" data-aos="fade-up" data-aos-delay="200">
            <div className="glass-card">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                alt="Premium Workspace" 
                className="hero-img"
              />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services">
          <div className="section-header" data-aos="fade-up">
            <h2>Our Expertise</h2>
            <p style={{color: 'var(--text-sub)', fontSize: '1.1rem'}}>World-class services tailored for your growth.</p>
          </div>

          <div className="cards-grid">
            {/* Card 1 */}
            <div className="card" data-aos="fade-up" data-aos-delay="0">
              <div className="icon-circle"><FaGem /></div>
              <h3>UI/UX Design</h3>
              <p>Interfaces that feel like magic. We design pixel-perfect experiences that users fall in love with instantly.</p>
            </div>

            {/* Card 2 */}
            <div className="card" data-aos="fade-up" data-aos-delay="100">
              <div className="icon-circle"><FaCode /></div>
              <h3>Modern Dev</h3>
              <p>Scalable, secure, and lightning-fast code built on the React ecosystem. Performance is our priority.</p>
            </div>

            {/* Card 3 */}
            <div className="card" data-aos="fade-up" data-aos-delay="200">
              <div className="icon-circle"><FaRocket /></div>
              <h3>Growth Marketing</h3>
              <p>Data-driven strategies that turn visitors into loyal customers. Dominate your market.</p>
            </div>
            
            {/* Card 4 */}
            <div className="card" data-aos="fade-up" data-aos-delay="300">
              <div className="icon-circle"><FaLayerGroup /></div>
              <h3>Brand Identity</h3>
              <p>More than just a logo. We forge a complete visual identity that resonates with your audience.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section" data-aos="zoom-in">
          <div className="cta-inner">
            <div className="cta-content">
              <h2>Ready to Elevate Your Brand?</h2>
              <p style={{marginBottom: '2.5rem', color: 'var(--text-sub)', fontSize: '1.2rem'}}>
                Join the 1% of businesses that stand out from the crowd.
              </p>
              <a href="/contact" className="btn-glow">
                Get in Touch <FaArrowRight />
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;