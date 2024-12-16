import { FaFacebook, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { MdOutlineWavingHand } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import Buttom from "../Buttom";

const About = () => {
  const color = localStorage.getItem("Color");
  return (
    <>
      <div className="mx-20 max-sm:mx-0 py-28 max-sm:py-20 max-sm:block flex justify-between items-center">
        <div>
          <h1
            id="Resume"
            className={`${
              color == "white" ? "text-black" : "text-white"
            } font-bold text-5xl max-sm:text-lg max-sm:w-full flex items-center max-sm:justify-center gap-5 max-sm:gap-1`}
          >
            Hi all, I'm Mohamed{" "}
            <span>
              <MdOutlineWavingHand className="text-yellow-600" />
            </span>
          </h1>
          <div className="max-sm:text-center max-sm:mx-3">
            <p
              className={`${
                color == "white" ? "text-[#868e96]" : "text-white"
              }  text-3xl max-sm:text-xl  w-[38pc] max-sm:w-full my-10 max-sm:my-5 flex items-center`}
            >
              A passionate Full Stack Software Developer 🚀 having an experience
              of building Web with JavaScript / Reactjs / Nodejs and some other
              cool libraries and frameworks.
            </p>
          </div>
          <div className="flex gap-5 max-sm:gap-2 max-sm:w-full max-sm:justify-center">
            <a href="#">
              <FaGithub className="text-5xl bg-[#333] hover:bg-[#6d6c6c] p-2 text-white rounded-3xl transition-all duration-200" />
            </a>
            <a href="#">
              <FaLinkedin className="text-5xl bg-blue-500 hover:bg-blue-900 p-2 text-white rounded-3xl transition-all duration-200" />
            </a>
            <a href="#">
              <SiGmail className="text-5xl bg-red-600 hover:bg-red-400 p-2 text-white rounded-3xl transition-all duration-200" />
            </a>
            <a href="#">
              <FaFacebook className="text-5xl bg-blue-900 hover:bg-blue-700 p-2 text-white rounded-3xl transition-all duration-200" />
            </a>
            <a href="#">
              <FaMedium className="text-5xl bg-black p-2 text-white rounded-3xl transition-all duration-200" />
            </a>
          </div>
          <div className="my-10 flex gap-16 max-sm:gap-3 max-sm:justify-center">
            <Buttom Title="CONTACT ME" />
            <Buttom Title="DOWNLOAD MY RESUME" />
          </div>
        </div>
        <div>
          <img
            src="\3426526-removebg-preview.png"
            alt="About.png"
            className="rounded-lg w-[35pc]"
          />
        </div>
      </div>
    </>
  );
};

export default About;
