import React from "react";
import ArrowDown from "../assets/img/arrows-down";
const FirstScreen = () => {
  return (
    <section className="sec1">
      <div className="container">
        <div className="content">
          <h2>WE CAN HELP YOU</h2>
          <h1>ComoxLife</h1>
          <p>
            An innovative platform for exchanging cryptocurrencies for traditional money! Our service enables the
            secure, fast and convenient exchange of digital assets for cash, giving users complete trust and
            transparency.
          </p>
          <form action="#">
            <input type="text" placeholder="E-mail" />
            <button>JOIN US</button>
          </form>
        </div>
        <a href="#">
          <ArrowDown />
        </a>
      </div>
    </section>
  );
};

export default FirstScreen;
