/* eslint-disable */
import React from "react";
import styles from "./UserCard.module.scss";
import bgImage from "../../imgs/card-bg.png";
import avatarImage from "../../imgs/avatarPlaceholder1.png";

function UserCard({ name, job, stack, description, discord, github, telegram }) {


  return (
    <div className={styles.card__outer}>
      <div className={styles.card}>
        <img src={bgImage} alt="new year background image" className={styles.card__bgImg} />

        <div className={styles.card__avatarImg}>
          <img src={avatarImage} alt="user photo" />
        </div>
        <div className={styles.card__info}>
          <h2 className={styles.heading}>{name}</h2>
          <h3 className={styles.card__job}>{job}</h3>
          <div className={styles.stack}>
            {/* Ой как щас буду использовать индекс в key ода  */}
            {stack.map((el, i) => (
              <div className={styles.stack__item} key={i}>{el}</div>
            ))}
          </div>
          <p className={styles.card__description}>
            {description}
          </p></div>
      </div>
    </div>
  )
    ;
}

export default UserCard;
