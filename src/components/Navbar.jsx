import { useLogin } from "../zustand";
import { ButtonSignIn } from "./items/SignpInBtn";
import { NavLink } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";
import Chat from "./Chat";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Notification } from "./items/Notifikation";
import { ProfilePopUp } from "./items/ProfilePopUp";

export const Navbar = () => {
  const [chatShow, setChatShow] = useState(false);
  const [notification, setNotification] = useState(false);
  const isLogin = useLogin((state) => state.isLogin);

  const log = (
    <>
      {isLogin ? (
        <>
          <button onClick={() => setChatShow(true)}>
            <li className="text-[#3C424C] text-lg font-normal cursor-pointer hover:underline underline-offset-8 decoration-[4px] decoration-[#FFCC81]">
              Chat
            </li>
          </button>
          <div className="relative">
            <button onClick={() => setNotification(!notification)}>
              <li className="text-[#3C424C] text-lg font-normal cursor-pointer hover:underline underline-offset-8 decoration-[4px] decoration-[#FFCC81]">
                Notifikasi
              </li>
            </button>
            {chatShow &&
              createPortal(
                <Chat onClose={() => setChatShow(false)} />,
                document.body
              )}
            {notification ? (
              <Notification close={() => setNotification(false)} />
            ) : null}
          </div>
        </>
      ) : null}
    </>
  );

  const user = (
    <>
      {isLogin ? (
        <div className="relative">
          <div className="p-3 flex peer justify-center pb items-center bg-[#FFCC81] rounded-full">
            <BiSolidUser color="#3C424C" size={20} />
          </div>
          <div className="hidden absolute right-2 peer-hover:block hover:block">
            <ProfilePopUp />
          </div>
        </div>
      ) : (
        <ButtonSignIn />
      )}
    </>
  );
  return (
    <div className="w-full px-10 bg-[#FFF5F0] flex justify-between items-center mx-auto pb-3 pt-8">
      {/* image logo */}
      <div className="w-[100px] md:w-[144px] max-h-[41px]">
        <img
          src="/assets/image/logo.png"
          alt=""
          className="w-full object-cover"
        />
      </div>
      {/* nav item */}
      <div>
        <ul className="flex gap-[33px]">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8 decoration-[4px] decoration-[#FFCC81]"
                : ""
            }
          >
            <li className="text-[#3C424C] text-lg font-normal cursor-pointer hover:underline underline-offset-8 decoration-[4px] decoration-[#FFCC81]">
              Home
            </li>
          </NavLink>
          <NavLink
            to={"/adoption"}
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8 decoration-[4px] decoration-[#FFCC81]"
                : ""
            }
          >
            <li className="text-[#3C424C] text-lg font-normal cursor-pointer hover:underline underline-offset-8 decoration-[4px] decoration-[#FFCC81]">
              Adopsi
            </li>
          </NavLink>
          <NavLink
            to={"/community"}
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8 decoration-[4px] decoration-[#FFCC81]"
                : ""
            }
          >
            <li className="text-[#3C424C] text-lg font-normal cursor-pointer hover:underline underline-offset-8 decoration-[4px] decoration-[#FFCC81]">
              Komunitas
            </li>
          </NavLink>
          {log}
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8 decoration-[4px] decoration-[#FFCC81]"
                : ""
            }
          >
            <li className="text-[#3C424C] text-lg font-normal cursor-pointer hover:underline underline-offset-8 decoration-[4px] decoration-[#FFCC81]">
              Tentang Kami
            </li>
          </NavLink>
        </ul>
      </div>
      {user}
    </div>
  );
};
