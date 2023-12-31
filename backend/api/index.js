const express = require("express");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer"); // Add this line to import nodemailer
const axios = require("axios");
const cors = require("cors"); // Import the cors package

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Function to verify reCAPTCHA response
const verifyCaptcha = async (captchaResponse) => {
  const secretKey = "6LfCNXonAAAAAF9sJKBGqJiopy1WttNd2PkrEJHY"; // Replace with your secret key
  const url = "https://www.google.com/recaptcha/api/siteverify";

  try {
    const response = await axios.post(url, {
      secret: secretKey,
      response: captchaResponse,
    });

    const { success } = response.data;
    return success;
  } catch (error) {
    console.error("Error verifying captcha:", error);
    return false;
  }
};

app.get("/api", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.send("Hey this is my API running 🥳");
});

app.post("/api", async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  const { email, name, lastName, phone, message, captchaResponse } = req.body;

  // Check if captchaResponse exists and verify the captcha if available
  if (captchaResponse) {
    const isCaptchaValid = await verifyCaptcha(captchaResponse);

    if (!isCaptchaValid) {
      res.status(400).send({ message: "Invalid captcha response" });
      return;
    }
  }

  const emailMessage = `
    New user
    ${name ? `Name: ${name}` : ""}
    ${lastName ? `Last Name: ${lastName}` : ""}
    Email: ${email}
    ${phone ? `Phone: ${phone}` : ""}
    ${message ? `Message: ${message}` : ""}
  `;

  // Create a Nodemailer transporter using your SMTP server configuration
  const transporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    secure: false, // Set to true if using SSL/TLS
    auth: {
      user: "postmaster@cosmox360.com",
      pass: "testSMTPcosmox360$",
    },
  });

  // Email sending options
  const mailOptions = {
    from: "CosmoX <postmaster@cosmosx360.com>",
    to: "office@croney.io",
    subject: "Newsletter",
    text: emailMessage,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send({ message: "Error in sending email" });
    } else {
      res.status(200);
      res.send({ message: "Email sent successfully" });
    }
  });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App is served at port ${port}`);
});
