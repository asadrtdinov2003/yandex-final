import React from "react";
import styles from "./styles.module.css";

function Lightrope() {
  const elements = [];
  for (let i = 0; i < 42; i += 1) {
    elements.push(i);
  }
  return (
    <ul className={styles.lightrope}>
      {elements.map((item) => (
        <li key={item} className={styles.lightrope__item} />
      ))}
    </ul>
  );
}

export default Lightrope;
