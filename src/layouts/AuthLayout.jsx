import { Outlet } from "react-router-dom";

export const AuthLayouts = () => {
  return (
    <div className="flex h-screen max-w-[1440px]">
      {/* image */}
      <div className="w-[800px] max-h-screen bg-white">
        <img
          src="assets/image/sign.png"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      {/* form */}
      <div className="flex-1 max-h-screen flex items-center">
        <Outlet />
      </div>
    </div>
  );
};
