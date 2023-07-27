import React from "react";
import { BritishFlag, Logo } from "../assets/img/Images";

const Menu = () => {
  return (
    <div className="container">
      <div className="block df jb">
        <div className="left">
          <a href="" className="logo">
            <Logo />
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
              <BritishFlag />
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
                <a href="#">PL</a>
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
  );
};

export default Menu;
