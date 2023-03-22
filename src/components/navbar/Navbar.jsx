import React, {useState} from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/header/logo_img.svg";
import whatsupIcon from "../../assets/header/whatsupIcon.svg";
import phoneHandset from "../../assets/header/phoneHandset.svg";
import burger from "../../assets/header/burgerNavbar.svg";
import {useMediaQuery} from "react-responsive";
import {Link} from "react-scroll";
import cross from '../../assets/header/cross.svg'

const Navbar = () => {

  let [isOpenmenu, setIsOpenMenu] = useState(false);

  const onClickHandler = () => {
    setIsOpenMenu(!isOpenmenu);
  };

  const isTabletOrMobile = useMediaQuery({query: "(max-width: 1240px)"});
  const isBigScreen = useMediaQuery({query: "(min-width: 1240px)"});

  return (
      <div className={styles.navbar}>
        {isBigScreen && (
            <div className={styles.container}>
              <div className={styles.navbarContainer}>
                <div className={styles.logoContainer}>
                  <img src={logo} alt={"logo"} className={styles.AdygeyaLogo}/>
                  <p className={styles.headerLogoText}>Узнай Адыгею</p>
                </div>
                <div className={styles.textContainer}>
                  <Link activeClass={styles.active}
                        to="usefullness"
                        spy={true}
                        smooth={true}
                        offset={1}
                        duration={500}
                  >
                    Польза для бизнеса
                  </Link>
                  <Link activeClass={styles.active}
                        to="suit"
                        spy={true}
                        smooth={true}
                        offset={1}
                        duration={500}
                  >
                    Кому подойдет
                  </Link>
                  <Link activeClass={styles.active}
                        to="help"
                        spy={true}
                        smooth={true}
                        offset={1}
                        duration={500}
                  >
                    Найти клиентов
                  </Link>
                  <Link activeClass={styles.active}
                        to="howtoregister"
                        spy={true}
                        smooth={true}
                        offset={1}
                        duration={500}
                  >
                    Как зарегистрироваться
                  </Link>
                  <Link activeClass={styles.active}
                        to="request"
                        spy={true}
                        smooth={true}
                        offset={1}
                        duration={500}
                  >
                    Заявка
                  </Link>
                </div>
                <div className={styles.contactsContainer}>
                  <img
                      src={whatsupIcon}
                      alt="whatsUpIcon"
                      className={styles.navbarRightIcons}
                  />
                  <img
                      src={phoneHandset}
                      alt="phoneIcon"
                      className={styles.navbarRightIcons}
                  />
                  <div className={styles.boxNumber}>
                    <p>+7 (906)187-72-79</p>
                  </div>
                </div>
              </div>
            </div>
        )}

        {isTabletOrMobile && (
            <div className={styles.mobile}>
              <div className={isOpenmenu
                  ? `${styles.burgerNavItems} ${styles.show}`
                  : styles.burgerNavItems}>
                <div className={styles.burgerHeader}>
                  <img src={logo} alt={"logo"} className={styles.burgerLogo}/>
                  <p className={styles.burgerLogoText}>Узнай Адыгею</p>
                  <img onClick={() => setIsOpenMenu(false)} className={styles.cross} src={cross} alt="cross"/>
                </div>
                <div className={styles.linkContainer}>
                  <Link activeClass={styles.active}
                        className={styles.link}
                        to="usefullness"
                        spy={true}
                        smooth={true}
                        offset={1}
                        duration={500}
                        onClick={() => setIsOpenMenu(false)}
                  >
                    Польза для бизнеса
                  </Link>
                  <Link activeClass={styles.active}
                        className={styles.link}
                        to="suit"
                        spy={true}
                        smooth={true}
                        offset={1}
                        duration={500}
                        onClick={() => setIsOpenMenu(false)}
                  >
                    Кому подойдет
                  </Link>
                  <Link activeClass={styles.active}
                        className={styles.link}
                        to="help"
                        spy={true}
                        smooth={true}
                        offset={1}
                        duration={500}
                        onClick={() => setIsOpenMenu(false)}
                  >
                    Найти клиентов
                  </Link>
                  <Link activeClass={styles.active}
                        className={styles.link}
                        to="howtoregister"
                        spy={true}
                        smooth={true}
                        offset={1}
                        duration={500}
                        onClick={() => setIsOpenMenu(false)}
                  >
                    Как зарегистрироваться
                  </Link>
                  <Link activeClass={styles.active}
                        className={styles.link}
                        to="request"
                        spy={true}
                        smooth={true}
                        offset={1}
                        duration={500}
                        onClick={() => setIsOpenMenu(false)}
                  >
                    Заявка
                  </Link>
                </div>
                <button className={styles.burgerRegistrationButton}>
                  Зарегистрироваться
                </button>
                <div className={styles.contactsContainer}>
                  <img
                      src={whatsupIcon}
                      alt="whatsUpIcon"
                      className={styles.navbarRightIcons}
                  />
                  <img
                      src={phoneHandset}
                      alt="phoneIcon"
                      className={styles.navbarRightIcons}
                  />
                  <div className={styles.burgerBoxNumber}>
                    <p>+7 (906)187-72-79</p>
                  </div>
                </div>
              </div>
              <div className={styles.mobileContainer}>
                <div className={styles.logoContainer}>
                  <img
                      src={burger}
                      alt={"burger"}
                      className={styles.burgerMobile}
                      onClick={onClickHandler}
                  />
                  <img
                      src={logo}
                      alt={"logo"}
                      className={styles.AdygeyaLogoMobie}
                  />
                  <p className={styles.headerLogoTextMobile}>Узнай Адыгею</p>
                </div>
                <div className={styles.contactsMobile}>
                  <img
                      src={whatsupIcon}
                      alt="whatsUpIcon"
                      className={styles.navbarRightIconsMobile}
                  />
                  <img
                      src={phoneHandset}
                      alt="phoneIcon"
                      className={styles.navbarRightIconsMobile}
                  />
                </div>
              </div>
            </div>
        )}
      </div>
  );
};

export default Navbar;
