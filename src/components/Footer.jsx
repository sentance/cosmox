const Footer = () => {
  return (
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
  );
};

export default Footer;
