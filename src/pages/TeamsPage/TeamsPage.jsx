/* eslint-disable */

import React, { useContext, useState } from "react";
import { AnimatePresence, useAnimationControls } from "framer-motion";
import styles from "./TeamsPage.module.css";
import bgImage from "../../imgs/card-bg.png";
import bgImage2 from "../../imgs/bg2.jpg";
import avatarImage from "../../imgs/avatarPlaceholder1.png";
import avatarImage2 from "../../imgs/avatar2.png";
import avatarVideo from "../../imgs/ExampleVideo.mp4";
import leftArrow from "../../imgs/left-arrow.svg";
import rightArrow from "../../imgs/right-arrow.svg";
import { MUserCard } from "../../components/UserCard/UserCard";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { ThemeContext } from "../../Contexts/ThemeContext";
import cn from 'classnames';

const usersData = [
  {
    name: "Тимур Ковалев",
    job: "Frontend-developer",
    stack: ["js", "html", "css"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ",
    background: bgImage,
    avatar: avatarImage,
  },
  {
    name: "Ковалев Тимур",
    job: "Frontend-developer",
    stack: ["scss", "react", "c++"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    background: bgImage2,
    avatar: avatarVideo,
  },
  {
    name: "Роман",
    job: "Frontend-developer",
    stack: ["c#"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    background: bgImage2,
    avatar: avatarImage2,
  },
  {
    name: "Роман 2",
    job: "Frontend-developer",
    stack: ["c#"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    background: bgImage2,
    avatar: avatarImage,
  },
].map((user) => ({
  ...user,
  discord: "https://discord.com/",
  telegram: "https://telegram.com",
  github: "https://github.com",
}));

const leftCardVariants = {
  initial: { rotate: -4, marginRight: "-5%", filter: "brightness(75%)", y: "100vh" },
  animate: { y: 0 },
  whileHover: { y: -25, filter: "brightness(80%)" },
};

const rightCardVariants = {
  initial: { rotate: 4, marginLeft: "-5%", filter: "brightness(75%)", y: "100vh" },
  animate: { y: 0 },
  whileHover: { y: -25, filter: "brightness(80%)" },
};

const middleCardVariants = {
  initial: { zIndex: 1, rotate: 0, marginLeft: 0, marginRight: 0, filter: "brightness(100%)", y: "100vh" },
  animate: { y: 0, zIndex: 1, rotate: 0, marginLeft: 0, marginRight: 0 },
};

const oneCard = {
  initial: { zIndex: 1, rotate: 0, marginLeft: 0, marginRight: 0, filter: "brightness(100%)", y: 0, opacity: 0 },
  animate: { opacity: [0, 1], transition: { duration: 0.2 } },
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
  const {darkMode} = useContext(ThemeContext);
  const [users, setUsers] = useState(usersData);
  const { width } = useWindowDimensions();
  const cardAnimationControls = useAnimationControls();

  if (width < 1200) {
    return (
      <main className={cn(styles.page, {[styles.page_dark]: darkMode})}>
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
      </main>
    );
  }

  return (
    <main className={cn(styles.page, {[styles.page_dark]: darkMode})}>
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
                  onClick={() => {}}
                />
              );
            }
            return null;
          })}
        </AnimatePresence>
      </div>
    </main>
  );
}

export default TeamsPage;
