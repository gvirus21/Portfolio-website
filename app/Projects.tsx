"use client";
import React, { useContext } from "react";
import { FiGithub } from "react-icons/fi";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import {
  outerVariant,
  containerVariant,
  cardVariant,
} from "../components/Projects/Variants";
import { CursorContext } from "../context/CursorContext";

const projects = [
  {
    id: 1,
    name: "Poftfolio Site",
    description:
      " Lorem ipsum dolor sit amet consectetur sffcde adipisicing elit Consectetur.",
    coverImage: "assets/portfolio.png",
    hostedLink: "https://www.gourav-kumar.com",
    githubLink: "https://www.github.com",
  },
  {
    id: 2,
    name: "Likuid - App dev agency",
    description:
      " Lorem ipsum dolor sit amet consectetur sffcde adipisicing elit Consectetur.",
    coverImage: "assets/Likuid.png",
    hostedLink: "https://www.twitter.com",
    githubLink: "https://www.github.com",
  },
  {
    id: 3,
    name: "GV Stake",
    description:
      " Lorem ipsum dolor sit amet consectetur sffcde adipisicing elit Consectetur.",
    coverImage: "assets/portfolio.png",
    hostedLink: "https://wwwl.twitter.com",
    githubLink: "https://www.github.com",
  },
];


const cardHoverAnimation = {
  translateY: -20,
  transition: { type: "spring", duration: 0.4 },
};

const githubLinkHoverAnimation = {
  scale: 1.2,
  transition: { type: "spring", duration: 0.4 },
};

const Projects = () => {
  const cursorContext = useContext(CursorContext);

  return (
    <div
      id="Projects"
      onMouseEnter={cursorContext?.whiteBackgroundEnter}
      onMouseLeave={cursorContext?.blackBackgroundEnter}
      className="xs:min-h-screen py-20 w-screen bg-white xs:pt-0 flex justify-center -mt-1"
    >
      <motion.div
        variants={outerVariant}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-[70rem]"
      >
        <h1 className="xs:text-6xl lg:text-6xl xs:text-center xl:text-right xs:mb-10 lg:mb-20 mt-20">
          My Projects
        </h1>
        <motion.div
          variants={containerVariant}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid xs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-10 w-full"
        >
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                name={project.name}
                coverImage={project.coverImage}
                description={project.description}
                hostedLink={project.hostedLink}
                githubLink={project.githubLink}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

interface ProjectCardProps {
  id?: number;
  name: string;
  description: string;
  coverImage: string;
  hostedLink: string;
  githubLink: string;
}

const cardClickHandler = (hostedLink: string) => {
  window.open(hostedLink, "_blank");
};

const ProjectCard = (props: ProjectCardProps) => {
  const { name, description, coverImage, hostedLink, githubLink } = props;

  console.log(coverImage);

  return (
    <motion.div
      onClick={() => cardClickHandler(hostedLink)}
      variants={cardVariant}
      whileHover={cardHoverAnimation}
      className="h-[24rem] rounded-xl w-[22rem] bg-white border-4 border-black flex flex-col items-center px-3 shadow-2xl"
    >
      <div className="w-[20rem] h-[12rem] rounded-lg my-3 shadow-md">
        <img
          src={coverImage}
          width="100%"
          height="100%"
          alt="profile image"
          className="rounded-lg"
        />
      </div>
      <div className="h-3/6 w-full flex flex-col">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="mt-3 mb-5">{description}</p>
        <div className="flex justify-end px-5">
          <motion.a
            target="_blank"
            rel="noopener noreferrer"
            href={githubLink}
            whileHover={githubLinkHoverAnimation}
          >
            <IconContext.Provider value={{ size: "30", color: "#000" }}>
              <FiGithub />
            </IconContext.Provider>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
