/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChatRoom } from "./ChatRoom";

export function ChatList({ name, image, pesan, sendDataa, id, open }) {
  const chat = document.getElementById("chat");
  const [chatRoom, setChatRoom] = useState(false);
  useEffect(() => {
    if (open) {
      if (id) {
        setChatRoom(true);
      }
    }
  }, []);
  const sendData = (data) => {
    sendDataa({
      index: id,
      text: data,
    });
  };
  return (
    <>
      <div
        onClick={() => setChatRoom(true)}
        className=" cursor-pointer w-full px-6 pt-4 flex gap-5 hover:bg-[#F1F1F1]"
      >
        {/* image */}
        <div className="w-16 h-16">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        {/* text */}
        <div className="flex flex-1 border-b pb-6">
          {/* name and last chat */}
          <div className="flex flex-col justify-around flex-1 gap-2">
            <h1 className="text-[#3C424C] text-xl font-bold capitalize">
              {name}
            </h1>
            <p className="text-[#979797] text-sm h-3">
              {pesan[pesan.length - 1]}
            </p>
          </div>
          {/* last chat time */}
          <div>
            <p className="text-[#404040] text-sm">10.30</p>
          </div>
        </div>
      </div>
      {chatRoom
        ? createPortal(
            <ChatRoom
              onClose={() => setChatRoom(false)}
              sendData={sendData}
              chat={pesan}
              name={name}
              image={image}
            />,
            chat
          )
        : null}
    </>
  );
}
