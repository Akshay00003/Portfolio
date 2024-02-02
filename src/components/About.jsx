import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
        I'm a dedicated PYTHON FULL STACK developer with a unique journey into the world of programming. I've always had a passion for solving complex problems and building things from scratch. This drive led me to pursue a career in web development, and I haven't looked back since.
        </p>
        <br />
        <p className="text-xl">
        I specialize in developing full-stack web applications using PYTHON DJANGO. My journey has been a continuous learning process, and I'm excited to share my experiences and insights with the programming community.
        </p>
      </div>
    </div>
  );
};

export default About;
