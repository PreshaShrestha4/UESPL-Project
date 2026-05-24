import "./Contact.css";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="connect-section">
      {/* TOP TITLE */}
      <div className="connect-heading">
        <h2>Let's Connect</h2>

        <h3>USHA ENGINEERING SERVICE (P). LTD.</h3>
      </div>

      {/* MAIN CONTENT */}
      <div className="connect-wrapper">
        {/* LEFT FORM */}
        <div className="connect-form-box">
          <form className="connect-form">
            <input type="text" placeholder="Your Name" />

            <input type="email" placeholder="Your Email" />

            <input type="text" placeholder="Subject" />

            <textarea placeholder="How can we help?"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* RIGHT CONTACT CARD */}
        <div className="connect-info-box">
          <h2>Get in Touch</h2>

          <p>Looking for help? Fill the form and start a new adventure.</p>

          <div className="connect-line"></div>

          {/* LOCATION */}
          <div className="info-item">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h4>Office Location</h4>

              <p>
                Sewa Path-05, Siddharthanaga,
                <br />
                Rupandehi, Nepal
              </p>
            </div>
          </div>

          {/* PHONE */}
          <div className="info-item">
            <div className="info-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <h4>Phone</h4>

              <a href="#">+977-71-571632</a>
              <a href="#">+977-9857012648</a>
              <a href="#">+977-9857021648</a>
            </div>
          </div>

          {/* EMAIL */}
          <div className="info-item">
            <div className="info-icon">
              <MdEmail />
            </div>

            <div>
              <h4>Email</h4>

              <a href="#">uespl.org@gmail.com</a>
              <a href="#">info@uespl.com.np</a>
            </div>
          </div>

          <div className="connect-line"></div>

          {/* SOCIAL */}
          <div className="connect-socials">
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
