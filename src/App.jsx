import React from "react";
import "./assets/css/style.css";
import "./assets/css/animate.css";
import MobileMenu from "./components/MobileMenu";
import Menu from "./components/Menu";
import FirstScreen from "./components/FirstScreen";
import SecondScreen from "./components/SecondScreen";
import ThirdScreen from "./components/ThirdScrreen";
import SectionFour from "./components/SectionFour";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <MobileMenu />
          <Menu />
        </header>
        <FirstScreen />
        <SecondScreen />
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
