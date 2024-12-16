import { FaFacebook, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ContactMe = () => {
  const Color = localStorage.getItem("Color");

  return (
    <>
      <div
        className="flex justify-between items-center max-sm:text-center mx-20 py-10 max-sm:flex-col-reverse"
        id="ContactMe"
      >
        <div className={`${Color === "white" ? "text-black" : "text-white"}`}>
          <h1 className="text-5xl max-sm:hidden">Reach Out to me!</h1>
          <p className={`text-[#868e96] text-3xl max-sm:text-lg `}>
            Discuss a project or just want to say hi? My Inbox is open for all.
          </p>
          <p className="text-2xl font-bold my-10 max-sm:text-xl">
            "Software Engineer | @MohamedOSFekry@gmail.com"
          </p>
          <div className="flex gap-5 max-sm:gap-2 max-sm:w-full max-sm:justify-center">
            <a href="https://github.com/moshaosama" target="_black">
              <FaGithub className="text-5xl bg-[#333] hover:bg-[#6d6c6c] p-2 text-white rounded-3xl transition-all duration-200" />
            </a>
            <a href="https://www.linkedin.com/in/thisfekry/" target="_black">
              <FaLinkedin className="text-5xl bg-blue-500 hover:bg-blue-900 p-2 text-white rounded-3xl transition-all duration-200" />
            </a>
            <a href="https://mohamedOSFekry@gmail.com" target="_black">
              <SiGmail className="text-5xl bg-red-600 hover:bg-red-400 p-2 text-white rounded-3xl transition-all duration-200" />
            </a>
            <a href="https://www.facebook.com/mohamedosamakin/" target="_black">
              <FaFacebook className="text-5xl bg-blue-900 hover:bg-blue-700 p-2 text-white rounded-3xl transition-all duration-200" />
            </a>
            <a href="https://medium.com/@mohamedosfekry" target="_black">
              <FaMedium className="text-5xl bg-black p-2 text-white rounded-3xl transition-all duration-200" />
            </a>
          </div>
        </div>

        <div className="max-sm:text-center ">
          <h1
            className={`text-5xl hidden max-sm:block max-sm:text-2xl font-bold ${
              Color == "white" ? "max-sm:text-black" : "max-sm:text-white"
            }`}
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
