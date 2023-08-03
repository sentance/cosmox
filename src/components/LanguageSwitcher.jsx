import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowLangSwitcher, BritishFlag, Poland } from "../assets/img/Images";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguageDropdownVisible(false); // Close the dropdown after language change
  };

  const toggleLanguageDropdown = (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the button
    setLanguageDropdownVisible((prevState) => !prevState);
  };

  const closeLanguageDropdown = () => {
    setLanguageDropdownVisible(false);
  };

  return (
    <div className="button-dropdown">
      <div className="language-container">
        <a href="#" className="language-changer" onClick={() => changeLanguage("en")}>
          English
          <BritishFlag />
        </a>
        <a href="#" className="dropdown-toggle" onClick={toggleLanguageDropdown}>
          <ArrowLangSwitcher />
        </a>
      </div>

      <ul
        className="dropdown-menu"
        style={{ display: languageDropdownVisible ? "block" : "none" }}
        onClick={closeLanguageDropdown}
      >
        <li className="language-changer">
          <a href="#" onClick={() => changeLanguage("pl")}>
            Polish
            <span style={{ paddingLeft: 5 }}>
              {" "}
              <Poland />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
