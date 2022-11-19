export const upperMenubarVariant = {
  closed: {
    y: 0,
    transition: { type: "tween", duration: 0.2 },
  },
  open: {
    y: 9,
    transition: { type: "tween", duration: 0.2 },
  },
};

export const lowerMenubarVariant = {
  closed: {
    y: 0,
    transition: { type: "tween", duration: 0.2, ease: "easeOut" },
  },
  open: {
    y: -9,
  },
};

export const menuContainerVariant = {
  initial: {
    opacity: 0,
    translateY: -10,
  },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: {duration: 0.6, ease: "easeOut"}
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