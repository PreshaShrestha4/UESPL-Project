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
  Industrial: [
    "/src/assets/Industrial/I1.png",
    "/src/assets/Industrial/I2.png",
    "/src/assets/Industrial/I3.png",
    "/src/assets/Industrial/I4.png",
    "/src/assets/Industrial/I5.png",
    "/src/assets/Industrial/I6.png",
    "/src/assets/Industrial/I7.png",
    "/src/assets/Industrial/I8.png",
    "/src/assets/Industrial/I9.png",
    "/src/assets/Industrial/I10.png",
    "/src/assets/Industrial/I11.png",
    "/src/assets/Industrial/I12.png",
    "/src/assets/Industrial/I13.png",
    "/src/assets/Industrial/I14.png",
    "/src/assets/Industrial/I15.png",
    "/src/assets/Industrial/I16.png",
    "/src/assets/Industrial/I17.png",
    "/src/assets/Industrial/I18.png",
    "/src/assets/Industrial/I19.png",
    "/src/assets/Industrial/I20.png",
    "/src/assets/Industrial/I21.png",
    "/src/assets/Industrial/I22.png",
    "/src/assets/Industrial/I23.png",
  ],
  Interior: [
    "/src/assets/Interior/In1.png",
    "/src/assets/Interior/In2.png",
    "/src/assets/Interior/In3.png",
    "/src/assets/Interior/In4.png",
    "/src/assets/Interior/In5.png",
    "/src/assets/Interior/In6.png",
    "/src/assets/Interior/In7.png",
    "/src/assets/Interior/In8.png",
    "/src/assets/Interior/In9.png",
    "/src/assets/Interior/In10.png",
    "/src/assets/Interior/In11.png",
    "/src/assets/Interior/In12.png",
    "/src/assets/Interior/In13.png",
    "/src/assets/Interior/In14.png",
    "/src/assets/Interior/In15.png",
    "/src/assets/Interior/In16.png",
    "/src/assets/Interior/In17.png",
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
