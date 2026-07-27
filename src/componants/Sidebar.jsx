import { useEffect, useState } from "react";
import { Search, MessageCircle, Plus, LogOut } from "lucide-react";
import NewChatModal from "./NewChatModal";
import { apiRequest } from "../apiServices";
import { useNavigate } from "react-router-dom";

export default function Sidebar({
  profile,
  chatUserList,
  openModal,
  setOpenModal,
  getuserListdata,
  setRefreshchatList,
  setActiveList,
}) {
  const { username } = profile;
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <aside className="w-75 bg-panel border-r border-[#2A2A3A] flex flex-col">
        {/* Header */}

        <div className="p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#7C4DFF] cursor-pointer">
            NexChat
          </h1>

          <button
            className="
            bg-[#7C4DFF]
            hover:bg-[#8B5CF6]
            cursor-pointer
            px-4
            py-2.5
            rounded-xl
            flex
            items-center
            gap-2
            font-semibold
            shadow-[0_0_25px_rgba(124,77,255,.45)]
            text-13
          "
            onClick={() => setOpenModal(true)}
          >
            <Plus size={16} />
            New Chat
          </button>
        </div>

        {/* Search */}

        <div className="px-4 pb-4">
          <div className="flex items-center bg-[#232335] rounded-xl px-4 py-2 border border-[#2A2A3A]">
            <Search size={18} className="text-white/20" />

            <input
              placeholder="Search chats..."
              className="bg-transparent ml-3 outline-none w-full placeholder:text-white/20 text-15"
            />
          </div>
        </div>

        <div className="border-t border-[#2A2A3A]" />

        {/* Empty */}

        {chatUserList.length === 0 ? (
          <div className="flex-1 flex flex-col justify-center items-center text-center px-8">
            <div className="w-18 h-18 rounded-full bg-[#232335] flex justify-center items-center">
              <MessageCircle size={25} className="text-white/20" />
            </div>

            <h2 className="mt-8 text-15 font-semibold text-white/20">
              No chats yet.
            </h2>

            <p className="text-white/20 mt-2">
              Tap <span className="font-bold text-12">+ New Chat</span> to
              start!
            </p>
          </div>
        ) : (
          <div className="flex-1 flex flex-col px-4">
            <ul>
              {chatUserList &&
                chatUserList?.map((user) => {
                  console.log("ssssssssssss", user);
                  const { username, phoneNumber } = user?.user;

                  return (
                    <li
                      key={user._id}
                      onClick={() => {
                        console.log("Clicked", username, user._id);

                        setActiveList({
                          userName: username,
                          chatId: user._id,
                        });
                      }}
                      className="flex items-center rounded-1xl gap-4 p-2 cursor-pointer hover:bg-[#232335] transition-all duration-200 border-b border-[#2A2A3A]"
                    >
                      {/* Avatar */}
                      <div className="relative">
                        <img
                          src={`https://ui-avatars.com/api/?name=${username}&background=random`}
                          alt={username}
                          className="w-8 h-8 rounded-full object-cover"
                        />

                        {/* Online Status */}
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#111b21]" />
                      </div>

                      {/* User Info */}
                      <div className="flex-1 overflow-hidden">
                        <div className="flex justify-between items-center">
                          <h2 className="text-white font-medium truncate capitalize">
                            {username}
                          </h2>
                        </div>

                        <p className="text-12 text-white/20 truncate mt-1">
                          Hey! How are you doing today?
                        </p>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        )}

        {/* User */}

        <div className="border-t border-[#2A2A3A] p-4">
          <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
              <img
                src={`https://ui-avatars.com/api/?name=${username}&background=random`}
                alt={username}
                className="w-8 h-8 rounded-full object-cover"
              />

              <div>
                <h3 className="font-semibold text-15">{username}</h3>

                {/* <p className="text-green-500 text-13">● Online</p> */}
              </div>
            </div>

            <button
              className="bg-[#232335] px-4 py-2 rounded-lg text-14 hover:bg-[#303045] cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
        <NewChatModal
          setOpenModal={setOpenModal}
          openModal={openModal}
          getuserListdata={getuserListdata}
          setRefreshchatList={setRefreshchatList}
        />
      </aside>
    </>
  );
}
