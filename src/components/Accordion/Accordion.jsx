import React from "react";
import styles from "./styles.module.css";

function Accordion() {
  const items = [
    {
      id: "hskdufh3ue-12wsj",
      title: "Равным образом дальнейшее развитие различных форм",
      text: "Равным образом дальнейшее развитие различных форм деятельности требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что рамки и место обучения кадров играет важную роль в формировании новых предложений",
    },
    {
      id: "jd84-djfks7d45jk",
      title: "Равным образом дальнейшее развитие различных форм",
      text: "Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки модели развития.",
    },
    {
      id: "js8d94-sdjck4fgh",
      title: "Равным образом дальнейшее развитие различных форм",
      text: "Таким образом сложившаяся структура организации позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Задача организации, в особенности же консультация с широким активом в значительной степени обуславливает создание системы",
    },
  ];
  return (
    <ul className={styles.accordion}>
      {items.map((item) => (
        <li key={item.id} className={styles.accordion__item}>
          <input className={styles.accordion__input} type="checkbox" defaultChecked="true" />
          <h2 className={styles.accordion__title}>{item.title}</h2>
          <i className={styles.icon} />
          <p className={styles.accordion__text}>{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

export default Accordion;
