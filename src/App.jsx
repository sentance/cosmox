import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <div className="container">
            <div className="block df jb">
              <div className="left">
                <a href="" className="logo">
                  <img src="./assets/img/logo.svg" alt="" />
                </a>
                <nav>
                  <ul>
                    <li>
                      <a href="#">Homepage</a>
                    </li>
                    <li>
                      <a href="#">Markets</a>
                    </li>
                    <li>
                      <a href="#">Benefits</a>
                    </li>
                  </ul>
                  <div className="button-dropdown">
                    <button className="dropdown-toggle">Contact</button>
                    <ul className="dropdown-menu" style={{ display: "none" }}>
                      <li>
                        <a href="#">Facebook</a>
                      </li>
                      <li>
                        <a href="#">Instagram</a>
                      </li>
                      <li>
                        <a href="#">TikTok</a>
                      </li>
                      <li>
                        <a href="#">LinkedIn</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="right">
                <div className="button-dropdown">
                  <button className="dropdown-toggle">
                    English
                    <img src="./assets/img/british-flag.svg" alt="" />
                    <svg xmlns="http://www.w3.org/2000/svg" width={9} height={8} viewBox="0 0 9 8" fill="none">
                      <g clipPath="url(#clip0_1_833)">
                        <path
                          d="M5.66279 4.56133L8.70493 0.117644C8.84552 -0.0875742 8.91992 -0.294346 8.91992 -0.466214C8.91992 -0.798487 8.65325 -1.00403 8.20687 -1.00403L1.63194 -1.00403C1.18608 -1.00403 0.919922 -0.798746 0.919922 -0.46725C0.919922 -0.295123 0.994393 -0.0916539 1.13537 0.114017L4.17744 4.55978C4.3734 4.84569 4.63709 5.00402 4.92028 5.00402C5.20327 5.00408 5.4669 4.84756 5.66279 4.56133Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_833">
                          <rect width={8} height={8} fill="white" transform="matrix(0 1 -1 0 8.91992 0)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <ul className="dropdown-menu" style={{ display: "none" }}>
                    <li>
                      <a href="#">Ukraine</a>
                    </li>
                  </ul>
                </div>
                <div className="login">
                  <a href="#">LOGIN</a>
                </div>
                <div className="join">
                  <a href="#">Join us</a>
                </div>
              </div>
              <div className="menu">
                {/* Кнопка Мобильного Меню */}
                <button id="burger-menu">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21.75 6H2.25C1.42162 6 0.75 5.32838 0.75 4.5C0.75 3.67162 1.42162 3 2.25 3H21.75C22.5784 3 23.25 3.67162 23.25 4.5C23.25 5.32838 22.5784 6 21.75 6Z"
                      fill="white"
                    />
                    <path
                      d="M21.75 21H2.25C1.42162 21 0.75 20.3284 0.75 19.5C0.75 18.6716 1.42162 18 2.25 18H21.75C22.5784 18 23.25 18.6716 23.25 19.5C23.25 20.3284 22.5784 21 21.75 21Z"
                      fill="white"
                    />
                    <path
                      d="M21.75 13.5H2.25C1.42162 13.5 0.75 12.8284 0.75 12C0.75 11.1716 1.42162 10.5 2.25 10.5H21.75C22.5784 10.5 23.25 11.1716 23.25 12C23.25 12.8284 22.5784 13.5 21.75 13.5Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
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
              <img src="./assets/img/arrows-down.svg" alt="" />
            </a>
          </div>
        </section>
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
                    <img src="./assets/img/btc.svg" alt="" />
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
                    <img src="./assets/img/eth.svg" alt="" />
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
                    <img src="./assets/img/ada.svg" alt="" />
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
                    <img src="./assets/img/btc.svg" alt="" />
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
                    <img src="./assets/img/eth.svg" alt="" />
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
                    <img src="./assets/img/ada.svg" alt="" />
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
                    <img src="./assets/img/btc.svg" alt="" />
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
                    <img src="./assets/img/eth.svg" alt="" />
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
                    <img src="./assets/img/ada.svg" alt="" />
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
                    <img src="./assets/img/btc.svg" alt="" />
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
                    <img src="./assets/img/eth.svg" alt="" />
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
                    <img src="./assets/img/ada.svg" alt="" />
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
        <section className="sec3">
          <div className="container">
            <div className="title">
              <h2>BENEFITS</h2>
              <h1>System</h1>
            </div>
            <div className="items">
              <div className="item">
                <img src="./assets/img/i1.svg" alt="" />
                <div className="text">
                  <span>Chart System</span>
                  <p>A Wide Array Od Crypto Trading And Management Services to Satisfy Diverse Trading Needs</p>
                </div>
              </div>
              <div className="item">
                <img src="./assets/img/i2.svg" alt="" />
                <div className="text">
                  <span>Trading platform</span>
                  <p>A Wide Array Od Crypto Trading And Management Services to Satisfy Diverse Trading Needs</p>
                </div>
              </div>
              <div className="item">
                <img src="./assets/img/i3.svg" alt="" />
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
        <section className="sec4">
          <div className="container">
            <div className="left">
              <h2>PAYMENTS</h2>
              <h1>Intermediaries</h1>
              <p>
                We pride ourselves on offering a variety of proven payment methods that make transactions easier for our
                users. Here is a list of the payment methods we support.
              </p>
              <div className="items">
                <div className="item">
                  <img src="./assets/img/apple.svg" alt="" />
                </div>
                <div className="item">
                  <img src="./assets/img/stripe.svg" alt="" />
                </div>
                <div className="item">
                  <img src="./assets/img/gpay.svg" alt="" />
                </div>
                <div className="item">
                  <img src="./assets/img/pp.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="right">
              <form action="#">
                <div className="title">
                  <h2>CONTACT</h2>
                  <h1>Write us</h1>
                </div>
                <div className="inputs">
                  <div className="name">
                    <input type="text" className="form-control" required="" />
                    <div className="placeholder">
                      Name <span className="red">*</span>
                    </div>
                  </div>
                  <div className="last-name">
                    <input type="text" className="form-control" required="" />
                    <div className="placeholder">
                      Last Name <span className="red">*</span>
                    </div>
                  </div>
                  <div className="e-mail">
                    <input type="text" className="form-control" required="" />
                    <div className="placeholder">
                      E-mail <span className="red">*</span>
                    </div>
                  </div>
                  <div className="phone">
                    <input type="text" className="form-control" required="" />
                    <div className="placeholder">
                      Phone number <span className="red">*</span>
                    </div>
                  </div>
                  <div className="message">
                    <textarea className="form-control" cols={30} rows={10} required="" defaultValue={""} />
                    <div className="placeholder">
                      Message <span className="red">*</span>
                    </div>
                  </div>
                </div>
                <div className="text">
                  <p>This site is protected by reCAPTCHA</p>
                  <p>and the Google Privacy Policy and Terms of Serviceapply.</p>
                  <p />
                  <span>
                    <p>*</p> - required fields
                  </span>
                </div>
                <div className="but">
                  <button>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="sec5">
          <div className="container"></div>
        </section>
        <footer>
          <div className="container">
            <div className="f1">
              <a href="#" className="logo">
                <img src="./assets/img/logo.svg" alt="" />
              </a>
              <span>CosmoX</span>
              <a href="mailto:business@cosmox.io" className="mail">
                business@cosmox.io
              </a>
              <div className="icons">
                <div className="icon">
                  <img src="./assets/img/twitter.svg" alt="" />
                </div>
                <div className="icon">
                  <img src="./assets/img/instagram.svg" alt="" />
                </div>
                <div className="icon">
                  <img src="./assets/img/telegram.svg" alt="" />
                </div>
              </div>
              <p>© 2023 cosmox - All Rights Reserved.</p>
            </div>
            <div className="f2">
              <ul>
                <li>About us</li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Terms and Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Cookies</a>
                </li>
              </ul>
            </div>
            <div className="f3">
              <ul>
                <li>Support</li>
                <li>
                  <a href="#">Submit Ticket</a>
                </li>
                <li>
                  <a href="#">Security Policy</a>
                </li>
                <li>
                  <a href="#">API Documentation</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="f4">
              <ul>
                <li>Resources</li>
                <li>
                  <a href="#">Markets</a>
                </li>
                <li>
                  <a href="#">Payments</a>
                </li>
                <li>
                  <a href="#">Fees</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
