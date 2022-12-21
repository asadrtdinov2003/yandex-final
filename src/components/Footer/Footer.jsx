import React, { useContext } from "react";
import styles from "./styles.module.css";
import cn from 'classnames';
import { ThemeContext } from "../../Contexts/ThemeContext";

function Footer() {
  const {darkMode} = useContext(ThemeContext);

  return (
    <footer className={cn(styles.footer, {[styles.footer_dark]: darkMode})}>
      <h4 className={cn(styles.footer__text, {[styles.text_dark]: darkMode})}>
        produced by <span className={styles.bold}>WEB</span>
      </h4>
      <a href="tel:+7924-382-69-59" className={cn(styles.footer__phone, {[styles.text_dark]: darkMode})}>+7 (924) 382-69-59</a>
    </footer>
  );
}

export default Footer;
