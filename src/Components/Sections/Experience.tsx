const Experience = () => {
  const Color = localStorage.getItem("Color");
  return (
    <>
      <div
        id="Experience"
        className={`${
          Color == "white" ? "text-black" : "text-white"
        } mx-20 max-sm:mx-0 py-20 max-sm:w-full max-sm:text-center`}
      >
        <h1 className=" text-5xl max-sm:text-3xl">Experiences</h1>
        <div className="flex max-sm:flex-col max-sm:justify-center items-center gap-4">
          <div
            className={`my-6 max-h-96 border-white border-solid border rounded-xl w-[35pc] max-sm:w-72  transition-all duration-300  ${
              Color == "white"
                ? "hover:shadow-black hover:shadow-lg border-black"
                : "border-white"
            }`}
          >
            <div className="bg-blue-500 flex justify-center p-14 rounded-xl">
              <h1 className="text-xl font-bold">Azzrk</h1>
            </div>
            <div className="-my-16 flex justify-center">
              <img
                src="azzrkplatform_logo-removebg-preview.png"
                alt=""
                className="w-32"
              />
            </div>
            <div className="flex flex-col items-center gap-2 justify-center my-14">
              <h1 className="text-3xl font-bold max-sm:text-xl">
                Front-End Developer
              </h1>
              <p className="text-2xl max-sm:text-xl">Dec 2024 – Present</p>
              <ul
                className={`${
                  Color == "white" ? "text-black" : "text-white"
                } flex flex-col  justify-center my-10`}
              >
                <li>
                  Delivered educational sessions HTML, CSS, JavaScript within
                  the GDSC.
                </li>
                <a href="#" className="text-blue-500">
                  Ream More...
                </a>
              </ul>
            </div>
          </div>
          <div
            className={`my-6 max-h-96 border-white border-solid border rounded-xl w-[35pc] max-sm:w-72  transition-all duration-300  ${
              Color == "white"
                ? "hover:shadow-black hover:shadow-lg border-black"
                : "border-white"
            }`}
          >
            <div className="bg-[#ddd] flex justify-center p-14 rounded-xl">
              <h1 className="text-xl font-bold text-black">GDSC</h1>
            </div>
            <div className="-my-16 flex justify-center">
              <img
                src="gdsc_akhbar_el_youm_logo-removebg-preview.png"
                alt=""
                className="w-32"
              />
            </div>
            <div className="flex flex-col items-center gap-2 justify-center my-14">
              <h1 className="text-3xl font-bold max-sm:text-xl">
                Front-End Developer (Instructor)
              </h1>
              <p className="text-2xl max-sm:text-xl">Sep 2023 – June 2024</p>
              <ul
                className={`${
                  Color == "white" ? "text-black" : "text-white"
                } flex flex-col  justify-center my-10`}
              >
                <li>
                  Delivered educational sessions HTML, CSS, JavaScript within
                  the GDSC.
                </li>
                <a href="#" className="text-blue-500">
                  Ream More...
                </a>
              </ul>
            </div>
          </div>
          <div
            className={`my-6 max-h-96 border-white border-solid border rounded-xl w-[35pc] max-sm:w-72  transition-all duration-300  ${
              Color == "white"
                ? "hover:shadow-black hover:shadow-lg border-black"
                : "border-white"
            }`}
          >
            <div className="bg-green-300 flex justify-center p-14 rounded-xl">
              <h1 className="text-xl font-bold text-black">Fetra App</h1>
            </div>

            <div className="flex flex-col items-center gap-2 justify-center my-14">
              <h1 className="text-3xl font-bold max-sm:text-xl">
                Front-End Developer (FreeLancer)
              </h1>
              <p className="text-2xl max-sm:text-xl">May 2023 – Nov 2023</p>
              <ul
                className={`${
                  Color == "white" ? "text-black" : "text-white"
                } flex flex-col  justify-center my-10`}
              >
                <li>
                  Delivered educational sessions HTML, CSS, JavaScript within
                  the GDSC.
                </li>
                <a href="#" className="text-blue-500">
                  Ream More...
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
