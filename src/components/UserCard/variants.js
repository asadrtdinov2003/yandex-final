/* eslint-disable */

export const cardVariants = {
  initial: {
    overflow: [null, 'hidden'],
    transition: {duration: {delay: 1}}
  },
  hover: ({ isVideo, secondary }) => ({
    height: secondary ? '600px' : 'calc(600px + 100px)',
    overflow: isVideo ? 'hidden' : null,

  }),
};

export const avatarVideoVariants = {
  initial: {
    clipPath: 'circle(35% at 50% 50%)', objectFit: 'cover'
  },
  hover: (secondary) => secondary || {
    clipPath: [null, 'circle(100% at 50% 50%)'],
    top: 0,
    marginBottom: '5%',
    transition: {
      duration: 0.5,
    },
    transitionEnd: {
      width: '100%',
      duration: 1,
    },
  },
};

export const avatarImageVariants = {
  hover: (secondary) => ({
    top: secondary ? null : 0,
    rotate: 5,
  }),
};

export const bgImageVariants = {
  initial: {
    objectFit: 'cover',
    top: 0,
    height: 'calc(21vh)'
  },
  hover: (secondary) => ({height: secondary ? 'calc(21vh)' : 0, y: secondary ? null : 100, transition: { delay: 0.5, duration: 0.25 } }),
};

export const infoVariants = {
  hover: (secondary) => secondary || { top: 0 },
};

export const linksVariants = {
  initial: {
    width: '100%',
    opacity: 0,
    pointerEvents: 'none',
    cursor: 'initial'
  },
  fade: {
    opacity: 0,
    transition: {
      duration: 0.25 ,
      bounce: 0.5
    },
    pointerEvents: 'none',
    cursor: 'initial'
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
      cursor: 'pointer',
      pointerEvents: 'auto',
    });
  },
};
