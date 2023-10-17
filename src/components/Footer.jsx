import { AiOutlineCopyright } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export const Footer = () => {
  return (
    <div id="foot" className="w-full h-80 flex justify-center items-center ">
      <div className="w-[600px] flex items-center flex-col  ">
        <p className="flex items-center gap-1 text-[#3C424C] text-lg ">
          <AiOutlineCopyright /> 2023 Meowing
        </p>
        <div className="text-[#3C424C] flex gap-20 text-lg mt-8">
          <p className="w-[110px] cursor-pointer hover:underline underline-offset-8">
            Contact
          </p>
          <p className="text-center cursor-pointer hover:underline underline-offset-8">
            Terms & Conditions
          </p>
          <p className="cursor-pointer hover:underline underline-offset-8">
            Privacy Policy
          </p>
        </div>
        <div className="flex gap-8 mt-8">
          <div className="cursor-pointer w-14 h-14 flex justify-center items-center border rounded-full border-[#3C424C] hover:border-[#FFCC81]">
            <BsFacebook size={20} color="#3C424C" />
          </div>
          <div className="cursor-pointer w-14 h-14 flex justify-center items-center border rounded-full border-[#3C424C] hover:border-[#FFCC81]">
            <BsInstagram size={20} color="#3C424C" />
          </div>
          <div className="cursor-pointer w-14 h-14 flex justify-center items-center border rounded-full border-[#3C424C] hover:border-[#FFCC81]">
            <BsTwitter size={20} color="#3C424C" />
          </div>
        </div>
      </div>
    </div>
  );
};
