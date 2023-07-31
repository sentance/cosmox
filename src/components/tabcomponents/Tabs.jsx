// components/Tabs.js

import React, { useState, useEffect } from "react";
import { Ada, Btc, Eth } from "../../assets/img/Images";
import { fetchCryptosData } from "../../helpers/api"; // Import the fetchCryptosData function

const Tabs = ({ activeTab, filterText }) => {
  const [cryptosData, setCryptosData] = useState([]);

  useEffect(() => {
    // Fetch cryptocurrency prices when the component mounts
    const fetchData = async () => {
      const data = await fetchCryptosData();
      setCryptosData(data);
    };
    fetchData();
  }, []);

  // Data for each cryptocurrency tab
  const tabsData = [
    {
      currency: "bitcoin",
      icon: <Btc />,
      name: "BTC",
    },
    {
      currency: "ethereum",
      icon: <Eth />,
      name: "ETH",
    },
    {
      currency: "cardano",
      icon: <Ada />,
      name: "ADA",
    },
  ];

  // Function to render a tab's content
  const renderTabContent = (tab, data) => {
    return (
      <div className={`tabs__content ${activeTab === tab ? "active" : ""}`}>
        {data.map((cryptoData) => (
          <div key={cryptoData.id} className="item">
            <div className="market">
              {tabsData.find((tab) => tab.currency === cryptoData.id)?.icon}
              <span>{`${cryptoData.id.toUpperCase()}-USD`}</span>
            </div>
            <div className="pv">
              <div className="price">
                {cryptoData.current_price.toFixed(2)}
                <span>USD</span>
              </div>
              <div className="volume">
                {cryptoData.total_volume.toLocaleString()}
                <span>USD</span>
              </div>
            </div>
            <div
              className="change"
              style={{
                color: cryptoData.price_change_percentage_24h >= 0 ? "#0EFF43" : "#FF0331",
              }}
            >
              {cryptoData.price_change_percentage_24h.toFixed(2)}% <span>(24H CHANGE)</span>
            </div>
            <div className="trade">
              <a href="#">TRADE</a>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {renderTabContent(
        0,
        cryptosData.filter((crypto) => crypto.id.toLowerCase().includes(filterText.toLowerCase()))
      )}

      {/* Render the content for other tabs based on the activeTab value */}
      {tabsData.map((tab, index) => {
        return renderTabContent(
          index + 1,
          cryptosData.filter((crypto) => crypto.id === tab.currency)
        );
      })}
    </>
  );
};

export default Tabs;
