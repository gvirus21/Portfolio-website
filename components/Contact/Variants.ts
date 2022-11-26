export const containerVariant = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const textVariant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

export const linkVariant = {
  initial: {
    opacity: 0,
    translateY: 50,
  },
  visible: {
    opacity: 1,
    translateY: 0,
  },
};
