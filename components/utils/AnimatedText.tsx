import React from "react";
import { motion } from "framer-motion";

interface AnimatedTextProp {
  text: string;
  classText: string;
}

const containerVariant = {
  initial: { opacity: 0 },
  transition: {
    opacity: 1,
    delayChildren: 0.4,
    staggerChildren: 0.1,
  },
};

const spanVariant = {
  initial: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const AnimatedText = (animatedTextProp: AnimatedTextProp) => {
  const { text, classText } = animatedTextProp;

  return (
    <motion.h1
      variants={containerVariant}
      initial="initial"
      animate="visible"
      className={classText}
    >
      {[...text].map((letter, index) => (
        <motion.span
          variants={spanVariant}
          initial="initial"
          animate="visible"
          key={index}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedText;
