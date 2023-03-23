import React from "react";
import styles from "./Footer.module.css";
import footerLogo from "../../assets/footer/footerLogo.webp";

import googleStore from "../../assets/footer/google_play_button.webp";
import appStore from "../../assets/footer/app_store_button.webp";
import ruStore from "../../assets/footer/ru_store_button.webp";

import instaLogo from "../../assets/footer/footerInstaLogo.webp";
import vkLogo from "../../assets/footer/footerVkLogo.webp";
import tgLogo from "../../assets/footer/footerTgLogo.webp";
import whatsLogo from "../../assets/footer/footerWhatsUpLogo.webp";

import phoneCall from "../../assets/footer/footerPhoneCall.webp";
import emailMessage from "../../assets/footer/footerEmailMessager.webp";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";

const Footer = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1240px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1240px)" });

  return (
    <div className={styles.footer}>
      {isBigScreen && (
        <div className={styles.footerContainer}>
          <div className={styles.firstFooterContainer}>
            <div className={styles.logoContainer}>
              <img
                src={footerLogo}
                alt={"footerLogo"}
                className={styles.AdygeyaLogo}
              />
              <p>Узнай Адыгею</p>
            </div>
            <div>
              <p className={styles.copyright}>© Uadygeya.ru, 2023</p>
            </div>
            <div>
              <p>ИП Цуганова Рузана Адамовна</p>
              <p>ИНН 010511099148</p>
            </div>
          </div>

          <div className={styles.footerSecondsContainer}>
            <div className={styles.footerNavigationText}>
              <Link
                activeClass={styles.active}
                to="usefullness"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                className={styles.link}
              >
                Польза для бизнеса
              </Link>
              <Link
                activeClass={styles.active}
                to="suit"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                className={styles.link}
              >
                Кому подойдет
              </Link>
              <Link
                activeClass={styles.active}
                to="help"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                className={styles.link}
              >
                Найти клиентов
              </Link>
              <Link
                activeClass={styles.active}
                to="howtoregister"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                className={styles.link}
              >
                Как зарегистрироваться
              </Link>
              <Link
                activeClass={styles.active}
                to="request"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                className={styles.link}
              >
                Заявка
              </Link>
            </div>
            <div className={styles.marketImages}>
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

          <div className={styles.footerThirdContainer}>
            <div className={styles.footerSocialNetwork}>
              <img
                src={instaLogo}
                alt={"inst logo"}
                className={styles.socialLogoAdoptive}
              />
              <img
                src={vkLogo}
                alt={"vk logo"}
                className={styles.socialLogoAdoptive}
              />
              <img
                src={tgLogo}
                alt={"tg logo"}
                className={styles.socialLogoAdoptive}
              />
              <img
                src={whatsLogo}
                alt={"whatsUp logo"}
                className={styles.socialLogoAdoptive}
              />
            </div>
            <div className={styles.footerContacts}>
              <img
                src={emailMessage}
                alt={"email"}
                className={styles.contactUsLogo}
              />
              <p>info@uadygeya.ru</p>
            </div>
            <div className={styles.footerContacts}>
              <img
                src={phoneCall}
                alt={"handset"}
                className={styles.contactUsLogo}
              />
              <p>+7 (906)187-72-79</p>
            </div>
          </div>
        </div>
      )}

      {isTabletOrMobile && (
        <div className={styles.footerContainerMobile}>
          <div className={styles.headerMobileContainer}>
            <div className={styles.logoMobileContainer}>
              <img
                src={footerLogo}
                alt={"footerLogo"}
                className={styles.adygeyaLogoMobile}
              />
              <p>Узнай Адыгею</p>
            </div>
            <div className={styles.socialMobileContainer}>
              <img src={instaLogo} alt={"inst logo"} />
              <img src={vkLogo} alt={"vk logo"} />
              <img src={tgLogo} alt={"tg logo"} />
              <img src={whatsLogo} alt={"whatsUp logo"} />
            </div>
          </div>

          <div className={styles.navigationMobileContainer}>
            <div className={styles.headerMobileNavContainer}>
              <Link
                activeClass={styles.active}
                to="usefullness"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                className={styles.link}
              >
                Польза для бизнеса
              </Link>
              <Link
                activeClass={styles.active}
                to="suit"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                className={styles.link}
              >
                Кому подойдет
              </Link>
            </div>
            <div className={styles.lowerMobileNavContainer}>
              <Link
                activeClass={styles.active}
                to="help"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                className={styles.link}
              >
                Найти клиентов
              </Link>
              <Link
                activeClass={styles.active}
                to="howtoregister"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                className={styles.link}
              >
                Как зарегистрироваться
              </Link>
              <Link
                activeClass={styles.active}
                to="request"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
                className={styles.link}
              >
                Заявка
              </Link>
            </div>
          </div>

          <div className={styles.marketMobileContainer}>
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

          <div className={styles.mainContactMobContainer}>
            <div className={styles.contactMobileContainer}>
              <div className={styles.contactMobileText}>
                <p>Правовая информация</p>
              </div>
              <div className={styles.internalContactMobContainer}>
                <img
                  src={emailMessage}
                  alt={"email"}
                  className={styles.contactUsLogo}
                />
                <p className={styles.contactMobileText}>info@uadygeya.ru</p>
              </div>
            </div>
            <div className={styles.contactMobileContainer}>
              <div>
                <p className={styles.contactMobileText}>
                  Политика конфиденциальности
                </p>
              </div>
              <div className={styles.internalContactMobContainer}>
                <img
                  src={phoneCall}
                  alt={"handset"}
                  className={styles.contactUsLogo}
                />
                <p className={styles.contactMobileText}>+7 (906)187-72-79</p>
              </div>
            </div>
          </div>

          <div className={styles.copyrightMobileContainer}>
            <p className={styles.copyrightMobileText}>© Uadygeya.ru, 2023</p>
            <p className={styles.copyrightMobileText}>
              ИП Цуганова Рузана Адамовна
              <br />
              ИНН 010511099148
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
