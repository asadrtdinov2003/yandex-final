import React, { useContext } from "react";
import cn from "classnames";
import styles from "./styles.module.css";
import { ThemeContext } from "../../Contexts/ThemeContext";

function Accordion({ items }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <ul className={cn(styles.accordion, { [styles.accordion_dark]: darkMode })}>
      {items.map((item) => (
        <li key={item.id} className={cn(styles.accordion__item, { [styles.accordion__item_dark]: darkMode })}>
          <input className={styles.accordion__input} type="checkbox" defaultChecked="true" />
          <h2 className={styles.accordion__title}>{item.q}</h2>
          <i className={cn(styles.icon, { [styles.icon_dark]: darkMode })} />
          <p className={styles.accordion__text}>{item.a}</p>
        </li>
      ))}
    </ul>
  );
}

export default Accordion;
