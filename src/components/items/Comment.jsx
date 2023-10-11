import { AiFillLike } from 'react-icons/ai';

export const CommentContent = () => {
  return (
    <>
      {/* foto profile */}
      <div className="my-3 flex-1">
        <div className="bg-[#FFFDFC] rounded-[20px] border ml-[50px] w-[834px] h-[191px] flex justify-between items-center">
          <img
            src="http://placehold.it/47x47"
            alt="profile-img"
            className="rounded-full ml-8 mb-[100px]"
          />

          {/* kolom komen */}
          <div className="mx-8 flex-col">
            <div className="comment pt-[35px]">
              <h3 className="font-bold text-[20px] text-justify">
                Halo, Guys aku mau tanya terkait perawatan kucing yang baik itu
                gimana ya. Aku baru aja adopsi kucing
              </h3>
            </div>

            <div className="flex items-center space-x-3 pt-[5px] pb-[18px]">
              <p className="pt-[px] text-[14px] text-[#FFCC81] font-bold">
                Iqbal Arieftian
              </p>
              <p className="font-thin text-[14px] text-gray-400">Baru Saja</p>
            </div>

            <div className="pt-[5px] pb-[40px] flex items-center">
              <div className="flex items-center justify-center w-[35px] h-[35px] bg-[#D9D9D9] bg-opacity-[42%] rounded-full">
                <AiFillLike className="text-gray-400" />
              </div>

              <p className="pl-[9px] font-thin text-[14px] text-gray-300">
                5 Like
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
