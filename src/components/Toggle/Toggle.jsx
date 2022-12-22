/* eslint-disable */
import React, { useContext, useEffect } from "react";
import cn from "classnames";
import styles from "./styles.module.css";
import { ThemeContext } from "../../Contexts/ThemeContext";

function Toggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const handleThemeSwitch = () => {
    setDarkMode((prevState) => !prevState);
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <div className={styles.toggle}>
      <input className={styles.toggle__input} type="checkbox" onChange={handleThemeSwitch} checked={darkMode} />
      <span className={cn(styles.toggle__label, { [styles.toggle__label_dark]: darkMode })}>
        <div className={styles.toggle__check} />
      </span>
    </div>
  );
}

export default Toggle;
