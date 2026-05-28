import { useState } from "react";
import "./ContactPopup.css";
import MessageSent from "./MessageSent";

const ContactPopup = ({ closePopup }) => {
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if fields are empty
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill all fields");
      return;
    }

    // Show success popup
    setShowSuccess(true);
  };

  return (
    <>
      {/* SUCCESS POPUP */}
      {showSuccess ? (
        <MessageSent />
      ) : (
        <div className="popup-overlay">
          <div className="popup-box">
            {/* CLOSE BUTTON */}
            <button className="close-btn" onClick={closePopup}>
              ✕
            </button>

            {/* HEADING */}
            <div className="popup-header">
              <h2>Let's Connect</h2>
              <h3>USHA ENGINEERING SERVICE (P.) LTD.</h3>
            </div>

            {/* FORM */}
            <form className="popup-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />

              <textarea
                name="message"
                placeholder="How can we help?"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button type="submit" className="send-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactPopup;
