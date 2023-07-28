import React from "react";
import { I3, I2, I1 } from "../assets/img/Images";

const ThirdScreen = () => {
  return (
    <section className="sec3" id="benefits">
      <div className="container">
        <div className="title">
          <h2>BENEFITS</h2>
          <h1>System</h1>
        </div>
        <div className="items">
          <div className="item">
            <I1 />
            <div className="text">
              <span>Chart System</span>
              <p>A Wide Array Od Crypto Trading And Management Services to Satisfy Diverse Trading Needs</p>
            </div>
          </div>
          <div className="item">
            <I2 />
            <div className="text">
              <span>Trading platform</span>
              <p>A Wide Array Od Crypto Trading And Management Services to Satisfy Diverse Trading Needs</p>
            </div>
          </div>
          <div className="item">
            <I3 />
            <div className="text">
              <span>Trading platform</span>
              <p>A Wide Array Od Crypto Trading And Management Services to Satisfy Diverse Trading Needs</p>
            </div>
          </div>
        </div>
        <div className="but">
          <a href="#">CHECK MORE</a>
        </div>
      </div>
    </section>
  );
};

export default ThirdScreen;
