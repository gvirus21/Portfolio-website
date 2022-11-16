import React from "react";
import { motion } from "framer-motion";
import { linkVariant, containerVariant } from "./variants";

const style = {
  link: "text-white text-9xl my-8",
  socialLinks: "text-white text-8xl my-8",
};

const MobileExpandedMenu = () => {

  const MenuLinks = ["About", "Work", "Projects", "Contact"];
  const socialLinks = ["Twitter", "GitHub", "LinkedIn"];

  return (
    <motion.div
      variants={containerVariant}
      initial="initial"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      className="bg-black h-screen w-screen absolute z-20 pl-20 flex flex-col justify-between"
    >
      <div className="mt-60 justify-between">
        <ul>
          {MenuLinks.map((link, index) => {
            return (
              <motion.li
                variants={linkVariant}
                initial="initial"
                animate="visible"
                transition={{duration: 0.4, delay: index * 0.1, ease: "easeInOut"}}
                className={style.link}
              >
                {link}
              </motion.li>
            );
          })}
        </ul>
      </div>
      <div className="mb-24">
        <ul>
          {socialLinks.map((link, index) => {
            return (
              <motion.li
                variants={linkVariant}
                initial="initial"
                animate="visible"
                transition={{duration: 0.4, delay: index * 0.1, ease: "easeInOut"}}
                className={style.socialLinks}
              >
                {link}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default MobileExpandedMenu;
