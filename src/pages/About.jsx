import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// Make sure to install: npm install react-icons
import { FaAward, FaUsers, FaClock, FaHeadset, FaArrowRight, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", once: true });
  }, []);

  return (
    <>
      <Navbar />

      <style>{`
        /* --- COPYING THEME FROM HOME.JSX FOR CONSISTENCY --- */
        :root {
          /* LIGHT MODE DEFAULTS */
          --bg-main: linear-gradient(135deg, #f8f9fc 0%, #eef2f7 100%);
          --bg-card: rgba(255, 255, 255, 0.6);
          --text-main: #1a1a1a;
          --text-sub: #64748b;
          --border-color: rgba(0, 0, 0, 0.08);
          --shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
          --blob-opacity: 0.6;
          --glass-border: 2px solid rgba(255,255,255,0.8);
        }

        /* DARK MODE OVERRIDES */
        body.dark {
          --bg-main: #0f172a;
          --bg-card: rgba(30, 41, 59, 0.6);
          --text-main: #f8fafc;
          --text-sub: #94a3b8;
          --border-color: rgba(255, 255, 255, 0.1);
          --shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          --blob-opacity: 0.25;
          --glass-border: 1px solid rgba(255,255,255,0.1);
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
          width: 600px; height: 600px;
          filter: blur(90px);
          opacity: var(--blob-opacity);
          z-index: -1;
          animation: floatGlow 10s infinite alternate;
        }
        .glow-1 { top: 0; right: 0; background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%); }
        .glow-2 { bottom: 0; left: 0; background: radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%); }

        @keyframes floatGlow {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-30px, 30px); }
        }

        /* --- HERO SECTION --- */
        .hero-about {
          padding: 10rem 8% 6rem;
          text-align: center;
          position: relative;
        }

        .hero-about h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          color: var(--text-main);
        }

        /* SHIMMER TEXT EFFECT */
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

        .hero-about p {
          font-size: 1.25rem;
          color: var(--text-sub);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* --- STORY SECTION (Glass Card) --- */
        .story-section {
          padding: 4rem 8%;
          display: flex;
          align-items: center;
          gap: 4rem;
        }

        .story-content { flex: 1; }
        
        .story-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          font-weight: 800;
        }

        .story-content p {
          color: var(--text-sub);
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          line-height: 1.7;
        }

        /* 3D Glass Image Wrapper */
        .story-img-wrapper {
          flex: 1;
          position: relative;
          perspective: 1000px;
        }

        .glass-frame {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(12px);
          padding: 15px;
          border-radius: 24px;
          border: var(--glass-border);
          transform: rotateY(-10deg);
          transition: transform 0.5s ease;
          box-shadow: var(--shadow);
        }

        .story-img-wrapper:hover .glass-frame {
          transform: rotateY(0deg) scale(1.02);
        }

        .glass-frame img {
          width: 100%;
          border-radius: 16px;
          display: block;
        }

        /* --- STATS SECTION --- */
        .stats {
          padding: 6rem 8%;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
        }

        .stat-card {
          background: var(--bg-card);
          padding: 2.5rem;
          border-radius: 24px;
          text-align: center;
          border: 1px solid var(--border-color);
          backdrop-filter: blur(12px);
          transition: 0.3s;
          box-shadow: var(--shadow);
          position: relative;
          overflow: hidden;
        }

        /* Dynamic Colors for Stats */
        .stat-card:nth-child(1) { --s-color: #3b82f6; }
        .stat-card:nth-child(2) { --s-color: #10b981; }
        .stat-card:nth-child(3) { --s-color: #f97316; }
        .stat-card:nth-child(4) { --s-color: #8b5cf6; }

        .stat-card:hover {
          transform: translateY(-10px);
          border-color: var(--s-color);
        }

        /* FAST SPIN ICON */
        .stat-icon {
          font-size: 2.5rem;
          color: var(--s-color);
          margin-bottom: 1rem;
          display: inline-block;
          transition: 0.5s;
        }

        .stat-card:hover .stat-icon {
          animation: spinFast 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
          filter: drop-shadow(0 0 10px var(--s-color));
        }

        @keyframes spinFast {
          0% { transform: rotate(0deg) scale(1); }
          100% { transform: rotate(360deg) scale(1.2); }
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 0.5rem;
        }

        .stat-label { color: var(--text-sub); font-weight: 600; }

        /* --- TEAM SECTION --- */
        .team {
          padding: 6rem 8%;
          text-align: center;
        }
        
        .team h2 {
          font-size: 2.5rem;
          margin-bottom: 4rem;
          font-weight: 800;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 3rem;
        }

        .team-card {
          background: var(--bg-card);
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          transition: 0.4s ease;
          position: relative;
        }

        .team-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 50px -10px rgba(59, 130, 246, 0.2);
        }

        .team-img-box {
          height: 320px;
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .team-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s;
        }

        .team-card:hover img { transform: scale(1.1); }

        .team-info {
          padding: 1.5rem;
          position: relative;
          z-index: 2;
          background: var(--bg-card); /* To cover img bottom */
        }

        .team-info h4 {
          font-size: 1.4rem;
          margin: 0;
          color: var(--text-main);
        }

        .team-info p {
          color: #3b82f6;
          font-weight: 600;
          margin-top: 5px;
          font-size: 0.95rem;
        }

        /* --- CTA --- */
        .cta {
          padding: 6rem 8%;
          display: flex;
          justify-content: center;
        }

        .cta-box {
          width: 100%;
          /* Light gradient */
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
          font-size: 2.8rem;
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
          .story-section { flex-direction: column-reverse; text-align: center; }
          .hero-about h1 { font-size: 2.5rem; }
          .glass-frame { transform: none; }
          .cta-box { padding: 3rem 1.5rem; }
        }
      `}</style>

      <div className="wrapper">
        <div className="bg-glow glow-1"></div>
        <div className="bg-glow glow-2"></div>

        {/* HERO */}
        <section className="hero-about">
          <h1 data-aos="fade-down">
            We are the <span className="shimmer-text">Architects</span> <br />
            of Digital Reality.
          </h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Weblyxa is a next-generation digital agency blending strategy,
            creativity, and technology to build brands that scale.
          </p>
        </section>

        {/* STORY / WHO WE ARE */}
        <section className="story-section">
          <div className="story-content" data-aos="fade-right">
            <h2>Who We Are</h2>
            <p>
              Weblyxa isn't just an agency; we are your growth partners. Founded
              on the belief that design should be functional and code should be beautiful.
            </p>
            <p>
              From UI/UX design to full-stack development and growth marketing,
              we partner with brands to create real impact. We don't just build websites;
              we build businesses.
            </p>
          </div>

          <div className="story-img-wrapper" data-aos="fade-left">
            <div className="glass-frame">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team discussion"
              />
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats">
          <div className="stats-grid">
            {[
              { icon: <FaAward />, number: "120+", label: "Projects Done" },
              { icon: <FaUsers />, number: "80+", label: "Happy Clients" },
              { icon: <FaClock />, number: "5+", label: "Years Exp." },
              { icon: <FaHeadset />, number: "24/7", label: "Support" },
            ].map((stat, i) => (
              <div
                key={i}
                className="stat-card"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* TEAM */}
        {/* <section className="team">
          <h2 data-aos="fade-up">Meet The Minds</h2>
          <div className="team-grid">
            {[
              {
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
                name: "Rahul Sharma",
                role: "Creative Director",
              },
              {
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
                name: "Priya Singh",
                role: "Lead Developer",
              },
              {
                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
                name: "Amit Verma",
                role: "Marketing Head",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="team-card"
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <div className="team-img-box">
                  <img src={member.img} alt={member.name} />
                </div>
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* CTA */}
        <section className="cta" data-aos="fade-up">
          <div className="cta-box">
            <h2>Ready to start your journey?</h2>
            <a href="/contact" className="cta-btn">
              Get Started <FaArrowRight />
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default About;