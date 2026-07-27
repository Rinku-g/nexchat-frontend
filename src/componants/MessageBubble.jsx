import { motion } from "framer-motion";
import { formatTime } from "../utils";

export default function MessageBubble({ message }) {
  console.log("ssssssssssss", message);
  const { text, createdAt } = message;
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
      rounded-tl-3xl
      rounded-tr-3xl
      rounded-bl-3xl
      rounded-br-md
      bg-linear-to-br
      from-[#7C4DFF]
      to-[#5A33F0]
      px-6
      py-4
      shadow-[0_10px_40px_rgba(124,77,255,.35)]
      "
    >
      <h3 className="font-semibold">{text}</h3>
      <p className="text-xs mt-2 text-white/60">{formatTime(createdAt)}</p>
    </motion.div>
  );
}
