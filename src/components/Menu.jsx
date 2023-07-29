import React, { useState } from "react";
import { BritishFlag, Burger, Cross, Logo } from "../assets/img/Images";

const Menu = ({ handleDropdownToggle, isDropdownVisible }) => {
  const [contactDropdownVisible, setContactDropdownVisible] = useState(false);
  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);

  const toggleContactDropdown = () => {
    setContactDropdownVisible(!contactDropdownVisible);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownVisible(!languageDropdownVisible);
  };

  return (
    <div className="container" style={{ position: "fixed", top: 0, left: 0 }}>
      <div className="block df jb">
        <div className="left">
          <a href="" className="logo">
            <Logo />
          </a>
          <nav>
            <ul>
              <li>
                <a href="#">Homepage</a>
              </li>
              <li>
                <a href="#markets">Markets</a>
              </li>
              <li>
                <a href="#benefits">Benefits</a>
              </li>
            </ul>
            <div className="button-dropdown">
              <button className="dropdown-toggle" onClick={toggleContactDropdown}>
                Contact
              </button>
              <ul className="dropdown-menu" style={{ display: contactDropdownVisible ? "block" : "none" }}>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">TikTok</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="right">
          <div className="button-dropdown">
            <button className="dropdown-toggle" onClick={toggleLanguageDropdown}>
              English
              <BritishFlag />
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
            <ul className="dropdown-menu" style={{ display: languageDropdownVisible ? "block" : "none" }}>
              {" "}
              <li>
                <a href="#">PL</a>
              </li>
            </ul>
          </div>
          <div className="login">
            <a href="#">LOGIN</a>
          </div>
          <div className="join">
            <a href="#">Join us</a>
          </div>
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
