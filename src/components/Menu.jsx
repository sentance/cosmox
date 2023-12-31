import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import { Burger, Cross, Logo } from "../assets/img/Images";
import LanguageSwitcher from "./LanguageSwitcher";

const Menu = ({ handleDropdownToggle, isDropdownVisible }) => {
  const [contactDropdownVisible, setContactDropdownVisible] = useState(false);
  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);

  const toggleContactDropdown = () => {
    setContactDropdownVisible(!contactDropdownVisible);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownVisible(!languageDropdownVisible);
  };

  const menuRef = useRef(null); // Create a ref for the menu

  useEffect(() => {
    // Add event listener for clicks on the entire document
    const handleDocumentClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.classList.contains("dropdown-toggle")
      ) {
        // If the click is outside the menu and the button, close the menu
        setContactDropdownVisible(false);
        setLanguageDropdownVisible(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      // Clean up the event listener when the component is unmounted
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const { t } = useTranslation(); // Use the useTranslation hook to get access to translations

  return (
    <div className="container">
      <div className="block df jb">
        <div className="left">
          <div className="logo">
            <Logo />
          </div>
          <nav>
            <ul>
              <li className="list-item">
                <a href="#">{t("menu.links.homepage")}</a>
              </li>
              <li className="list-item">
                <a href="#markets">{t("menu.links.markets")}</a>
              </li>
              <li className="list-item">
                <a href="#benefits">{t("menu.links.benefits")}</a>
              </li>
            </ul>
            <div className="button-dropdown">
              <button
                className={`dropdown-toggle ${contactDropdownVisible ? "text-black" : ""}`}
                ref={menuRef}
                onMouseEnter={toggleContactDropdown}
              >
                {t("menu.links.contact")}
              </button>
              <ul
                onMouseLeave={toggleContactDropdown}
                className="dropdown-menu"
                style={{ display: contactDropdownVisible ? "block" : "none" }}
              >
                <li>
                  <a target="_index" href="https://www.facebook.com/Cosmos.Network.Atom/">
                    {t("menu.links.facebook")}
                  </a>
                </li>
                <li>
                  <a target="_index" href="https://www.instagram.com/cosmos_blockchain/?hl=cs">
                    {t("menu.links.instagram")}
                  </a>
                </li>
                <li>
                  <a target="_index" href="https://www.tiktok.com/discover/cosmos-crypto-prediction">
                    {t("menu.links.tiktok")}
                  </a>
                </li>
                <li>
                  <a target="_index" href="https://www.linkedin.com/company/cosmoshub/?originalSubdomain=ee">
                    {t("menu.links.linkedin")}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="right">
          <LanguageSwitcher />
          <div className="login">
            <a href="#">{t("menu.links.login")}</a>
          </div>
          <button className="pulse-button">
            <a href="#">{t("menu.links.joinUs")}</a>
          </button>
        </div>
        <div className="menu">
          <button id="burger-menu" onClick={handleDropdownToggle}>
            {isDropdownVisible ? <Cross /> : <Burger />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
