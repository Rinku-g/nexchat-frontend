const BackgroundEffect = () => {
  return (
    <div>
      <div className="absolute -left-50 -top-44 h-130 w-130 rounded-full bg-violet-600/30 blur-[120px] animate-blob" />
      <div className="absolute -right-40 bottom-37.5 h-110 w-110 rounded-full bg-cyan-500/20 blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-37.5 left-1/2 h-100 w-100 -translate-x-1/2 rounded-full bg-pink-500/20 blur-[120px] animate-blob animation-delay-4000" />
    </div>
  );
};

export default BackgroundEffect;
