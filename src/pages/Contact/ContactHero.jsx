import "./ContactHero.css";
import aboutBanner from "../../assets/aboutBanner.png";

function ContactHero() {
  return (
    <section
      className="projects-hero"
      style={{ backgroundImage: `url(${aboutBanner})` }}
    >
      <div className="overlay"></div>

      <div className="projects-content">
        <div className="left-line"></div>

        <div className="text">
          <h1>Contact Us</h1>
          <p>Home / Contact Us</p>
        </div>

        <div className="right-line"></div>
      </div>
    </section>
  );
}

export default ContactHero;
