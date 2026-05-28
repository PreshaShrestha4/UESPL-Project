import "./Services.css";

const services = [
  {
    title: "Architectural Design",
    description: "Providing innovative and sustainable architectural designs.",
    image: "/src/assets/Services/Architectural.png",
  },

  {
    title: "Structural Design",
    description:
      "Delivering robust and efficient structural designs that ensure safety and durability.",
    image: "/src/assets/Services/Structural.png",
  },

  {
    title: "Interior Design",
    description:
      "Creating elegant and functional interior spaces tailored to your lifestyle.",
    image: "/src/assets/Services/Interior.png",
  },

  {
    title: "Valuation",
    description:
      "Offering precise and comprehensive property valuation services you can trust.",
    image: "/src/assets/Services/Valuation.png",
  },

  {
    title: "Retrofit Design",
    description:
      "Specializing in retrofit designs to enhance and modernize existing structures.",
    image: "/src/assets/Services/Retrofit.png",
  },

  {
    title: "IEE And EIA Consultation",
    description:
      "Providing expert IEE and EIA consultation for sustainable and compliant development.",
    image: "/src/assets/Services/IEEandEIA.png",
  },

  {
    title: "Soil and Material Testing",
    description:
      "Delivering accurate and reliable soil and material testing services for your projects.",
    image: "/src/assets/Services/SoilandMaterial.png",
  },

  {
    title: "Vastu Consultation",
    description:
      "Offering Vastu consultation to harmonize your spaces with positive energy.",
    image: "/src/assets/Services/Vastu.png",
  },

  {
    title: "Surveying",
    description:
      "Providing precise and comprehensive surveying services for all your project needs.",
    image: "/src/assets/Services/Surveying.png",
  },

  {
    title: "Site Supervision",
    description:
      "Ensuring meticulous site supervision to guarantee project quality and compliance.",
    image: "/src/assets/Services/Site.png",
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="services-top">
        <h2>OUR SERVICES</h2>

        <p>
          From foundational soil testing and structural design to final site
          supervision, we provide a seamless, multidisciplinary approach to
          every stage of your project.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            className="service-card"
            key={index}
            style={{
              backgroundImage: `url(${service.image})`,
            }}
          >
            <div className="service-overlay">
              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button>
                About Us <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
