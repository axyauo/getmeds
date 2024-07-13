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
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contactError, setContactError] = useState("");
  const [cityError, setCityError] = useState("");
  const [zipcodeError, setZipcodeError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (checkValidations()) {
      try {
        const formData = {
          firstName,
          lastName,
          email,
          contact,
          medicine,
          city,
          zipcode,
        };

        const response = await fetch("https://formspree.io/f/mnqelpvo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Form submitted successfully!");
          alert("Form submitted successfully!");
          handleReset(); // Optional: Reset form fields after submission
        } else {
          console.error("Failed to submit form. Status:", response.status);
          alert("Failed to submit form. Please try again later.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to submit form. Please try again later.");
      }
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
    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
    setContactError("");
    setCityError("");
    setZipcodeError("");
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  const handleMedicineChange = (event) => {
    setMedicine(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleZipcodeChange = (event) => {
    setZipcode(event.target.value);
  };

  // Validation function (simplified for demonstration)
  const checkValidations = () => {
    let isValid = true;

    if (firstName.trim() === "") {
      setFirstNameError("Please fill out this field!");
      isValid = false;
    } else {
      setFirstNameError("");
    }

    if (lastName.trim() === "") {
      setLastNameError("Please fill out this field!");
      isValid = false;
    } else {
      setLastNameError("");
    }

    if (email.trim() === "") {
      setEmailError("Please fill out this field!");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (contact.trim() === "") {
      setContactError("Please fill out this field!");
      isValid = false;
    } else {
      setContactError("");
    }

    if (city.trim() === "") {
      setCityError("Please fill out this field!");
      isValid = false;
    } else {
      setCityError("");
    }

    if (zipcode.trim() === "") {
      setZipcodeError("Please fill out this field!");
      isValid = false;
    } else {
      setZipcodeError("");
    }

    return isValid;
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
                <form id="submit-form" onSubmit={handleSubmit}>
                  <p>
                    <input
                      id="firstName"
                      className="form-input"
                      type="text"
                      placeholder="First Name*"
                      value={firstName}
                      onChange={handleFirstNameChange}
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
                      onChange={handleLastNameChange}
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
                      onChange={handleEmailChange}
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
                      onChange={handleContactChange}
                    />
                    <small className="name-error">{contactError}</small>
                  </p>
                  <p className="full-width">
                    <select
                      id="medicine"
                      className="form-input"
                      value={medicine}
                      onChange={handleMedicineChange}
                      required
                    >
                      <option value="">Select Get Meds Product</option>
                      <option value="Ativan 2mg (90-Pills)">
                        Ativan 2mg (90-Pills)
                      </option>
                      <option value="Klona 2mg (90-Pills)">
                        Klona 2mg (90-Pills)
                      </option>
                      <option value="Soma 500mg (180-Pills)">
                        Soma 500mg (180-Pills)
                      </option>
                      <option value="TRAMADOL-blister(180-Pills)">
                        TRAMADOL-blister(180-Pills)
                      </option>
                      <option value="Valium 10mg (180_Pills)">
                        Valium 10mg (180_Pills)
                      </option>
                      <option value="Xanax 1mg (90-Pills)">
                        Xanax 1mg (90-Pills)
                      </option>
                    </select>
                  </p>
                  <p>
                    <input
                      id="city"
                      className="form-input"
                      type="text"
                      placeholder="City*"
                      value={city}
                      onChange={handleCityChange}
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
                      onChange={handleZipcodeChange}
                      required
                    />
                    <small className="name-error">{zipcodeError}</small>
                  </p>
                  <p className="full-width">
                    <input
                      type="checkbox"
                      id="checkbox"
                      name="checkbox"
                      defaultChecked
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
                  <span className="hightlight-contact-info">
                    <li className="email-info">
                      <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                      info@getmedy.com
                    </li>
                    <li>
                      <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                      <span className="highlight-text">+1-315-510-5500</span>
                    </li>
                  </span>
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
