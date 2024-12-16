interface buttonProps {
  Title: string;
  href: string;
}

const Buttom = ({ Title, href }: buttonProps) => {
  return (
    <a
      href={href}
      className="bg-purple-700 p-4 max-sm:p-0 max-sm:w-40 flex justify-center items-center  text-white text-lg font-bold rounded-lg hover:bg-white hover:text-purple-700 hover:border-purple-700 hover:border-solid hover:border-2"
      target="_black"
    >
      {Title}
    </a>
  );
};

export default Buttom;
