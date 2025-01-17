import { MdOutlineWavingHand } from "react-icons/md";
import Buttom from "../Buttom";
import Social from "../Social";

const About = () => {
  const color = localStorage.getItem("Color");
  const themeStyle = {
    color: `${color == "white" ? "text-black" : "text-white"}`,
    colorText: `${color == "white" ? "text-[#868e96]" : "text-white"}`,
  };
  return (
    <>
      <div className="mx-20 max-sm:mx-0 py-28 max-sm:py-20 max-sm:block flex justify-between items-center">
        <div>
          <h1
            id="Resume"
            className={`${themeStyle.color} font-bold text-5xl max-sm:text-lg max-sm:w-full flex items-center max-sm:justify-center gap-5 max-sm:gap-1`}
          >
            Hi all, I'm Mohamed
            <span>
              <MdOutlineWavingHand className="text-yellow-600" />
            </span>
          </h1>
          <div className="max-sm:text-center max-sm:mx-3">
            <p
              className={`${themeStyle.colorText}  text-3xl max-sm:text-xl  w-[38pc] max-sm:w-full my-10 max-sm:my-5 flex items-center`}
            >
              A passionate Full Stack Software Developer 🚀 having an experience
              of building Web with JavaScript / Reactjs / Nodejs and some other
              cool libraries and frameworks.
            </p>
          </div>
          <div className="flex gap-5 max-sm:gap-2 max-sm:w-full max-sm:justify-center">
            <Social />
          </div>
          <div className="my-10 flex gap-16 max-sm:gap-3 max-sm:justify-center">
            <Buttom href="" Title="CONTACT ME" />
            <Buttom
              href="https://drive.google.com/file/d/1DHzu43OAsYz8G5KKW6YBK-HrJEFNAyfP/view?usp=drivesdk"
              Title="DOWNLOAD MY RESUME"
            />
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
