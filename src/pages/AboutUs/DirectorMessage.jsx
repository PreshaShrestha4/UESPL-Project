import "./DirectorMessage.css";

import teamImg from "../../assets/team.png";
import goalImg from "../../assets/goal.png";
import weImg from "../../assets/we.png";

const DirectorMessage = () => {
  return (
    <section className="director-section">
      <div className="director-container">
        {/* TITLE */}
        <h2 className="director-title">
          A SPECIAL MESSAGE FROM OUR MANAGING DIRECTOR
        </h2>

        <div className="director-content">
          {/* LEFT SIDE */}
          <div className="director-left">
            <img src={teamImg} alt="UESPL Team" />
          </div>

          {/* RIGHT SIDE */}
          <div className="director-right">
            <p className="message">
              UESPL has served a wide variety of clients including the numerous
              ministries, departments and other corporate entities in the
              country. UESPL's technical and administrative staff have ample
              experience collaborating with experts from expatriate consulting
              firms and have thus gained the capacity to deliver high-quality
              international standard outputs that validate state-of-the-art and
              cutting-edge technologies.
              <br />
              <br />
              With the experiences all around, a wide variety of professional
              obligations have strengthened our ability to manage all the tasks
              effectively according to international standards.
            </p>

            {/* OUR GOAL */}

            <div className="info-box">
              <img src={goalImg} alt="Goal" />

              <div>
                <h3>Our Goal</h3>

                <p>
                  DELIVERING HIGH QUALITY, EFFECTIVE, AND INSPIRING BUILT SPACE
                </p>
              </div>
            </div>

            {/* WE */}

            <div className="info-box">
              <img src={weImg} alt="We" />

              <div>
                <h3>We</h3>

                <p>
                  PLAY AN IMPORTANT ROLE IN LEADING THE NATION TOWARDS
                  DEVELOPMENT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
