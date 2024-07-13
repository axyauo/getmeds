// server.js

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// POST route for form submission
app.post("/submit-form", (req, res) => {
  const { firstName, lastName, email, contact, medicine, city, zipcode } =
    req.body;

  // Validate data (if needed)

  // Send email using nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jisakshay01@gmail.com",
      pass: "Coder@axy12",
    },
  });

  const mailOptions = {
    from: "jisakshay01@gmail.com",
    to: "jisakshay01@gmail.com", // Change this to your email address
    subject: "New Form Submission",
    html: `
      <p>First Name: ${firstName}</p>
      <p>Last Name: ${lastName}</p>
      <p>Email: ${email}</p>
      <p>Contact: ${contact}</p>
      <p>Medicine: ${medicine}</p>
      <p>City: ${city}</p>
      <p>Zipcode: ${zipcode}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Failed to send email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

// GET route for /submit-form (optional, depending on your needs)
app.get("/submit-form", (req, res) => {
  res
    .status(405)
    .send("GET method not allowed. Use POST method for form submission.");
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
