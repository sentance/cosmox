import React, { useState } from "react";
import TabsActiveCheck from "./TabsActiveCheck";
import Tabs from "./Tabs";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook

const CurrencyTab = () => {
  const { t } = useTranslation(); // Use the useTranslation hook to get access to translations

  const [activeTab, setActiveTab] = useState(0);
  const [filterText, setFilterText] = useState(""); // New state for filter text

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  return (
    <section className="sec2" id="markets">
      <div className="container">
        <div className="tabs">
          <div className="top">
            <ul className="tabs__caption" style={{ marginBottom: "20px" }}>
              {t("currencyTab.tabs", { returnObjects: true }).map((currency, index) => (
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
                <input
                  type="text"
                  placeholder={t("currencyTab.filterPlaceholder")}
                  value={filterText}
                  onChange={handleFilterChange}
                />
              </form>
            )}
          </div>
          {/* Render the content based on the activeTab value */}
          <div className="info">
            <div className="item">{t("currencyTab.market")}</div>
            <div className="item">{t("currencyTab.currentPrice")}</div>
            <div className="item">{t("currencyTab.volume24h")}</div>
            <div className="item">{t("currencyTab.change24h")}</div>
            <div className="item">{t("currencyTab.action")}</div>
          </div>
          <Tabs activeTab={activeTab} filterText={filterText} />
        </div>
      </div>
    </section>
  );
};

export default CurrencyTab;
