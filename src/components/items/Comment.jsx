import { AiFillLike } from "react-icons/ai";
import PropTypes from "prop-types";

export const CommentContent = ({
  comment,
  account,
  uploadTime,
  image,
  like,
  profileImage,
}) => {
  return (
    <>
      {/* foto profile */}
      <div className="my-3 flex-4">
        <div className="bg-[#FFFDFC] rounded-[20px] border ml-[50px] w-[834px] flex justify-between items-start">
          <img
            src={profileImage}
            alt="profile-img"
            className="rounded-full ml-8 mt-8 w-[47px] h-[47px]"
          />

          <div className="flex-1 w-full">
            {/* kolom komen */}

            <div className="mx-8 flex-col">
              <div className="comment pt-[25px]">
                <h3 className="font-bold text-[20px] text-justify mt-3">
                  {comment}
                </h3>
                {image && (
                  <img
                    src={image}
                    alt=""
                    className="mt-3 object-cover w-full h-[200px] rounded-[20px]"
                  />
                )}
              </div>

              <div className="flex items-center space-x-3 pt-[5px] pb-[18px]">
                <p className="pt-[px] text-[14px] text-[#FFCC81] font-bold">
                  {/* Iqbal Arieftian */}
                  {account}
                </p>
                <p className="font-thin text-[14px] text-gray-400">
                  {/* Baru Saja */}
                  {uploadTime}
                </p>
              </div>

              <div className="pt-[5px] pb-[40px] flex items-center w-full">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-[35px] h-[35px] bg-[#D9D9D9] bg-opacity-[42%] rounded-full cursor-pointer">
                    <AiFillLike className="text-gray-400" />
                  </div>

                  <p className="pl-[9px] font-thin text-[14px] text-gray-300 ">
                    {like}
                  </p>
                </div>

                <div className="flex-1 justify-end">
                  <div className="flex justify-end">
                    <div className="bg-[#EFEDEC] w-[116px] h-[41px] flex items-center justify-center rounded-[15px] cursor-pointer">
                      <img src="assets/image/icon-comment.svg" alt="" />
                      <p className="pl-[10px] font-bold text-[14px] text-[#979797]">
                        Jawab
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CommentContent.propTypes = {
  comment: PropTypes.string.isRequired,
  account: PropTypes.string.isRequired,
  uploadTime: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  like: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
};
