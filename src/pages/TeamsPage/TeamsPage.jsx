import React from "react";
import UserCard from "../../components/UserCard/UserCard";
import styles from "./TeamsPage.module.css";

function TeamsPage() {
  const stack = ["js", "html", "css", "scss"];

  return (
    <main className={styles.page}>
      <UserCard
        name="Тимур Ковалев"
        job="Frontend-developer"
        stack={stack}
        description="Привет, я люблю долго делать хедеры нет ну серьезно если я сделаю эту страницу первее то че вообще за дела то а а а "
      />
    </main>
  );
}

export default TeamsPage;
