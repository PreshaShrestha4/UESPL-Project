import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <div className="logo-section">
          <div className="logo-box">
            <img src={logo} alt="UESPL Logo" />
          </div>

          <div className="logo-text">
            <h2>USHA ENGINEERING</h2>
            <p>SERVICE (P.) LTD.</p>
          </div>
        </div>

        {/* NAV LINKS */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        {/* BUTTON */}
        <button className="contact-btn">Get in Touch</button>
      </div>
    </header>
  );
};

export default Navbar;
