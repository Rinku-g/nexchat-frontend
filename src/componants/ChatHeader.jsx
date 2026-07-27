import { Phone, Video, Info } from "lucide-react";

export default function ChatHeader({ activeList }) {
  return (
    <header className="h-18 px-7 border-b border-white/8 bg-[#181827] flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-sky-500 flex items-center justify-center font-bold text-15 uppercase">
          {activeList?.userName?.[0]}
        </div>

        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-white font-semibold text-16 capitalize">
              {activeList?.userName !== null && activeList?.userName}
            </h2>
          </div>

          <p className="text-13 text-green-500">● Online</p>
        </div>
      </div>

      <div className="flex gap-3">
        {[<Phone size={18} />, <Video size={18} />, <Info size={18} />].map(
          (icon, i) => (
            <button
              key={i}
              className="w-11 h-11 rounded-full bg-white/5 hover:bg-[#7C4DFF] transition-all duration-300 flex items-center justify-center"
            >
              {icon}
            </button>
          ),
        )}
      </div>
    </header>
  );
}
