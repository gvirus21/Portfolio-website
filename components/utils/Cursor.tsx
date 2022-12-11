"use client";
import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { CursorContext } from "../../context/CursorContext";

const Cursor = () => {
  const cursorContext = useContext(CursorContext);
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });

  const mouseMove = (e: any) => {
    setShowCursor(true)
    cursorContext?.setMousePosition({
      x: e.clientX - window.innerWidth/2,
      y: e.clientY - window.innerHeight/2,
    });
  };

  const variants = {
    regular: {
      x: cursorContext!.mousePosition.x - 10,
      y: cursorContext!.mousePosition.y - 10,
      border: "#fff 2px solid",
      transition: {
        ease: 'easeInOut',
        type: 'spring',
        mass: 0.6,
      }
    },

    clickable: {
      x: cursorContext!.mousePosition.x - 10,
      y: cursorContext!.mousePosition.y - 10,
      border: 'none',
      backgroundColor: 'white',
      width: 10,
      height: 10,
    },

    largeClickable: {
      x: cursorContext!.mousePosition.x - 10,
      y: cursorContext!.mousePosition.y - 10,
      border: 'none',
      backgroundColor: 'white',
      width: 20,
      height: 20,
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={cursorContext?.cursorVariant}
      className={`h-5 w-5 rounded-full fixed top-[50vh] left-[50vw] pointer-events-none z-[999] mix-blend-difference ${showCursor ? 'block' : 'hidden'}`}
    />
  );
};

export default Cursor;
