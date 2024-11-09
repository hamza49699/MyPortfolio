import React from 'react';
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiCss3, SiAssemblyscript } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div id="skills" className="container pt-32 animate-pulse ">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl sm:text-6xl">The various technologies I have experience working with</h2>
          <p className="text-yellow-400 pt-8 text-2xl">
            I have extensive experience with a range of programming languages and technologies. My primary expertise lies in TypeScript, JavaScript, Next.js, and C++, which I use for web and software development projects. Additionally, I am familiar with Java, Assembly language, and C, allowing me to adapt to different programming environments and expand my skill set across diverse technical areas.
          </p>
        </div>
      </div>
      
      {/* Stacked layout on small screens, two-column layout on medium screens and above */}
      <div className="grid md:grid-cols-2 text-white text-4xl sm:text-5xl pt-10 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span>TYPESCRIPT</span>
            <SiTypescript />
          </div>
          <div className="flex items-center space-x-2">
            <span>NEXT.JS</span>
            <RiNextjsFill />
          </div>
          <div className="flex items-center space-x-2">
            <span>CSS</span>
            <SiCss3 />
          </div>
          <div className="flex items-center space-x-2">
            <span>C LANGUAGE</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span>Tailwind CSS</span>
            <RiTailwindCssFill />
          </div>
          <div className="flex items-center space-x-2">
            <span>JAVA</span>
            <FaJava />
          </div>
          <div className="flex items-center space-x-2">
            <span>C++</span>
          </div>
          <div className="flex items-center space-x-2 ">
            <span>ASSEMBLY LANGUAGE</span>
            <SiAssemblyscript />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
