const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-24 h-24">
          <span className="absolute inset-0 rounded-full border-4 border-cyan-500 animate-ping opacity-30"></span>

          <span className="absolute inset-2 rounded-full border-4 border-blue-500 animate-spin"></span>

          <span className="absolute inset-5 rounded-full bg-cyan-400 shadow-[0_0_35px_#22d3ee]"></span>
        </div>

        <h2 className="text-white text-xl font-semibold">Please Wait...</h2>

        <p className="text-gray-400 text-sm">Loading your experience</p>
      </div>
    </div>
  );
};

export default Loader;
