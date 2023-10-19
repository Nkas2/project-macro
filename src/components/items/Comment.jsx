import { AiFillLike } from 'react-icons/ai';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const CommentContent = ({
  comment,
  account,
  uploadTime,
  image,
  like,
  profileImage,
  reply,
}) => {
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [isLike, setIsLike] = useState(false);

  const toggleReply = () => setIsReplying(!isReplying);
  const resetReply = () => {
    setIsReplying(false);
    setReplyText('');
  };
  const handleReplyTextChange = (event) => setReplyText(event.target.value);
  const handleReplySubmit = () => {
    console.log(`Komentar yang terkirim: ${replyText}`);
    resetReply();
  };

  const handleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <>
      {/* foto profil */}
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
                  {account}
                </p>
                <p className="font-thin text-[14px] text-gray-400">
                  {uploadTime}
                </p>
              </div>

              <div className="pt-[5px] pb-[20px] flex items-center w-full">
                <div className="flex items-center">
                  <div
                    className="flex items-center justify-center w-[35px] h-[35px] bg-[#D9D9D9] bg-opacity-[42%] rounded-full cursor-pointer"
                    onClick={handleLike}>
                    <AiFillLike
                      className={isLike ? 'text-[#FFCC81]' : 'text-gray-400'}
                    />
                  </div>

                  <p className="pl-[9px] font-thin text-[14px] text-gray-300">
                    {like}
                  </p>
                </div>

                <div className="flex-1">
                  <div className="flex justify-end">
                    <div
                      className="bg-[#EFEDEC] w-[116px] h-[41px] flex items-center justify-center rounded-[15px] cursor-pointer"
                      onClick={toggleReply}>
                      <img src="assets/image/icon-comment.svg" alt="" />
                      <p className="pl-[10px] font-bold text-[14px] text-[#979797]">
                        Jawab
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {isReplying && (
                <div className="flex items-center w-full border-t border-b border-gray-300 py-2 mb-5">
                  <div className="flex-1">
                    <div className="pl-4 pr-2 flex items-center">
                      <img
                        src="http://placehold.it/47x47"
                        alt=""
                        className="rounded-full"
                      />
                      <input
                        type="text"
                        value={replyText}
                        onChange={handleReplyTextChange}
                        placeholder="Tulis komentar"
                        className="w-full h-[40px] px-[14px] border-none outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      className="bg-[#EFEDEC] text-[#979797] font-bold px-6 py-3 rounded-[15px]"
                      onClick={handleReplySubmit}>
                      Tambah Komentar
                    </button>
                  </div>
                </div>
              )}

              {isReplying && reply.length !== 0 ? (
                <div>
                  {reply.map((rep, i) => {
                    return (
                      <div key={i} className="flex mb-6 py-5 px-5 border-b">
                        <img
                          src={rep.profileImage}
                          alt=""
                          className="rounded-full w-[47px] h-[47px]"
                        />

                        <div>
                          {/* isi komen */}
                          <div className="flex flex-col pl-3">
                            <div className="flex">
                              <h3 className="pl-3 text-[#FFCC81] font-bold">
                                {rep.account}
                              </h3>
                              <p className="pl-3 text-[#979797] font-thin ">
                                {rep.uploadTime}
                              </p>
                            </div>
                          </div>

                          <div className="flex pt-2 pl-3">
                            <h4 className="pl-3">{rep.comment}</h4>
                          </div>

                          <div className="flex px-6 mt-1">
                            <p className="text-[#979797]">Like</p>
                            <p className="pl-3 text-[#979797]">reply</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : null}
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
  reply: PropTypes.arrayOf(PropTypes.object),
};
