import "./Projects.css";

import project9 from "../../assets/project9.png";
import project10 from "../../assets/project10.png";
import project11 from "../../assets/project11.png";
import project12 from "../../assets/project12.png";

const Projects = () => {
  return (
    <section className="projects-section">
      {/* TITLE */}
      <div className="projects-header">
        <div className="title-line"></div>

        <h2>OUR PROJECTS</h2>

        <div className="title-line"></div>
      </div>

      {/* PARAGRAPH */}
      <p className="projects-text">
        Bridging 35 years of industry heritage with modern,
        international-standard technical consulting for diverse development
        projects.
      </p>

      {/* PROJECT SLIDER */}
      <div className="projects-slider">
        {/* LEFT BUTTON */}
        <button className="slider-btn left-btn">←</button>

        {/* IMAGES */}
        <div className="projects-wrapper">
          <div className="project-card">
            <img src={project9} alt="" />
          </div>

          <div className="project-card">
            <img src={project10} alt="" />
          </div>

          <div className="project-card">
            <img src={project11} alt="" />
          </div>

          <div className="project-card">
            <img src={project12} alt="" />
          </div>
        </div>

        {/* RIGHT BUTTON */}
        <button className="slider-btn right-btn">→</button>
      </div>

      {/* BUTTON */}
      <button className="view-btn">View All Projects</button>
    </section>
  );
};

export default Projects;
