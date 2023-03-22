import React, { useEffect } from "react";
import styles from "./HowToRegister.module.css";
import snakeImg from "../../assets/howToRegister/snakeWithText.svg";
import greenPoint from "../../assets/howToRegister/greenPoint.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const HowToRegister = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id='howtoregister' className={styles.howToRegister}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Как зарегистрировать бизнес в приложении
        </h2>
        <div className={styles.stepsBlock}>
          <img
            src={greenPoint}
            alt="greenPoint"
            className={styles.firstPoint}
            data-aos="zoom-in-up"
            data-aos-offset="350"
          />
          <img
            src={greenPoint}
            alt="greenPoint"
            className={styles.secondPoint}
            data-aos="zoom-in-up"
            data-aos-offset="350"
          />
          <img
            src={greenPoint}
            alt="greenPoint"
            className={styles.thirdPoint}
            data-aos="zoom-in-up"
            data-aos-offset="350"
          />
          <img
            src={greenPoint}
            alt="greenPoint"
            className={styles.fourthPoint}
            data-aos="zoom-in-up"
            data-aos-offset="350"
          />
          <img
            src={greenPoint}
            alt="greenPoint"
            className={styles.fifthPoint}
            data-aos="zoom-in-up"
            data-aos-offset="350"
          />
          <img
            src={snakeImg}
            alt="stepsImg"
            className={styles.componentImage}
          />
        </div>
      </div>
    </div>
  );
};

export default HowToRegister;
