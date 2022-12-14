/* eslint-disable */

import React, { useContext, useRef } from "react";
import cn from "classnames";
import { motion, useAnimationControls } from "framer-motion";
import styles from "./UserCard.module.css";
import {
  avatarImageVariants,
  avatarVideoVariants,
  bgImageVariants,
  cardVariants,
  infoVariants,
  linksVariants,
} from "./variants";
import discordImage from "../../imgs/Discord.svg";
import telegramImage from "../../imgs/Telegram.svg";
import githubImage from "../../imgs/GitHub.svg";
import { ThemeContext } from "../../Contexts/ThemeContext";

export const UserCard = React.forwardRef(
  (
    { name, avatar, background, job, stack, description, discord, github, telegram, onClick, secondary = false, oneCard = false },
    ref
  ) => {
    const {darkMode} = useContext(ThemeContext);
    const avatarImgRef = useRef(null);
    const isVideo = avatar.split(".").at(-1) === "mp4";
    const listAnimationControls = useAnimationControls();

    return (
      <motion.div
        variants={cardVariants}
        exit="exit"
        whileTap="hover"
        initial="initial"
        whileHover="hover"
        whileInView={oneCard && "hover"}
        onViewportEnter={() => {
          if (oneCard) {
            isVideo && avatarImgRef.current.play();
            listAnimationControls.start("hover");
          }
        }}
        custom={{ isVideo, secondary }}
        className={cn(styles.card__outer, { [styles.card_secondary]: secondary, [styles.card__outer_dark]: darkMode })}
        onClick={(e) => {
          onClick && onClick(e);
        }}

        onHoverStart={async () => {
          avatarImgRef?.current?.play();
          listAnimationControls.start("hover");
        }}
        onHoverEnd={async () => {
          if (avatarImgRef && avatarImgRef.current) {
            avatarImgRef.current.pause();
            avatarImgRef.current.currentTime = 0;
          }
          listAnimationControls.start("fade");
        }}
        ref={ref}
      >
        <motion.div className={styles.card}>
          <motion.img
            src={background}
            alt="new year background image"
            className={styles.card__bgImg}
            variants={bgImageVariants}
            custom={secondary}
          />
          {isVideo ? (
            <motion.video
              className={styles.avatar}
              custom={secondary}
              ref={avatarImgRef}
              variants={avatarVideoVariants}
              preload="metadata"
              muted
            >
              <source src={avatar} type="video/mp4" />
            </motion.video>
          ) : (
            <motion.div
              className={cn(styles.avatar, styles.avatar_image)}
              variants={avatarImageVariants}
              custom={secondary}
            >
              <img src={avatar} alt="user" className={styles.avatar_image} />
            </motion.div>
          )}
          <motion.div className={styles.card__info} variants={infoVariants} custom={{ secondary, isVideo }}>
            <div className={styles.card__user}>
              <h2 className={styles.heading}>{name}</h2>
              <h3 className={styles.card__job}>{job}</h3>
              <ul className={styles.stack}>
                {/* ???? ?????? ?????? ???????? ???????????????????????? ???????????? ?? key ??????  */}
                {stack.map((el, i) => (
                  <li className={cn(styles.stack__item, {[styles.stack__item_dark]: darkMode})} key={i}>
                    {el}
                  </li>
                ))}
              </ul>
            </div>
            <p className={styles.card__description}>{description}</p>
            <motion.ul
              className={styles.links}
              variants={linksVariants}
              custom={secondary}
              animate={listAnimationControls}
            >
              <li className={styles.links__item}>
                <a href={discord}>
                  <img alt="discord" src={discordImage} />
                </a>
              </li>
              <li className={styles.links__item}>
                <a href={telegram}>
                  <img alt="telegram" src={telegramImage} />
                </a>
              </li>
              <li className={styles.links__item}>
                <a href={github}>
                  <img alt="github" src={githubImage} />
                </a>
              </li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }
);

export const MUserCard = motion(UserCard);
MUserCard.defaultProps = {
  whileTap: { scale: 0.95 },
};
