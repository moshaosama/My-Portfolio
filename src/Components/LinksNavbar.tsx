interface linkNavbarProps {
  href: string;
  Title: string;
}

const LinksNavbar = ({ href, Title }: linkNavbarProps) => {
  const color = window.localStorage.getItem("Color");
  const transitionColor = {
    trColor: `${color == "white" ? "hover:bg-[#ddd]" : "hover:bg-purple-700"}`,
  };

  return (
    <>
      <a
        href={href}
        className={`${transitionColor.trColor}  w-fit p-3 rounded-lg transition-all duration-200`}
      >
        {Title}
      </a>
    </>
  );
};

export default LinksNavbar;
