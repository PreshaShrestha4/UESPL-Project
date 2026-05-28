import "./MessageSent.css";

function MessageSent() {
  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="message-overlay">
      <div className="message-popup">
        <div className="check-icon">✓</div>

        <h1>Successfully Send</h1>

        <p>
          Your message has been successfully send
          <br />
          to the company
        </p>

        <button className="home-btn" onClick={goHome}>
          Back To Home
        </button>
      </div>
    </div>
  );
}

export default MessageSent;
