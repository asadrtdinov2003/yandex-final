import React, { useState } from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import Lightrope from "../Lightrope/Lightrope";
import Toggle from "../Toggle/Toggle";

function Header() {
  const [active, setActive] = useState(0);

  return (
    <>
      <header className={styles.header}>
        <h1 className={classnames(styles.logo, styles.tab)}>WEB</h1>
        <nav className={classnames(styles.nav, active ? styles.active : "")}>
          <ul className={styles.nav__body}>
            <li className={classnames(styles.nav__item, styles.tab, styles.tab_green)}>Наша команда</li>
            <li className={classnames(styles.nav__item, styles.tab, styles.tab_green)}>Проекты</li>
            <li className={classnames(styles.nav__item, styles.tab, styles.tab_green)}>Связаться с нами</li>
          </ul>
        </nav>
        <div className={styles.flex}>
          <Toggle />
          <button type="button" className={styles.burger} onClick={() => setActive((active + 1) % 2)}>
            <div className={classnames(styles.burger__body, active ? styles.checked : "")}>
              <div className={styles.burger__item} />
              <div className={styles.burger__item} />
              <div className={styles.burger__item} />
            </div>
          </button>
        </div>
      </header>
      <Lightrope />
    </>
  );
}

export default Header;
