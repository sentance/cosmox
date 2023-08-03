const express = require("express");
const dotenv = require("dotenv");
const mg = require("mailgun-js");
const axios = require("axios"); // Add this line to import axios

dotenv.config();

const mailgun = () =>
  mg({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.post("/api/email", async (req, res) => {
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

  mailgun()
    .messages()
    .send(
      {
        from: "CosmosX <postmaster@cosmosx360.com>",
        to: "daniel@croneyfinancial.io",
        subject: "Contact Form Submission",
        text: emailMessage,
      },
      (error, body) => {
        if (error) {
          console.log(error);
          res.status(500).send({ message: "Error in sending email" });
        } else {
          console.log(body);
          res.send({ message: "Email sent successfully" });
        }
      }
    );
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App is served at port ${port}`);
});
