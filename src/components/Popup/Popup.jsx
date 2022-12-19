/* eslint-disable */
import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

function Popup({ active, func }) {
  return (
    <div className={classnames(styles.popup, active === 1 ? styles.active : "")}>
      <form className={styles.popup__form}>
        <div className={styles.popup__header}>
          <h2 className={styles.popup__title}>Связаться с нами</h2>
          <button type="button" className={styles.cross} onClick={() => func((active + 1) % 2)}>
            <img className={styles.cross__img} src="cross.svg" alt="Крестик" />
          </button>
        </div>
        <input type="text" className={styles.popup__input} placeholder="Имя" />
        <input type="email" className={styles.popup__input} placeholder="E-mail" />
        <input type="text" className={styles.popup__input} placeholder="Тема" />
        <textarea className={styles.popup__message} placeholder="Сообщение" />
        <div className={styles.checkbox}>
          <input type="checkbox" className={styles.checkbox__input} />
          <h4 className={styles.checkbox__info}>Даю согласие, на обработку персональных данных</h4>
        </div>
        <button type="button" className={classnames(styles.button, styles.button_red)}>
          Отправить
        </button>
      </form>
    </div>
  );
}

export default Popup;
