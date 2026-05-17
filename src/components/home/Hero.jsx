import "./Hero.css";

import heroBg from "../../assets/hero-bg.png";

import img1 from "../../assets/project1.png";
import img2 from "../../assets/project2.png";
import img3 from "../../assets/project3.png";

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay"></div>

      <div className="hero-content">
        {/* TEXT */}
        <div className="hero-text">
          <h2>Welcome to</h2>

          <h1>USHA ENGINEERING SERVICE (P). LTD.</h1>

          <p>
            Building strong solutions for a smarter future through innovation,
            quality, and trust.
          </p>

          <button>Get in Touch</button>
        </div>

        {/* PROJECT IMAGES */}
        <div className="hero-projects">
          <div className="project-card">
            <img src={img1} alt="Project 1" />
          </div>

          <div className="project-card">
            <img src={img2} alt="Project 2" />
          </div>

          <div className="project-card">
            <img src={img3} alt="Project 3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
