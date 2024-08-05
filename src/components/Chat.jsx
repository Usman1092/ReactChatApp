import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import { Messages } from "./Messages";
import { Input } from "./Input";
import { ChatContext } from "./Context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat flex flex-col w-full h-full bg-tb text-[#fff] ">
      <div className="chatInfo pt-10 pb-10 h-[50px] w-full flex justify-between items-center px-4">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons flex gap-2">
          <img src={Cam} alt="" className="h-[24px] cursor-pointer" />
          <img src={Add} alt="" className="h-[24px] cursor-pointer" />
          <img src={More} alt="" className="h-[24px] cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col flex-grow overflow-y-scroll">
        <Messages />
      </div>
      <Input />
    </div>
  );
};

export default Chat;
