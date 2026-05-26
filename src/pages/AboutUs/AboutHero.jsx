import "./AboutHero.css";
import aboutBanner from "../../assets/aboutBanner.png";

const AboutHero = () => {
  return (
    <section
      className="about-hero-section"
      style={{
        backgroundImage: `url(${aboutBanner})`,
      }}
    >
      <div className="about-hero-overlay"></div>

      <div className="about-hero-corner about-hero-corner-left"></div>
      <div className="about-hero-corner about-hero-corner-right"></div>

      <div className="about-hero-content">
        <h1>About Us</h1>

        <p>
          Home <span>/</span> About Us
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
