import React from "react";
import Cursor from "../components/utils/Cursor";
import Header from "./Header"
import Herosection from "./Herosection"
import About from "./About"
const page = () => {
  return (
    <div className="relative">
      <Cursor />
      <Header />
      <Herosection />
      <About />
    </div>
  );
};

export default page;
