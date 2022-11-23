export const scrollBallVariant = {
  initial: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: { delay: 0.3, duration: 1 },
  },
};

export const scrollTextVariant = {
  initial: {
    opacity: 0,
    y: -20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.4 },
  },
};

export const heroTextVariant = {
  initial: {
    opacity: 0,
    translateY: 50,
  },
  visible: {
    opacity: 1,
    translateY: 0,
  },
};

export const heroSubTextVariant = {
  initial: {
    opacity: 0,
    translateY: 50,
  },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.5,
      delay: 0.4,
    },
  },
};
