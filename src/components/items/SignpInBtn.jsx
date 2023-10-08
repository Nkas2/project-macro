import { Link } from "react-router-dom";

export const ButtonSignIn = () => {
  return (
    <>
      <Link
        to={"/login"}
        className="text-[#3C424C] font-[700] rounded-[15px] cursor-pointer bg-[#ffcc81] px-4 py-2"
      >
        Sign in
      </Link>
    </>
  );
};
