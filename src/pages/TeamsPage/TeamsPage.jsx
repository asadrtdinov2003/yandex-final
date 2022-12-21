/* eslint-disable */

import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import styles from "./TeamsPage.module.css";
import leftArrow from "../../imgs/left-arrow.svg";
import rightArrow from "../../imgs/right-arrow.svg";
import { MUserCard } from "../../components/UserCard/UserCard";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { ThemeContext } from "../../Contexts/ThemeContext";
import cn from "classnames";
import { LanguageContext } from "../../Contexts/LanguageContext";

const leftCardVariants = {
  initial: { rotate: -4, marginRight: "-5%", filter: "brightness(75%)", y: "100vh" },
  animate: { y: 0 },
  whileHover: { y: -25, filter: "brightness(80%)" }
};

const rightCardVariants = {
  initial: { rotate: 4, marginLeft: "-5%", filter: "brightness(75%)", y: "100vh" },
  animate: { y: 0 },
  whileHover: { y: -25, filter: "brightness(80%)" }
};

const middleCardVariants = {
  initial: { zIndex: 1, rotate: 0, marginLeft: 0, marginRight: 0, filter: "brightness(100%)", y: "100vh" },
  animate: { y: 0, zIndex: 1, rotate: 0, marginLeft: 0, marginRight: 0 }
};

const oneCard = {
  initial: { zIndex: 1, rotate: 0, marginLeft: 0, marginRight: 0, filter: "brightness(100%)", y: 0, opacity: 0 },
  animate: { opacity: [0, 1], transition: { duration: 0.2 } }
};

function shift(arr, direction) {
  const res = [];
  if (direction > 0) {
    res.push(arr[arr.length - 1]);
    for (let i = 0; i < arr.length - 1; i++) {
      res.push(arr[i]);
    }
    return res;
  }
  for (let i = 1; i < arr.length; i++) {
    res.push(arr[i]);
  }
  res.push(arr[0]);
  return res;
}

function TeamsPage() {
  const { darkMode } = useContext(ThemeContext);
  const { translation } = useContext(LanguageContext);
  const [users, setUsers] = useState(translation?.team);
  const { width } = useWindowDimensions();
  const cardAnimationControls = useAnimationControls();

  useEffect(() => {
    setUsers(translation?.team)
  }, [translation])

  if (!users) {
    return null;
  }

  if (width < 1200) {
    return (
      <motion.main className={cn(styles.page, { [styles.page_dark]: darkMode })}
                   initial={{
                     background: darkMode
                       ? "radial-gradient(135.39% 135.39% at 50% 50%, #2C2A4A 0%, #2C2A4A 100%)"
                       : "radial-gradient(135.39% 135.39% at 50% 50%, #FFFFFF 0%, #FFFFFF 100%)",
                     transition: {duration: 0.1}
                   }}
                   animate={{
                     background: darkMode
                       ? "radial-gradient(135.39% 135.39% at 50% 50%, #907AD6 0%, #2C2A4A 100%)"
                       : "radial-gradient(135.39% 135.39% at 50% 50%, #EF233C 0%, rgb(40, 44, 52) 100%)",
                     transition: {
                       delay: 1.1
                     }
                   }}>
        <div className={styles.cards}>
          <AnimatePresence mode="wait">
            <MUserCard
              {...users[1]}
              controls={cardAnimationControls}
              initial="initial"
              animate="animate"
              secondary={false}
              variants={oneCard}
              oneCard={true}
            />
            ;
          </AnimatePresence>
        </div>
        <div className={styles.buttons}>
          <button className={styles.buttons__item} onClick={() => setUsers(shift(users, -1))}>
            <img src={leftArrow} alt="previous" />
          </button>
          <button className={styles.buttons__item} onClick={() => setUsers(shift(users, 1))}>
            <img src={rightArrow} alt="next" />
          </button>
        </div>
      </motion.main>
    );
  }

  return (
    <motion.main className={cn(styles.page, { [styles.page_dark]: darkMode })}
                 initial={{
                   background: darkMode
                     ? "radial-gradient(135.39% 135.39% at 50% 50%, #2C2A4A 0%, #2C2A4A 100%)"
                     : "radial-gradient(135.39% 135.39% at 50% 50%, #FFFFFF 0%, #FFFFFF 100%)"
                 }}
                 animate={{
                   background: darkMode
                     ? "radial-gradient(135.39% 135.39% at 50% 50%, #907AD6 0%, #2C2A4A 100%)"
                     : "radial-gradient(135.39% 135.39% at 50% 50%, #EF233C 0%, rgb(40, 44, 52) 100%)",
                   transition: {
                     delay: 1.1
                   }
                 }}
    >
      <div className={styles.cards}>
        <AnimatePresence mode="popLayout">
          {users.map((el, index) => {
            if (index === 0) {
              return (
                <MUserCard
                  {...el}
                  secondary
                  layout
                  key={el.name}
                  initial="initial"
                  animate="animate"
                  whileHover="whileHover"
                  variants={leftCardVariants}
                  onClick={() => setUsers(shift(users, 1))}
                />
              );
            }
            if (index === 2) {
              return (
                <MUserCard
                  {...el}
                  secondary
                  layout
                  key={el.name}
                  initial="initial"
                  animate="animate"
                  whileHover="whileHover"
                  variants={rightCardVariants}
                  onClick={() => setUsers(shift(users, -1))}
                />
              );
            }
            if (index === 1) {
              return (
                <MUserCard
                  {...el}
                  key={el.name}
                  whileTap={{ scale: 1.1 }}
                  layout
                  initial="initial"
                  animate="animate"
                  secondary={false}
                  variants={middleCardVariants}
                  onClick={() => {
                  }}
                />
              );
            }
            return null;
          })}
        </AnimatePresence>
      </div>
    </motion.main>
  );
}

export default TeamsPage;
