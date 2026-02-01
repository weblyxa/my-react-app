import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// Make sure to install: npm install react-icons
import { 
  FaRocket, FaLaptopCode, FaPaintBrush, FaArrowRight, 
  FaLightbulb, FaHeart, FaChartLine, FaBriefcase 
} from "react-icons/fa";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Career = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", once: true });
  }, []);

  return (
    <>
      <Navbar />

      <style>{`
        /* --- THEME VARIABLES --- */
        :root {
          /* LIGHT MODE */
          --bg-main: linear-gradient(135deg, #f8f9fc 0%, #eef2f7 100%);
          --bg-card: rgba(255, 255, 255, 0.85);
          --text-main: #1a1a1a;
          --text-sub: #64748b;
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
        .career-hero {
          padding: 10rem 8% 6rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-bg-wrapper {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          z-index: 0;
        }
        .hero-bg-img {
          width: 100%; height: 100%;
          object-fit: cover;
          opacity: 0.4;
          transition: transform 10s ease;
        }
        .hero-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: var(--hero-overlay);
          z-index: 1;
        }

        .hero-content { position: relative; z-index: 2; max-width: 800px; }

        .career-hero h1 {
          font-size: 4rem;
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

        .career-hero p {
          font-size: 1.25rem;
          color: var(--text-sub);
          margin: 0 auto;
          line-height: 1.7;
        }

        /* --- JOBS GRID --- */
        .career-jobs { padding: 4rem 8% 8rem; }
        
        .section-header { text-align: center; margin-bottom: 4rem; }
        .section-header h2 { font-size: 3rem; font-weight: 800; color: var(--text-main); margin-bottom: 1rem;}
        .section-header p { color: var(--text-sub); font-size: 1.1rem; }

        .job-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .job-card {
          background: var(--bg-card);
          padding: 3rem 2rem;
          border-radius: 28px;
          border: 1px solid var(--border-color);
          backdrop-filter: blur(16px);
          transition: all 0.4s ease;
          box-shadow: var(--shadow);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* DYNAMIC COLORS */
        .job-card:nth-child(1) { --j-color: #f59e0b; } /* Orange */
        .job-card:nth-child(2) { --j-color: #10b981; } /* Green */
        .job-card:nth-child(3) { --j-color: #8b5cf6; } /* Purple */

        .job-card:hover {
          transform: translateY(-12px);
          border-color: transparent;
          box-shadow: 0 25px 50px -12px var(--j-color), 0 0 0 1px var(--j-color) inset;
        }

        /* Icon Box */
        .job-icon-box {
          width: 70px; height: 70px;
          background: rgba(0,0,0,0.04);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: var(--j-color);
          margin-bottom: 1.5rem;
          transition: 0.5s;
        }
        body.dark .job-icon-box { background: rgba(255,255,255,0.05); }

        .job-card:hover .job-icon-box {
          background: var(--j-color);
          color: white;
          animation: spin3D 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
        }
        @keyframes spin3D {
          0% { transform: rotate(0deg) scale(1); }
          100% { transform: rotate(360deg) scale(1.1); }
        }

        .job-card h3 { font-size: 1.6rem; font-weight: 800; margin-bottom: 0.5rem; color: var(--text-main); }
        .job-card p { color: var(--text-sub); line-height: 1.6; margin-bottom: 1.5rem; flex-grow: 1; }

        /* Skills */
        .skills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 2rem;
        }
        .skill-tag {
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          background: rgba(0,0,0,0.05);
          color: var(--text-sub);
          border: 1px solid var(--border-color);
          transition: 0.3s;
        }
        body.dark .skill-tag { background: rgba(255,255,255,0.05); }
        
        .job-card:hover .skill-tag {
          border-color: var(--j-color);
          color: var(--j-color);
          background: rgba(255,255,255,0.9);
        }
        body.dark .job-card:hover .skill-tag { background: rgba(255,255,255,0.1); }

        /* --- UPDATED APPLY BUTTON (Simple White -> Color) --- */
        .apply-btn {
          width: 100%;
          padding: 14px;
          border-radius: 14px;
          /* Default: Simple White */
          background: #ffffff; 
          color: var(--j-color); /* Text takes the job color for subtle hint */
          border: 1px solid var(--border-color);
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.03);
        }

        /* Dark Mode: Slightly transparent white to look premium */
        body.dark .apply-btn {
          background: rgba(255,255,255,0.08);
          color: white;
          border-color: rgba(255,255,255,0.1);
        }
        
        .apply-btn:hover {
          /* On Hover: Fills with Job Color */
          background: var(--j-color);
          color: white;
          border-color: var(--j-color);
          transform: translateY(-3px);
          box-shadow: 0 10px 25px -5px var(--j-color);
        }

        /* --- BENEFITS --- */
        .career-why { padding: 4rem 8% 8rem; }
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .benefit-card {
          background: var(--bg-card);
          padding: 2.5rem;
          border-radius: 24px;
          border: 1px solid var(--border-color);
          text-align: center;
          transition: 0.4s;
        }

        .benefit-card:hover {
          transform: translateY(-10px);
          border-color: #3b82f6;
          box-shadow: var(--shadow);
        }

        .ben-icon {
          font-size: 2.5rem;
          color: #3b82f6;
          margin-bottom: 1rem;
          display: inline-block;
          transition: 0.4s;
        }
        .benefit-card:hover .ben-icon { transform: scale(1.2) rotate(10deg); }

        .benefit-card h4 { font-size: 1.4rem; font-weight: 800; margin-bottom: 0.5rem; color: var(--text-main); }
        .benefit-card p { color: var(--text-sub); font-size: 1rem; }

        /* --- CTA --- */
        .cta { padding: 0 8% 8rem; display: flex; justify-content: center; }
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
        .cta-box h2 { font-size: 2.5rem; margin-bottom: 2rem; color: var(--text-main); }
        .cta-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: #1a1a1a; color: white;
          padding: 1rem 3rem; border-radius: 50px;
          text-decoration: none; font-weight: bold; transition: 0.3s;
        }
        body.dark .cta-btn { background: white; color: #1a1a1a; }
        .cta-btn:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4); }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .career-hero h1 { font-size: 2.8rem; }
          .cta-box { padding: 3rem 1.5rem; }
        }
      `}</style>

      <div className="wrapper">
        <div className="bg-glow glow-1"></div>
        <div className="bg-glow glow-2"></div>

        {/* HERO */}
        <section className="career-hero">
          <div className="hero-bg-wrapper">
             <img 
               className="hero-bg-img"
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
               alt="Office Culture" 
             />
             <div className="hero-overlay"></div>
          </div>

          <div className="hero-content" data-aos="fade-up">
            <h1>
              Build Your Career <br />
              <span className="shimmer-text">With Weblyxa</span>
            </h1>
            <p>
              Join a creative digital agency where design, technology, 
              and growth come together to build the future.
            </p>
          </div>
        </section>

        {/* JOBS GRID */}
        <section className="career-jobs">
          <div className="section-header" data-aos="fade-up">
            <h2>Open Positions</h2>
            <p>Find the role that fits your skills and passion.</p>
          </div>

          <div className="job-grid">
            {careers.map((job, i) => (
              <div
                key={job.id}
                className="job-card"
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <div className="job-icon-box">{job.icon}</div>
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                
                <div className="skills-container">
                  {job.skills.map((s, idx) => (
                    <span key={idx} className="skill-tag">{s}</span>
                  ))}
                </div>

                <button className="apply-btn">
                  Apply Now <FaArrowRight />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* BENEFITS */}
        <section className="career-why">
          <div className="section-header" data-aos="fade-up">
            <h2>Why Weblyxa?</h2>
            <p>We believe in growing together.</p>
          </div>

          <div className="benefits-grid">
            {[
              { icon: <FaLightbulb />, title: "Innovation", desc: "Work on modern ideas and real-world products using latest tech." },
              { icon: <FaHeart />, title: "Culture", desc: "A supportive team environment with creative freedom and fun." },
              { icon: <FaChartLine />, title: "Growth", desc: "Mentorship, learning resources, and a clear path to grow your career." },
            ].map((b, i) => (
              <div 
                className="benefit-card" 
                key={i} 
                data-aos="zoom-in" 
                data-aos-delay={i * 150}
              >
                <div className="ben-icon">{b.icon}</div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta" data-aos="fade-up">
          <div className="cta-box">
            <h2>Ready to make an impact?</h2>
            <p style={{marginBottom: '2rem', color: 'var(--text-sub)'}}>
              Send your resume to careers@weblyxa.com
            </p>
            <a href="/contact" className="cta-btn">
              Contact Us <FaBriefcase />
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

/* DATA */
const careers = [
  {
    id: 1,
    title: "Digital Marketer",
    icon: <FaRocket />,
    description: "Drive innovative marketing campaigns and strategies to help our clients achieve real growth.",
    skills: ["SEO", "Ads", "Analytics"],
  },
  {
    id: 2,
    title: "Web Developer",
    icon: <FaLaptopCode />,
    description: "Build fast, scalable and modern web applications using React, Next.js and Node.",
    skills: ["React", "Node.js", "Tailwind"],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    icon: <FaPaintBrush />,
    description: "Design clean, intuitive and user-centric interfaces for real-world products.",
    skills: ["Figma", "Prototyping", "UX"],
  },
];

export default Career;