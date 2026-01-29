import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="about-hero">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>

        <h1 data-aos="fade-down" className="gradient-text">
          About Weblyxa
        </h1>
        <p data-aos="fade-up">
          We are a next-generation digital agency blending strategy,
          creativity and technology to build brands that scale.
        </p>
      </section>

      {/* ABOUT CONTENT */}
      <section className="about-section">
        <div data-aos="fade-right">
          <h2>Who We Are</h2>
          <p>
            Weblyxa is a creative digital studio focused on crafting meaningful
            digital experiences that convert, connect and grow.
          </p>
          <p>
            From UI/UX design to full-stack development and growth marketing,
            we partner with brands to create real impact.
          </p>
        </div>

        <div className="img-wrap" data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="Team discussion"
          />
        </div>
      </section>

      {/* STATS */}
      <section className="about-stats">
        <div className="statsGrid">
          {[
            { number: "120+", label: "Projects Completed" },
            { number: "80+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" },
            { number: "24/7", label: "Support" },
          ].map((s, i) => (
            <div key={i} className="stat-box" data-aos="zoom-in">
              <h3>{s.number}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="about-team">
        <h2 data-aos="fade-up">Meet Our Team</h2>

        <div className="teamGrid">
          {[
            {
              img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
              name: "Creative Lead",
              role: "UI / UX Designer",
            },
            {
              img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
              name: "Tech Lead",
              role: "Full Stack Developer",
            },
            {
              img: "https://www.aarifhabeeb.com/blog/wp-content/uploads/2023/10/Digital-Marketing-Team.jpg",
              name: "Marketing Head",
              role: "Growth Strategist",
            },
          ].map((m, i) => (
            <div key={i} className="team-card" data-aos="fade-up">
              <img src={m.img} alt={m.name} />
              <h4>{m.name}</h4>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta" data-aos="fade-up">
        <h2>Want to Work With Us?</h2>
        <a href="/contact" className="cta-btn">
          Get in Touch
        </a>
      </section>

      <Footer />

      {/* CSS */}
      <style>{`
        /* HERO */
        .about-hero {
          padding: 110px 70px;
          text-align: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(120deg,#e0f7fa,#b2ebf2,#80deea);
        }

        .gradient-text {
          font-size: 3rem;
          font-weight: 900;
          background: linear-gradient(90deg,#006064,#00acc1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

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
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }

        /* ABOUT SECTION */
        .about-section {
          padding: 100px 70px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .img-wrap img {
          width: 100%;
          border-radius: 24px;
          transition: .6s ease;
        }

        .img-wrap:hover img {
          transform: scale(1.05);
          box-shadow: 0 30px 60px rgba(0,0,0,.25);
        }

        /* STATS */
        .about-stats {
          padding: 100px 70px;
          background: #f9fafb;
        }

        .statsGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
          gap: 30px;
          text-align: center;
        }

        .stat-box {
          background: #fff;
          padding: 40px;
          border-radius: 22px;
          box-shadow: 0 20px 45px rgba(0,0,0,.15);
        }

        /* TEAM */
        .about-team {
          padding: 100px 70px;
        }

        .teamGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(260px,1fr));
          gap: 35px;
        }

        .team-card img {
          width: 100%;
          height: 280px;
          object-fit: cover;
          border-radius: 22px 22px 0 0;
        }

        /* CTA */
        .about-cta {
          padding: 120px 70px;
          background: linear-gradient(135deg,#006064,#00acc1);
          text-align: center;
          color: #fff;
          margin-bottom: 60px;
        }

        .cta-btn {
          display: inline-block;
          padding: 18px 44px;
          border-radius: 999px;
          background: #fff;
          color: #006064;
          font-weight: 700;
          text-decoration: none;
          transition: .35s;
        }

        .cta-btn:hover {
          transform: translateY(-6px);
          background: #000;
          color: #fff;
          box-shadow: 0 18px 40px rgba(0,0,0,.35);
        }

        /* RESPONSIVE */
        @media(max-width:900px){
          .about-hero,
          .about-section,
          .about-stats,
          .about-team,
          .about-cta {
            padding: 60px 24px;
          }

          .about-section {
            grid-template-columns: 1fr;
          }

          .gradient-text {
            font-size: 2.3rem;
          }
        }
      `}</style>
    </>
  );
};

export default About;
