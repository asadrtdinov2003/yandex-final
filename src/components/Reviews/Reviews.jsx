import React, { useState } from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

function Reviews() {
  const reviews = [
    {
      id: "kjha1n17asd7-1na",
      name: "Тимур Ковалев",
      img: "avatar.png",
      review:
        "Равным образом дальнейшее развитие различных форм деятельности требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что рамки и место обучения кадров играет важную роль в формировании новых предложений",
    },
    {
      id: "j8ns-3hjd32-djfk",
      name: "Иван Иванов",
      img: "avatar.png",
      review:
        "Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки модели развития.",
    },
    {
      id: "lre45-78dgfj2jfk",
      name: "Андрей Смирнов",
      img: "avatar.png",
      review:
        "Таким образом сложившаяся структура организации позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Задача организации, в особенности же консультация с широким активом в значительной степени обуславливает создание системы",
    },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className={styles.reviews}>
      {reviews.map((review, index) => (
        <article key={review.id} className={classnames(styles.review, active === index ? styles.active : "")}>
          <div className={styles.review__body}>
            <img src={review.img} alt="Аватар" />
            <div className={styles.review__text}>
              <h3 className={styles.title}>{review.name}</h3>
              <p className={styles.text}>{review.review}</p>
            </div>
          </div>
          <button
            className={styles.circleButton}
            type="button"
            onClick={() => setActive((active + 1) % reviews.length)}
          >
            <img className={styles.circleButton__img} src="arrow.png" alt="Стрелочка" />
          </button>
        </article>
      ))}
      <div className={styles.sliderNav}>
        {reviews.map((review, index) => (
          <button
            type="button"
            key={`${review.id}Button`}
            className={classnames(styles.sliderNav__button, active === index ? styles.active : "")}
            onClick={() => setActive(index)}
            aria-label="Навигационная кнопка"
          />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
