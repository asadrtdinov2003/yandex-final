import React, { useContext } from "react";
import cn from "classnames";
import styles from "./LanguageSelector.module.css";
import { LanguageContext } from "../../Contexts/LanguageContext";

function LanguageSelector() {
  const { lang, setLang, translation } = useContext(LanguageContext);

  return (
    <div className={styles.languageSelector}>
      <button
        className={cn(styles.languageSelector__btn, { [styles.languageSelector__btn_selected]: lang === "ru" })}
        onClick={() => {
          setLang("ru");
        }}
      >
        RU
      </button>
      /
      <button
        className={cn(styles.languageSelector__btn, { [styles.languageSelector__btn_selected]: lang === "en" })}
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
