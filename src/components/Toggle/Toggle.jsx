import React, { useContext, useEffect } from 'react';
import styles from './styles.module.css';
import { ThemeContext } from '../../Contexts/ThemeContext';

function Toggle() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const handleThemeSwitch = () => {
    setDarkMode((prevState) => !prevState);
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <div className={styles.toggle}>
      <input className={styles.toggle__input} type="checkbox" onClick={handleThemeSwitch} checked={darkMode}/>
      <span className={styles.toggle__label}>
        <div className={styles.toggle__check} />
      </span>
    </div>
  );
}

export default Toggle;
