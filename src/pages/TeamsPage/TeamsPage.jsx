/* eslint-disable */

import React, { useState } from "react";
import styles from "./TeamsPage.module.css";
import UserCard from "../../components/UserCard/UserCard";

const users = [
  {
    name: "Тимур Ковалев",
    job: "Frontend-developer",
    stack: ["js", "html", "css"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua "
  },
  {
    name: "Ковалев Тимур",
    job: "Frontend-developer",
    stack: ["scss", "react", "c++"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    name: "Роман",
    job: "Frontend-developer",
    stack: ["c#"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    name: "Роман 2",
    job: "Frontend-developer",
    stack: ["c#"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  }
];

function TeamsPage() {
  const [curUserIndex, setCurUserIndex] = useState(1);

  return (
    <main className={styles.page}>
      <UserCard {...users.at(curUserIndex - 1)} secondary={true}
                onClick={() => setCurUserIndex(prevIndex => (prevIndex - 1) === -1 ? users.length - 1 : prevIndex - 1)} />
      <UserCard {...users[curUserIndex]} />
      <UserCard {...users[(curUserIndex + 1) === users.length ? 0 : curUserIndex + 1]} secondary={true}
                onClick={() => setCurUserIndex(prevIndex => prevIndex + 1 >= users.length ? 0 : prevIndex + 1)} />
    </main>
  );
}

export default TeamsPage;
