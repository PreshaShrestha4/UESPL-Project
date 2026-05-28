import "./ServiceHero.css";
import aboutBanner from "../../assets/aboutBanner.png";

function ServiceHero() {
  return (
    <section
      className="projects-hero"
      style={{ backgroundImage: `url(${aboutBanner})` }}
    >
      <div className="overlay"></div>

      <div className="projects-content">
        <div className="left-line"></div>

        <div className="text">
          <h1>Our Services</h1>
          <p>Home / Our services</p>
        </div>

        <div className="right-line"></div>
      </div>
    </section>
  );
}

export default ServiceHero;
