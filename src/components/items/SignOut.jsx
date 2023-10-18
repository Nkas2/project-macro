import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../zustand";

export const SignOutButton = () => {
  const navigate = useNavigate();
  const updateLogin = useLogin((state) => state.updateLogin);
  const logout = () => {
    updateLogin(false);
    navigate("/");
  };
  return (
    <div
      onClick={logout}
      className="w-full px-10 py-7 bg-[#FFFBFA] border border-[#ECECEC] flex gap-9 rounded-[15px] cursor-pointer hover:bg-slate-50"
    >
      <MdOutlineLogout size={30} />
      <h1 className="text-[#3C424C] font-bold text-2xl">Sign Out</h1>
    </div>
  );
};
