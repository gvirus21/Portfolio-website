import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { linkVariant, containerVariant } from "./variants";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { IconContext } from "react-icons/lib";

const style = {
  link: "text-white text-9xl my-8",
  socialLinks: "text-white text-7xl my-5 flex items-end",
};

const MobileExpandedMenu = () => {
  const menuLinks = ["About", "Work", "Projects", "Contact"];

  const socialLinks = [
    {
      name: "Twitter",
      link: "https://www.twitter.com/GouravKumarDev",
      icon: <AiOutlineTwitter />,
    },
    {
      name: "Github",
      link: "https://www.github.com/gvirus21",
      icon: <AiOutlineGithub />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/gouravkumar-21/",
      icon: <AiFillLinkedin />,
    },
  ];

  const MenuLinks = () => {
    return (
      <div className="mt-60 justify-between">
        <ul>
          {menuLinks.map((link, index) => {
            return (
              <motion.li
                key={index}
                exit={{
                  opacity: 0,
                  y: -50,
                  transition: {
                    duration: 0.2,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  },
                }}
                variants={linkVariant}
                initial="initial"
                animate="visible"
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className={style.link}
              >
                {link}
              </motion.li>
            );
          })}
        </ul>
      </div>
    );
  };

  const SocialLinks = () => {
    return (
      <div className="mb-24">
        <ul>
          {socialLinks.map((item, index) => {
            return (
            <a target="_blank" rel="noopener noreferrer" href="/">
              // <a target="_blank" href={item.link} rel="noopener noreferrer">
                <motion.li
                  key={index}
                  exit={{
                    opacity: 0,
                    y: -50,
                    transition: {
                      duration: 0.2,
                      delay: index * 0.1,
                      ease: "easeInOut",
                    },
                  }}
                  variants={linkVariant}
                  initial="initial"
                  animate="visible"
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className={style.socialLinks}
                >
                  {item.name}
                  <div className="ml-5">
                    <IconContext.Provider value={{size: '65'}}>{item.icon}</IconContext.Provider>
                  </div>
                </motion.li>
              // </a>
            </a>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <motion.div
      variants={containerVariant}
      initial="initial"
      animate="visible"
      exit={{
        opacity: 0,
        transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" },
      }}
      className="bg-black h-screen w-screen absolute z-20 pl-20 flex flex-col justify-between"
    >
      <MenuLinks />
      <SocialLinks />
    </motion.div>
  );
};

export default MobileExpandedMenu;
