import "./ContactSection.css";

import img1 from "../../assets/contact/structure.png";
import img2 from "../../assets/contact/building.png";
import img3 from "../../assets/contact/floor.png";
import logo from "../../assets/logo.png";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-content">
        {/* Left Side */}
        <div className="contact-left">
          <div className="contact-title">
            <span className="line"></span>
            <p>Contact Us</p>
          </div>

          <h1>
            Get in Touch <br />
            With Us!
          </h1>

          <p className="paragraph">
            Connect with our expert team today to discuss your requirements and
            discover how our multidisciplinary expertise can add value to you
            next development.
          </p>

          <button>Get in Touch</button>
        </div>

        {/* Right Images */}
        <div className="image-stack">
          <img src={img1} className="img back" alt="" />
          <img src={img2} className="img middle" alt="" />
          <img src={img3} className="img front" alt="" />
        </div>
      </div>

      {/* Bottom cards */}

      <div className="bottom-box">
        <div className="project-box">
          <h2>
            Ready to Start Your
            <br />
            Project?
          </h2>
        </div>

        <div className="company-box">
          <img src={logo} alt="" />

          <h3>
            USHA ENGINEERING SERVICE (P.) <span>LTD.</span>
          </h3>
        </div>
      </div>
    </section>
  );
}
