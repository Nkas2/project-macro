import { RxCross1 } from "react-icons/rx";
import { ChatList } from "./items/ChatList";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export function Chat({ onClose, user, chatRoom }) {
  const [chata, setChat] = useState([
    {
      name: "oreo",
      image: "/assets/image/ppl.jpeg",
      chats: ["Hallo"],
    },
  ]);

  useEffect(() => {
    if (user) {
      setChat([
        ...chata,
        {
          name: user,
          image: "https://source.unsplash.com/1600x900/?people",
          chats: [],
        },
      ]);
    }
  }, []);

  const setData = (data) => {
    const { text, index } = data;
    const newChata = [...chata];
    const chatIndex = index;
    newChata[chatIndex].chats.push(text);
    setChat(newChata);
  };
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
      <div className="overflow-y-auto flex-1">
        {chata.map((c, i) => (
          <ChatList
            key={i}
            id={i}
            name={c.name}
            image={c.image}
            pesan={c.chats}
            sendDataa={setData}
            open={chatRoom}
          />
        ))}
      </div>
    </div>
  );
}

export default Chat;
