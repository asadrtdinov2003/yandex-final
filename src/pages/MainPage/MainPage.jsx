import React, { useContext } from "react";
import cn from "classnames";
import Reviews from "../../components/Reviews/Reviews";
import Accordion from "../../components/Accordion/Accordion";
import styles from "./styles.module.css";
import { ThemeContext } from "../../Contexts/ThemeContext";

function MainPage() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <main className={cn(styles.main, {[styles.background_dark]: darkMode})}>
      <section className={cn(styles.mainSection, styles.section)}>
        <div className={styles.mainSection__body}>
          <h1 className={cn(styles.title, {[styles.heading_dark]: darkMode})}>WEB - студия веб-разработки</h1>
          <p className={cn(styles.text, {[styles.paragraph_dark]: darkMode})}>
            Не следует, однако забывать, что дальнейшее развитие различных форм деятельности влечет за собой процесс
            внедрения и модернизации новых предложений.
          </p>
          <button className={cn(styles.button, styles.button_red, styles.mainSection__button)} type="button">
            Связаться с нами
          </button>
        </div>
        <div className={styles.mainSection__img}>
          <img src="computer.png" alt="Ноутбук" />
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={cn(styles.title, styles.title_upper)}>О нас</h2>
        <p className={styles.text}>
          Равным образом дальнейшее развитие различных форм деятельности требуют от нас анализа позиций, занимаемых
          участниками в отношении поставленных задач. Не следует, однако забывать, что рамки и место обучения кадров
          играет важную роль в формировании новых предложений. Идейные соображения высшего порядка, а также сложившаяся
          структура организации требуют от нас анализа форм развития. Разнообразный и богатый опыт рамки и место
          обучения кадров играет важную роль в формировании модели развития.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={cn(styles.title, styles.title_upper)}>Отзывы</h2>
        <Reviews />
      </section>
      <section className={styles.section}>
        <h2 className={cn(styles.title, styles.title_upper)}>FAQ</h2>
        <Accordion />
      </section>
    </main>
  );
}

export default MainPage;
