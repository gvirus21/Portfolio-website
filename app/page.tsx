import React from "react";
import Cursor from "../components/utils/Cursor";
import Header from "./Header";
import Herosection from "./Herosection";

const Home = () => {
  return (
    <div className="relative">
      <Cursor />
      <Header />
      <Herosection />
    </div>
  );
};


export default Home;
