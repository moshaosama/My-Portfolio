const Projects = () => {
  const Color = window.localStorage.getItem("Color");
  const themeStyle = {
    Color: `${
      Color === "white"
        ? "bg-white shadow-xl shadow-black"
        : "bg-gray-800 shadow-lg hover:bg-purple-500"
    }`,
  };

  const ProjectsMap = [
    {
      href: "https://github.com/moshaosama/My-Portfolio",
      Title: "developerFolio 🚀",
      Bio: "Software Developer Portfolio Template that helps you showcase...",
      fileSize: "📁 230 MB",
    },
    {
      href: "https://github.com/moshaosama/Spotify_Clone",
      Title: "Spotify_Clone",
      Bio: "Integration with Spotify OAuth for secure user login and account management...",
      fileSize: "📁 3.3 MB",
    },
    {
      href: "https://github.com/moshaosama/E-Commerce-Market",
      Title: "E-Commerce Market 👾",
      Bio: "A full-stack e-commerce application developed using the MERN stack (MongoDB, Express, React, Node.js)...",
      fileSize: "📁 273 MB",
    },
    {
      href: "https://github.com/moshaosama/LinkedIn_Clone",
      Title: "Linkedin_Clone 🔥",
      Bio: "LinkedIn Clone is a professional networking platform built using Angular and Spring Boot...",
      fileSize: "📁 40.2 MB",
    },
    {
      href: "https://github.com/moshaosama/Forever-Brand",
      Title: "Forever_Brand 🛍️",
      Bio: "Forever Brand is an e-commerce platform for clothing brands, offering a seamless shopping....",
      fileSize: "📁 45.3 MB",
    },
    {
      href: "https://github.com/moshaosama/BizWorld-Business",
      Title: "BizWorld_Business 🚀",
      Bio: "BizWorld Business is a high-performance front-end application built with React.js ⚛️ and Tailwind CSS 🎨.",
      fileSize: "📁 28.5 MB",
    },
  ];
  return (
    <>
      {ProjectsMap.map((el) => (
        <a href={el.href} target="_black">
          <div
            className={`${themeStyle.Color}rounded-xl   p-6 hover:-translate-y-2 transition-transform duration-300 cursor-pointer `}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-3">
              {el.Title}
            </h3>
            <p className="text-gray-400 mb-4">{el.Bio}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>⚡ TypeScript</span>

              <span>{el.fileSize}</span>
            </div>
          </div>
        </a>
      ))}
    </>
  );
};

export default Projects;
