import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { linkVariant, containerVariant } from "./variants";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { IconContext } from "react-icons/lib";

const style = {
  link: "text-white text-5xl my-5",
  socialLinks: "text-white text-4xl my-3 flex items-center",
};

interface IProps { setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>; }

const MobileExpandedMenu = (props: IProps) => {
  const {setMenuIsOpen} = props

  const menuLinks = ["About", "Work", "Projects", "Contact"];

  const socialLinks = [
    {
      name: "Twitter",
      link: "https://www.twitter.com/GouravKumarDev",
      icon: <FiTwitter />,
    },
    {
      name: "Github",
      link: "https://www.github.com/gvirus21",
      icon: <FiGithub />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/gouravkumar-21/",
      icon: <FiLinkedin />,
    },
  ];

  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  const MenuLinks = () => {
    return (
      <div className="mt-20">
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
                <Link to={link} onClick={closeMenu} smooth={true} offset={0}>
                  {link}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    );
  };

  const SocialLinks = () => {
    return (
      <div className="mb-14">
        <ul>
          {socialLinks.map((item, index) => {
            return (
              <a
                target="_blank"
                key={index}
                rel="noopener noreferrer"
                href={item.link}
              >
                <motion.li
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
                  <div className="ml-2">
                    <IconContext.Provider value={{ size: "30" }}>
                      {item.icon}
                    </IconContext.Provider>
                  </div>
                </motion.li>
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
      className="bg-black h-screen w-screen fixed z-30 pl-8 flex flex-col justify-between"
    >
      <MenuLinks />
      <SocialLinks />
    </motion.div>
  );
};

export default MobileExpandedMenu;
