import React from "react";
import styles from "./Hat.module.css";
import googleStore from "../../assets/footer/google_play_button.svg";
import appStore from "../../assets/footer/app_store_button.svg";
import ruStore from "../../assets/footer/ru_store_button.svg";
import phoneGif from "../../assets/header/hatAnimation.gif";
import { useMediaQuery } from "react-responsive";

const Hat = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1240px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1240px)" });

  return (
    <div className={styles.hat}>
      {isBigScreen && (
        <div className={styles.hatContainer}>
          <div>
            <div className={styles.TextContainer}>
              <p className={styles.upperText}>
                Мобильное приложение <br /> «Узнай Адыгею »
              </p>
              <p className={styles.middleText}>
                Находит клиентов, которые хотят отдохнуть <br />в Адыгее: для
                отелей, гостиниц, ресторанов, гидов <br />и инструкторов
                активного отдыха.
              </p>
              <p className={styles.lowerText}>
                Регистрируйте свой бизнес в приложении до 28 февраля 2023 года
                <br />и 6 месяцев бесплатно размещайте в нём свои услуги.
              </p>
            </div>

            <div>
              <button className={styles.registrationButton}>
                Зарегистрироваться
              </button>
            </div>
            <div className={styles.marketsContainer}>
              <img
                src={googleStore}
                alt={"google store"}
                className={styles.marketButton}
                onClick={() =>
                  (window.location.href =
                    "https://play.google.com/store/apps/details?id=com.adygeya")
                }
              />
              <img
                src={appStore}
                alt={"app store"}
                className={styles.marketButton}
              />
              <img
                src={ruStore}
                alt={"ru store"}
                className={styles.marketButton}
                onClick={() =>
                  (window.location.href =
                    "https://apps.rustore.ru/app/com.adygeya")
                }
              />
            </div>
          </div>

          <div className={styles.gifPlace}>
            <img src={phoneGif} alt={"phone gif"} className={styles.hatGif} />
          </div>
        </div>
      )}
      {isTabletOrMobile && (
        <div className={styles.hatContainer}>
          <div>
            <div className={styles.gifPlace}>
              <img src={phoneGif} alt={"phone gif"} className={styles.hatGif} />
            </div>
            <div className={styles.TextContainer}>
              <p className={styles.upperText}>
                Мобильное приложение <br /> «Узнай Адыгею »
              </p>
              <p className={styles.middleText}>
                Находит клиентов, которые хотят отдохнуть <br />в Адыгее: для
                отелей, гостиниц, ресторанов, гидов <br />и инструкторов
                активного отдыха.
              </p>
              <p className={styles.lowerText}>
                Регистрируйте свой бизнес в приложении до 28 февраля 2023 года
                <br />и 6 месяцев бесплатно размещайте в нём свои услуги.
              </p>
            </div>

            <div>
              <button className={styles.registrationButton}>
                Зарегистрироваться
              </button>
            </div>
            <div className={styles.marketsContainer}>
              <img
                src={googleStore}
                alt={"google store"}
                className={styles.marketButton}
                onClick={() =>
                  (window.location.href =
                    "https://play.google.com/store/apps/details?id=com.adygeya")
                }
              />
              <img
                src={appStore}
                alt={"app store"}
                className={styles.marketButton}
              />
              <img
                src={ruStore}
                alt={"ru store"}
                className={styles.marketButton}
                onClick={() =>
                  (window.location.href =
                    "https://apps.rustore.ru/app/com.adygeya")
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hat;
