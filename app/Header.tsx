'use client'
import React, { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const style = {
  container:
    "px-28 sm:px-14 py-12 sm:py-20 flex bg-transparent justify-between items-center transition-all ease-in-out delay-150 absolute top-0 left-0 right-0 mix-blend-difference",
  logo: "text-8xl md:text-2xl lg:text-xl text-white",
  linksContainer: "hidden lg:flex",
  link: "px-4 text-white transition-all ease-in-out delay-250",
  menu: "bg-gray-700 h-20 w-24 md:block lg:hidden",
};

const Header = () => {
  const cursorContext = useContext(CursorContext);

  return (
    <div className={style.container}>
      <p
        onMouseEnter={cursorContext?.textEnter}
        onMouseLeave={cursorContext?.textLeave}
        className={style.logo}
      >
        Gourav kumar
      </p>

      {/* links */}
      <ul className={style.linksContainer}>
        <li
          onMouseEnter={cursorContext?.textEnter}
          onMouseLeave={cursorContext?.textLeave}
          className={style.link}
        >
          About
        </li>
        <li
          onMouseEnter={cursorContext?.textEnter}
          onMouseLeave={cursorContext?.textLeave}
          className={style.link}
        >
          Work
        </li>
        <li
          onMouseEnter={cursorContext?.textEnter}
          onMouseLeave={cursorContext?.textLeave}
          className={style.link}
        >
          Projects
        </li>
        <li
          onMouseEnter={cursorContext?.textEnter}
          onMouseLeave={cursorContext?.textLeave}
          className={style.link}
        >
          Contact
        </li>
      </ul>

      {/* hamburger */}
      <div className={style.menu}></div>
    </div>
  );
};

export default Header;
