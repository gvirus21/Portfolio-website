import React from "react";

const Herosection = () => {
  return (
    <div className="flex flex-col justify-center w-screen h-screen px-28 ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 w-full h-full object-cover -z-10"
      >
        {/* this video is temporary */}
        <source src="/assets/background.mp4" type="video/mp4" />
      </video>

      <div className="z-10">
        <h2 className="text-white text-[2rem] ml-4">Hi, i am</h2>
        <h2 className="text-white text-[7rem]">Gourav Kumar</h2>
        <h2 className="text-white text-[2rem] mt-5 ml-4">
          Web3 frontend developer
        </h2>
      </div>
    </div>
  );
};

export default Herosection;
