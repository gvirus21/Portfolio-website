import React from "react";

const style = {
  container:
    "px-28 sm:px-14 py-12 sm:py-20 flex bg-transparent justify-between items-center transition-all ease-in-out delay-150 absolute top-0 left-0 right-0",
  logo: "text-8xl md:text-2xl lg:text-xl text-white",
  linksContainer: "hidden lg:flex",
  link: "px-4 text-white cursor-pointer transition-all ease-in-out delay-250 hover:text-gray-500",
  menu: "bg-gray-700 h-20 w-24 md:block lg:hidden",
};

const Header = () => {
  return (
    <div className={style.container}>
      <p className={style.logo}>Gourav kumar</p>

      {/* links */}
      <ul className={style.linksContainer}>
        <li className={style.link}>About</li>
        <li className={style.link}>Work</li>
        <li className={style.link}>Projects</li>
        <li className={style.link}>Contact</li>
      </ul>

      {/* hamburger */}
      <div className={style.menu}>

      </div>
    </div>
  );
};

export default Header;
