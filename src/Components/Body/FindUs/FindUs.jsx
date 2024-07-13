import React, { useState } from "react";
import map from "../../images/map.png";
import "./FindUs.css";
import { Link } from "react-router-dom";

const FindUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Constructing form data to send
    const formData = {
      name,
      email,
      subject,
      message,
      access_key: "7b243b8b-c260-47cb-8de4-deeedf03a1f9",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        console.log("Success", data);
        alert("Thank you for reaching out. We will be in touch shortly!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        console.error("Submission failed:", data);
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      alert("Error occurred while sending message. Please try again.");
    }
  };

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${map})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "auto",
          width: "100%",
          position: "relative",
          color: "white",
          padding: "20px",
        }}
        className="overlay_form"
      >
        <div
          className="container my-5"
          style={{ position: "relative", zIndex: 2 }}
        >
          <div className="row">
            <div className="col-md-6 col-12 mb-3">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name (required)</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <small className="name-error">{nameError}</small>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email (required)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <small className="name-error">{emailError}</small>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </form>
            </div>
            <div className="col-md-6 col-12">
              <div className="contact-details">
                <h2>Contact Data</h2>
                <p>
                  <b>Phone:</b>{" "}
                  <a href="tel: +13155105500">+1 (315) 510-5500</a>
                </p>
                <p>
                  <b>Email:</b>{" "}
                  <a href="mailto: info@getmedy.com">info@getmedy.com</a>
                </p>
                <p>
                  <b>Address:</b> 202 Bluff St, Crystal River, FL 34428, Florida
                  34428, USA
                </p>
                <p>
                  <b>Opening Hour:</b> 24*7 Opens
                </p>
                <p>
                  <b>Website:</b>{" "}
                  <Link to="https://getmedy.com/">https://getmedy.com/</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FindUs;
