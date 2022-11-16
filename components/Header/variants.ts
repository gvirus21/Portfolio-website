export const upperMenubarVariant = {
  closed: {
    y: 0,
    transition: { type: "tween", duration: 0.2 },
  },
  open: {
    y: 27,
    transition: { type: "tween", duration: 0.2 },
  },
};

export const lowerMenubarVariant = {
  closed: {
    y: 0,
    transition: { type: "tween", duration: 0.2, ease: "easeOut" },
  },
  open: {
    y: -10,
  },
};

export const menuContainerVariant = {
  initial: {
    opacity: 0,
    translateY: -50,
  },
  visible: {
    opacity: 1,
    translateY: 0,
  },
};

export const containerVariant = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

 export const linkVariant = {
    initial: {
      opacity: 0,
      translateY: 50
    },
    visible: {
      opacity: 1,
      translateY: 0
    },
  };