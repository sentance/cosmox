// MainScreen.jsx

import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import { ArrowDown } from "../../assets/img/Images";
import { CssTextField, WhiteInputLabel } from "./MainScreenStyles";
import { sendEmail } from "../../helpers/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainScreen = () => {
  const { t } = useTranslation(); // Use the useTranslation hook to get access to translations
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
      // Use the sendEmail function here
      const data = await sendEmail(formData);

      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
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
          <h2>{t("mainScreen.title")}</h2>
          <h1>{t("mainScreen.subTitle")}</h1>
          <p>{t("mainScreen.description")}</p>
          <ToastContainer position="top-center" limit={1} />
          <form onSubmit={handleSubmit}>
            <CssTextField
              label={<WhiteInputLabel>{t("mainScreen.emailLabel")}</WhiteInputLabel>}
              value={formData.email}
              onChange={handleChange}
              name="email"
              type="email"
              required
            />
            <button className="btn" type="submit">
              {t("mainScreen.joinUsButton")}
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

export default MainScreen;
