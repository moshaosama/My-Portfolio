interface ProficiencyProps {
  Visible: boolean;
}

const Proficiency = ({ Visible }: ProficiencyProps) => {
  const Color = window.localStorage.getItem("Color");

  const ProficiencyLists = [
    {
      Title: "Front-End Developer",
      width: "95%",
    },
    {
      Title: "Back-End Developer",
      width: "80%",
    },
    {
      Title: "Programming",
      width: "70%",
    },
  ];

  const themeStyle = {
    Color: `${Color === "white" ? "bg-[#ddd]" : "bg-white"}`,
  };
  return (
    <>
      {ProficiencyLists.map((el) => (
        <div className="my-10 text-xl">
          <p className="max-sm:mx-5">{el.Title}</p>
          <div
            className={`${themeStyle.Color} w-[200%] max-sm:w-[90%] h-5 my-10 max-sm:mx-5 rounded-xl`}
          >
            <div
              className={`bg-purple-300 ${
                Visible ? `w-[${el.width}]` : "w-[0%]"
              } h-5 rounded-xl transition-all duration-1000`}
            ></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Proficiency;
