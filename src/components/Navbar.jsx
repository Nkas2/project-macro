import { useState } from "react";
import { ButtonSignIn } from "./items/SignpInBtn";

export const Navbar = () => {
  const [navOper, setNavOpen] = useState(false);
  return (
    <div className="max-w-[1200px] w-full bg-[#FFF5F0] flex justify-between px-4 items-center mx-auto pb-3 pt-8">
      {/* image logo */}
      <div className="w-[100px] md:w-[144px] max-h-[41px]">
        <img
          src="assets/image/logo.png"
          alt=""
          className="w-full object-cover"
        />
      </div>
      {/* nav item */}
      <div>
        <ul className="flex gap-[33px]">
          <li className="text-[#3C424C] text-lg font-normal cursor-pointer underline underline-offset-8 decoration-[4px] decoration-[#FFCC81]">
            Home
          </li>
          <li className="text-[#3C424C] text-lg font-normal cursor-pointer">
            Adopsi
          </li>
          <li className="text-[#3C424C] text-lg font-normal cursor-pointer">
            Komunitas
          </li>
          <li className="text-[#3C424C] text-lg font-normal cursor-pointer">
            Tentang Kami
          </li>
        </ul>
      </div>
      <ButtonSignIn />
    </div>
  );
};
