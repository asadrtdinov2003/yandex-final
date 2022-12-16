/* eslint-disable */

import React, { useState } from "react";
import styles from "./TeamsPage.module.css";
import bgImage from "../../imgs/card-bg.png";
import bgImage2 from "../../imgs/bg2.jpg";
import avatarImage from "../../imgs/avatarPlaceholder1.png";
import avatarImage2 from "../../imgs/avatar2.png";
import avatarVideo from "../../imgs/ExampleVideo.mp4";
import {MUserCard} from "../../components/UserCard/UserCard";

const users = [
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
    background: bgImage,
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
].map(user => ({...user, discord: 'https://discord.com/', telegram: 'https://telegram.com', github: 'https://github.com'}));

function TeamsPage() {
  const [curUserIndex, setCurUserIndex] = useState(1);

  return (
    <main className={styles.page}>
      <MUserCard {...users.at(curUserIndex - 1)} secondary={true}
                onClick={() => setCurUserIndex(prevIndex => (prevIndex - 1) === -1 ? users.length - 1 : prevIndex - 1)} />
      <MUserCard {...users[curUserIndex]} whileTap={{scale: 1.1}}/>
      <MUserCard {...users[(curUserIndex + 1) === users.length ? 0 : curUserIndex + 1]} secondary={true}
                onClick={() => setCurUserIndex(prevIndex => prevIndex + 1 >= users.length ? 0 : prevIndex + 1)} />
    </main>
  );
}

export default TeamsPage;
