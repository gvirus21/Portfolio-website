import React from "react";
import Link from "next/link";

interface WorkContainerProps {
  children: React.ReactNode;
}

interface WorkLeftProps {
  children: React.ReactNode;
  progress: number
}

interface WorkRightProps {
  children: React.ReactNode;
  progress: number
}

export const WorkContainer: React.FC<WorkContainerProps> = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen">
    {children}
  </div>
);

export const WorkLeft: React.FC<WorkLeftProps> = ({
  children,
  progress,
}) => {
  let translateY = Math.max(0, 50 - progress * 3 * 50);
  if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);

  return (
    <div
      className="flex flex-col items-center justify-center text-3xl lg:text-3xl h-[60vh] md:h-auto md:w-[50vw] bg-white -mt-1"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="leading-10"> {children} </div>
    </div>
  );
};

export const WorkRight: React.FC<WorkRightProps> = ({
  children,
  progress,
}) => {
  let translateY = Math.max(-50, -(progress - 0.5) * 50);
  return (
    <div
      className="flex flex-1 items-center justify-center h-[40vh] md:h-screen"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="flex justify-center  bg-white pt-10 lg:pt-0 px-3 md:px-20">
        {children}
      </div>
    </div>
  );
};
