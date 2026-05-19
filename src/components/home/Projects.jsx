import "./Projects.css";
import { useRef } from "react";

import project9 from "../../assets/project9.png";
import project10 from "../../assets/project10.png";
import project11 from "../../assets/project11.png";
import project12 from "../../assets/project12.png";
import project13 from "../../assets/project13.png";
import project14 from "../../assets/project14.png";
import project15 from "../../assets/project15.png";

const Projects = () => {
  const sliderRef = useRef(null);

  /* RIGHT SLIDE */
  const slideRight = () => {
    sliderRef.current.scrollBy({
      left: 420,
      behavior: "smooth",
    });
  };

  /* LEFT SLIDE */
  const slideLeft = () => {
    sliderRef.current.scrollBy({
      left: -420,
      behavior: "smooth",
    });
  };

  return (
    <section className="projects-section">
      {/* HEADER */}
      <div className="projects-header">
        <div className="title-line"></div>

        <h2>OUR PROJECTS</h2>

        <div className="title-line"></div>
      </div>

      {/* TEXT */}
      <p className="projects-text">
        Bridging 35 years of industry heritage with modern,
        international-standard technical consulting for diverse development
        projects.
      </p>

      {/* SLIDER */}
      <div className="projects-slider">
        {/* LEFT BUTTON */}
        <button className="slider-btn left-btn" onClick={slideLeft}>
          &lt;
        </button>

        {/* PROJECTS */}
        <div className="projects-wrapper" ref={sliderRef}>
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

          <div className="project-card">
            <img src={project13} alt="" />
          </div>

          <div className="project-card">
            <img src={project14} alt="" />
          </div>

          <div className="project-card">
            <img src={project15} alt="" />
          </div>
        </div>

        {/* RIGHT BUTTON */}
        <button className="slider-btn right-btn" onClick={slideRight}>
          &gt;
        </button>
      </div>

      {/* BUTTON */}
      <button className="view-btn">View All Projects</button>
    </section>
  );
};

export default Projects;
