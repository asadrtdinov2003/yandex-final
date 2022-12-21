/* eslint-disable */
import React, { useContext } from "react";
import cn from 'classnames';
import styles from './styles.module.css';
import { ThemeContext } from "../../Contexts/ThemeContext";

function Popup({ active, func }) {
  const {darkMode} = useContext(ThemeContext);

  return (
    <div className={cn(styles.popup, active ? styles.active : "")}>
      <form
        name="form"
        className={cn(styles.popup__form, {[styles.popup__form_dark]: darkMode})}
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
        <input type="text" id="name" className={cn(styles.popup__input, {[styles.popup__input_dark]: darkMode})} placeholder="Имя" required />
        <input type="email" id="email" className={cn(styles.popup__input, {[styles.popup__input_dark]: darkMode})} placeholder="E-mail" required />
        <input type="text" id={"theme"} className={cn(styles.popup__input, {[styles.popup__input_dark]: darkMode})} placeholder="Тема" required />
        <textarea id="message" className={cn(styles.popup__message, {[styles.popup__message_dark]: darkMode})} placeholder="Сообщение" required />
        <div className={styles.checkbox}>
          <input type="checkbox" className={styles.checkbox__input} required />
          <h4 className={styles.checkbox__info}>Даю согласие, на обработку персональных данных</h4>
        </div>
        <input type="submit" className={cn(styles.button, styles.button_red, {[styles.button_dark]: darkMode})} value="Отправить" />
      </form>
    </div>
  );
}

export default Popup;
