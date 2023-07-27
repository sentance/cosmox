import React from "react";
import { Twitter, Logo, Instagram, Telegram } from "../assets/img/Images";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="f1">
          <a href="#" className="logo">
            <Logo />
          </a>
          <span>CosmoX</span>
          <a href="mailto:business@cosmox.io" className="mail">
            business@cosmox.io
          </a>
          <div className="icons">
            <div className="icon">
              <Twitter />
            </div>
            <div className="icon">
              <Instagram />
            </div>
            <div className="icon">
              <Telegram />
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
