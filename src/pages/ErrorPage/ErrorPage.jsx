import React, { useContext } from "react";
import cn from "classnames";
import styles from "./styles.module.css";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { LanguageContext } from "../../Contexts/LanguageContext";

function ErrorPage() {
  const { darkMode } = useContext(ThemeContext);
  const { translation } = useContext(LanguageContext);
  const textData = translation?.error;

  if (!textData) {
    return null;
  }

  return (
    <main className={cn(styles.main, { [styles.background_dark]: darkMode })}>
      <h2 className={cn(styles.title, { [styles.title_dark]: darkMode })}>{textData.title}</h2>
      <p className={cn(styles.text, { [styles.text_dark]: darkMode })}>{textData.text}</p>
    </main>
  );
}

export default ErrorPage;
