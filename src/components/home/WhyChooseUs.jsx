// import React from "react";
import "./WhyChooseUs.css";

import building from "../../assets/whyHome.png";

import proven from "../../assets/Proven.png";
import total from "../../assets/Total.png";
import client from "../../assets/Client.png";
import commitment from "../../assets/Commitment.png";

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      {/* HEADER */}
      <div className="why-header">
        <h2>WHY CHOOSE US?</h2>

        <p>
          Choosing UESPL means choosing a team that bridges the gap between
          complex requirements and actionable success.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="why-container">
        {/* LEFT COLUMN */}
        <div className="why-column">
          {/* CARD 1 */}
          <div className="why-card">
            <div className="card-top">
              <img src={proven} alt="" className="card-icon" />

              <h3>Proven Reliability:</h3>
            </div>

            <p>
              Established in 1991, we bring decades of seasoned experience to
              every site and study.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="why-card">
            <div className="card-top">
              <img src={client} alt="" className="card-icon" />

              <h3>Client-Centric Philosophy:</h3>
            </div>

            <p>
              Established in 1991, we bring decades of seasoned experience to
              every site and study.
            </p>
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="why-image">
          <img src={building} alt="Building" />
        </div>

        {/* RIGHT COLUMN */}
        <div className="why-column">
          {/* CARD 3 */}
          <div className="why-card">
            <div className="card-top">
              <img src={total} alt="" className="card-icon" />

              <h3>Total Project Ownership:</h3>
            </div>

            <p>
              From architectural design to valuation and surveying, our diverse
              team ensures all technical needs are handled in-house.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="why-card">
            <div className="card-top">
              <img src={commitment} alt="" className="card-icon" />

              <h3>Commitment to Quality:</h3>
            </div>

            <p>
              We uphold the highest professional standards, ensuring your
              project is built on transparency, integrity, international best
              practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
