/* eslint-disable */

import React, { useState } from "react";
import styles from "./TeamsPage.module.css";
import bgImage from "../../imgs/card-bg.png";
import bgImage2 from "../../imgs/bg2.jpg";
import avatarImage from "../../imgs/avatarPlaceholder1.png";
import avatarImage2 from "../../imgs/avatar2.png";
import avatarVideo from "../../imgs/ExampleVideo.mp4";
import { MUserCard } from "../../components/UserCard/UserCard";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { AnimatePresence } from "framer-motion";

const usersData = [
  {
    name: "Тимур Ковалев",
    job: "Frontend-developer",
    stack: ["js", "html", "css"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ",
    background: bgImage,
    avatar: avatarImage
  },
  {
    name: "Ковалев Тимур",
    job: "Frontend-developer",
    stack: ["scss", "react", "c++"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    background: bgImage2,
    avatar: avatarVideo
  },
  {
    name: "Роман",
    job: "Frontend-developer",
    stack: ["c#"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    background: bgImage2,
    avatar: avatarImage2
  },
  {
    name: "Роман 2",
    job: "Frontend-developer",
    stack: ["c#"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    background: bgImage2,
    avatar: avatarImage
  }
].map(user => ({
  ...user,
  discord: "https://discord.com/",
  telegram: "https://telegram.com",
  github: "https://github.com"
}));

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

function shift(arr, direction, n) {
  const times = n > arr.length ? n % arr.length : n;
  return arr.concat(arr.splice(0, (direction > 0 ? arr.length - times : times)));
}

function TeamsPage() {
  const [users, setUsers] = useState(usersData);
  const { width } = useWindowDimensions();

  return (
    <main className={styles.page}>
      <AnimatePresence mode="popLayout">
        {users.map((el, index) => {
          if (index === 0) {
            return <MUserCard {...el} secondary={true} layout key={el.name}
                                                           initial="initial"
                                                           animate="animate"
                                                           whileHover="whileHover"
                                                           variants={leftCardVariants}
                                                           onClick={() => setUsers(shift(users, 1, 1))}
            />;
          } else if (index === 2) {
            return <MUserCard {...el} secondary={true} layout key={el.name}
                                               initial="initial"
                                               animate="animate"
                                               whileHover="whileHover"
                                               variants={rightCardVariants}
                                               onClick={() => setUsers(shift(users, -1, 1))}
            />;
          } else if (index === 1) {
            return <MUserCard {...el}
                              key={el.name} whileTap={{ scale: 1.1 }}
                              layout
                              initial="initial"
                              animate="animate"
                              secondary={false}
                              variants={middleCardVariants}
                              onClick={() => {

                              }} />;
          }
        })}
    </AnimatePresence>
      {/*<MUserCard {...users.at(curUserIndex - 1)} secondary={true} layout*/}
      {/*           onClick={() => setCurUserIndex(prevIndex => (prevIndex - 1) === -1 ? users.length - 1 : prevIndex - 1)}*/}
      {/*           initial={{ rotate: -4, marginRight: "-5%", filter: "brightness(75%)", y: '100vh'}} animate={{y: 0}}*/}
      {/*           whileHover={{ y: -25, filter: "brightness(80%)" }} />*/}
      {/*<MUserCard {...users[curUserIndex]} whileTap={{ scale: 1.1 }} initial={{ zIndex: 1, y: '100vh'}} animate={{y: 0}} layout/>*/}
      {/*<MUserCard {...users[(curUserIndex + 1) === users.length ? 0 : curUserIndex + 1]} secondary={true} layout*/}
      {/*           initial={{ rotate: 4, marginLeft: "-5%", filter: "brightness(75%)",  y: '100vh' }} animate={{y: 0}}*/}
      {/*           whileHover={{ y: -25, filter: "brightness(80%)" }}*/}
      {/*           onClick={() => setCurUserIndex(prevIndex => prevIndex + 1 >= users.length ? 0 : prevIndex + 1)}/>*/}
    </main>
  );
}

export default TeamsPage;
