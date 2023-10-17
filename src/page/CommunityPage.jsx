// import { Navbar } from '../components/Navbar';

import { Footer } from "../components/Footer";
import { CommentContent } from "../components/items/Comment";

export const Community = () => {
  return (
    <>
      <div className="flex">
        <div className="flex-3">
          <div className="mt-5 mb-2 ">
            <h1 className="px-14 mb-3 font-bold">Discussion</h1>

            {/* new discus */}
            <div className="bg-[#FFFDFC] rounded-[20px] border ml-[50px] w-[827px] h-[72px] flex justify-between items-center">
              <img
                src="http://placehold.it/47x47"
                alt="profile-img"
                className="rounded-full ml-8 mr-[-450px]"
              />

              <h4 className="text-center text-xl text-neutral-400 ">
                Mulai diskusi baru
              </h4>

              <button className=" bg-[#FFCC81] w-[42px] h-[42px] rounded-[5px] mr-8 text-[30px]">
                +
              </button>
            </div>
          </div>

          <CommentContent
            profileImage="assets\image\profileImage\profile 1.png"
            comment="Halo, Guys aku mau tanya terkait perawatan kucing yang baik itu gimana ya. Aku baru aja adopsi kucing"
            account="Iqbal"
            uploadTime="Baru Saja"
            like="4 Like"
          />
          <CommentContent
            profileImage="assets\image\profileImage\profile 2.png"
            comment="Bagimana cara memandikan kucing yang benar ?"
            account="Arya"
            uploadTime="10 Menit lalu"
            like="5 Like"
          />
          <CommentContent
            profileImage="assets\image\profileImage\profile 3.png"
            comment="Saya baru saja kehilangan kucing."
            image="assets/image/commentImg.png"
            account="Tyler"
            uploadTime="20 Menit lalu"
            like="20 Like"
          />
        </div>

        <div className="flex-1">
          <div className="1 mt-[55px] ml-[39px] mr-5 h-[573px] w-[374px] border border-[#ECECEC] bg-white flex flex-col justify-between items-center">
            <div className="mt-auto mb-5">
              <p className="text-center text-sm text-[#979797]">
                advertisement
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="w-full relative">
        <img src="assets/image/wave3.png" alt="" className="w-full" />
        <Footer />
      </div>
    </>
  );
};
