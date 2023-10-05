import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="bg-[#FFF5F0] w-full mx-auto">
      <div className="  min-h-screen ">
        {/* top */}
        <div className="flex mx-auto items-center justify-center max-w-[1250px] pt-16 ">
          {/* hero section */}
          <section className="">
            <h4 className="text-[#979797] text-xl font-bold">Welcome !</h4>
            <h1 className="text-[#3C424C] text-8xl font-bold">
              Cari <span className="text-[#FFCC81]">Teman</span> <br /> Baru
              Untukmu
            </h1>
            <p className="text-[#979797] text-xl font-bold ps-3 border-l-[2px] border-[#FFCC81] mt-3">
              Ayo bersama - sama menemukan atau <br /> membuat profile kucing
              untuk
              <br />
              diadopsi dengan mudah dan cepat
            </p>
            <button className="mt-8 w-[150px] bg-transparent border-[2px] border-[#FFCC81] rounded-[30px] text-xl px-7 py-1 font-bold text-[#3C424C] hover:bg-[#FFCC81]">
              ADOPT
            </button>
          </section>
          {/* image */}
          <div className="w-[600px]">
            <img src="assets/image/hero-image.png" alt="" />
          </div>
        </div>

        {/*  */}
        <div className="max-w-[1100px] bg-[#3C424C] mx-auto h-[200px] flex mt-52 gap-10 rounded-3xl">
          <div className="w-96 relative h-full">
            <img
              src="assets/image/cat.png"
              alt=""
              className="w-full absolute -bottom-10"
            />
          </div>
          {/* total */}
          <div className="flex items-center gap-16">
            <div className="flex flex-col items-center gap-3">
              <div className="text-4xl w-24 h-24 flex rounded-full justify-center items-center bg-[#FFCC81] text-white font-bold">
                25+
              </div>
              <p className="text-white text-lg font-bold">Kucing</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="text-4xl w-24 h-24 flex rounded-full justify-center items-center bg-[#FFCC81] text-white font-bold">
                100k
              </div>
              <p className="text-white text-lg font-bold">Lorem</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="text-4xl w-24 h-24 flex rounded-full justify-center items-center bg-[#FFCC81] text-white font-bold">
                97%
              </div>
              <p className="text-white text-lg font-bold">Kucing</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="text-4xl w-24 h-24 flex rounded-full justify-center items-center bg-[#FFCC81] text-white font-bold">
                80
              </div>
              <p className="text-white text-lg font-bold">Kucing</p>
            </div>
          </div>
        </div>

        {/* sec */}
        <div className="w-full relative h-[800px] mt-28">
          <img src="assets/image/wave1.png" className="w-full" alt="" />
          <div className="absolute bg-[#F5EAE5] h-full w-full top-10">
            <div className="max-w-[1250px] mx-auto flex h-full items-center gap-10">
              {/* image */}
              <div>
                <img src="assets/image/discus.png" alt="" />
              </div>
              {/* text */}
              <div>
                <h1 className="text-black text-8xl font-bold">
                  Cat
                  <span className="text-[#FFCC81]">
                    {" "}
                    Discussion
                  </span> <br /> By Cat, for Cat !
                </h1>
                <p className="text-[#979797] text-xl font-bold mt-4">
                  Bagikan pengalamanmu dengan pencinta kucing <br /> dan temukan
                  cerita-cerita menarik seputar kucing <br /> dari para pencinta
                  kucing lainnya.
                </p>
                <button className="mt-8 w-[150px] bg-transparent border-[2px] border-[#FFCC81] rounded-[30px] text-xl px-7 py-1 font-bold text-[#3C424C] hover:bg-[#FFCC81]">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* sec 2 */}
        <div className="w-full relative h-[600px]">
          <img src="assets/image/wave2.png" className="w-full" alt="" />
          <div className="absolute bg-[#FFCC81] h-full w-full top-10">
            <div className="max-w-[700px] mx-auto flex h-full items-center justify-center flex-col gap-6">
              <h1 className="text-[#3C424C] text-6xl font-bold">
                Siap untuk memulai?
              </h1>
              <p className="text-[#3C424C] text-center text-2xl font-normal leading-9 font-sans">
                Dengan mendaftar di situs web kami, <br /> Anda akan menemukan
                fitur untuk <br /> mengodopsi hewan atau membuat <br /> profile
                hewan untuk diadopsi dan <br /> manfaat menarik lainnya.
              </p>
              <button className="bg-[#3C424C] rounded-[30px] text-xl px-10 py-2 font-bold text-[#FFF5F0] hover:bg-[#2F343C]">
                Daftar
              </button>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="w-full relative">
          <img src="assets/image/wave3.png" alt="" className="w-full" />
          <Footer />
        </div>
      </div>
    </div>
  );
};
