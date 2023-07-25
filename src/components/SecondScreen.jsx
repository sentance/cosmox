import React from "react";

const SecondScreen = () => {
  return (
    <section className="sec2">
      <div className="container">
        <div className="tabs">
          <div className="top">
            <ul className="tabs__caption">
              <li className="tabs__item">USD</li>
              <li className="tabs__item">BTC</li>
              <li className="tabs__item">ETH</li>
              <li className="tabs__item">USDT</li>
            </ul>
            <form>
              <input type="text" placeholder="Filter..." />
            </form>
          </div>
          <div className="info">
            <div className="item">Market</div>
            <div className="item">Current Price</div>
            <div className="item">24h Volume</div>
            <div className="item">24h Change</div>
            <div className="item">Action</div>
          </div>
          <div className="tabs__content">
            <div className="item">
              <div className="market">
                <img src="../assets/img/btc.svg" alt="" />
                <span>BTC-USD</span>
              </div>
              <div className="pv">
                <div className="price">
                  25790.12
                  <span>USD</span>
                </div>
                <div className="volume">
                  19.30
                  <span>BTC</span>
                </div>
              </div>
              <div className="change" style={{ color: "#0EFF43" }}>
                +12% <span>(24H CHANGE)</span>
              </div>
              <div className="trade">
                <a href="#">TRADE</a>
              </div>
            </div>
            <div className="item">
              <div className="market">
                <img src="../assets/img/eth.svg" alt="" />
                <span>ETH-USD</span>
              </div>
              <div className="pv">
                <div className="price">
                  500.470
                  <span>USD</span>
                </div>
                <div className="volume">
                  115.94
                  <span>BTC</span>
                </div>
              </div>
              <div className="change" style={{ color: "#FF0331" }}>
                -12% <span>(24H CHANGE)</span>
              </div>
              <div className="trade">
                <a href="#">TRADE</a>
              </div>
            </div>
            <div className="item">
              <div className="market">
                <img src="../assets/img/ada.svg" alt="" />
                <span>ADA-USD</span>
              </div>
              <div className="pv">
                <div className="price">
                  3.10
                  <span>USD</span>
                </div>
                <div className="volume">
                  1.94
                  <span>BTC</span>
                </div>
              </div>
              <div className="change">
                0% <span>(24H CHANGE)</span>
              </div>
              <div className="trade">
                <a href="#">TRADE</a>
              </div>
            </div>
          </div>
          <div className="tabs__content">
            <div className="item">
              <div className="market">
                <img src="../assets/img/btc.svg" alt="" />
                <span>BTC-USD</span>
              </div>
              <div className="pv">
                <div className="price">
                  25790.12
                  <span>USD</span>
                </div>
                <div className="volume">
                  19.30
                  <span>BTC</span>
                </div>
              </div>
              <div className="change" style={{ color: "#0EFF43" }}>
                +12% <span>(24H CHANGE)</span>
              </div>
              <div className="trade">
                <a href="#">TRADE</a>
              </div>
            </div>
            <div className="item">
              <div className="market">
                <img src="../assets/img/eth.svg" alt="" />
                <span>ETH-USD</span>
              </div>
              <div className="pv">
                <div className="price">
                  500.470
                  <span>USD</span>
                </div>
                <div className="volume">
                  115.94
                  <span>BTC</span>
                </div>
              </div>
              <div className="change" style={{ color: "#FF0331" }}>
                -12% <span>(24H CHANGE)</span>
              </div>
              <div className="trade">
                <a href="#">TRADE</a>
              </div>
            </div>
            <div className="item">
              <div className="market">
                <img src="../assets/img/ada.svg" alt="" />
                <span>ADA-USD</span>
              </div>
              <div className="pv">
                <div className="price">
                  3.10
                  <span>USD</span>
                </div>
                <div className="volume">
                  1.94
                  <span>BTC</span>
                </div>
              </div>
              <div className="change">
                0% <span>(24H CHANGE)</span>
              </div>
              <div className="trade">
                <a href="#">TRADE</a>
              </div>
            </div>
          </div>
          <div className="tabs__content">
            <div className="item">
              <div className="market">
                <img src="../assets/img/btc.svg" alt="" />
                <span>BTC-USD</span>
              </div>
              <div className="pv">
                <div className="price">
                  25790.12
                  <span>USD</span>
                </div>
                <div className="volume">
                  19.30
                  <span>BTC</span>
                </div>
              </div>
              <div className="change" style={{ color: "#0EFF43" }}>
                +12% <span>(24H CHANGE)</span>
              </div>
              <div className="trade">
                <a href="#">TRADE</a>
              </div>
            </div>
            <div className="item">
              <div className="market">
                <img src="../assets/img/eth.svg" alt="" />
                <span>ETH-USD</span>
              </div>
              <div className="pv">
                <div className="price">
                  500.470
                  <span>USD</span>
                </div>
                <div className="volume">
                  115.94
                  <span>BTC</span>
                </div>
              </div>
              <div className="change" style={{ color: "#FF0331" }}>
                -12% <span>(24H CHANGE)</span>
              </div>
              <div className="trade">
                <a href="#">TRADE</a>
              </div>
            </div>
            <div className="item">
              <div className="market">
                <img src="../assets/img/ada.svg" alt="" />
                <span>ADA-USD</span>
              </div>
              <div className="pv">
                <div className="price">
                  3.10
                  <span>USD</span>
                </div>
                <div className="volume">
                  1.94
                  <span>BTC</span>
                </div>
              </div>
              <div className="change">
                0% <span>(24H CHANGE)</span>
              </div>
              <div className="trade">
                <a href="#">TRADE</a>
              </div>
            </div>
          </div>
          <div className="tabs__content">
            <div className="item">
              <div className="market">
                <img src="../assets/img/btc.svg" alt="" />
                <span>BTC-USD</span>
              </div>
              <div className="pv">
                <div className="price">
                  25790.12
                  <span>USD</span>
                </div>
                <div className="volume">
                  19.30
                  <span>BTC</span>
                </div>
              </div>
              <div className="change" style={{ color: "#0EFF43" }}>
                +12% <span>(24H CHANGE)</span>
              </div>
              <div className="trade">
                <a href="#">TRADE</a>
              </div>
            </div>
            <div className="item">
              <div className="market">
                <img src="../assets/img/eth.svg" alt="" />
                <span>ETH-USD</span>
              </div>
              <div className="pv">
                <div className="price">
                  500.470
                  <span>USD</span>
                </div>
                <div className="volume">
                  115.94
                  <span>BTC</span>
                </div>
              </div>
              <div className="change" style={{ color: "#FF0331" }}>
                -12% <span>(24H CHANGE)</span>
              </div>
              <div className="trade">
                <a href="#">TRADE</a>
              </div>
            </div>
            <div className="item">
              <div className="market">
                <img src="../assets/img/ada.svg" alt="" />
                <span>ADA-USD</span>
              </div>
              <div className="pv">
                <div className="price">
                  3.10
                  <span>USD</span>
                </div>
                <div className="volume">
                  1.94
                  <span>BTC</span>
                </div>
              </div>
              <div className="change">
                0% <span>(24H CHANGE)</span>
              </div>
              <div className="trade">
                <a href="#">TRADE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondScreen;
