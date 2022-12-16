/* eslint-disable */
import React, { useRef } from "react";
import styles from "./UserCard.module.scss";
import cn from "classnames";
import { motion } from "framer-motion";

const avatarVideoVariants = {
  initial: {
    clipPath: "circle(35% at 50% 50%)", objectFit: "cover", transition: {}
  },
  hover: secondary => secondary || {
    clipPath: [null, "circle(100% at 50%)"],
    transition: {
      duration: 1
    },
    transitionEnd: {
      clipPath: [null],
      width: [null, "100%"],
      duration: 1
    }
  },
  animate: {
    opacity: 0
  }
};

const avatarImageVariants = {
  hover: {
    rotate: 5
  }
};

const bgImageVariants = {
  hover: secondary => secondary || { height: 0, transition: { delay: .5 } }
};

export const UserCard = React.forwardRef(({
                                            name,
                                            avatar,
                                            background,
                                            job,
                                            stack,
                                            description,
                                            discord,
                                            github,
                                            telegram,
                                            onClick,
                                            secondary = false
                                          }, ref) => {
  const avatarImgRef = useRef(null);

  return (
    <motion.div className={cn(styles.card__outer, { [styles.card_secondary]: secondary })} onClick={e => {
      onClick && onClick(e);
    }}
                onHoverStart={() => {
                  avatarImgRef?.current?.play();
                }} onHoverEnd={() => {
      avatarImgRef?.current?.pause();
    }}
                ref={ref}>
      <motion.div className={styles.card} initial="initial" whileHover="hover">
        <motion.img src={background} alt="new year background image" className={styles.card__bgImg}
                    variants={bgImageVariants} custom={secondary} />
        {avatar.split(".").at(-1) === "mp4" ?

            <motion.video  className={styles.avatar} custom={secondary} ref={avatarImgRef} variants={avatarVideoVariants}
                          muted>
              <source src={avatar} type="video/mp4" />
            </motion.video>
          :
          <motion.div className={cn(styles.avatar, styles.avatar_image)} variants={avatarImageVariants}>
            <img src={avatar} alt="user photo" className={styles.avatar_image} />
          </motion.div>}
        <div className={styles.card__info}>
          <h2 className={styles.heading}>{name}</h2>
          <h3 className={styles.card__job}>{job}</h3>
          <ul className={styles.stack}>
            {/* Ой как щас буду использовать индекс в key ода  */}
            {stack.map((el, i) => (
              <li className={styles.stack__item} key={i}>{el}</li>
            ))}
          </ul>
          <p className={styles.card__description}>
            {description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
});


export const MUserCard = motion(UserCard);
MUserCard.defaultProps = {
  whileTap: { scale: 0.95 }
};
