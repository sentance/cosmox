import React, { useState } from "react";
import "./assets/css/style.css";
import "./assets/css/animate.css";
import MobileMenu from "./components/MobileMenu";
import Menu from "./components/Menu";
import MainScreen from "./components/MainScreen/MainScreen";
import CurrencyTab from "./components/tabcomponents/CurrencyTab";
import ThirdScreen from "./components/ThirdScrreen";
import SectionFour from "./components/SectionFour/SectionFour";
import Footer from "./components/Footer";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

function App() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const handleDropdownToggle = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <div className="wrapper">
          <header>
            <MobileMenu isDropdownVisible={isDropdownVisible} handleDropdownToggle={handleDropdownToggle} />
            <Menu handleDropdownToggle={handleDropdownToggle} isDropdownVisible={isDropdownVisible} />
          </header>
          <MainScreen />
          <CurrencyTab />
          <ThirdScreen />
          <SectionFour />

          <Footer />
        </div>
      </div>
    </I18nextProvider>
  );
}

export default App;
