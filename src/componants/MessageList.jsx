import MessageBubble from "./MessageBubble";

export default function MessageList({ getUserChatText }) {
  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden px-6 py-8">
      <p className="text-center text-white/25 text-sm mb-10">Today</p>

      <div className="flex flex-col">
        {getUserChatText?.map((userMessage) => {
          return (
            <div key={userMessage._id} className="flex justify-end mb-2">
              <MessageBubble message={userMessage} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
