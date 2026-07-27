import { SendHorizontal } from "lucide-react";
import { motion } from "framer-motion";

export default function ChatInput({
  setInputValue,
  inputVaue,
  sendChatRequest,
}) {
  return (
    <div className="border-t border-white/8 bg-[#181827] px-7 py-4">
      <div className="flex items-center gap-4">
        <input
          placeholder="Type a message..."
          onChange={(e) => setInputValue(e?.target?.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && inputVaue.trim()) {
              sendChatRequest();
            }
          }}
          value={inputVaue}
          className="
          flex-1
          h-14
          rounded-full
          bg-white/5
          border
          border-white/8
          px-6
          outline-none
          placeholder:text-white/25
          focus:border-[#7C4DFF]
          transition-all
          duration-300
          "
        />

        <motion.button
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.92,
          }}
          disabled={!inputVaue.trim()}
          className={`
            h-14
            w-14
            rounded-full
            flex
            items-center
            justify-center
            transition-all
            ${
              inputVaue.trim()
                ? "bg-linear-to-br from-[#7C4DFF] to-[#5A33F0] shadow-[0_0_30px_rgba(124,77,255,.45)]"
                : "bg-gray-600 cursor-not-allowed opacity-50"
            }
          `}
          onClick={sendChatRequest}
        >
          <SendHorizontal size={20} />
        </motion.button>
      </div>
    </div>
  );
}
