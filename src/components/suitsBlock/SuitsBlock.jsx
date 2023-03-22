import React, { useEffect } from "react";
import styles from "./SuitsBlock.module.css";
import oEllipse from "../../assets/suitBlock/ellipse.svg";
import leisureIcon from "../../assets/suitBlock/leisureIcon.svg";
import attractionIcon from "../../assets/suitBlock/attractionIcon.svg";
import foodIcon from "../../assets/suitBlock/foodIcon.svg";
import mountIcon from "../../assets/suitBlock/mountIcon.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const suitData = [
  {
    id: 1,
    icon: leisureIcon,
    description: "Гостиницам, отелям, базам отдыха",
  },
  {
    id: 2,
    icon: attractionIcon,
    description: "Гидам, инструкторам по туризму и активному отдыху",
  },
  {
    id: 3,
    icon: foodIcon,
    description: "Кафе и ресторанам",
  },
  {
    id: 4,
    icon: mountIcon,
    description:
      "Компаниям, которые оказывают услуги экстремального и активного отдыха",
  },
];

const SuitsBlock = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id='suit' className={styles.suitBlock}>
      <div className={styles.container}>
        <h2 className={styles.title}>Кому подойдет</h2>
        <h4 className={styles.subTitle}>
          Работаем с ИП, юрлицами и самозанятыми.
        </h4>
        <div className={styles.choicesBlock}>
          {suitData.map((suit) => {
            return (
              <div className={styles.choiceBlock}>
                <div className={styles.leftBlock}>
                  <img
                    className={styles.ellipse}
                    src={oEllipse}
                    alt="oEllipse"
                  />
                </div>
                <div
                  className={styles.rightBlock}
                  data-aos="fade-right"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="400"
                  data-aos-once="true"
                >
                  <div className={styles.rightBlockContainer}>
                    <img
                      className={styles.rightBlockIcon}
                      src={suit.icon}
                      alt={suit.description}
                    />
                    <span className={styles.rightBlockDescription}>
                      {suit.description}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SuitsBlock;
