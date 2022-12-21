import React, { useContext } from "react";
import styles from "./LanguageSelector.module.css";
import { LanguageContext } from "../../Contexts/LanguageContext";

const LanguageSelector = () => {
  const {lang, setLang, translation} = useContext(LanguageContext);

  return (
    <div className={styles.languageSelector}>
      {lang}
      <button className={styles.languageSelector__btn} onClick={() => {setLang('ru')}}>RU</button>/
      <button className={styles.languageSelector__btn} onClick={() => {setLang('en')}}>EN</button>
    </div>
  );
};

export default LanguageSelector;
