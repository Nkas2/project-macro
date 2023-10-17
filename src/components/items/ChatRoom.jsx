/* eslint-disable react/prop-types */
import { BiArrowBack } from "react-icons/bi";
import { HiPlus } from "react-icons/hi";
import { LuSendHorizonal } from "react-icons/lu";
import ChatBubble from "./ChatBubble";
// import ChatBubble2 from "./ChatBubble2";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function ChatRoom({ onClose, sendData, chat, name, image }) {
  const [tx, setTx] = useState("");

  const addChatBubble = (text) => {
    sendData(text);
    setTx("");
  };

  const setState = (e) => {
    setTx(e.target.value);
  };
  const enterPress = (e) => {
    if (e.key === "Enter") addChatBubble(e.target.value);
  };

  return (
    <div className="w-full h-screen absolute top-0 bg-[#F8F8F8] flex flex-col">
      {/* top */}
      <div className="w-full px-6 py-4 flex gap-3 border-b border-[#D6D6D4]">
        <button onClick={onClose}>
          <BiArrowBack size={40} />
        </button>
        <div className="w-14 h-14">
          <img
            src={image}
            className="w-full h-full object-cover rounded-full"
            alt=""
          />
        </div>
        <div className="flex-1">
          <h1 className="text-[#3C424C] text-xl font-bold capitalize">
            {name}
          </h1>
          <p className="text-[#979797] text-sm">Aktif 5 menit lalu</p>
        </div>
      </div>
      {/* chat */}
      <div className="flex-1 px-6 py-2 flex flex-col gap-2 overflow-y-auto">
        {/* <ChatBubble text="Untuk lokasinya ada dimana ya?" />
        <ChatBubble2 text="Di Tanggerang" /> */}
        {chat.map((c, i) => (
          <ChatBubble key={i} text={c} />
        ))}
      </div>
      {/* text input */}
      <div className="border-t w-full border-[#979797] py-4 px-7 flex items-center gap-4">
        <div className="cursor-pointer text-[#979797] hover:text-slate-800">
          <HiPlus size={35} />
        </div>
        <div className="flex-1 border-[#979797] border rounded-[20px] p-3 h-16">
          <input
            placeholder="Ketik Pesan"
            type="text"
            className="bg-transparent w-full h-full outline-none text-xl font-bold text-[#636363]"
            value={tx}
            onChange={setState}
            onKeyDown={enterPress}
          />
        </div>
        <div
          onClick={() => addChatBubble(tx)}
          className="cursor-pointer text-[#979797] hover:text-slate-800"
        >
          <LuSendHorizonal size={30} />
        </div>
      </div>
    </div>
  );
}
