import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../zustand";

export const ProfilePopUp = () => {
  const navigate = useNavigate();
  const updateLogin = useLogin((state) => state.updateLogin);
  const logout = () => {
    updateLogin(false);
    navigate("/");
  };
  return (
    <div className="px-6 py-4 bg-[#FFFBFA] rounded-2xl text-[#3C424C]">
      <Link to={"/profile"}>
        <h2 className="text-[#3C424C] text-lg font-normal cursor-pointer hover:underline underline-offset-8 decoration-[4px] decoration-[#FFCC81] w-24 mb-4">
          Profile
        </h2>
      </Link>
      <h2
        onClick={logout}
        className="text-[#3C424C] text-lg font-normal cursor-pointer hover:underline underline-offset-8 decoration-[4px] decoration-[#FFCC81] w-24"
      >
        Sign Out
      </h2>
    </div>
  );
};
