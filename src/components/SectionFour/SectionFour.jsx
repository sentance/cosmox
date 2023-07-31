import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Apple, Gray, Pp, Stripe } from "../../assets/img/Images";
import { sendEmail } from "../../helpers/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CssTextField, CssTextArea, WhiteInputLabel } from "./SectionFourStyles";
import ReCAPTCHA from "react-google-recaptcha";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SectionFour = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    "g-recaptcha-response": "", // Add this key to the state
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Verify captcha
    const captchaValue = formData["g-recaptcha-response"];
    if (!captchaValue) {
      toast.error("Please complete the reCAPTCHA challenge.");
      return;
    }

    // Send the data to Mailgun using an HTTP POST request
    try {
      const message = await sendEmail(formData);

      toast.success(message.data);
    } catch (error) {
      toast.error(error.response && error.response.data.message ? error.response.data.message : error.message);
    }
  };

  const handleCaptchaChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      "g-recaptcha-response": value,
    }));
  };

  const carouselImages = [
    { id: 1, icon: "" },
    { id: 2, icon: "" },
    { id: 3, icon: "" },
    { id: 4, icon: "" },
  ];

  const sliderSettings = {
    showArrows: false, // Hide navigation arrows
    showStatus: false, // Hide the current slide status (e.g., 1/4)
    showIndicators: false, // Hide the dots at the bottom of the carousel
    showThumbs: false, // Hide the thumbnail images
    infiniteLoop: true,
    autoPlay: true,
    interval: 2000,
  };

  return (
    <section className="sec4">
      <div className="container">
        <div className="left">
          <h2>PAYMENTS</h2>
          <h1>Intermediaries</h1>
          <p>
            We pride ourselves on offering a variety of proven payment methods that make transactions easier for our
            users. Here is a list of the payment methods we support.
          </p>
          <div className="items">
            <Carousel {...sliderSettings}>
              {carouselImages.map((item) => (
                <>
                  <span className="pay-item" style={{ paddingRight: "15px" }}>
                    <Gray />
                  </span>
                  <span className="pay-item" style={{ paddingRight: "15px" }}>
                    <Apple />
                  </span>
                  <span className="pay-item" style={{ paddingRight: "15px" }}>
                    <Stripe />
                  </span>
                  <span className="pay-item" style={{ paddingRight: "15px" }}>
                    <Pp />
                  </span>
                </>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="right">
          <ToastContainer position="top-center" limit={1} />
          <form onSubmit={handleSubmit}>
            <div className="title">
              <h2>CONTACT</h2>
              <h1>Write us</h1>
            </div>
            <div className="inputs">
              {/* Use the controlled component */}

              <CssTextField
                label={<WhiteInputLabel>Name</WhiteInputLabel>}
                id="custom-css-outlined-input"
                value={formData.name}
                onChange={handleChange}
                name="name"
                required
              />
              <CssTextField
                label={<WhiteInputLabel>Last Name</WhiteInputLabel>}
                id="custom-css-outlined-input"
                value={formData.lastName}
                onChange={handleChange}
                name="lastName"
                required
              />
              <CssTextField
                label={<WhiteInputLabel>E-mail</WhiteInputLabel>}
                id="custom-css-outlined-input"
                value={formData.email}
                onChange={handleChange}
                name="email"
                required
                type="email"
              />
              <CssTextField
                label={<WhiteInputLabel>Phone</WhiteInputLabel>}
                id="custom-css-outlined-input"
                value={formData.phone}
                name="phone"
                onChange={handleChange}
                inputProps={{
                  pattern: "^(\\([0-9]{3}\\)\\s*|[0-9]{3}-)[0-9]{3}-[0-9]{4}$", // Regular expression for phone number format
                }}
                required
                type="number"
              />

              <CssTextArea
                label={<WhiteInputLabel>Message</WhiteInputLabel>}
                id="custom-css-outlined-input"
                value={formData.message}
                onChange={handleChange}
                name="message"
                required
              />
              <ReCAPTCHA sitekey="6LfMRWEnAAAAACvb5qhLIooZN6GxcXnXNhNkeJS0" onChange={handleCaptchaChange} />
            </div>
            <div className="text">
              <p>This site is protected by reCAPTCHA</p>
              <p>and the Google Privacy Policy and Terms of Serviceapply.</p>
              <p />
              <span>
                <p>*</p> - required fields
              </span>
            </div>
            <div className="but">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
