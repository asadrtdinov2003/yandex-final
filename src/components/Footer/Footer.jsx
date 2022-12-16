import React from "react";
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <h4 className={styles.footer__text}>
        produced by <span className={styles.bold}>WEB</span>
      </h4>
      <h4 className={styles.footer__phone}>+7 (924) 382-69-59</h4>
    </footer>
  );
}

export default Footer;
