import { RxCross1 } from "react-icons/rx";
import ChatList from "./items/ChatList";

// eslint-disable-next-line react/prop-types
function Chat({ onClose }) {
  return (
    <div
      id="chat"
      className="w-[573px] h-screen fixed top-0 right-0 bg-[#F8F8F8] shadow-xl flex flex-col"
    >
      {/* top */}
      <div className="px-[26px] pt-7 pb-[10px] flex justify-between items-center border-b border-[#D6D6D4]">
        <h1 className="text-[#3C424C] text-[32px] font-bold">Chat</h1>
        <div onClick={onClose} className="cursor-pointer">
          <RxCross1 size={35} />
        </div>
      </div>
      {/* chat list */}
      <div className="overflow-y-auto flex-1 scro">
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
      </div>
    </div>
  );
}

export default Chat;
