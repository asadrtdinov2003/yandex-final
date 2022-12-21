/* eslint-disable */
import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';

function Popup({ active, func }) {
  return (
    <div className={classnames(styles.popup, active ? styles.active : "")}>
      <form
        name="form"
        className={styles.popup__form}
        onSubmit={(event) => {
          event.preventDefault();
          let form = document.forms["form"];
          fetch("/api/form", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: document.form.name.value,
              email: document.form.email.value,
              theme: document.form.theme.value,
              message: document.form.message.value,
            }),
          }).then((r) => func(!active));
        }}
      >
        <div className={styles.popup__header}>
          <h2 className={styles.popup__title}>Связаться с нами</h2>
          <button type="button" className={styles.cross} onClick={() => func(!active)}>
            <img className={styles.cross__img} src="cross.svg" alt="Крестик" />
          </button>
        </div>
        <input type="text" id="name" className={styles.popup__input} placeholder="Имя" required />
        <input type="email" id="email" className={styles.popup__input} placeholder="E-mail" required />
        <input type="text" id={"theme"} className={styles.popup__input} placeholder="Тема" required />
        <textarea id="message" className={styles.popup__message} placeholder="Сообщение" required />
        <div className={styles.checkbox}>
          <input type="checkbox" className={styles.checkbox__input} required />
          <h4 className={styles.checkbox__info}>Даю согласие, на обработку персональных данных</h4>
        </div>
        <input type="submit" className={classnames(styles.button, styles.button_red)} value="Отправить" />
      </form>
    </div>
  );
}

export default Popup;
