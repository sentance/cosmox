import React, { useState, useEffect } from "react";
import axios from "axios";
import { Ada, Btc, Eth } from "../../assets/img/Images";

const Tabs = ({ activeTab }) => {
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
    },
    {
      currency: "ethereum",
      icon: <Eth />,
    },
    {
      currency: "cardano",
      icon: <Ada />,
    },
  ];

  return (
    <>
      {tabsData.map((tab, index) => (
        <div key={index} className={`tabs__content ${activeTab === index ? "active" : ""}`}>
          <div className="item">
            <div className="market">
              {tab.icon}
              <span>{`${tab.currency}-USD`}</span>
            </div>
            <div className="pv">
              <div className="price">
                {cryptosData[index]?.current_price.toFixed(2)}
                <span>USD</span>
              </div>
              <div className="volume">
                {cryptosData[index]?.total_volume.toLocaleString()}
                <span>USD</span>
              </div>
            </div>
            <div
              className="change"
              style={{ color: cryptosData[index]?.price_change_percentage_24h >= 0 ? "#0EFF43" : "#FF0331" }}
            >
              {cryptosData[index]?.price_change_percentage_24h.toFixed(2)}% <span>(24H CHANGE)</span>
            </div>
            <div className="trade">
              <a href="#">TRADE</a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Tabs;
