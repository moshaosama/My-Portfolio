import ExperienceCom from "../ExperienceCom";

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
          <ExperienceCom
            Label="Azzrk"
            Src="azzrkplatform_logo-removebg-preview.png"
            Title="Front End Developer"
            date="Dec 2024 – Present"
            Description="Contributed to educational sessions on HTML, CSS, and JavaScript..."
            Padding=""
          />
          <ExperienceCom
            Label="GDSC"
            Src="gdsc_akhbar_el_youm_logo-removebg-preview.png"
            Title="Front End Developer (Instructor)"
            date="Sep 2023 – June 2024"
            Description="Delivered educational sessions HTML, CSS, JavaScript within the GDSC..."
            Padding=""
          />
          <ExperienceCom
            Label="Fetra App"
            Src="WhatsApp_Image_2024-04-13_at_21.23.38_37e06ac1-removebg-preview.png"
            Title="Front End Developer (FreeLancer)"
            date="May 2023 – Nov 2023"
            Description="Gained experience in effective communication through this project...."
            Padding="10"
          />
        </div>
      </div>
    </>
  );
};

export default Experience;
