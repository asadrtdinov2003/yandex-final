import React, { useContext } from "react";
import cn from "classnames";
import Reviews from "../../components/Reviews/Reviews";
import Accordion from "../../components/Accordion/Accordion";
import styles from "./styles.module.css";
import { ThemeContext } from "../../Contexts/ThemeContext";
import darkPcImage from "../../imgs/dark_pc.png";
import OurMap from "../../components/OurMap/OurMap";

function MainPage() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <main className={cn(styles.main, { [styles.background_dark]: darkMode })}>
      <section className={cn(styles.mainSection, styles.section)}>
        <div className={styles.mainSection__body}>
          <h1 className={cn(styles.title, { [styles.heading_dark]: darkMode })}>WEB - студия веб-разработки</h1>
          <p className={cn(styles.text, { [styles.paragraph_dark]: darkMode })}>
            Не следует, однако забывать, что дальнейшее развитие различных форм деятельности влечет за собой процесс
            внедрения и модернизации новых предложений.
          </p>
          <button
            className={cn(styles.button, darkMode ? styles.button_dark : styles.button_red, styles.mainSection__button)}
            type="button"
          >
            Связаться с нами
          </button>
        </div>
        <div className={cn(styles.mainSection__img, { [styles.mainSection__img_no_hat]: darkMode })}>
          <img src={darkMode ? darkPcImage : "computer.png"} alt="Ноутбук" />
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={cn(styles.title, styles.title_upper, { [styles.heading_dark]: darkMode })}>О нас</h2>
        <p className={cn(styles.text, { [styles.paragraph_dark]: darkMode })}>
          Равным образом дальнейшее развитие различных форм деятельности требуют от нас анализа позиций, занимаемых
          участниками в отношении поставленных задач. Не следует, однако забывать, что рамки и место обучения кадров
          играет важную роль в формировании новых предложений. Идейные соображения высшего порядка, а также сложившаяся
          структура организации требуют от нас анализа форм развития. Разнообразный и богатый опыт рамки и место
          обучения кадров играет важную роль в формировании модели развития.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={cn(styles.title, styles.title_upper, { [styles.heading_dark]: darkMode })}>Отзывы</h2>
        <Reviews />
      </section>
      <section className={styles.section}>
        <h2 className={cn(styles.title, styles.title_upper, { [styles.heading_dark]: darkMode })}>FAQ</h2>
        <Accordion />
      </section>
      <section className={styles.section}>
        <h2 className={cn(styles.title, styles.title_upper, { [styles.heading_dark]: darkMode })}>Карта</h2>
        <OurMap />
      </section>
    </main>
  );
}

export default MainPage;
