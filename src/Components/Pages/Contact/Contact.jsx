import React, { useState } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Constructing form data to send
    const formData = {
      name,
      email,
      message,
      access_key: "7b243b8b-c260-47cb-8de4-deeedf03a1f9", // Replace with your Web3Forms access key
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
        setName("");
        setEmail("");
        setMessage("");
        alert("Thank you for reaching out. We will be in touch shortly!");
      } else {
        console.error("Submission failed:", data);
        alert("Message could not be sent. Please try again later.");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      alert("Error occurred while sending message. Please try again later.");
    }
  };

  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <i className="bi bi-chevron-double-right"></i>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="contactPage">
        <h1 className="heading_h1">Contact Us</h1>
        <main className="main">
          <section className="contactForm">
            <h2>Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="formGroup">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </section>
          <section className="contactInfo">
            <h2>Contact Information</h2>
            <ul>
              <li>
                Email: <a href="mailto: info@getmedy.com">info@getmedy.com</a>
              </li>
              <li>
                Phone: <a href="tel: +13155105500">+1 (315) 510-5500</a>
              </li>
              <li>
                Address: 202 Bluff St, Crystal River, FL 34428, Florida 34428,
                USA
              </li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default Contact;
