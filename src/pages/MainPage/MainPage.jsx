import React, { useState } from "react";
import classnames from "classnames";
import Reviews from "../../components/Reviews/Reviews";
import Popup from "../../components/Popup/Popup";
import styles from "./styles.module.css";

function MainPage() {
  const [popupActive, setPopupActive] = useState(0);

  return (
    <>
      <Popup active={popupActive} func={setPopupActive} />
      <main className={styles.main}>
        <section className={classnames(styles.mainSection, styles.section)}>
          <div className={styles.mainSection__body}>
            <h1 className={styles.title}>WEB - студия веб-разработки</h1>
            <p className={styles.text}>
              Не следует, однако забывать, что дальнейшее развитие различных форм деятельности влечет за собой процесс
              внедрения и модернизации новых предложений.
            </p>
            <button
              className={classnames(styles.button, styles.button_red, styles.mainSection__button)}
              type="button"
              onClick={() => setPopupActive((popupActive + 1) % 2)}
            >
              Связаться с нами
            </button>
          </div>
          <div className={styles.mainSection__img}>
            <img src="computer.png" alt="Ноутбук" />
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={classnames(styles.title, styles.title_upper)}>О нас</h2>
          <p className={styles.text}>
            Равным образом дальнейшее развитие различных форм деятельности требуют от нас анализа позиций, занимаемых
            участниками в отношении поставленных задач. Не следует, однако забывать, что рамки и место обучения кадров
            играет важную роль в формировании новых предложений. Идейные соображения высшего порядка, а также
            сложившаяся структура организации требуют от нас анализа форм развития. Разнообразный и богатый опыт рамки и
            место обучения кадров играет важную роль в формировании модели развития.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={classnames(styles.title, styles.title_upper)}>Отзывы</h2>
          <Reviews />
        </section>
        <section className={styles.section}>
          <h2 className={classnames(styles.title, styles.title_upper)}>FAQ</h2>
          <Reviews />
        </section>
      </main>
    </>
  );
}

export default MainPage;
