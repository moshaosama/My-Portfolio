import { FaGithub, FaLinkedin, FaFacebook, FaMedium } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Social = () => {
  const Style = {
    elementStyel:
      "text-5xl bg-black p-2 text-white rounded-3xl transition-all duration-200",
  };
  const Elements = [
    {
      href: "https://github.com/moshaosama",
      Element: <FaGithub className={Style.elementStyel} />,
      backGround: "[#333]",
    },
    {
      href: "https://www.linkedin.com/in/thisfekry/",
      Element: <FaLinkedin className={Style.elementStyel} />,
      backGround: "blue-500",
    },
    {
      href: "https://mohamedOSFekry@gmail.com",
      Element: <SiGmail className={Style.elementStyel} />,
      backGround: "red-600",
    },
    {
      href: "https://www.facebook.com/mohamedosamakin/",
      Element: <FaFacebook className={Style.elementStyel} />,
      backGround: "blue-900",
    },
    {
      href: "https://medium.com/@mohamedosfekry",
      Element: <FaMedium className={Style.elementStyel} />,
      backGround: "black",
    },
  ];
  return (
    <>
      {Elements.map((el) => (
        <a href={el.href} target="_black">
          {el.Element}
        </a>
      ))}
    </>
  );
};

export default Social;
