import React from "react";
import styles from "./registerCompany.module.css";
import Checkbox from "react-custom-checkbox";
import checkMark from "../../assets/main/greenCheckMark.svg";

import desktopGif from "../../assets/howToRegister/desktopFooterGif.gif";

const RegisterCompany = () => {
  return (
    <div id="request" className={styles.registerCompany}>
      <div className={styles.registerCompanyContainer}>
        <div>
          <p className={styles.headerText}>
            Зарегистрировать компанию в приложении
          </p>
        </div>

        <div className={styles.registerBlock}>
          <div className={styles.formContainer}>
            <div>
              <p className={styles.firstInput}>Имя Фамилия</p>
              <input
                placeholder={"Иван Петров"}
                className={styles.registerInput}
              />
            </div>
            <div>
              <p className={styles.nameInput}>Телефон</p>
              <input
                placeholder={"+7 (123) 456-78-91"}
                className={styles.registerInput}
              />
            </div>
            <div>
              <p className={styles.nameInput}>Название компании</p>
              <input
                placeholder={"Гид по горам Адыгее"}
                className={styles.registerInput}
              />
            </div>
            <div>
              <p className={styles.nameInput}>Email</p>
              <input
                placeholder={"example@mail.ru"}
                className={styles.registerInput}
              />
            </div>
            <div className={styles.checkboxContainer}>
              <div>
                <Checkbox
                  borderColor="#028959"
                  style={{ width: "2.9vh", height: "2.9vh", cursor: "pointer" }}
                  icon={
                    <img
                      src={checkMark}
                      alt={"checkmark"}
                      className={styles.pointAccess}
                    />
                  }
                />
              </div>
              <p>
                Я согласен на обработку персональных данных <br />и ознакомлен с
                политикой конфиденциальности
              </p>
            </div>
            <div>
              <button className={styles.btn}>Отправить заявку</button>
            </div>
          </div>

          <div className={styles.secondBlock}>
            <img
              src={desktopGif}
              alt={"quote"}
              className={styles.secondBlockImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCompany;
