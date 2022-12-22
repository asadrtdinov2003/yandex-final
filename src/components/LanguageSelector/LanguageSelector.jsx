import React, { useContext } from "react";
import styles from "./LanguageSelector.module.css";
import { LanguageContext } from "../../Contexts/LanguageContext";
import cn from 'classnames';

const LanguageSelector = () => {
  const {lang, setLang, translation} = useContext(LanguageContext);

  return (
    <div className={styles.languageSelector}>
      <button className={cn(styles.languageSelector__btn, {[styles.languageSelector__btn_selected]: lang === 'ru'})} onClick={() => {setLang('ru')}}>RU</button>/
      <button className={cn(styles.languageSelector__btn, {[styles.languageSelector__btn_selected]: lang === 'en'})} onClick={() => {setLang('en')}}>EN</button>
    </div>
  );
};

export default LanguageSelector;
