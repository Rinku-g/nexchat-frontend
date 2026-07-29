import { toast } from "react-toastify";
import { apiRequest } from "../apiServices";
import ChatArea from "../componants/ChatArea";
import Sidebar from "../componants/Sidebar";
import { useEffect, useState } from "react";

function HomePage() {
  const [profile, setProfile] = useState([]);
  const [chatUserList, setChatuserList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [getuserListdata, setGetuserListData] = useState("");
  const [refeshchatList, setRefreshchatList] = useState(false);
  const [activeList, setActiveList] = useState({
    chatId: null,
    userName: null,
  });


  const getProfileData = async () => {


    try {
      const response = await apiRequest({
        url: "/profile",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response?.status === 200) {
        console.log("xd", response);
        setProfile(response?.data);
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

    }
  };

  const getChatUserListData = async () => {
    // setLoading(true);

    try {
      const response = await apiRequest({
        url: "/get-chats",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response?.status === 200) {
        setRefreshchatList(false);
        setChatuserList(response?.data);
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
      // setLoading(false);
    }
  };

  const getUserList = async () => {
    try {
      const res = await apiRequest({
        url: "/get-user-list",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (res?.status === 200) {
        setGetuserListData(res?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (openModal) {
      getUserList();
    }
  }, [openModal]);

  useEffect(() => {
    getProfileData();
    getChatUserListData();
  }, []);

  useEffect(() => {
    if (refeshchatList) {
      getChatUserListData();
    }
  }, [refeshchatList]);

  return (
    <div className="h-screen flex bg-[#0F1020] text-white overflow-hidden">
      <Sidebar
        profile={profile}
        chatUserList={chatUserList}
        openModal={openModal}
        setOpenModal={setOpenModal}
        getuserListdata={getuserListdata}
        setRefreshchatList={setRefreshchatList}
        setActiveList={setActiveList}
      />
      <ChatArea activeList={activeList} />
    </div>
  );
}

export default HomePage;
