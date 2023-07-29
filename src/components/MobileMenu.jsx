import React, { useState } from "react";

const MobileMenu = ({ isDropdownVisible, handleDropdownToggle }) => {
  const [contactDropdownVisible, setContactDropdownVisible] = useState(false);

  const toggleContactDropdown = () => {
    setContactDropdownVisible(!contactDropdownVisible);
  };
  return (
    <>
      <div id="mobile-menu" className={isDropdownVisible ? "show_mobile_menu" : ""}>
        <div className="block df">
          <ul>
            <li>
              <a href="">
                <span>Homepage</span>
              </a>
            </li>
            <li>
              <a href="#markets" onClick={handleDropdownToggle}>
                <span>Markets</span>
              </a>
            </li>
            <li>
              <a href="#benefits" onClick={handleDropdownToggle}>
                <span>Benefits</span>
              </a>
            </li>
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
