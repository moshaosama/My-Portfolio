import { useState } from "react";
import Social from "../Social";

const ContactMe = () => {
  const Color = localStorage.getItem("Color");
  const [Visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 3400) {
      setVisible(true);
    }
  });

  const themeStyle = {
    color: `${Color === "white" ? "text-black" : "text-white"}`,
    ResponsiveColor: `${
      Color == "white" ? "max-sm:text-black" : "max-sm:text-white"
    }`,
    visible1: `${Visible ? "sm:mx-0 opacity-100" : "sm:-mx-60 opacity-0"}`,
    visible2: `${Visible ? "sm:max-0 opacity-100" : " sm:-mx-20 opacity-0"}`,
  };
  return (
    <>
      <div
        className="flex justify-between items-center max-sm:text-center mx-20 py-10 max-sm:flex-col-reverse "
        id="ContactMe"
      >
        <div
          className={`${themeStyle.color} ${themeStyle.visible1} transition-all duration-300`}
        >
          <h1 className="text-5xl max-sm:hidden">Reach Out to me!</h1>
          <p className="text-[#868e96] text-3xl max-sm:text-lg ">
            Discuss a project or just want to say hi? My Inbox is open for all.
          </p>
          <p className="text-2xl font-bold my-10 max-sm:text-xl">
            "Software Engineer | @MohamedOSFekry@gmail.com"
          </p>
          <div className="flex gap-5 max-sm:gap-2 max-sm:w-full max-sm:justify-center">
            <Social />
          </div>
        </div>

        <div
          className={`max-sm:text-center ${themeStyle.visible2} transition-all duration-300`}
        >
          <h1
            className={`text-5xl hidden max-sm:block max-sm:text-2xl font-bold ${themeStyle.ResponsiveColor}`}
          >
            Reach Out to me!
          </h1>
          <img
            src="WhatsApp Image 2024-12-09 at 18.12.31_d5378d10.jpg"
            alt=""
            className="w-96 max-sm:my-10 rounded-full border-solid border-purple-600 border-8 hover:translate-x-6 transition-all duration-300"
          />
        </div>
      </div>
    </>
  );
};

export default ContactMe;
