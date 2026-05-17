import "./About.css";
import temple from "../../assets/temple.png";
import industry from "../../assets/industry.png";

function About() {
  return (
    <section className="about">
      <div className="about-top">
        <p className="small-title">ABOUT US</p>

        <h2>Who We Are?</h2>

        <p className="description">
          USHA Engineering Services (P) Ltd. is a consulting company established
          and registered as USHA Engineering services in October 02, 1991 to
          Provide high quality professional services. This Organization was
          registered in the Department of Industry, HMG/Nepal as per the private
          firm Registration Act 2014 of HMG/ Nepal with registration
          No.12860/048. Its head office was at New Baneshwor, Kathmandu, Nepal
          (Presently shifted to Sewa Path, Bhairahawa, Nepal). It has been
          registered as Usha Engineering Services (P) Ltd. in the Office of
          Company Registraron August 09, 2001 with Private Registration
          No.-16271/058-59. Since then, it is rapidly growing as a notable
          consulting company in Nepal with engagement in various professional
          services.
        </p>

        <button>About Us</button>
      </div>

      <div className="about-content">
        <div className="stats">
          <div className="box">
            <h3>80+</h3>
            <p>Project Completed</p>
          </div>

          <div className="box">
            <h3>34+</h3>
            <p>Experience</p>
          </div>

          <div className="box">
            <h3>20+</h3>
            <p>Employee</p>
          </div>
        </div>

        <div className="images">
          <img src={temple} alt="Temple" />
          <img src={industry} alt="Industry" />
        </div>
      </div>
    </section>
  );
}

export default About;
