import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import LanguageSwitcher from "./LanguageSwitcher";

const MobileMenu = ({ isDropdownVisible, handleDropdownToggle }) => {
  const { t } = useTranslation();

  const [contactDropdownVisible, setContactDropdownVisible] = useState(false);
  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);

  const toggleContactDropdown = () => {
    setContactDropdownVisible(!contactDropdownVisible);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownVisible(!languageDropdownVisible);
  };

  const menuRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.classList.contains("dropdown-toggle")
      ) {
        setContactDropdownVisible(false);
        setLanguageDropdownVisible(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const closeMobileMenu = () => {
    if (isDropdownVisible) {
      handleDropdownToggle();
    }
  };

  const scrollToContact = () => {
    document.querySelector("#contactformMobile").scrollIntoView({
      behavior: "smooth",
    });
    closeMobileMenu(); // Close the mobile menu after clicking on "Contact"
  };

  return (
    <>
      <div
        id="mobile-menu"
        style={{ position: "fixed", top: 0, left: 0, display: "none" }}
        className={isDropdownVisible ? "show_mobile_menu" : ""}
      >
        <div className="block df">
          <ul>
            {t("mobileMenu.menuItems", { returnObjects: true }).map((item, index) => (
              <li className="mobile-menu-item" key={index}>
                <a href={item.href} onClick={item.label === "Contact" ? scrollToContact : closeMobileMenu}>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
            <div className="button-dropdown mobile-menu-item">
              <button className="dropdown-toggle" onClick={scrollToContact}>
                {t("mobileMenu.contactButton")}
              </button>
            </div>
          </ul>
          <div className="bottomBlock">
            <LanguageSwitcher />
            <p>@2023 cosmosX - All Right Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
