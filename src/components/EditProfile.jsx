/* eslint-disable react/prop-types */
import { useState } from "react";
import ImageUploading from "react-images-uploading";
import { RxCross1 } from "react-icons/rx";

export const EditProfileComp = ({ onclose, onSubmit, user }) => {
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList) => {
    setImages(imageList);
  };

  const [nameInput, setNameInput] = useState(user.name);
  const changeName = (e) => {
    setNameInput(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    const name = nameInput;
    const location = document.getElementById("location").value;
    const bio = document.getElementById("bio").value;
    const img =
      images.length == 0 ? user.image : images[images.length - 1].data_url;

    onSubmit({ name, location, bio, img });
  };
  return (
    <div className="fixed top-0 left-0 bg-black/20 flex justify-center items-center w-full h-full">
      <div className="w-[1015px] h-[643px] bg-[#FFFBFA] rounded-2xl px-12 py-6">
        <div className="w-full flex justify-between items-center mb-9">
          <h1 className="text-[#3C424C] font-bold text-2xl ">Edit Profile</h1>
          <RxCross1 onClick={onclose} size={30} />
        </div>
        <div className="flex gap-6">
          <div className="w-fit">
            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({ imageList, onImageUpload, dragProps }) => (
                // write your building UI
                <div className="relative w-fit">
                  {/* button */}
                  <img
                    src="/assets/image/pen2.png"
                    alt=""
                    onClick={onImageUpload}
                    {...dragProps}
                    className="absolute bottom-0 right-0 cursor-pointer"
                  />

                  {/* show */}
                  <div className="w-56 h-56 rounded-full">
                    <img
                      src={
                        imageList[imageList.length - 1]?.data_url
                          ? imageList[imageList.length - 1]?.data_url
                          : user.image
                      }
                      className="w-full h-full object-cover rounded-full"
                    />
                    <div className="image-item__btn-wrapper"></div>
                  </div>
                </div>
              )}
            </ImageUploading>
          </div>
          <div className="flex-[2]">
            <form onSubmit={submit}>
              <div>
                <h3 className="text-[#3C424C] text-lg after:content-['*'] after:ps-1 after:text-[#FC0522] mb-[6px]">
                  Display Name
                </h3>
                <input
                  type="text"
                  className="w-full rounded-[15px] h-12 px-4 outline-none bg-[#FFFDFC] border-2 border-[#E1E1E1] text-[#3C424C] text-lg"
                  required
                  id="name"
                  value={nameInput}
                  onChange={changeName}
                />
              </div>
              <div className="mt-5">
                <h3 className="text-[#3C424C] text-lg mb-[6px]">Location</h3>
                <input
                  type="text"
                  className="w-full rounded-[15px] h-12 px-4 outline-none bg-[#FFFDFC] border-2 border-[#E1E1E1] text-[#3C424C] text-lg"
                  id="location"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-[#3C424C] text-lg mb-[6px]">Bio</h3>
                <textarea
                  name=""
                  className="w-full rounded-[15px] px-4 py-4 min-h-[200px] max-h-[200px] outline-none bg-[#FFFDFC] border-2 border-[#E1E1E1] text-[#3C424C] text-lg"
                  id="bio"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="flex w-full justify-end mt-4">
                <button
                  type="submit"
                  className="bg-[#FFCC81] px-6 py-3 text-[#3C424C] font-bold text-2xl rounded-[15px]"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
