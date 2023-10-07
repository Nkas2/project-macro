// import { Navbar } from '../components/Navbar';

export const Community = () => {
  return (
    <>
      <div className="mt-5 mb-2">
        <h1 className="px-14 mb-3 font-bold">Discussion</h1>

        {/* new discus */}
        <div className="bg-[#FFFDFC] rounded-[20px] border ml-[50px] w-[800px] h-[72px] flex justify-between items-center">
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
    </>
  );
};
