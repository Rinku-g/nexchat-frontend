import { MessageCircle } from "lucide-react";
import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import { apiRequest } from "../apiServices";
import { useEffect, useState } from "react";

export default function ChatArea({ activeList }) {
  const [inputVaue, setInputValue] = useState("");
  const [getUserChatText, setGetuserChatText] = useState(null);

  const getChatData = async (chatId) => {
    try {
      const res = await apiRequest({
        url: `/messages/${chatId}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (res?.status === 200) {
        setGetuserChatText(res?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendChatRequest = async () => {
    if (!inputVaue.trim()) return;
    try {
      const res = await apiRequest({
        url: "/messages",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: {
          chatId: activeList?.chatId,
          text: inputVaue.trim(),
        },
      });

      if (res?.status === 200) {
        getChatData(res?.data?.chatId);
      }
      setInputValue("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (activeList?.userName !== null) {
      getChatData(activeList?.chatId);
    }
  }, [activeList]);

  return (
    <main className="flex-1 bg-[#0F0F1E] flex flex-col overflow-hidden">
      {activeList?.userName !== null ? (
        <>
          <ChatHeader activeList={activeList} />
          <MessageList getUserChatText={getUserChatText} />
          <ChatInput
            setInputValue={setInputValue}
            inputVaue={inputVaue}
            sendChatRequest={sendChatRequest}
          />
        </>
      ) : (
        ""
      )}
    </main>
  );
}
