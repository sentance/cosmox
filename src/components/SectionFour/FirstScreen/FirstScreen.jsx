import React, { useState } from "react";
import ArrowDown from "../../../assets/img/arrows-down";
import { CssTextField, WhiteInputLabel } from "./FirstScreenStyles";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FirstScreen = () => {
  const [formData, setFormData] = useState({
    email: "",
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

    try {
      const { data } = await axios.post(`/api/email`, formData);

      toast.success(data.message);
    } catch (error) {
      toast.error(error.response && error.response.data.message ? error.response.data.message : error.message);
    }
  };

  const handleArrowClick = (event) => {
    event.preventDefault();
    // Scroll to the section you want to show after clicking the arrow
    const targetElement = document.getElementById("benefits");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="sec1">
      <div className="container">
        <div className="content">
          <h2>WE CAN HELP YOU</h2>
          <h1>ComoxLife</h1>
          <p>
            An innovative platform for exchanging cryptocurrencies for traditional money! Our service enables the
            secure, fast and convenient exchange of digital assets for cash, giving users complete trust and
            transparency.
          </p>
          <ToastContainer position="top-center" limit={1} />
          <form onSubmit={handleSubmit}>
            <CssTextField
              label={<WhiteInputLabel>e-mail</WhiteInputLabel>}
              value={formData.email}
              onChange={handleChange}
              name="email"
              required
            />
            <button className="btn" type="submit">
              JOIN US
            </button>
          </form>
        </div>
        <a href="#" onClick={handleArrowClick} className="arrow">
          <ArrowDown />
        </a>
      </div>
    </section>
  );
};

export default FirstScreen;
