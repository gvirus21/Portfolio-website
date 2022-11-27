"use client";
import React from "react";
import Image from "next/image";
import {
  TileWrapper,
  TileBackground,
  TileContent,
  Tile,
} from "../components/Work/tile";
import { motion } from "framer-motion";
import { WorkContainer, WorkLeft, WorkRight } from "../components/Work/Work";

const variant = {
  initial: { opacity: 0, translateY: 50 },
  visible: {
    opacity: 1,
    translateY: 0,
    transition: { ease: "easeInOut", duration: 0.5, delay: 0.8 },
  },
};

const Works = () => (
  <div id="Work" className="bg-white py-20">
    <motion.h1
      variants={variant}
      initial="initial"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      className="h-20 text-black text text-6xl text-center -my-1"
    >
      My Works
    </motion.h1>
    <ParallaxStickySlider />
  </div>
);

export default Works;

const ParallaxStickySlider = () => {
  return (
    <TileWrapper numOfPages={3}>
      <TileBackground />
      <TileContent>
        <Tile
          page={0}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div className="flex flex-col px-5 mt-16 lg:h-[30rem] lg:pl-20">
                  <h1 className="text-black font-bold z-50">Forefront DAO</h1>
                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-10 ">
                    <span className="mr-2">○</span> Joined ForefrontDAO as a
                    contract frontend developer to Work and complete
                    Projects-page for their "Squads" app.
                  </p>

                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-10  ">
                    <span className="mr-2">○</span> In this Project, I have
                    Implemented all functionalities like Modals, Search, Sort &
                    Filter projects based on user inputs.
                  </p>
                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-10  ">
                    <span className="mr-2">○</span> We built this project using
                    Next.js, MUI, Styled-components.
                  </p>
                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-10  ">
                    <span className="mr-2">○</span> You can see this project
                    from{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://mdir2.vercel.app/"
                      className="text-violet-400 underline"
                    >
                      here
                    </a>
                  </p>
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <img
                  src="assets/forefront.png"
                  width="100%"
                  height="100%"
                  alt="profile image"
                  className="rounded-lg"
                />
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
        <Tile
          page={1}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div className="flex flex-col px-5 mt-16 lg:h-[30rem] lg:pl-20">
                  <h1 className="text-black font-bold ">Bankless DAO</h1>
                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-10  ">
                    <span className="mr-2">○</span> Joined BanklessDAO as a paid
                    Open source contributer to Work on the frontend of their
                    upcoming official website.
                  </p>

                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-10  ">
                    <span className="mr-2">○</span> In this project, my main
                    task was to rafactor UI of multiple pages based on their
                    figma design.
                  </p>
                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-10  ">
                    <span className="mr-2">○</span> We are using Next.js &
                    Chakra UI here.
                  </p>
                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-10  ">
                    <span className="mr-2">○</span> You can see this project
                    from{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://bankless-new.netlify.app/"
                      className="text-red-400 underline"
                    >
                      here
                    </a>
                  </p>
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <img
                  src="/assets/bankless.png"
                  width={840}
                  height={510}
                  alt="bankless"
                />
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
        <Tile
          page={2}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div className="flex flex-col px-5 mt-16 lg:h-[30rem] lg:pl-20">
                  <h1 className="text-black font-bold mt-16">Canto Public</h1>
                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-10  ">
                    <span className="mr-2">○</span> Joined Canto public as a
                    contract frontend developer to Work on their upcoming
                    Project "Canto Safe".
                  </p>

                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-10  ">
                    <span className="mr-2">○</span> Here i was assigned a task
                    to update the theme of their Canto safe app, which is a Fork
                    of Gnosis-safe app.
                  </p>
                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-10  ">
                    <span className="mr-2">○</span>My main tech-stack for this
                    project was React.js & MUI.
                  </p>
                  <p className="text-black text-[1rem] lg:text-lg leading-6 mt-5 lg:mt-10  ">
                    <span className="mr-2">○</span> You can see this project
                    from{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/neobase-one/safe-react"
                      className="text-green-400 underline"
                    >
                      here
                    </a>
                  </p>
                </div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <img
                  src="/assets/canto.png"
                  width={840}
                  height={510}
                  alt="canto"
                />
              </WorkRight>
            </WorkContainer>
          )}
        ></Tile>
      </TileContent>
    </TileWrapper>
  );
};
