import React, { useState } from "react";

const MobileMenu = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div id="mobile-menu">
      <div className="block df">
        <ul>
          <li>
            <a href="">
              <span>Homepage</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>Markets</span>
            </a>
          </li>
          <li>
            <a href="">
              <span>Benefits</span>
            </a>
          </li>
          <div className="button-dropdown">
            <button className="dropdown-toggle" onClick={handleDropdownToggle}>
              Contact
            </button>
            <ul className="dropdown-menu" style={{ display: isDropdownVisible ? "block" : "none" }}>
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
  );
};

export default MobileMenu;
