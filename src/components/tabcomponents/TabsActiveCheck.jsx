import React from "react";

const TabsActiveCheck = ({ currency, isActive, onClick }) => {
  return (
    <li className={`tabs__item ${isActive ? "active" : ""}`} onClick={onClick}>
      {currency}
    </li>
  );
};

export default TabsActiveCheck;
