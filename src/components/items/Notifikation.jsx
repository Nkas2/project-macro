/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

export const Notification = ({ close }) => {
  const [data, setData] = useState([]);

  if (data.length === 0) {
    return (
      <>
        <div className="px-9 py-8 round-[15px] bg-[#FFFBF9] absolute top-11 right-0 w-[470px] h-[600px] rounded-[15px] border border-[#ECECEC]">
          {/* top */}
          <div className="flex justify-between items-center">
            <h1 className="text-[#3C424C] text-2xl font-bold">Notifikasi</h1>
            <button onClick={close} className="cursor-pointer">
              <RxCross1 size={30} />
            </button>
          </div>
          {/* notif */}
          <div className="flex justify-center items-center h-full">
            <div className="w-fit h-fit text-center">
              <img src="assets/image/notif.png" alt="" />
              <h1 className="text-[#3C424C] text-2xl font-bold mt-7 mb-2">
                Belum Ada Notifikasi
              </h1>
              <p className="text-[#3C424C] text-lg leading-6">
                Tidak ada notifikasi saat ini. <br /> Notifikasi baru akan
                muncul di <br />
                halaman ini
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
};
