import { MdDarkMode } from "react-icons/md";
import "../App.css";
import { FaBars } from "react-icons/fa";

interface NavbarProps {
  color: string;
  UpdateColor: (newColor: string) => void;
}
const Navbar = ({ color, UpdateColor }: NavbarProps) => {
  return (
    <>
      <div
        className={`${
          color == "white"
            ? "bg-white shadow-xl"
            : "bg-[#171c28] shadow-lg shadow-black"
        } py-6 sticky top-0`}
      >
        <div className="mx-10 flex justify-between items-center">
          <div>
            <h1
              className={`font-bold text-2xl ${
                color == "white" ? "text-black" : "text-white"
              }`}
            >
              <span>&lt;</span>
              <span
                style={{
                  fontFamily: "Pacifico cursive",
                }}
              >
                Mohamed Osama /
              </span>
              <span>&gt;</span>
            </h1>
          </div>

          <div
            className={`flex gap-6 text-2xl max-sm:hidden ${
              color == "white" ? "text-black" : "text-white"
            }`}
          >
            <a
              href="#whatIDo"
              className={`${
                color == "white" ? "hover:bg-[#ddd]" : "hover:bg-purple-700"
              }  w-fit p-3 rounded-lg transition-all duration-200`}
            >
              Skills
            </a>
            <a
              href="#Experience"
              className={`${
                color == "white" ? "hover:bg-[#ddd]" : "hover:bg-purple-700"
              }  w-fit p-3 rounded-lg transition-all duration-200`}
            >
              Work Experiences
            </a>
            <a
              href="#"
              className={`${
                color == "white" ? "hover:bg-[#ddd]" : "hover:bg-purple-700"
              }  w-fit p-3 rounded-lg transition-all duration-200`}
            >
              Open Source
            </a>
            <a
              href="#"
              className={`${
                color == "white" ? "hover:bg-[#ddd]" : "hover:bg-purple-700"
              }  w-fit p-3 rounded-lg transition-all duration-200`}
            >
              Achievements
            </a>
            <a
              href="#Resume"
              className={`${
                color == "white" ? "hover:bg-[#ddd]" : "hover:bg-purple-700"
              }  w-fit p-3 rounded-lg transition-all duration-200`}
            >
              Resume
            </a>
            <a
              href="#"
              className={`${
                color == "white" ? "hover:bg-[#ddd]" : "hover:bg-purple-700"
              }  w-fit p-3 rounded-lg transition-all duration-200`}
            >
              Contact Me
            </a>
            <div
              className="flex items-center cursor-pointer"
              onClick={() => UpdateColor(color === "white" ? "black" : "white")}
            >
              <MdDarkMode />
            </div>
          </div>
          <div className="sm:hidden">
            <FaBars className="text-white text-xl" />
            <div
              className="flex items-center cursor-pointer"
              onClick={() => UpdateColor(color === "white" ? "black" : "white")}
            >
              <MdDarkMode />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
