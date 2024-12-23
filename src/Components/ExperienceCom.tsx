interface Experience {
  Label: string;
  Title: string;
  Description: string;
  Src: string;
  date: string;
  Padding: string;
}

const ExperienceCom = ({
  Title,
  Label,
  Src,
  date,
  Description,
  Padding,
}: Experience) => {
  const Color = localStorage.getItem("Color");
  return (
    <>
      <div
        className={`my-6 max-h-[40pc] border-white border-solid border rounded-xl w-[35pc] max-sm:w-72  transition-all duration-300  ${
          Color == "white"
            ? "shadow-[#ddd] shadow-xl border-white border-[1px] border-solid hover:scale-105"
            : "border-white "
        }`}
      >
        <div className="bg-blue-500 flex justify-center p-14 rounded-xl">
          <h1 className="text-xl font-bold">{Label}</h1>
        </div>
        <div className="-my-16 flex justify-center">
          <img src={Src} alt="" className={`w-32 py-${Padding}`} />
        </div>
        <div className="flex flex-col items-center gap-2  justify-center my-14">
          <h1 className="text-3xl font-bold max-sm:text-xl">{Title}</h1>
          <p className="text-2xl max-sm:text-xl">{date}</p>
          <ul
            className={`${
              Color == "white" ? "text-black" : "text-white"
            } flex flex-col  justify-center my-10`}
          >
            <li>{Description}</li>
            <a href="#" className="text-blue-500">
              Ream More...
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ExperienceCom;
