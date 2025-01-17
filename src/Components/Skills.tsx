import {
  FaAngular,
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiNestjs,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiRedux,
} from "react-icons/si";

const Skills = () => {
  const themeStyle = {
    className: {
      style: "hover:text-purple-700 transition-all duration-100",
    },
  };

  const skillLists = [
    {
      Element: <FaHtml5 className={themeStyle.className.style} />,
    },
    {
      Element: <FaCss3 className={themeStyle.className.style} />,
    },
    {
      Element: <FaJs className={themeStyle.className.style} />,
    },
    {
      Element: <FaPython className={themeStyle.className.style} />,
    },
    {
      Element: <SiTypescript className={themeStyle.className.style} />,
    },
    {
      Element: <FaJava className={themeStyle.className.style} />,
    },
    {
      Element: <FaReact className={themeStyle.className.style} />,
    },
    {
      Element: <FaAngular className={themeStyle.className.style} />,
    },
    {
      Element: <FaBootstrap className={themeStyle.className.style} />,
    },
    {
      Element: <SiTailwindcss className={themeStyle.className.style} />,
    },
    {
      Element: <FaNodeJs className={themeStyle.className.style} />,
    },
    {
      Element: <SiExpress className={themeStyle.className.style} />,
    },
    {
      Element: <SiNestjs className={themeStyle.className.style} />,
    },
    {
      Element: <SiNextdotjs className={themeStyle.className.style} />,
    },
    {
      Element: <SiMongodb className={themeStyle.className.style} />,
    },
    {
      Element: <SiMysql className={themeStyle.className.style} />,
    },
    {
      Element: <FaGit className={themeStyle.className.style} />,
    },
    {
      Element: <FaGithub className={themeStyle.className.style} />,
    },
    {
      Element: <SiRedux className={themeStyle.className.style} />,
    },
    {
      Element: <FaFigma className={themeStyle.className.style} />,
    },
  ];
  return <>{skillLists.map((el) => el.Element)}</>;
};

export default Skills;
