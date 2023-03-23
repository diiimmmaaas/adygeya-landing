import React, { useEffect } from "react";
import styles from "./usefulnessOfTheApplication.module.css";
import squareCheckBox from "../../assets/main/usefulnessApp/checkboxQuadrate.webp";
import check from "../../assets/header/check.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const UsefulnessOfTheApplication = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id='usefullness' className={styles.usefulnessOfTheApplication}>
      <div className={styles.allItemsContainer}>
        <div>
          <p className={styles.upperText}>
            В каких ситуациях приложение <br /> полезно для бизнеса
          </p>
        </div>

        <div className={styles.checkBoxContainer}>
          <div className={styles.checkBox}>
            <div className={styles.checkBoxImageContainer}>
              <img
                src={squareCheckBox}
                alt={"square"}
                className={styles.checkboxImage}
              />
              <img
                src={check}
                alt={"check"}
                className={styles.check}
                data-aos="zoom-in"
                data-aos-anchor-placement="center-center"
                data-aos-duration="0"
              />
            </div>
            <p>
              Перестали получать <br /> клиентов после блокировки <br />
              букинг-сервисов и соцсетей.
            </p>
          </div>
          <div className={styles.checkBox}>
            <div className={styles.checkBoxImageContainer}>
              <img
                src={squareCheckBox}
                alt={"square"}
                className={styles.checkboxImage}
              />
              <img
                src={check}
                alt={"check"}
                className={styles.check}
                data-aos="zoom-in"
                data-aos-anchor-placement="center-center"
                data-aos-duration="1500"
              />
            </div>
            <p>
              Если нет сайта <br /> и возможностей его <br /> сделать.
            </p>
          </div>
          <div className={styles.checkBox}>
            <div className={styles.checkBoxImageContainer}>
              <img
                src={squareCheckBox}
                alt={"square"}
                className={styles.checkboxImage}
              />
              <img
                src={check}
                alt={"check"}
                className={styles.check}
                data-aos="zoom-in"
                data-aos-anchor-placement="center-center"
                data-aos-duration="3000"
              />
            </div>
            <p>
              Мало или нет <br /> бюджета на рекламу.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsefulnessOfTheApplication;
