import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/Sections/About";
import WhatiDo from "./Components/Sections/WhatiDo";
import Education from "./Components/Sections/Education";
import Experience from "./Components/Sections/Experience";
import OpenSource from "./Components/Sections/OpenSource";
import ContactMe from "./Components/Sections/ContactMe";
import { FaHandPointUp } from "react-icons/fa";
import ProficiencySection from "./Components/Sections/ProficiencySection";
function App() {
  const [color, setColor] = useState(localStorage.getItem("Color") || "black");

  const [visible, setVisible] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 90) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  const updateColor = (newColor: string) => {
    localStorage.setItem("Color", newColor);
    setColor(newColor);
  };

  return (
    <>
      <Navbar color={color} UpdateColor={updateColor} />
      {/* Sections */}
      <div
        className={`${color == "white" ? "bg-white" : "bg-[#171c28]"} `}
        id="Sections"
      >
        <About />
        <WhatiDo />
        <ProficiencySection />
        <Education />
        <Experience />
        <OpenSource />
        <ContactMe />
      </div>
      {/* ///////// */}

      {visible ? (
        <a href="#">
          <div className="fixed bottom-5 right-5">
            <FaHandPointUp className="text-5xl text-white bg-purple-500 p-2 rounded-full" />
          </div>
        </a>
      ) : null}
    </>
  );
}

export default App;
