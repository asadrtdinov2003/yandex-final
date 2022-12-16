/* eslint-disable */
import React, { useState } from "react";
import styles from "./UserCard.module.scss";
import cn from "classnames";
import {motion} from "framer-motion";

export const UserCard = React.forwardRef(({ name, avatar, background, job, stack, description, discord, github, telegram, onClick, secondary = false }, ref) => {

  return (
    <div className={cn(styles.card__outer, { [styles.card_secondary]: secondary })} onClick={e => {
      onClick(e);
    }} ref={ref}>
      <div className={styles.card}>
        <motion.img src={background} alt="new year background image" className={styles.card__bgImg} />

        <motion.div className={styles.avatar} whileHover={{rotate: secondary ? 0 : 5}}>
          <img src={avatar} alt="user photo" className={styles.avatar__content}  />
        </motion.div>
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
          </p>
        </div>
      </div>
    </div>
  );
});


export const MUserCard = motion(UserCard);
MUserCard.defaultProps = {
  whileTap: { scale: 0.95 },
};
