import { useState } from "react";
import Buttom from "../Buttom";
import Projects from "../Projects";

const OpenSource = () => {
  const Color = localStorage.getItem("Color");
  const [Visible, setVisible] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 2900) {
      setVisible(true);
    }
  });

  const themeStyle = {
    ColorText: `${Color === "white" ? "text-black" : "text-white"}`,
    Visible: `${Visible ? "gap-16 opacity-100" : "gap-60 opacity-0"}`,
  };

  return (
    <>
      <section className="container mx-20 max-sm:mx-0  px-4 py-12">
        <h1
          className={`text-5xl ${themeStyle.ColorText} max-sm:text-center max-sm:text-3xl`}
        >
          Open Source Project
        </h1>

        <div
          className={`grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-3 transition-all duration-300 ${themeStyle.Visible}  my-10`}
        >
          <Projects />
        </div>
        <div className="flex justify-center">
          <Buttom Title="More Projects" href="https://github.com/moshaosama" />
        </div>
      </section>
    </>
  );
};

export default OpenSource;
