// import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CommentContent } from '../components/items/Comment';
import { comments } from '../data/comments';
import { useState } from 'react';

export const Community = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="flex">
        <div className="flex-3">
          <div className="mt-5 mb-2 ">
            <h1 className="px-14 mb-3 font-bold">Discussion</h1>

            {/* new discus */}
            <div
              onClick={openPopup}
              className="bg-[#FFFDFC] rounded-[20px] border ml-[50px] w-[827px] h-[72px] flex justify-between items-center cursor-pointer">
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

            {/* Pop-up */}
            {isPopupOpen && (
              <div
                className="relative z-10"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                  <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform w-full h-full overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <img
                              className="rounded-full"
                              src="http://placehold.it/47x47"
                              alt=""
                            />
                          </div>
                          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <h3
                              className="text-base font-semibold leading-6 text-[#FFCC81]"
                              id="modal-title">
                              You
                            </h3>
                            <div className="mt-2">
                              <textarea
                                placeholder="Katakan Apapun"
                                className="text-sm text-gray-500 w-96 h-20 resize-none focus:outline-none"></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 justify-between">
                        <button
                          onClick={closePopup}
                          type="button"
                          className="inline-flex w-full justify-center rounded-md bg-[#FFCC81] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#FFCC81] sm:ml-3 sm:w-auto">
                          Post
                        </button>
                        <div>
                          <img
                            src="assets/image/icon-galery.png"
                            alt=""
                            className="cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* <div className="absolute flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded">
              <h2 className="text-xl font-bold mb-4">Tambah Komentar</h2>
              <input
                type="text"
                placeholder="Tulis komentar di sini..."
                className="w-full border border-gray-300 p-2 mb-4"
              />
              <div className="flex justify-end">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={closePopup}>
                  Kirim
                </button>
              </div>
            </div>
          </div> */}
          </div>
          {comments.map((comment, index) => {
            return <CommentContent key={index} {...comment} />;
          })}
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
