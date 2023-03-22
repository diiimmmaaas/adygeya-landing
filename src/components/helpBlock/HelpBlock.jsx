import React from "react";
import styles from "./HelpBlock.module.css";
import media from "../../assets/helpBlock/media.svg";
import chats from "../../assets/helpBlock/chats.svg";
import blocks from "../../assets/helpBlock/blocks.svg";
import graphics from "../../assets/helpBlock/graphics.svg";

const cardsData = [
  {
    id: 1,
    icon: media,
    description:
      "Рассказывайте о своих услугах, выкладывайте фотографии, ролики\n" +
      "и даже аудиосообщения",
  },
  {
    id: 2,
    icon: chats,
    description: "Получайте отзывы и работайте с репутацией",
  },
  {
    id: 3,
    icon: blocks,
    description: "Продвигайте объявления",
  },

  {
    id: 4,
    icon: graphics,
    // eslint-disable-next-line
    description: "Получайте и анализируйте\n" + "статистику продвижения",
  },
];

const HelpBlock = () => {
  return (
    <div id='help' className={styles.helpBlock}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Как приложение помогает находить клиентов
        </h2>
        <div className={styles.cardsBlock}>
          {cardsData.map((card) => {
            return (
              <div key={card.id} className={styles.card}>
                <p className={styles.description}>{card.description}</p>
                <img className={styles.img} src={card.icon} alt="media" />
              </div>
            );
          })}
          <div className={styles.bottomBlock}>
            <p className={styles.bottomBlockDescription}>
              <strong>ВНИМАНИЕ!</strong> Приложение находится на тестировании,
              поэтому пока не все функции работают без сбоев. Просим за это
              прощение и надеемся на ваше понимание.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpBlock;
