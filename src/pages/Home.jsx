import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <Navbar />

      {/* Styles */}
      <style>{`
        /* Hero Section */
        .hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 4rem 6rem;
          background: linear-gradient(120deg, #e0f7fa, #b2ebf2);
          background-size: 300% 300%;
          animation: gradientMove 20s ease infinite;
          color: #006064;
        }

        body.dark .hero {
          background: #020617;
          color: #e5e7eb;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .hero h1 {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 1rem;
          line-height: 1.2;
          background: linear-gradient(90deg, #006064, #00acc1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 2px 2px 6px rgba(0,0,0,0.15);
          transition: transform 0.3s ease;
        }

        .hero h1:hover {
          transform: scale(1.03);
        }

        .hero p {
          font-size: 1.25rem;
          margin-bottom: 2rem;
        }

        .hero .btn {
          padding: 1rem 2rem;
          background: #00acc1;
          color: white;
          font-weight: bold;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.4s ease;
        }

        .hero .btn:hover {
          background: #006064;
          transform: scale(1.05);
        }

        .hero img {
          width: 45%;
          border-radius: 1.5rem;
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }

        .hero img:hover {
          transform: scale(1.03);
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
        }

        /* Floating blobs */
        .blob {
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: rgba(0,172,193,0.1);
          filter: blur(35px);
          animation: floatBlob 8s ease-in-out infinite;
        }
        @keyframes floatBlob {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(15deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        .blob1 { top: 10%; left: 15%; animation-delay: 0s; }
        .blob2 { top: 50%; left: 70%; animation-delay: 2s; }
        .blob3 { top: 70%; left: 30%; animation-delay: 4s; }

        /* Services Section */
        .services {
          padding: 6rem 4rem;
          text-align: center;
          background: #f9fafb;
        }

        body.dark .services {
          background: #020617;
        }

        .services h2 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: #006064;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: white;
          padding: 2rem;
          border-radius: 1.5rem;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        body.dark .service-card {
          background: #020617;
          color: #e5e7eb;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }

        /* CTA Section */
        .cta {
          padding: 6rem 4rem;
          text-align: center;
          background: linear-gradient(135deg, #006064, #00acc1);
          color: white;
          border-radius: 1.5rem;
          position: relative;
        }

        body.dark .cta {
          background: #020617;
        }

        .cta h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }

        .cta .btn {
          background: white;
          color: #006064;
          padding: 1rem 2rem;
          font-size: 1.125rem;
          border-radius: 9999px;
          font-weight: bold;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta .btn:hover {
          background: #00acc1;
          color: white;
          transform: scale(1.05);
        }

        /* Responsive */
        @media (max-width:768px) {
          .hero {
            flex-direction: column;
            text-align: center;
            padding: 4rem 2rem;
          }

          .hero img {
            width: 80%;
            margin-top: 2rem;
          }

          .services {
            padding: 4rem 2rem;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="hero">
        <div data-aos="fade-right">
          <h1>Weblyxa – We Are A Digital Design Studio</h1>
          <p>
            We bring together strategy, design, technology, and storytelling to create brands that perform.
          </p>
          <a href="/contact" className="btn">Get Started</a>
        </div>

        <img
          data-aos="fade-left"
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Team Working"
        />

        {/* Floating Blobs */}
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </section>

      {/* Services */}
      <section className="services">
        <h2 data-aos="fade-up">What We Do</h2>
        <div className="service-grid">
          <div className="service-card" data-aos="zoom-in">
            <h3>Website Design</h3>
            <p>High-quality UI/UX design with modern trends.</p>
          </div>
          <div className="service-card" data-aos="zoom-in" data-aos-delay="150">
            <h3>Web Development</h3>
            <p>Fast, scalable, and secure websites.</p>
          </div>
          <div className="service-card" data-aos="zoom-in" data-aos-delay="300">
            <h3>Digital Marketing</h3>
            <p>SEO, social media & paid ads to generate leads.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" data-aos="fade-up">
        <h2>Let’s Build Something Amazing</h2>
        <a href="/contact" className="btn">Contact Us</a>
      </section>

      <Footer />
    </>
  );
};

export default Home;
