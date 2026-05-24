import "./Navbar.css";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">About Us</NavLink>

          <NavLink to="/projects">Projects</NavLink>

          <NavLink to="/services">Services</NavLink>

          <NavLink to="/contact">Contact Us</NavLink>
        </nav>

        {/* BUTTON */}
        <button className="contact-btn">Get in Touch</button>
      </div>
    </header>
  );
};

export default Navbar;
