import { createContext, useContext, useEffect, useState } from "react";
import { socket } from "../config/socket";

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    const userId = "USER_ID_AFTER_LOGIN";

    socket.emit("join", userId);

    socket.on("online-users", (users) => {
      setOnlineUsers(users);
    });

    return () => {
      socket.off("online-users");
    };
  }, []);

  return (
    <SocketContext.Provider
      value={{
        socket,
        onlineUsers,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
