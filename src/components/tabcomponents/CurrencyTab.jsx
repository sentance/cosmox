import React, { useState } from "react";
import TabsActiveCheck from "./TabsActiveCheck";
import Tabs from "./Tabs";

const currencyList = ["All", "BTC", "ETH", "ADA"];

const CurrencyTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [filterText, setFilterText] = useState(""); // New state for filter text

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  return (
    <section className="sec2">
      <div className="container">
        <div className="tabs">
          <div className="top">
            <ul className="tabs__caption" style={{ marginBottom: "20px" }}>
              {currencyList.map((currency, index) => (
                <TabsActiveCheck
                  key={index}
                  currency={currency}
                  isActive={activeTab === index}
                  onClick={() => handleTabClick(index)}
                />
              ))}
            </ul>
            {/* Conditionally render the filter input only when the "All" tab is active */}
            {activeTab === 0 && (
              <form>
                <input type="text" placeholder="Filter..." value={filterText} onChange={handleFilterChange} />
              </form>
            )}
          </div>
          {/* Render the content based on the activeTab value */}
          <div className="info">
            <div className="item">Market</div>
            <div className="item">Current Price</div>
            <div className="item">24h Volume</div>
            <div className="item">24h Change</div>
            <div className="item">Action</div>
          </div>
          <Tabs activeTab={activeTab} filterText={filterText} />
        </div>
      </div>
    </section>
  );
};

export default CurrencyTab;
