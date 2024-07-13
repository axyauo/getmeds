import React, { useState } from "react";
import "./BuyNow.css";
import { Link } from "react-router-dom";

const BuyNow = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [medicine, setMedicine] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(true);

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contactError, setContactError] = useState("");
  const [cityError, setCityError] = useState("");
  const [zipcodeError, setZipcodeError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Constructing form data to send
    const formData = {
      firstName,
      lastName,
      email,
      contact,
      medicine,
      city,
      zipcode,
      checkboxChecked,
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
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setMedicine("");
        setCity("");
        setZipcode("");
        setCheckboxChecked(true);
      } else {
        console.error("Submission failed:", data);
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      alert("Error occurred while submitting form. Please try again.");
    }
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setMedicine("");
    setCity("");
    setZipcode("");
    setCheckboxChecked(true);
  };

  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <i className="bi bi-chevron-double-right"></i>
            </li>
            <li>Buy Now</li>
          </ul>
        </div>
      </div>
      <section>
        <div className="contain">
          <div className="container">
            <div className="wrapper">
              <div className="form">
                <h4>BUY NOW</h4>
                <h2 className="form-headline">Get Meds Product</h2>
                <form onSubmit={handleSubmit}>
                  <p>
                    <input
                      id="firstName"
                      className="form-input"
                      type="text"
                      placeholder="First Name*"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                    <small className="name-error">{firstNameError}</small>
                  </p>
                  <p>
                    <input
                      id="lastName"
                      className="form-input"
                      type="text"
                      placeholder="Last Name*"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                    <small className="name-error">{lastNameError}</small>
                  </p>
                  <p>
                    <input
                      id="email"
                      className="form-input"
                      type="email"
                      placeholder="Your Email*"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <small className="name-error">{emailError}</small>
                  </p>
                  <p>
                    <input
                      id="contact"
                      className="form-input"
                      type="text"
                      placeholder="Contact*"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      required
                    />
                    <small className="name-error">{contactError}</small>
                  </p>
                  <p className="full-width">
                    <select
                      id="medicine"
                      className="form-input"
                      value={medicine}
                      onChange={(e) => setMedicine(e.target.value)}
                      required
                    >
                      <option value="">Select Get Meds Product</option>
                      <option value="medicine1">Ativan 2mg (90-Pills)</option>
                      <option value="medicine2">Klona 2mg (90-Pills)</option>
                      <option value="medicine3">Soma 500mg (180-Pills)</option>
                      <option value="medicine4">
                        TRAMADOL-blister(180-Pills)
                      </option>
                      <option value="medicine5">Valium 10mg (180_Pills)</option>
                      <option value="medicine6">Xanax 1mg (90-Pills)</option>
                    </select>
                  </p>
                  <p>
                    <input
                      id="city"
                      className="form-input"
                      type="text"
                      placeholder="City*"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    />
                    <small className="name-error">{cityError}</small>
                  </p>
                  <p>
                    <input
                      id="zipcode"
                      className="form-input"
                      type="text"
                      placeholder="Zipcode*"
                      value={zipcode}
                      onChange={(e) => setZipcode(e.target.value)}
                      required
                    />
                    <small className="name-error">{zipcodeError}</small>
                  </p>
                  <p className="full-width">
                    <input
                      type="checkbox"
                      id="checkbox"
                      name="checkbox"
                      defaultChecked={checkboxChecked}
                      onChange={(e) => setCheckboxChecked(e.target.checked)}
                    />{" "}
                    Yes, I would like to receive communications by call / email
                    about Company's services.
                  </p>
                  <p className="full-width">
                    <input
                      type="submit"
                      className="submit-btn"
                      value="Submit"
                    />
                    <button
                      type="button"
                      className="reset-btn"
                      onClick={handleReset}
                    >
                      Reset
                    </button>
                  </p>
                </form>
              </div>

              <div className="contacts contact-wrapper">
                <ul>
                  <li>
                    Get Meds aims to revolutionize the US pharmaceutical
                    industry by offering WHO-quality medicines at affordable
                    prices.
                  </li>
                  <li className="email-info">
                    <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                    info@getmedy.com
                  </li>
                  <li>
                    <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                    <span className="highlight-text">+1-315-510-5500</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BuyNow;
