interface buttonProps {
  Title: string;
}

const Buttom = ({ Title }: buttonProps) => {
  return (
    <button className="bg-purple-700 p-4 max-sm:p-0 max-sm:w-40  text-white text-xl font-bold rounded-lg hover:bg-white hover:text-purple-700 hover:border-purple-700 hover:border-solid hover:border-2">
      {Title}
    </button>
  );
};

export default Buttom;
