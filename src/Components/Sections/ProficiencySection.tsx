import { useState } from "react";
import Proficiency from "../Proficiency";

const ProficiencySection = () => {
  const Color = localStorage.getItem("Color");
  const [Visible, setVisible] = useState<boolean>(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 750) {
      setVisible(true);
    }
  });

  const themeStyle = {
    Color: `${Color === "white" ? "text-black" : "text-white"}`,
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <div
          className={`${themeStyle.Color} mx-20 py-10 w-1/4 max-sm:w-full max-sm:m-0 transition-all duration-300`}
        >
          <h1 className=" text-5xl max-sm:text-3xl max-sm:text-center">
            Proficiency
          </h1>
          <Proficiency Visible={Visible} />
        </div>
        <div
          className={`${
            Visible ? "sm:mx-20 opacity-100" : "sm:-mx-0 opacity-0"
          } max-sm:hidden transition-all duration-300`}
        >
          <img src="rb_2149350374.png" alt="" className="rounded-lg w-[45pc]" />
        </div>
      </div>
    </>
  );
};

export default ProficiencySection;
