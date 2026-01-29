import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const careers = [
  {
    id: 1,
    title: "Digital Marketing Specialist",
    icon: "🚀",
    description:
      "Drive innovative marketing campaigns and strategies to help our clients achieve real growth.",
    skills: ["SEO", "Social Media", "Analytics"],
    color: "linear-gradient(135deg,#0f766e,#14b8a6)",
  },
  {
    id: 2,
    title: "Web Developer",
    icon: "💻",
    description:
      "Build fast, scalable and modern web applications using latest technologies.",
    skills: ["React", "Node.js", "TailwindCSS"],
    color: "linear-gradient(135deg,#115e59,#2dd4bf)",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    icon: "🎨",
    description:
      "Design clean, intuitive and user-centric interfaces for real-world products.",
    skills: ["Figma", "Adobe XD", "Prototyping"],
    color: "linear-gradient(135deg,#134e4a,#5eead4)",
  },
];

const Career = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="career-hero">
        <div className="career-hero-content" data-aos="fade-up">
          <h1>Build Your Career With Weblyxa</h1>
          <p>Join a creative digital agency where design, technology and growth come together.</p>
        </div>
      </section>

      {/* JOBS */}
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
              style={{ background: job.color }}
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              <div className="job-icon">{job.icon}</div>
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <div className="skills">
                {job.skills.map((s, idx) => (
                  <span key={idx}>{s}</span>
                ))}
              </div>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="career-why">
        <h2 data-aos="fade-up">Why Weblyxa?</h2>
        <div className="benefits-grid">
          {[
            { icon: "💡", title: "Innovation", desc: "Work on modern ideas and real-world products." },
            { icon: "🤝", title: "Culture", desc: "Supportive team with creative freedom." },
            { icon: "📈", title: "Growth", desc: "Learn, improve and grow your career." },
          ].map((b, i) => (
            <div className="benefit-card" key={i} data-aos="fade-up" data-aos-delay={i*150}>
              <div className="icon">{b.icon}</div>
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="career-cta" data-aos="fade-up">
        <h2>Ready To Join Us?</h2>
        <p>Start your journey with Weblyxa today.</p>
        <button className="cta-btn">Apply Now</button>
      </section>

      <Footer />

      {/* CSS */}
      <style>{`
        /* DARK MODE */
        body.dark .career-hero,
        body.dark .career-jobs,
        body.dark .career-why,
        body.dark .career-cta {
          background: #020617;
          color: #e5e7eb;
        }

        /* HERO */
        .career-hero {
          height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .career-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(135deg,rgba(15,118,110,.9),rgba(20,184,166,.9)),
            url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d");
          background-size: cover;
          background-position: center;
        }
        .career-hero-content { position: relative; z-index: 2; max-width: 800px; }
        .career-hero h1 { font-size: 3.3rem; font-weight: 800; margin-bottom: 1rem; }
        .career-hero p { font-size: 1.15rem; opacity: .95; }

        /* JOBS */
        .career-jobs { padding: 6rem 3rem; background: #f8fafc; }
        .section-header { text-align: center; margin-bottom: 4rem; }
        .section-header h2 { font-size: 2.4rem; }
        .section-header p { color: #64748b; }

        .job-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
          gap: 2.5rem;
        }

        .job-card {
          padding: 2.5rem;
          border-radius: 22px;
          color: white;
          transition: all .45s ease;
          box-shadow: 0 12px 30px rgba(0,0,0,.12);
          cursor: pointer;
        }
        .job-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 60px rgba(20,184,166,.35);
        }
        .job-icon { font-size: 3rem; margin-bottom: .8rem; }
        .job-card h3 { font-size: 1.6rem; }
        .job-card p { margin: .8rem 0 1rem; opacity: .95; }

        .skills span {
          display: inline-block;
          margin: 0 .4rem .4rem 0;
          padding: .35rem .7rem;
          border-radius: 999px;
          background: rgba(255,255,255,.18);
          font-size: .85rem;
        }

        .apply-btn {
          margin-top: 1rem;
          background: white;
          color: #0f766e;
          border: none;
          padding: .7rem 1.6rem;
          border-radius: 999px;
          font-weight: 600;
          cursor: pointer;
          transition: .3s;
        }
        .apply-btn:hover {
          background: #0f766e;
          color: white;
        }

        /* WHY JOIN */
        .career-why { padding: 6rem 3rem; background: white; text-align: center; }
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .benefit-card {
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0,0,0,.08);
          transition: .4s;
          background: #fff;
        }
        body.dark .benefit-card { background: #12121d; }
        .benefit-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 40px rgba(15,118,110,.25);
        }
        .benefit-card .icon { font-size: 2.5rem; margin-bottom: .6rem; }

        /* CTA */
        .career-cta {
          padding: 6rem 3rem;
          background: linear-gradient(135deg,#0f766e,#14b8a6);
          color: white;
          text-align: center;
        }
        .career-cta h2 { font-size: 2.6rem; margin-bottom: 1rem; }
        .cta-btn {
          margin-top: 1rem;
          padding: .9rem 2.2rem;
          border-radius: 999px;
          border: none;
          background: white;
          color: #0f766e;
          font-weight: 600;
          cursor: pointer;
          transition: .35s;
        }
        .cta-btn:hover {
          transform: translateY(-6px) scale(1.05);
        }

        @media(max-width:900px){
          .career-hero h1 { font-size: 2.5rem; }
          .career-jobs { padding: 4rem 1.5rem; }
        }
      `}</style>
    </>
  );
};

export default Career;
