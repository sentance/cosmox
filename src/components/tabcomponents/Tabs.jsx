import React, { useState, useEffect } from "react";
import axios from "axios";
import { Ada, Btc, Eth } from "../../assets/img/Images";

const Tabs = ({ activeTab, filterText }) => {
  const [cryptosData, setCryptosData] = useState([]);

  useEffect(() => {
    // Function to fetch cryptocurrency prices
    const fetchCryptosData = async () => {
      try {
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
          params: {
            vs_currency: "usd",
            ids: "ethereum,bitcoin,cardano",
          },
        });

        setCryptosData(response.data);
      } catch (error) {
        console.log("Error fetching cryptocurrency prices:", error);
      }
    };

    // Fetch cryptocurrency prices when the component mounts
    fetchCryptosData();
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

  // Filter data based on the activeTab and filterText values
  const filteredData =
    activeTab === 0
      ? cryptosData.filter((crypto) => crypto.id.toLowerCase().includes(filterText.toLowerCase()))
      : cryptosData.filter((crypto) => crypto.id === tabsData[activeTab - 1]?.currency);

  return (
    <>
      <div className={`tabs__content ${activeTab === 0 ? "active" : ""}`}>
        {filteredData.map((cryptoData) => (
          <div key={cryptoData.id} className="item">
            <div className="market">
              {/* Determine the correct icon based on the currency */}
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
      {/* Render the content for other tabs based on the activeTab value */}
      {tabsData.map((tab, index) => (
        <div key={index + 1} className={`tabs__content ${activeTab === index + 1 ? "active" : ""}`}>
          {filteredData.map((cryptoData) => (
            <div key={cryptoData.id} className="item">
              <div className="market">
                {tab.icon}
                <span>{`${tab.name}-USD`}</span>
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
      ))}
    </>
  );
};

export default Tabs;
