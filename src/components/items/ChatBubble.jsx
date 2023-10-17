import { BsCheck2All } from "react-icons/bs";
// eslint-disable-next-line react/prop-types
export default function ChatBubble({ text }) {
  return (
    <div className="bg-[#FFCC81] p-6 flex items-center self-end rounded-l-[20px] rounded-br-[20px] h-fit w-[300px] relative">
      <p className="text-[#3C424C] text-[20px] w-[250px]">{text}</p>
      <small className="absolute right-5 bottom-1 flex items-center gap-1 text-[#3C424C] text-[13px]">
        10.30 <BsCheck2All color="#3C424C" />
      </small>
    </div>
  );
}
