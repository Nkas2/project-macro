import { useState } from "react";

export const Notification = () => {
  const [data, setData] = useState([]);

  if (data.length === 0) {
    return (
      <>
        <div className="px-9 py-8 round-[15px] bg-[#FFFBF9] absolute top-11 right-0 w-[470px] h-[600px] rounded-[15px] border border-[#ECECEC]">
          {/* top */}
          <div>
            <h1 className="text-[#3C424C] text-2xl font-bold">Notifikasi</h1>
          </div>
        </div>
      </>
    );
  }
};
