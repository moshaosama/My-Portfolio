import { MdDarkMode, MdLightMode } from "react-icons/md";
import "../App.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import LinksNavbar from "./LinksNavbar";

interface NavbarProps {
  color: string;
  UpdateColor: (newColor: string) => void;
}
const Navbar = ({ color, UpdateColor }: NavbarProps) => {
  const [Active, setActive] = useState<boolean>(false);
  const themeStyles = {
    TransitionGlobalDiv: `${
      color == "white"
        ? "bg-white shadow-xl"
        : "bg-[#171c28] shadow-lg shadow-black"
    }`,
    trColor: `${color === "white" ? "text-black" : "text-white"}`,
    trHover: `${color == "white" ? "hover:bg-[#ddd]" : "hover:bg-purple-700"}`,
    Style: {
      fontFamily: "'Pacifico', cursive",
    },
    changeMode: `${color ? "black" : "white"}`,
  };

  const linksNav = [
    {
      href: "#whatIDo",
      Title: "Skills",
    },
    {
      href: "#Experience",
      Title: "Work Experiences",
    },
    {
      href: "#OpenSources",
      Title: "Open Source",
    },
    {
      href: "#Resume",
      Title: "Resume",
    },
    {
      href: "#ContactMe",
      Title: "Contact Me",
    },
    {
      href: "#Experience",
      Title: "Work Experiences",
    },
  ];

  const toggleTheme = () => UpdateColor(themeStyles.changeMode);

  const renderLinks = () =>
    linksNav.map((el, index) => (
      <LinksNavbar key={index} href={el.href} Title={el.Title} />
    ));

  return (
    <>
      <div
        className={`${themeStyles.TransitionGlobalDiv} py-6 sticky top-0 z-50`}
      >
        <div className="mx-10 flex justify-between items-center ">
          <a href="#">
            <div>
              <h1 className={`font-bold text-2xl ${themeStyles.trColor}`}>
                <span style={themeStyles.Style}>&lt;</span>
                <span style={themeStyles.Style}>Mohamed Osama /</span>
                <span style={themeStyles.Style}>&gt;</span>
              </h1>
            </div>
          </a>

          <div
            className={`flex gap-6 text-2xl max-sm:hidden ${themeStyles.trColor}`}
          >
            {renderLinks()}

            <div
              className="flex items-center cursor-pointer"
              onClick={() => UpdateColor(color === "white" ? "black" : "white")}
            >
              {color === "white" ? <MdDarkMode /> : <MdLightMode />}
            </div>
          </div>
          <div className="sm:hidden" onClick={() => setActive(!Active)}>
            <FaBars className={`${themeStyles.trColor} text-xl`} />
          </div>
        </div>
        {Active ? (
          <div className="text-[#ffffff8c] sm:hidden flex flex-col gap-2 p-4">
            {renderLinks()}
            <div
              className={`${themeStyles.trColor} text-xl`}
              onClick={toggleTheme}
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
