import "./Footer.css";

import logo from "../../assets/logo.png";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-about">
          <div className="footer-logo">
            <img src={logo} alt="" />

            <h2>
              USHA ENGINEERING
              <br />
              SERVICE (P). LTD.
            </h2>
          </div>

          <p>
            USHA Engineering Services (P) Ltd. is a consulting firm established
            on October 2, 1991, to deliver high-quality professional services.
            It was later incorporated as a private limited company in 2001. Now
            based in Sewa Path, Bhairahawa, the company has grown into a
            recognized consulting firm in Nepal.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Contact us</li>
            <li>Projects</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="footer-social">
          <h3>Social Media</h3>

          <p>
            Connect with us on our social media platforms. Stay informed on our
            latest projects and professional updates.
          </p>

          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        {/* MAP */}
        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps?q=Bhairahawa,Nepal&output=embed"
            title="map"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* CONTACT BOXES */}
      <div className="footer-contact-row">
        <div className="footer-contact-box">
          <MdEmail className="contact-icon" />

          <div>
            <h4>Email</h4>

            <p>info@uespl.com.np</p>
            <p>uespl.org@gmail.com</p>
          </div>
        </div>

        <div className="footer-contact-box">
          <FaPhoneAlt className="contact-icon" />

          <div>
            <h4>Phone Number</h4>

            <p>+977-71-571632</p>
            <p>+977-9857012648</p>
          </div>
        </div>

        <div className="footer-contact-box">
          <FaMapMarkerAlt className="contact-icon" />

          <div>
            <h4>Location</h4>

            <p>Sewa Path, Bhairahawa, Nepal</p>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © USHA Engineering Services (P). Ltd. All rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
