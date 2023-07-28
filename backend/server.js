const express = require("express");
const dotenv = require("dotenv");
const mg = require("mailgun-js");

dotenv.config();

const mailgun = () =>
  mg({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/email", (req, res) => {
  const { email, name, lastName, phone, message } = req.body;
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
