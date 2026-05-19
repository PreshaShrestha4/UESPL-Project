import "./SpecialMessage.css";
import specialBg from "../../assets/special-bg.png";

const SpecialMessage = () => {
  return (
    <section className="special-section">
      {/* TOP IMAGE AREA */}
      <div
        className="special-top"
        style={{ backgroundImage: `url(${specialBg})` }}
      >
        {/* OVERLAY */}
        <div className="special-overlay"></div>

        {/* CONTENT */}
        <div className="special-content">
          {/* TITLE */}
          <div className="special-title-wrapper">
            <div className="corner-line left-corner"></div>

            <h2>
              A SPECIAL MESSAGE FROM OUR MANAGING
              <br />
              DIRECTOR
            </h2>

            <div className="corner-line right-corner"></div>
          </div>

          {/* BUTTON */}
          <button className="about-btn">About Us</button>
        </div>
      </div>

      {/* WHITE BOTTOM AREA */}
      <div className="special-bottom">
        {/* MESSAGE BOX */}
        <div className="message-box">
          <p>
            UESPL has served a wide variety of clients including the numerous
            ministries, departments and other corporate entities
            <br />
            in the country. UESPL's technical and administrative staff have
            ample experience collaborating with experts from
            <br />
            expatriate consulting firms and have thus gained the capacity to
            deliver high-quality international standard outputs
            <br />
            that validate state-of-the-art and cutting-edge technologies. With
            the experiences all around, a wide variety of
            <br />
            professional obligations have strengthened our ability to manage all
            the tasks effectively according to international
            <br />
            standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecialMessage;
