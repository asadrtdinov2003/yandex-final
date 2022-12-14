import React, { useContext, useState } from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import Lightrope from "../Lightrope/Lightrope";
import Toggle from "../Toggle/Toggle";
import { ThemeContext } from "../../Contexts/ThemeContext";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { LanguageContext } from "../../Contexts/LanguageContext";

function Header() {
  const [active, setActive] = useState(0);
  const { darkMode } = useContext(ThemeContext);
  const { translation } = useContext(LanguageContext);
  const textData = translation?.header;

  if (!textData) {
    return null;
  }

  return (
    <>
      <header className={cn(styles.header, { [styles.header_dark]: darkMode })}>
        <NavLink to="/" className={cn(styles.logo, styles.tab, { [styles.text_dark]: darkMode })}>
          WEB
        </NavLink>
        <nav className={cn(styles.nav, active ? styles.active : "", { [styles.nav_dark]: darkMode })}>
          <ul className={styles.nav__body}>
            <NavLink
              to="teams"
              className={cn(styles.nav__item, styles.tab, styles.tab_green, { [styles.tab_dark]: darkMode })}
            >
              {textData.team}
            </NavLink>
            <NavLink
              to="projects"
              className={cn(styles.nav__item, styles.tab, styles.tab_green, { [styles.tab_dark]: darkMode })}
            >
              {textData.projects}
            </NavLink>
            <LanguageSelector />
          </ul>
        </nav>
        <div className={styles.flex}>
          <Toggle />
          <button
            type="button"
            className={cn(styles.burger, { [styles.burger_dark]: darkMode })}
            onClick={() => setActive((active + 1) % 2)}
          >
            <div className={cn(styles.burger__body, active ? styles.checked : "")}>
              <div className={styles.burger__item} />
              <div className={styles.burger__item} />
              <div className={styles.burger__item} />
            </div>
          </button>
        </div>
      </header>
      {darkMode || <Lightrope />}
    </>
  );
}

export default Header;
