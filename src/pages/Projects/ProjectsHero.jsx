import "./ProjectsHero.css";
import aboutBanner from "../../assets/aboutBanner.png";

function Projects() {
  return (
    <section
      className="projects-hero"
      style={{ backgroundImage: `url(${aboutBanner})` }}
    >
      <div className="overlay"></div>

      <div className="projects-content">
        <div className="left-line"></div>

        <div className="text">
          <h1>Our Projects</h1>
          <p>Home / Our projects</p>
        </div>

        <div className="right-line"></div>
      </div>
    </section>
  );
}

export default Projects;
