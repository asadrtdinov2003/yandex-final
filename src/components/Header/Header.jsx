/* eslint-disable */
import React, { useState } from "react";
import classnames from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import Lightrope from "../Lightrope/Lightrope";
import Toggle from "../Toggle/Toggle";

function Header() {
  const [active, setActive] = useState(0);

  return (
    <>
      <header className={styles.header}>
        <NavLink to="/" className={classnames(styles.logo, styles.tab)}>
          WEB
        </NavLink>
        <nav className={classnames(styles.nav, active ? styles.active : "")}>
          <ul className={styles.nav__body}>
            <NavLink to="teams" className={classnames(styles.nav__item, styles.tab, styles.tab_green)}>
              Наша команда
            </NavLink>
            <NavLink to="projects" className={classnames(styles.nav__item, styles.tab, styles.tab_green)}>
              Проекты
            </NavLink>
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
