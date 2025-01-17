import { useState } from "react";

const Education = () => {
  const Color = localStorage.getItem("Color");
  const [Visible, setVisible] = useState<boolean>(false);
  const themeStyle = {
    container: `${Color == "white" ? "text-black" : "text-white"}`,
    Visible: `${Visible ? "bg-purple-500 w-full" : "bg-[#ddd]"}`,
  };
  return (
    <>
      <div
        className={`${themeStyle.container} mx-20 py-20`}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <h1 className=" text-5xl">Education</h1>
        <div className="my-10 flex max-sm:flex-col items-center gap-5">
          <div>
            <img
              src="309565343_439654634931667_432881062927262406_n-removebg-preview.png"
              alt=""
              className="w-40"
            />
          </div>
          <div className="max-sm:w-full">
            <h1 className="text-xl font-bold max-sm:text-center max-sm:text-lg">
              Akhbar Elyom Academy
            </h1>
            <p className="text-xl font-bold max-sm:text-sm max-sm:text-center">
              Bachelor of Science in Computer Science
            </p>
            <p className="text-xl max-sm:text-sm max-sm:text-center">
              September 2022 - April 2025
            </p>
          </div>
        </div>
        <hr
          className={`bg-[#ddd] ${themeStyle.Visible} -my-10 h-[0.3pc] w-[60%] max-sm:w-full  transition-all duration-500`}
        />
      </div>
    </>
  );
};

export default Education;
