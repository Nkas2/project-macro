import { useLogin } from "../zustand";
import { ButtonSignIn } from "./items/SignpInBtn";
import { NavLink } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";

export const Navbar = () => {
  const isLogin = useLogin((state) => state.isLogin);
  const updateLogin = useLogin((state) => state.updateLogin);
  updateLogin(true);

  const log = (
    <>
      {isLogin ? (
        <>
          <button
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8 decoration-[4px] decoration-[#FFCC81]"
                : ""
            }
          >
            <li className="text-[#3C424C] text-lg font-normal cursor-pointer hover:underline underline-offset-8 decoration-[4px] decoration-[#FFCC81]">
              Chat
            </li>
          </button>
          <button
            to={"/adoption"}
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-8 decoration-[4px] decoration-[#FFCC81]"
                : ""
            }
          >
            <li className="text-[#3C424C] text-lg font-normal cursor-pointer hover:underline underline-offset-8 decoration-[4px] decoration-[#FFCC81]">
              Notifikasi
            </li>
          </button>
        </>
      ) : null}
    </>
  );

  const user = (
    <>
      {isLogin ? (
        <div className="p-3 flex justify-center items-center bg-[#FFCC81] rounded-full">
          <BiSolidUser color="#3C424C" size={20} />
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
          src="assets/image/logo.png"
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
