interface linkNavbarProps {
  href: string;
  Title: string;
}

const LinksNavbar = ({ href, Title }: linkNavbarProps) => {
  const color = window.localStorage.getItem("Color");
  const transitionColor = {
    trColor: `${color == "white" ? "hover:bg-[#ddd]" : "hover:bg-purple-700"}`,
    colorText: `${color == "white" ? "text-black" : "text-[#ddd]"}`,
  };

  return (
    <>
      <a
        href={href}
        className={`${transitionColor.trColor} ${transitionColor.colorText}   w-fit p-3 rounded-lg transition-all duration-200`}
      >
        {Title}
      </a>
    </>
  );
};

export default LinksNavbar;
