import React from "react";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import { Twitter, Logo, Instagram, Telegram } from "../assets/img/Images";

const Footer = () => {
  const { t } = useTranslation(); // Use the useTranslation hook to get access to translations

  return (
    <footer>
      <div className="container">
        <div className="f1">
          <a href="#" className="logo">
            <Logo />
          </a>
          <span>{t("footer.logoText")}</span>
          <a href="mailto:business@cosmox.io" className="mail">
            {t("footer.email")}
          </a>
          <div className="icons">
            <div className="icon">
              <a target="_index" href="https://twitter.com/cosmos?lang=cs">
                <Twitter />{" "}
              </a>
            </div>
            <div className="icon">
              <a target="_index" href="https://www.instagram.com/cosmos_blockchain/?hl=cs">
                <Instagram />{" "}
              </a>{" "}
            </div>
            <div className="icon">
              <a target="_index" href="https://t.me/cosmosproject">
                <Telegram />{" "}
              </a>
            </div>
          </div>
          <p>{t("footer.rightsReserved")}</p>
        </div>
        <div className="f2">
          <ul>
            <li>{t("footer.links.aboutUs")}</li>
            <li>
              <a href="#">{t("footer.links.about")}</a>
            </li>
            <li>
              <a href="#">{t("footer.links.termsAndConditions")}</a>
            </li>
            <li>
              <a href="#">{t("footer.links.privacyPolicy")}</a>
            </li>
            <li>
              <a href="#">{t("footer.links.cookies")}</a>
            </li>
          </ul>
        </div>
        <div className="f3">
          <ul>
            <li>{t("footer.links.support")}</li>
            <li>
              <a href="#">{t("footer.links.submitTicket")}</a>
            </li>
            <li>
              <a href="#">{t("footer.links.securityPolicy")}</a>
            </li>
            <li>
              <a href="#">{t("footer.links.apiDocumentation")}</a>
            </li>
            <li>
              <a href="#">{t("footer.links.contact")}</a>
            </li>
          </ul>
        </div>
        <div className="f4">
          <ul>
            <li>{t("footer.links.resources")}</li>
            <li>
              <a href="#">{t("footer.links.markets")}</a>
            </li>
            <li>
              <a href="#">{t("footer.links.payments")}</a>
            </li>
            <li>
              <a href="#">{t("footer.links.fees")}</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
