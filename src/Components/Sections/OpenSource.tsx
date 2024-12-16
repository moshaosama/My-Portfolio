import Buttom from "../Buttom";

const OpenSource = () => {
  const Color = localStorage.getItem("Color");
  return (
    <>
      <section className="container mx-20 max-sm:mx-0  px-4 py-12">
        <h1
          className={`text-5xl ${
            Color === "white" ? "text-black" : "text-white"
          } max-sm:text-center max-sm:text-3xl`}
        >
          Open Source Project
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
          <a href="https://github.com/moshaosama/My-Portfolio" target="_black">
            <div
              className={`${
                Color === "white"
                  ? "bg-white shadow-xl shadow-black"
                  : "bg-gray-800 shadow-lg hover:bg-purple-500"
              }rounded-xl  p-6 hover:-translate-y-2 transition-transform duration-300 cursor-pointer `}
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-3">
                developerFolio 🚀
              </h3>
              <p className="text-gray-400 mb-4">
                Software Developer Portfolio Template that helps you showcase...
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>⚡ TypeScript</span>
                <span>📁 230 MB</span>
              </div>
            </div>
          </a>

          <div
            id="OpenSources"
            className={`${
              Color === "white"
                ? "bg-white shadow-xl shadow-black"
                : "bg-gray-800 shadow-lg hover:bg-purple-500"
            }rounded-xl  p-6 hover:-translate-y-2 transition-transform duration-300 cursor-pointer `}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-3">
              Creative_Blog 🔥
            </h3>
            <p className="text-gray-400 mb-4">
              Creative Blog Sigma is a modern and interactive blog built using
              React.js...
            </p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>⚡ JavaScript</span>

              <span>📁 34.7 MB</span>
            </div>
          </div>

          <a
            href="https://github.com/moshaosama/E-Commerce-Market"
            target="_black"
          >
            <div
              className={`${
                Color === "white"
                  ? "bg-white shadow-xl shadow-black"
                  : "bg-gray-800 shadow-lg hover:bg-purple-500"
              }rounded-xl  p-6 hover:-translate-y-2 transition-transform duration-300 cursor-pointer `}
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-3">
                E-Commerce Market 👾
              </h3>
              <p className="text-gray-400 mb-4">
                A full-stack e-commerce application developed using the MERN
                stack (MongoDB, Express, React, Node.js)...
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>⚡ TypeScript</span>
                <span>📁 273 MB</span>
              </div>
            </div>
          </a>

          <div
            className={`${
              Color === "white"
                ? "bg-white shadow-xl shadow-black"
                : "bg-gray-800 shadow-lg hover:bg-purple-500"
            }rounded-xl  p-6 hover:-translate-y-2 transition-transform duration-300 cursor-pointer `}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-3">
              Spotify_Clone
            </h3>
            <p className="text-gray-400 mb-4">
              Integration with Spotify OAuth for secure user login and account
              management...
            </p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>⚡ TypeScript</span>

              <span>📁 3.3 MB</span>
            </div>
          </div>

          <a href="https://github.com/moshaosama/Weather_app" target="_black">
            <div
              className={`${
                Color === "white"
                  ? "bg-white shadow-xl shadow-black"
                  : "bg-gray-800 shadow-lg hover:bg-purple-500"
              }rounded-xl  p-6 hover:-translate-y-2 transition-transform duration-300 cursor-pointer `}
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-3">
                Weather App 📍
              </h3>
              <p className="text-gray-400 mb-4">
                It typically uses location services to provide localized weather
                updates.
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>⚡ TypeScript</span>

                <span>📁 32.2 MB</span>
              </div>
            </div>
          </a>
        </div>
        <div className="flex justify-center">
          <Buttom Title="More Projects" href="https://github.com/moshaosama" />
        </div>
      </section>
    </>
  );
};

export default OpenSource;
