import React, { useContext } from "react";
import cn from "classnames";
import styles from "./LanguageSelector.module.css";
import { LanguageContext } from "../../Contexts/LanguageContext";
import { ThemeContext } from "../../Contexts/ThemeContext";

function LanguageSelector() {
  const { lang, setLang, translation } = useContext(LanguageContext);
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={styles.languageSelector}>
      <button
        className={cn(styles.languageSelector__btn, {
          [styles.languageSelector__btn_selected]: lang === "ru",
          [styles.languageSelector__btn_dark]: darkMode,
        })}
        onClick={() => {
          setLang("ru");
        }}
      >
        RU
      </button>
      <button
        className={cn(styles.languageSelector__btn, {
          [styles.languageSelector__btn_selected]: lang === "en",
          [styles.languageSelector__btn_dark]: darkMode,
        })}
        onClick={() => {
          setLang("en");
        }}
      >
        EN
      </button>
    </div>
  );
}

export default LanguageSelector;
