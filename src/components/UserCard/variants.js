/* eslint-disable */

export const cardVariants = {
  initial: {
    overflow: [null, "hidden"],
    transition: { duration: { delay: 1 } }
  },
  hover: ({ isVideo }) => ({
    overflow: isVideo ? "hidden" : null
  })
};

export const avatarVideoVariants = {
  initial: {
    clipPath: "circle(35% at 50% 50%)", objectFit: "cover",
    // filter: "initial"
  },
  hover: (secondary) => secondary || {
    clipPath: [null, "circle(100% at 50% 50%)"],
    top: 0,
    marginBottom: "0",
    height: "auto",
    transition: {
      duration: 0.5
    },
    transitionEnd: {
      width: [null, "101%"],
      // filter: 'grayscale(100%)',
      duration: 1
    }
  }
};

export const avatarImageVariants = {
  hover: (secondary) => ({
    top: secondary ? null : 0,
    marginTop: secondary ? '0' : "10%",
    rotate: 5
  })
};

export const bgImageVariants = {
  initial: {
    objectFit: "cover",
    top: 0,
    height: "20%"
  },
  hover: (secondary) => ({
    height: secondary ? "20%" : 0,
    y: secondary ? null : 0,
    transition: { delay: 0.25, duration: 0.4 }
  })
};

export const infoVariants = {
  initial: ({ isVideo }) => isVideo && { marginTop: "5%" },
  hover: ({ secondary }) => secondary || { top: 0, marginTop: 0 }
};

export const linksVariants = {
  initial: {
    width: "100%",
    opacity: 0,
    pointerEvents: "none",
    cursor: "initial"
  },
  fade: {
    opacity: 0,
    transition: {
      duration: 0.25,
      bounce: 0.5
    },
    pointerEvents: "none",
    cursor: "initial"
  },
  hover: (secondary) => {
    return (secondary || {
      width: "100%",
      disabled: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        bounce: 0.5,
        delay: 1
      },
      cursor: "pointer",
      pointerEvents: "auto"
    });
  }
};
