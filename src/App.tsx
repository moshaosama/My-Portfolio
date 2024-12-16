import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/Sections/About";
import WhatiDo from "./Components/Sections/WhatiDo";
import Proficiency from "./Components/Sections/Proficiency";
import Education from "./Components/Sections/Education";
import Experience from "./Components/Sections/Experience";

function App() {
  const [color, setColor] = useState(localStorage.getItem("Color") || "white");

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
        <Proficiency />
        <Education />
        <Experience />
      </div>
      {/* ///////// */}
    </>
  );
}

export default App;
