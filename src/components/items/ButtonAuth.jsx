// eslint-disable-next-line react/prop-types
export const ButtonAuth = ({ text, func }) => {
  return (
    <button
      onClick={func}
      type="submit"
      className="w-full bg-[#FFCC81] py-3 rounded-full text-[#3C424C] text-lg font-bold cursor-pointer"
    >
      {text}
    </button>
  );
};
