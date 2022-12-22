import React, { useContext, useState } from "react";
import cn from "classnames";
import Reviews from "../../components/Reviews/Reviews";
import Accordion from "../../components/Accordion/Accordion";
import styles from "./styles.module.css";
import { ThemeContext } from "../../Contexts/ThemeContext";
import darkPcImage from "../../imgs/dark_pc.png";
import Popup from "../../components/Popup/Popup";
import OurMap from "../../components/OurMap/OurMap";
import { LanguageContext } from "../../Contexts/LanguageContext";

function MainPage() {
  const { darkMode } = useContext(ThemeContext);
  const { translation } = useContext(LanguageContext);
  const textData = translation?.main;
  const [popupActive, setPopupActive] = useState(0);

  if (!textData) {
    return null;
  }

  return (
    <>
      <Popup active={popupActive} func={setPopupActive} />
      <main className={cn(styles.main, { [styles.background_dark]: darkMode })}>
        <section className={cn(styles.mainSection, styles.section)}>
          <div className={styles.mainSection__body}>
            <h1 className={cn(styles.title, { [styles.heading_dark]: darkMode })}>{textData.greetings?.title}</h1>
            <p className={cn(styles.text, { [styles.paragraph_dark]: darkMode })}>{textData.greetings?.subtitle}</p>
            <button
              className={cn(
                styles.button,
                darkMode ? styles.button_dark : styles.button_red,
                styles.mainSection__button
              )}
              type="button"
              onClick={() => setPopupActive(1)}
            >
              {textData.greetings && textData.greetings["form-button"]}
            </button>
          </div>
          <div className={cn(styles.mainSection__img, { [styles.mainSection__img_no_hat]: darkMode })}>
            <img src={darkMode ? darkPcImage : "computer.png"} loading="lazy" alt="Ноутбук" />
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={cn(styles.title, styles.title_upper, { [styles.heading_dark]: darkMode })}>
            {textData.about?.title}
          </h2>
          <p className={cn(styles.text, { [styles.paragraph_dark]: darkMode })}>{textData.about?.description}</p>
        </section>
        <section className={styles.section}>
          <h2 className={cn(styles.title, styles.title_upper, { [styles.heading_dark]: darkMode })}>
            {textData.reviews?.title}
          </h2>
          <Reviews reviews={textData.reviews?.content} />
        </section>
        <section className={styles.section}>
          <h2 className={cn(styles.title, styles.title_upper, { [styles.heading_dark]: darkMode })}>
            {textData.FAQ?.title}
          </h2>
          <Accordion items={textData.FAQ && textData.FAQ["q/a"]} />
        </section>
        <section className={styles.section}>
          <h2 className={cn(styles.title, styles.title_upper, { [styles.heading_dark]: darkMode })}>
            {textData.map?.title}
          </h2>
          <OurMap />
        </section>
      </main>
    </>
  );
}

export default MainPage;
