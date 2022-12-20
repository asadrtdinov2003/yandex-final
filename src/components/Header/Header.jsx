import React, { useContext, useEffect, useState } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import Lightrope from '../Lightrope/Lightrope';
import Toggle from '../Toggle/Toggle';
import { ThemeContext } from '../../Contexts/ThemeContext';

function Header() {
  const [active, setActive] = useState(0);
  const {darkMode} = useContext(ThemeContext);

  return (
    <>
      <header className={cn(styles.header, {[styles.header_dark]: darkMode})}>
        <NavLink to="/" className={cn(styles.logo, styles.tab, {[styles.text_dark]: darkMode})}>
          WEB
        </NavLink>
        <nav className={cn(styles.nav, active ? styles.active : '')}>
          <ul className={styles.nav__body}>
            <NavLink to="teams" className={cn(styles.nav__item, styles.tab, styles.tab_green)}>
              Наша команда
            </NavLink>
            <NavLink to="projects" className={cn(styles.nav__item, styles.tab, styles.tab_green)}>
              Проекты
            </NavLink>
            <li className={cn(styles.nav__item, styles.tab, styles.tab_green)}>Связаться с нами</li>
          </ul>
        </nav>
        <div className={styles.flex}>
          <Toggle />
          <button type="button" className={styles.burger} onClick={() => setActive((active + 1) % 2)}>
            <div className={cn(styles.burger__body, active ? styles.checked : '')}>
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
