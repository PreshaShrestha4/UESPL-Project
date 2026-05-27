import { useState } from "react";
import "./Projects.css";

const projectData = {
  Commercial: [
    "/src/assets/Commercial/C1.png",
    "/src/assets/Commercial/C2.png",
    "/src/assets/Commercial/C3.png",
    "/src/assets/Commercial/C4.png",
    "/src/assets/Commercial/C5.png",
    "/src/assets/Commercial/C6.png",
    "/src/assets/Commercial/C7.png",
  ],
  Hospital: [
    "/src/assets/Hospital/H1.png",
    "/src/assets/Hospital/H2.png",
    "/src/assets/Hospital/H3.png",
    "/src/assets/Hospital/H4.png",
  ],
};

const tabs = Object.keys(projectData);

export default function Projects() {
  const [activeTab, setActiveTab] = useState("Commercial");

  return (
    <section className="projects-section">
      {/* HEADER */}
      <div className="projects-header">
        <h2>OUR FEATURED PROJECTS</h2>
        <p>
          Bridging 35 years of industry heritage with modern,
          international-standard technical consulting for diverse development
          projects.
        </p>
      </div>

      {/* TABS */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="projects-grid">
        {projectData[activeTab].map((img, index) => (
          <div
            key={index}
            className={`project-card ${
              index === projectData[activeTab].length - 1 ? "center-card" : ""
            }`}
          >
            <img src={img} alt="project" />
          </div>
        ))}
      </div>
    </section>
  );
}
