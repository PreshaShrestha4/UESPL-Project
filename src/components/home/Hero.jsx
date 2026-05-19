import "./Hero.css";

import heroBg from "../../assets/hero-bg.png";

import project1 from "../../assets/project/project1.png";
import project2 from "../../assets/project/project2.png";
import project3 from "../../assets/project/project3.png";
import project4 from "../../assets/project/project4.png";
import project5 from "../../assets/project/project5.png";
import project6 from "../../assets/project/project6.png";
import project7 from "../../assets/project/project7.png";
import project8 from "../../assets/project/project8.png";

const images = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
];

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

        {/* SLIDER */}
        <div className="slider-wrapper">
          <div className="slider-track">
            {[...images, ...images].map((img, index) => (
              <div className="project-card" key={index}>
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
