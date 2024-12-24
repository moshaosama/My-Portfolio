import { MdDarkMode, MdLightMode } from "react-icons/md";
import "../App.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

interface NavbarProps {
  color: string;
  UpdateColor: (newColor: string) => void;
}
const Navbar = ({ color, UpdateColor }: NavbarProps) => {
  const [Active, setActive] = useState<boolean>(false);
  return (
    <>
      <div
        className={`${
          color == "white"
            ? "bg-white shadow-xl"
            : "bg-[#171c28] shadow-lg shadow-black"
        } py-6 sticky top-0 z-50`}
      >
        <div className="mx-10 flex justify-between items-center ">
          <a href="#">
            <div>
              <h1
                className={`font-bold text-2xl ${
                  color === "white" ? "text-black" : "text-white"
                }`}
              >
                <span
                  style={{
                    fontFamily: "'Pacifico', cursive",
                  }}
                >
                  &lt;
                </span>
                <span
                  style={{
                    fontFamily: "'Pacifico', cursive",
                  }}
                >
                  Mohamed Osama /
                </span>
                <span
                  style={{
                    fontFamily: "'Pacifico', cursive",
                  }}
                >
                  &gt;
                </span>
              </h1>
            </div>
          </a>

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
              href="#OpenSources"
              className={`${
                color == "white" ? "hover:bg-[#ddd]" : "hover:bg-purple-700"
              }  w-fit p-3 rounded-lg transition-all duration-200`}
            >
              Open Source
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
              href="#ContactMe"
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
              {color === "white" ? <MdDarkMode /> : <MdLightMode />}
            </div>
          </div>
          <div className="sm:hidden" onClick={() => setActive(!Active)}>
            <FaBars
              className={`${
                color == "white" ? "text-black" : "text-white"
              } text-xl`}
            />
          </div>
        </div>
        {Active ? (
          <div className="text-[#ffffff8c] sm:hidden flex flex-col gap-7 p-4">
            <a
              href="#whatIDo"
              className={`${
                color == "white" ? "text-black" : "text-white"
              } text-xl`}
            >
              Skills
            </a>
            <a
              href="#Experience"
              className={`${
                color == "white" ? "text-black" : "text-white"
              } text-xl`}
            >
              Work Experiences
            </a>
            <a
              href="#OpenSources"
              className={`${
                color == "white" ? "text-black" : "text-white"
              } text-xl`}
            >
              Open Source
            </a>
            <a
              href="#Resume"
              className={`${
                color == "white" ? "text-black" : "text-white"
              } text-xl`}
            >
              Resume
            </a>
            <a
              href="#ContactMe"
              className={`${
                color == "white" ? "text-black" : "text-white"
              } text-xl`}
            >
              Contact Me
            </a>
            <div
              className={`${
                color == "white" ? "text-black" : "text-white"
              } text-xl`}
              onClick={() => UpdateColor(color === "white" ? "black" : "white")}
            >
              {color === "white" ? <MdDarkMode /> : <MdLightMode />}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Navbar;
