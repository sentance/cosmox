import React from "react";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import { I3, I2, I1 } from "../assets/img/Images";

const ThirdScreen = () => {
  const { t } = useTranslation(); // Use the useTranslation hook to get access to translations

  return (
    <section className="sec3" id="benefits">
      <div className="container">
        <div className="title">
          <h2>{t("thirdScreen.title")}</h2>
          <h1>{t("thirdScreen.subTitle")}</h1>
        </div>
        <div className="items">
          {t("thirdScreen.items", { returnObjects: true }).map((item, index) => (
            <div className="item" key={index}>
              {index === 0 && <I1 />}
              {index === 1 && <I2 />}
              {index === 2 && <I3 />}
              <div className="text">
                <span>{item.title}</span>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="but">
          <a href="#contactform">{t("thirdScreen.buttonText")}</a>
        </div>
      </div>
    </section>
  );
};

export default ThirdScreen;
