const TabNavigation = ({ tab, setTab }) => {
  return (
    <div className="mt-4 flex rounded-xl bg-white/5 p-2">
      <button
        onClick={() => setTab("signin")}
        className={`flex-1 rounded-lg py-2 text-sm font-semibold transition-all duration-300 cursor-pointer ${
          tab === "signin"
            ? "bg-linear-to-r from-violet-500 to-indigo-600 text-white shadow-lg shadow-violet-500/40"
            : "text-gray-400"
        }`}
      >
        Sign In
      </button>

      <button
        onClick={() => setTab("signup")}
        className={`flex-1 rounded-lg py-2 text-sm font-semibold transition-all duration-300 cursor-pointer ${
          tab === "signup"
            ? "bg-linear-to-r from-violet-500 to-indigo-600 text-white shadow-lg shadow-violet-500/40"
            : "text-gray-400"
        }`}
      >
        Create Account
      </button>
    </div>
  );
};

export default TabNavigation;
