import "./TeamSection.css";

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-header">
        <h1>OUR TEAM</h1>
      </div>

      {/* Row 1 */}
      <div className="team-row">
        <div className="team-card">Geologists</div>
        <div className="team-card">Sociologists</div>
        <div className="team-card">Structural Engineers</div>
        <div className="team-card">Electrical Engineers</div>
      </div>

      {/* Row 2 */}
      <div className="team-row">
        <div className="team-card">Environmental Engineers</div>
        <div className="team-card">Interior Designers</div>
        <div className="team-card">Geotechnical Engineers</div>
        <div className="team-card">Architects</div>
      </div>

      {/* Row 3 */}
      <div className="team-row last-row">
        <div className="team-card">Mechanical Engineers</div>
        <div className="team-card">Civil Engineers</div>
      </div>
    </section>
  );
};

export default TeamSection;
