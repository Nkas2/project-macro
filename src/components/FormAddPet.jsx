import { useState } from "react";
import ImageUploading from "react-images-uploading";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineFileImage } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

export const AddPetForm = ({ onclose, funca }) => {
  const [images, setImages] = useState([]);
  const maxNumber = 69;
  const onChange = (imageList) => {
    setImages(imageList);
  };
  const onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const imge = images[0]?.data_url;

    funca({ name, imge });
  };
  function formatFileSize(bytes, decimalPoint) {
    if (bytes == 0) return "0 Bytes";
    const k = 1000,
      dm = decimalPoint || 2,
      sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
  return (
    <div className="fixed flex w-full justify-center items-center h-full bg-black/20 top-0 left-0">
      <div className="h-[650px] w-[1100px] bg-[#FFFBFA] rounded-[15px] py-5 px-11">
        <div className="flex justify-end">
          <RxCross1 onClick={onclose} className="cursor-pointer" size={30} />
        </div>
        <div className="w-full rounded-2xl border border-dashed border-[#979797] h-40 relative mt-3">
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              dragProps,
              onImageRemove,
              isDragging,
            }) => (
              // write your building UI
              <>
                <div
                  onClick={onImageUpload}
                  {...dragProps}
                  className={`bg-transparent opacity-30 hover:opacity-100 transition-all absolute w-fit h-fit flex flex-col items-center cursor-pointer z-20 left-1/2 -translate-x-1/2 ${
                    imageList.length > 0 ? "opacity-0" : null
                  } ${isDragging ? "opacity-100" : null}`}
                >
                  <div>
                    <img src="/assets/image/im.png" alt="" />
                  </div>
                  <p className="text-[#979797] ">
                    Drag and drop an image, or Browse
                  </p>
                </div>

                {/* show */}
                <div className="w-full h-full rounded-2xl flex items-center px-5">
                  {/* {console.log(imageList)} */}
                  {imageList.map((image, index) => (
                    <div
                      key={index}
                      className="w-56 h-20 bg-slate-200 py-6 rounded border border-slate-500 flex items-center relative"
                    >
                      <AiOutlineFileImage size={50} />
                      <div>
                        <p className="text-sm text-[#3C424C] truncate w-32">
                          {image.file.name}
                        </p>
                        <p>{formatFileSize(image.file.size)}</p>
                      </div>
                      <button
                        className="absolute top-0 right-0"
                        onClick={() => onImageRemove(index)}
                      >
                        <TiDeleteOutline size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </ImageUploading>
        </div>
        <form onSubmit={onsubmit}>
          <div className="grid grid-cols-2 gap-6 gap-y-3 mt-5">
            <div>
              <p className="after:content-['*'] after:text-[#FC0522] after:pl-1 text-[#3C424C] text-lg mb-1">
                Nama
              </p>
              <input
                type="text"
                id="name"
                className="border border-[#979797] w-full py-1 px-2 text-lg outline-none rounded-md "
              />
            </div>
            <div>
              <p className="after:content-['*'] after:text-[#FC0522] after:pl-1 text-[#3C424C] text-lg mb-1">
                Umur
              </p>
              <input
                type="text"
                className="border border-[#979797] w-full py-1 px-2 text-lg outline-none rounded-md "
              />
            </div>
            <div>
              <p className="after:content-['*'] after:text-[#FC0522] after:pl-1 text-[#3C424C] text-lg mb-1">
                Jenis
              </p>
              <input
                type="text"
                className="border border-[#979797] w-full py-1 px-2 text-lg outline-none rounded-md "
              />
            </div>
            <div>
              <p className="after:content-['*'] after:text-[#FC0522] after:pl-1 text-[#3C424C] text-lg mb-1">
                Jenis Kelasmin
              </p>
              <input
                type="text"
                className="border border-[#979797] w-full py-1 px-2 text-lg outline-none rounded-md "
              />
            </div>
            <div>
              <p className="after:content-['*'] after:text-[#FC0522] after:pl-1 text-[#3C424C] text-lg mb-1">
                Berat
              </p>
              <input
                type="text"
                className="border border-[#979797] w-full py-1 px-2 text-lg outline-none rounded-md "
              />
            </div>
            <div>
              <p className="after:content-['*'] after:text-[#FC0522] after:pl-1 text-[#3C424C] text-lg mb-1">
                Warna
              </p>
              <input
                type="text"
                className="border border-[#979797] w-full py-1 px-2 text-lg outline-none rounded-md "
              />
            </div>
          </div>
          <p className="after:content-['*'] after:text-[#FC0522] after:pl-1 text-[#3C424C] text-lg mb-1 my-3">
            Deskripsi
          </p>
          <input
            type="text"
            className="border border-[#979797] w-full py-1 px-2 text-lg outline-none rounded-md "
          />
          <div className="flex justify-end mt-3">
            <button
              type="submit"
              className="w-[136px] h-[51px] bg-[#FFCC81] rounded-[15px] text-[#3C424C] text-xl font-bold"
            >
              Buat
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
