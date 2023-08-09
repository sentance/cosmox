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
            {/* <div className="button-dropdown">
              <button
                className="dropdown-toggle"
                style={{ paddingLeft: "14%" }}
                ref={menuRef}
                onMouseEnter={toggleLanguageDropdown}
              >
                <span className="flag-show">{t("mobileMenu.languageButton")}</span>
                <span className="flag-show">
                  <BritishFlag />
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={9}
                  height={8}
                  viewBox="0 0 9 8"
                  fill="none"
                  className={languageDropdownVisible ? "up" : ""}
                >
                  {" "}
                  <g clipPath="url(#clip0_1_833)">
                    <path
                      d="M5.66279 4.56133L8.70493 0.117644C8.84552 -0.0875742 8.91992 -0.294346 8.91992 -0.466214C8.91992 -0.798487 8.65325 -1.00403 8.20687 -1.00403L1.63194 -1.00403C1.18608 -1.00403 0.919922 -0.798746 0.919922 -0.46725C0.919922 -0.295123 0.994393 -0.0916539 1.13537 0.114017L4.17744 4.55978C4.3734 4.84569 4.63709 5.00402 4.92028 5.00402C5.20327 5.00408 5.4669 4.84756 5.66279 4.56133Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_833">
                      <rect width={8} height={8} fill="white" transform="matrix(0 1 -1 0 8.91992 0)" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <ul
                className="dropdown-menu"
                id="lang-menu-mobile"
                style={{ display: languageDropdownVisible ? "block" : "none" }}
              >
                <li>
                  <a href="#">PL</a>
                </li>
              </ul>
            </div> */}
            <LanguageSwitcher />
            <p>@2023 cosmosX - All Right Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
