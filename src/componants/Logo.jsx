import { FiMessageSquare } from "react-icons/fi";

const Logo = () => {
  return (
    <div className="flex-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-r from-violet-500 to-indigo-600 shadow-lg shadow-violet-600/40">
        <FiMessageSquare className="text-xl text-white" />
      </div>

      <h1 className="text-2xl font-bold bg-linear-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
        NexChat
      </h1>
    </div>
  );
};

export default Logo;
