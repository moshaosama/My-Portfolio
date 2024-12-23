import { useState } from "react";

const Proficiency = () => {
  const Color = localStorage.getItem("Color");
  const [Visible, setVisible] = useState<boolean>(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 750) {
      setVisible(true);
    }
  });
  return (
    <>
      <div className="flex justify-between items-center">
        <div
          className={`${Color === "white" ? "text-black" : "text-white"} ${
            Visible ? "sm:m-20 opacity-100" : "sm:-mx-60 opacity-0"
          }  py-10 w-1/4 max-sm:w-full max-sm:m-0 transition-all duration-300`}
        >
          <h1 className=" text-5xl max-sm:text-3xl max-sm:text-center">
            Proficiency
          </h1>
          <div className="my-10 text-xl">
            <p className="max-sm:mx-5">Front-End Developer</p>
            <div
              className={`${
                Color === "white" ? "bg-[#ddd]" : "bg-white"
              } w-[200%] max-sm:w-[90%] h-5 my-10 max-sm:mx-5 rounded-xl`}
            >
              <div className="bg-purple-300 w-[95%] h-5 rounded-xl"></div>
            </div>
          </div>
          <div className="my-10 text-xl">
            <p className="max-sm:mx-5">Back-End Developer</p>
            <div
              className={`${
                Color === "white" ? "bg-[#ddd]" : "bg-white"
              } w-[200%] max-sm:w-[90%] h-5 my-10 max-sm:mx-5 rounded-xl`}
            >
              <div className="bg-purple-300 w-[80%] h-5 rounded-xl"></div>
            </div>
          </div>
          <div className="my-10 text-xl">
            <p className="max-sm:mx-5">Programming</p>
            <div
              className={`${
                Color === "white" ? "bg-[#ddd]" : "bg-white"
              } w-[200%] max-sm:w-[90%] max-sm:mx-5 h-5 my-10 rounded-xl`}
            >
              <div className="bg-purple-300 w-[70%] h-5 rounded-xl"></div>
            </div>
          </div>
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

export default Proficiency;
