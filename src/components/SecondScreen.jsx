import React, { useState } from "react";
import Tabs from "./tabcomponents/Tabs";

const currencyList = ["USD", "BTC", "ETH", "USDT"];

const SecondScreen = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="sec2">
      <div className="container">
        <div className="tabs">
          <div className="top">
            <ul className="tabs__caption">
              {currencyList.map((currency, index) => (
                <li
                  key={index}
                  className={`tabs__item ${activeTab === index ? "active" : ""}`}
                  onClick={() => handleTabClick(index)}
                >
                  {currency}
                </li>
              ))}
            </ul>
            <form>
              <input type="text" placeholder="Filter..." />
            </form>
          </div>
          <div className="info">
            <div className="item">Market</div>
            <div className="item">Current Price</div>
            <div className="item">24h Volume</div>
            <div className="item">24h Change</div>
            <div className="item">Action</div>
          </div>
          {/* Render the content based on the activeTab value */}
          <Tabs activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
};

export default SecondScreen;
