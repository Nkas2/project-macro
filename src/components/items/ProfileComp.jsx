/* eslint-disable react/prop-types */
export const ProfileComp = ({ username, email, image, onclick }) => {
  return (
    <div className="w-full px-4 py-4 rounded-2xl flex gap-4 items-center bg-[#FFFBFA] border border-[#ECECEC]">
      {/* img */}
      <div className="w-20 h-20 relative">
        {/* image */}
        <img
          src={image}
          alt=""
          className="rounded-full w-full h-full object-cover"
        />
        <div
          onClick={onclick}
          className="absolute right-0 bottom-0 cursor-pointer"
        >
          <img src="/assets/image/pen.png" alt="" />
        </div>
      </div>
      {/* usename */}
      <div>
        <h1 className="text-[#3C424C] text-2xl font-bold">{username}</h1>
        <p className="text-[#3C424C] text-base ">{email}</p>
      </div>
    </div>
  );
};
