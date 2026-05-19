import "./Services.css";

import hanuman from "../../assets/hanuman.png";

const Services = () => {
  return (
    <section className="services-section">
      {/* TOP IMAGE */}
      <div
        className="services-banner"
        style={{ backgroundImage: `url(${hanuman})` }}
      >
        <div className="banner-overlay"></div>

        <h2>HANUMAN MANDIR</h2>
      </div>

      {/* CONTENT */}
      <div className="services-content">
        {/* TITLE */}
        <div className="services-header">
          <div className="service-line left-line"></div>

          <div className="header-center">
            <h2>OUR SERVICES</h2>

            <p>
              From foundational soil testing and structural design to final site
              supervision, we provide a seamless, multidisciplinary approach to
              every stage of your project.
            </p>

            <button>View All Services</button>
          </div>

          <div className="service-line right-line"></div>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          {/* CARD 1 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="service-card">
              <div>
                <h3>Architectural Design</h3>
                <p>
                  Providing innovative and sustainable architectural designs.
                </p>
              </div>

              <span>↗</span>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="service-card">
              <div>
                <h3>Structural Design</h3>
                <p>
                  Delivering robust and efficient structural designs that ensure
                  safety and durability.
                </p>
              </div>

              <span>↗</span>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="service-card">
              <div>
                <h3>Interior Design</h3>
                <p>
                  Crafting elegant and functional interior spaces tailored to
                  your lifestyle.
                </p>
              </div>

              <span>↗</span>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="service-card">
              <div>
                <h3>Valuation</h3>
                <p>
                  Offering precise and comprehensive property valuation services
                  you can trust.
                </p>
              </div>

              <span>↗</span>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="service-card">
              <div>
                <h3>Retrofit Design</h3>
                <p>
                  Specializing in retrofit designs to enhance and modernize
                  existing structures.
                </p>
              </div>

              <span>↗</span>
            </div>
          </div>

          {/* CARD 6 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="service-card">
              <div>
                <h3>IEE And EIA Consultation</h3>
                <p>
                  Providing expert IEE and EIA consultation for sustainable and
                  compliant development.
                </p>
              </div>

              <span>↗</span>
            </div>
          </div>

          {/* CARD 7 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="service-card">
              <div>
                <h3>Soil and Material Testing</h3>
                <p>
                  Delivering accurate and reliable soil and material testing
                  services for your projects.
                </p>
              </div>

              <span>↗</span>
            </div>
          </div>

          {/* CARD 8 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="service-card">
              <div>
                <h3>Vastu Consultation</h3>
                <p>
                  Offering Vastu consultation to harmonize your spaces with
                  positive energy.
                </p>
              </div>

              <span>↗</span>
            </div>
          </div>

          {/* CARD 9 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="service-card">
              <div>
                <h3>Surveying</h3>
                <p>
                  Providing precise and comprehensive surveying services for all
                  your project needs.
                </p>
              </div>

              <span>↗</span>
            </div>
          </div>

          {/* CARD 10 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="service-card">
              <div>
                <h3>Site Supervision</h3>
                <p>
                  Ensuring meticulous site supervision to guarantee project
                  quality and compliance.
                </p>
              </div>

              <span>↗</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
