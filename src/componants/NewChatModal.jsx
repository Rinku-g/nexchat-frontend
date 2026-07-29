import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { apiRequest } from "../apiServices";
import { useLoader } from "../context/LoaderContext";

export default function NewChatModal({
  openModal,
  setOpenModal,
  getuserListdata,
  setRefreshchatList,
}) {
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectUserId, setSelectUserId] = useState("");
  const { setLoading } = useLoader();

  const wrapperRef = useRef(null);

  const createNewChat = async () => {
    try {
      setLoading(true);
      const response = await apiRequest({
        url: "/chats",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: {
          receiverId: selectUserId,
        },
      });

      if(!response){
        console.log("not res null")
        return
      }

      if (response?.status === 200) {
        setRefreshchatList(true);
        toast.success(response?.message, {
          autoClose: 2000,
        });
        console.log("dsfdsfsdfdsfdsf", response);
        setShowDropdown(false);
        setOpenModal(false);
      } else if (response?.status === 400) {
        toast.warning(response.message, {
          autoClose: 2000,
        });
      } else {
        toast.error(response.message, {
          autoClose: 2000,
        });
        console.log(response.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = search.trim()
    ? getuserListdata.filter((user) =>
        user?.username?.toLowerCase()?.includes(search.toLowerCase()),
      )
    : getuserListdata.slice(0, 3);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <AnimatePresence>
      {openModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpenModal(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            onClick={(e) => e.stopPropagation()}
            className="w-115 rounded-28 border border-white/10 bg-[#1B1A2C] p-8 shadow-[0_0_60px_rgba(0,0,0,.5)]"
          >
            <div className="flex justify-between">
              <div>
                <h2 className="text-3xl font-bold text-[#7C4DFF]">
                  New Conversation
                </h2>

                <p className="text-white/35 mt-2">
                  Type the exact name of a registered NexChat user
                </p>
              </div>
            </div>

            <div className="mt-8">
              <label className="text-white/60 font-medium">Search User</label>

              <div className="relative mt-3">
                {/* Search Input */}
                <div className="flex items-center rounded-xl border border-[#7C4DFF] bg-[#2A2940] px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>

                  <input
                    type="text"
                    placeholder="Search user..."
                    value={search}
                    className="w-full bg-transparent px-3 py-3 text-white outline-none placeholder:text-white/30 capitalize"
                    onFocus={() => setShowDropdown(true)}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setShowDropdown(true);
                    }}
                  />
                </div>

                {/* Search Result */}
                {showDropdown && (
                  <div className="absolute left-0 right-0 mt-2 max-h-64 overflow-y-auto rounded-xl border border-white/10 bg-[#242336] shadow-xl">
                    {filteredUsers.length > 0 ? (
                      filteredUsers.map((user) => (
                        <button
                          key={user._id}
                          onClick={() => {
                            setSelectUserId(user?._id);
                            setSearch(user.username);
                            setShowDropdown(false);
                          }}
                          className="flex w-full items-center gap-3 px-4 py-3 hover:bg-[#34314F]"
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-white font-semibold">
                            {user.username.charAt(0).toUpperCase()}
                          </div>

                          <div className="text-left">
                            <h3 className="text-white font-medium capitalize">
                              {user.username}
                            </h3>

                            <p className="text-xs text-white/50">
                              {user.phoneNumber}
                            </p>
                          </div>
                        </button>
                      ))
                    ) : (
                      <p className="px-4 py-3 text-white/50">No users found</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <button
                onClick={() => setOpenModal(false)}
                className="
                flex-1
                py-4
                rounded-xl
                bg-[#2A2940]
                text-white/70
                cursor-pointer
                hover:bg-[#34324d]
                transition
                "
              >
                Cancel
              </button>

              <button
                className="
                flex-1
                py-4
                rounded-xl
                bg-[#7C4DFF]
                text-white
                font-semibold
                cursor-pointer
                hover:bg-[#8B5CF6]
                shadow-[0_0_25px_rgba(124,77,255,.45)]
                transition
                "
                onClick={() => createNewChat()}
              >
                Open Chat →
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
