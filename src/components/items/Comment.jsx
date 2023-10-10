export const CommentContain = () => {
  return (
    <>
      <div className="my-3">
        <div className="bg-[#FFFDFC] rounded-[20px] border ml-[50px] w-[834px] h-[191px] flex justify-between items-center">
          <img
            src="http://placehold.it/47x47"
            alt="profile-img"
            className="rounded-full ml-8 mb-[100px]"
          />

          <div className="mx-8">
            <div className="comment pb-[65px]">
              <h3 className="font-bold text-[20px]">
                Halo, Guys aku mau tanya terkait perawatan kucing yang baik itu
                gimana ya. Aku baru aja adopsi kucing
              </h3>
              <div className="flex items-center space-x-3 pt-[5px]">
                <p className="pt-[px] text-[14px] text-[#FFCC81] font-bold">
                  Iqbal Arieftian
                </p>
                <p className="font-thin text-[14px] text-gray-400">Baru Saja</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
