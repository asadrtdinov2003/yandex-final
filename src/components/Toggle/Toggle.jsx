import React from "react";
import styles from "./styles.module.css";

function Toggle() {
  return (
    <div className={styles.toggle}>
      <input className={styles.toggle__input} type="checkbox" />
      <span className={styles.toggle__label}>
        <div className={styles.toggle__check} />
      </span>
    </div>
  );
}

export default Toggle;
