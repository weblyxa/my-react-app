import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>

        <h1 data-aos="fade-down" className="gradient-text">
          Our Services
        </h1>
        <p data-aos="fade-up">
          We design, build and scale digital products that help brands grow faster.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="services">
        <div className="grid">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="process">
        <h2 data-aos="fade-up">How We Work</h2>
        <div className="processGrid">
          {process.map((step, i) => (
            <div
              key={i}
              className="process-card"
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              <span>{step.step}</span>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta" data-aos="fade-up">
        <h2>Let’s Build Something Powerful</h2>
        <a href="/contact" className="cta-btn">Start Your Project</a>
      </section>

      <Footer />

      {/* CSS */}
      <style>{`
        /* HERO */
        .hero {
          padding: 110px 70px;
          text-align: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(120deg,#e0f7fa,#b2ebf2,#80deea);
          transition: all 0.3s ease;
        }
        body.dark .hero {
          background: #020617;
          color: #e5e7eb;
        }

        .gradient-text {
          font-size: 3.1rem;
          font-weight: 900;
          background: linear-gradient(90deg,#006064,#00acc1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 2px 2px 8px rgba(0,0,0,0.15);
        }

        /* Blobs */
        .blob {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: rgba(0,172,193,0.18);
          filter: blur(45px);
          animation: float 8s ease-in-out infinite;
        }
        .blob1 { top: 20%; left: 12%; }
        .blob2 { bottom: 10%; right: 18%; animation-delay: 3s; }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-22px); }
          100% { transform: translateY(0); }
        }

        /* SERVICES */
        .services {
          padding: 100px 70px;
          background: #f9fafb;
        }
        body.dark .services {
          background: #020617;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(260px,1fr));
          gap: 35px;
        }

        .service-card {
          background: #fff;
          padding: 45px 35px;
          border-radius: 26px;
          text-align: center;
          cursor: pointer;
          transition: all .45s ease;
          box-shadow: 0 12px 35px rgba(0,0,0,0.08);
          position: relative;
          overflow: hidden;
        }
        body.dark .service-card {
          background: #020617;
          color: #e5e7eb;
        }

        .service-card::after {
          content:'';
          position:absolute;
          inset:0;
          background: linear-gradient(135deg,#14b8a6,#1ec9b7);
          opacity:0;
          transition:.4s;
        }

        .service-card:hover::after {
          opacity:0.08;
        }

        .service-card:hover {
          transform: translateY(-16px) scale(1.02);
          box-shadow: 0 28px 60px rgba(0,0,0,0.18);
        }

        .service-card .icon {
          font-size: 3.2rem;
          margin-bottom: 18px;
        }

        /* PROCESS */
        .process {
          padding: 100px 70px;
        }
        .processGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(240px,1fr));
          gap: 30px;
        }
        .process-card {
          background: #fff;
          padding: 40px;
          border-radius: 22px;
          transition: all .4s ease;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }
        body.dark .process-card {
          background: #020617;
          color: #e5e7eb;
        }
        .process-card span {
          display: inline-block;
          font-size: 14px;
          font-weight: 700;
          color: #14b8a6;
          margin-bottom: 8px;
        }
        .process-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.18);
        }

        /* CTA */
        .cta {
          padding: 90px 70px;
          background: linear-gradient(135deg,#006064,#00acc1);
          text-align: center;
          color: #fff;
          transition: all 0.3s ease;
        }
        body.dark .cta {
          background: #020617;
          color: #e5e7eb;
        }
        .cta-btn {
          background: #fff;
          color: #006064;
          padding: 18px 42px;
          border-radius: 999px;
          font-weight: 700;
          text-decoration: none;
          transition: all .35s ease;
          display: inline-block;
        }
        .cta-btn:hover {
          background: #000;
          color: #fff;
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(0,0,0,0.3);
        }

        /* RESPONSIVE */
        @media(max-width: 900px){
          section { padding: 60px 24px !important; }
          .gradient-text { font-size: 2.3rem; }
        }
      `}</style>
    </>
  );
};

/* DATA */
const services = [
  { icon: "🎨", title: "UI / UX Design", desc: "Clean, modern and user-focused design systems that convert users into customers." },
  { icon: "💻", title: "Web Development", desc: "Fast, scalable and secure websites using modern frameworks and best practices." },
  { icon: "📈", title: "Digital Marketing", desc: "SEO, ads and growth strategies focused on real ROI and long-term success." },
  { icon: "🚀", title: "Brand Strategy", desc: "Positioning, messaging and visual identity that makes brands unforgettable." },
  { icon: "⚙️", title: "Maintenance & Support", desc: "Continuous monitoring, updates and performance optimization." },
  { icon: "🧠", title: "Consulting", desc: "Strategic guidance to help you make smarter digital decisions." },
];

const process = [
  { step: "01", title: "Discover", desc: "We understand your brand, goals and challenges." },
  { step: "02", title: "Design", desc: "We craft user-centric designs and experiences." },
  { step: "03", title: "Build", desc: "We develop fast, scalable and reliable solutions." },
  { step: "04", title: "Launch & Scale", desc: "We launch, optimize and help you grow continuously." },
];

export default Services;
