const Education = () => {
  const Color = localStorage.getItem("Color");
  return (
    <>
      <div
        className={`${
          Color == "white" ? "text-black" : "text-white"
        } mx-20 py-20 `}
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
        <hr className="bg-[#ddd] -my-10 h-[0.3pc] w-[60%] max-sm:w-full hover:w-full hover:bg-purple-500 transition-all duration-500" />
      </div>
    </>
  );
};

export default Education;
