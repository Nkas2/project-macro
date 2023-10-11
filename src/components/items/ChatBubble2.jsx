// eslint-disable-next-line react/prop-types
export default function ChatBubble2({ text }) {
  return (
    <div className="bg-[#3C424C] w-[300px] p-6 flex items-center rounded-bl-[20px] rounded-r-[20px] relative">
      <p className="text-[#FFF5F0] text-lg">{text}</p>
      <small className="absolute right-5 bottom-3 flex items-center gap-1 text-[#FFF5F0] text-[13px]">
        10.32
      </small>
    </div>
  );
}
