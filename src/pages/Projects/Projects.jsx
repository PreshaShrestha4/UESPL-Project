import { useState } from "react";
import "./Projects.css";

const projectData = {
  Commercial: [
    "/assets/Commercial/C1.png",
    "/assets/Commercial/C2.png",
    "/assets/Commercial/C3.png",
    "/assets/Commercial/C4.png",
    "/assets/Commercial/C5.png",
    "/assets/Commercial/C6.png",
    "/assets/Commercial/C7.png",
  ],

  Hospital: [
    "/assets/Hospital/H1.png",
    "/assets/Hospital/H2.png",
    "/assets/Hospital/H3.png",
    "/assets/Hospital/H4.png",
  ],

  Industrial: [
    "/assets/Industrial/I1.png",
    "/assets/Industrial/I2.png",
    "/assets/Industrial/I3.png",
    "/assets/Industrial/I4.png",
    "/assets/Industrial/I5.png",
    "/assets/Industrial/I6.png",
    "/assets/Industrial/I7.png",
    "/assets/Industrial/I8.png",
    "/assets/Industrial/I9.png",
    "/assets/Industrial/I10.png",
    "/assets/Industrial/I11.png",
    "/assets/Industrial/I12.png",
    "/assets/Industrial/I13.png",
    "/assets/Industrial/I14.png",
    "/assets/Industrial/I15.png",
    "/assets/Industrial/I16.png",
    "/assets/Industrial/I17.png",
    "/assets/Industrial/I18.png",
    "/assets/Industrial/I19.png",
    "/assets/Industrial/I20.png",
    "/assets/Industrial/I21.png",
    "/assets/Industrial/I22.png",
    "/assets/Industrial/I23.png",
  ],

  Interior: [
    "/assets/Interior/In1.png",
    "/assets/Interior/In2.png",
    "/assets/Interior/In3.png",
    "/assets/Interior/In4.png",
    "/assets/Interior/In5.png",
    "/assets/Interior/In6.png",
    "/assets/Interior/In7.png",
    "/assets/Interior/In8.png",
    "/assets/Interior/In9.png",
    "/assets/Interior/In10.png",
    "/assets/Interior/In11.png",
    "/assets/Interior/In12.png",
    "/assets/Interior/In13.png",
    "/assets/Interior/In14.png",
    "/assets/Interior/In15.png",
    "/assets/Interior/In16.png",
    "/assets/Interior/In17.png",
  ],

  Religious: [
    "/assets/Religious/R1.png",
    "/assets/Religious/R2.png",
    "/assets/Religious/R3.png",
    "/assets/Religious/R4.png",
    "/assets/Religious/R5.png",
    "/assets/Religious/R6.png",
    "/assets/Religious/R7.png",
    "/assets/Religious/R8.png",
  ],

  Residental: [
    "/assets/Residental/Rs1.png",
    "/assets/Residental/Rs2.png",
    "/assets/Residental/Rs3.png",
    "/assets/Residental/Rs4.png",
    "/assets/Residental/Rs5.png",
    "/assets/Residental/Rs6.png",
    "/assets/Residental/Rs7.png",
    "/assets/Residental/Rs8.png",
    "/assets/Residental/Rs9.png",
    "/assets/Residental/Rs10.png",
    "/assets/Residental/Rs11.png",
    "/assets/Residental/Rs12.png",
    "/assets/Residental/Rs13.png",
    "/assets/Residental/Rs14.png",
    "/assets/Residental/Rs15.png",
    "/assets/Residental/Rs16.png",
    "/assets/Residental/Rs17.png",
    "/assets/Residental/Rs18.png",
    "/assets/Residental/Rs19.png",
    "/assets/Residental/Rs20.png",
    "/assets/Residental/Rs21.png",
    "/assets/Residental/Rs22.png",
    "/assets/Residental/Rs23.png",
    "/assets/Residental/Rs24.png",
    "/assets/Residental/Rs25.png",
    "/assets/Residental/Rs26.png",
    "/assets/Residental/Rs27.png",
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
