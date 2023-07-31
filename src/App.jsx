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

function App() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const handleDropdownToggle = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  return (
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
        <section className="sec5">
          <div className="container"></div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
