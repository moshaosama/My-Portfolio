import { useState } from "react";
import {
  FaAngular,
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNode,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const WhatiDo = () => {
  const Color = localStorage.getItem("Color");
  const [visible, setVisible] = useState<boolean>(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 400) {
      setVisible(true);
    }
  });
  return (
    <>
      <div
        className="mx-20 max-sm:mx-10 flex max-sm:flex-col-reverse  justify-between items-center"
        id="whatIDo"
      >
        <div
          className={`${
            visible ? "sm:mx-0 opacity-100" : "sm:-mx-60 opacity-0"
          } transition-all  sm:duration-300 max-sm:duration-500`}
        >
          <img
            src="4948783-removebg-preview.png"
            alt="About.png"
            className="rounded-lg w-[35pc]"
          />
        </div>
        <div
          className={`${Color == "white" ? "text-black" : "text-white"} ${
            visible ? "mx-0 opacity-100" : "-mx-20 opacity-0"
          } font-bold transition-all duration-300  text-xl max-sm:text-2xl max-sm:w-full max-sm:justify-center flex flex-col  gap-2`}
        >
          <h1 className="max-sm:w-full max-sm:justify-center max-sm:flex">
            What i Do
          </h1>
          <div className="max-sm:text-center max-sm:mx-10">
            <p className="text-[#868e96] max-sm:text-sm max-sm:w-full">
              CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
            </p>
          </div>
          <div className="grid my-2 grid-cols-11 max-sm:grid-cols-4 max-sm:mx-3 max-sm:gap-1 w-full gap-3 text-5xl text-[#868e96]">
            <FaHtml5 className="hover:text-purple-700 transition-all duration-100" />
            <FaCss3 className="hover:text-purple-700 transition-all duration-100" />
            <FaJs className="hover:text-purple-700 transition-all duration-100" />
            <FaPython className="hover:text-purple-700 transition-all duration-100" />
            <SiTypescript className="hover:text-purple-700 transition-all duration-100" />
            <FaJava className="hover:text-purple-700 transition-all duration-100" />
            <FaReact className="hover:text-purple-700 transition-all duration-100" />
            <FaAngular className="hover:text-purple-700 transition-all duration-100" />
            <FaBootstrap className="hover:text-purple-700 transition-all duration-100" />
            <SiTailwindcss className="hover:text-purple-700 transition-all duration-100" />
            <FaNode className="hover:text-purple-700 transition-all duration-100" />
            <SiExpress className="hover:text-purple-700 transition-all duration-100" />
            <SiNestjs className="hover:text-purple-700 transition-all duration-100" />
            <SiNextdotjs className="hover:text-purple-700 transition-all duration-100" />
            <SiMongodb className="hover:text-purple-700 transition-all duration-100" />
            <SiMysql className="hover:text-purple-700 transition-all duration-100" />
            <FaGit className="hover:text-purple-700 transition-all duration-100" />
            <FaGithub className="hover:text-purple-700 transition-all duration-100" />
            <SiRedux className="hover:text-purple-700 transition-all duration-100" />
            <FaFigma className="hover:text-purple-700 transition-all duration-100" />
          </div>

          <p
            className={`my-16 max-sm:my-7 w-[50pc] max-sm:w-80 max-sm:text-sm  ${
              Color === "white" ? "text-[#868e96]" : "text-white"
            }`}
          >
            ⚡ Develop highly interactive Front end / User Interfaces for your
            web and mobile applications
          </p>
        </div>
      </div>
    </>
  );
};

export default WhatiDo;
