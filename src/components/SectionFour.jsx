import React, { useState } from "react";
import { TextField, FormHelperText } from "@mui/material";
import styled from "@emotion/styled";
import { Apple, Gray, Pp, Stripe } from "../assets/img/Images";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottom: "none", // Remove the underline after
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent", // Set the border color to transparent
    },
    "&:hover fieldset": {
      borderColor: "transparent", // Set the border color to transparent on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent", // Set the border color to transparent when focused
    },
  },
  height: "43px", // Set the height to 43px
  borderRadius: "20px", // Set the border radius
  background: "rgba(135, 135, 135, 0.2)", // Set the background color
  fontsize: "14px",
  width: "48%",
  marginBottom: "8px",
});

const CssTextArea = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottom: "none", // Remove the underline after
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent", // Set the border color to transparent
    },
    "&:hover fieldset": {
      borderColor: "transparent", // Set the border color to transparent on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent", // Set the border color to transparent when focused
    },
  },
  height: "150px",
  padding: "12px 18px",
  borderRadius: "20px",
  background: "rgba(135, 135, 135, 0.2)",
  border: "none",
  resize: "none",
  fontFamily: "inherit",
  fontsize: "14px",
  color: "#000",
  outline: "none",
  width: "100%",
  marginBottom: "8px",
});

const SectionFour = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData); // You can access the form data in the `formData` object
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
            <div className="item">
              <Apple />
            </div>
            <div className="item">
              <Stripe />
            </div>
            <div className="item">
              <Gray />
            </div>
            <div className="item">
              <Pp />
            </div>
          </div>
        </div>
        <div className="right">
          <form action="#">
            <div className="title">
              <h2>CONTACT</h2>
              <h1>Write us</h1>
            </div>
            <div className="inputs">
              {/* Use the controlled component */}

              <CssTextField
                label="Name"
                id="custom-css-outlined-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <CssTextField
                label="Last Name"
                id="custom-css-outlined-input"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <CssTextField
                label="email"
                id="custom-css-outlined-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <CssTextField
                label="phone"
                id="custom-css-outlined-input"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              {/* <div className="message">
                <textarea className="form-control" cols={30} rows={10} required="" defaultValue={""} />
                <div className="placeholder">
                  Message <span className="red">*</span>
                </div>
              </div> */}
              <CssTextArea
                label="Message"
                id="custom-css-outlined-input"
                value={formData.textarea}
                onChange={handleChange}
                required
              />
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
              <button>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
