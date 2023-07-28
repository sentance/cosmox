import React, { useState } from "react";
import { Apple, Gray, Pp, Stripe } from "../../assets/img/Images";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CssTextField, CssTextArea, WhiteInputLabel } from "./SectionFourStyles";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import ReCAPTCHA from "react-google-recaptcha";

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
      const { data } = await axios.post(`/api/email`, formData);

      toast.success(data.message);
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

  const sliderImages = [
    { id: 1, icon: <Apple /> },
    { id: 2, icon: <Stripe /> },
    { id: 3, icon: <Gray /> },
    { id: 4, icon: <Pp /> },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
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
            <Slider {...sliderSettings}>
              {sliderImages.map((item) => (
                <div key={item.id} className="item">
                  {item.icon}
                </div>
              ))}
            </Slider>
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
              />
              <CssTextField
                label={<WhiteInputLabel>Phone</WhiteInputLabel>}
                id="custom-css-outlined-input"
                value={formData.phone}
                name="phone"
                onChange={handleChange}
                required
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
