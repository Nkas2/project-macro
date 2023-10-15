import { useLoaderData } from "react-router-dom";
import { pets } from "../../data/pet";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, EffectFade } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export const PetDetail = () => {
  const data = useLoaderData();
  const { images, name, age, gender, type, weight, color, description } = data;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="w-full h-screen ">
      <div className="max-w-[2000px] h-full mx-auto flex">
        {/* foto */}
        <div className="flex-1 max-w-[50%] relative">
          <Swiper
            spaceBetween={0}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[Thumbs, EffectFade]}
            effect="fade"
            className="mySwiper2 h-full "
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={`/${image}`} className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={0}
            slidesPerView={images.length}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper w-1/2 absolute bottom-16 left-[50%] -translate-x-[50%]"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={`/${image}`}
                  className="w-28 h-28 cursor-pointer object-cover rounded-2xl asd"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* desc */}
        <div className="flex-1 h-full px-16 py-2">
          <div>
            <h1 className="text-[#3C424C] text-4xl font-bold capitalize mb-1">
              {name}
            </h1>
            <div className="text-[#979797] text-lg flex gap-5 mb-1">
              <p>
                {age}{" "}
                {age >= 4
                  ? "th"
                  : age == 3
                  ? "rd"
                  : age == 2
                  ? "nd"
                  : age === 1
                  ? "st"
                  : null}
              </p>
              <p>{gender}</p>
            </div>
            <hr className="text-[#D6D6D4] mb-2" />
            <p className="text-[#3C424C] text-lg font-bold mb-1">
              Detail Lengkap
            </p>
            <div>
              <div className="flex mb-1">
                <p className="text-[#979797] text-lg w-32">Nama</p>
                <p className="capitalize text-[#3C424C] text-lg">{name}</p>
              </div>
              <div className="flex mb-1">
                <p className="text-[#979797] text-lg w-32">Usia</p>
                <p className="capitalize text-[#3C424C] text-lg">{age} Tahun</p>
              </div>
              <div className="flex mb-1">
                <p className="text-[#979797] text-lg w-32">Jenis</p>
                <p className="capitalize text-[#3C424C] text-lg">{type}</p>
              </div>
              <div className="flex mb-1">
                <p className="text-[#979797] text-lg w-32">Jenis Kelamin</p>
                <p className="capitalize text-[#3C424C] text-lg">{gender}</p>
              </div>
              <div className="flex mb-1">
                <p className="text-[#979797] text-lg w-32">Berat</p>
                <p className="capitalize text-[#3C424C] text-lg">
                  {weight} Kilogram
                </p>
              </div>
              <div className="flex mb-1">
                <p className="text-[#979797] text-lg w-32">Warna</p>
                <p className="capitalize text-[#3C424C] text-lg">{color}</p>
              </div>
            </div>
            <hr className="text-[#D6D6D4] mb-1" />
            <h3 className="text-black text-lg font-bold mb-1">Description</h3>
            <p className="w-[529px] text-[#3C424C] text-lg mb-10">
              {description}
            </p>
          </div>
          <div className="flex justify-center">
            <button className="rounded-[20px] text-[#3C424C] text-2xl font-bold bg-[#FFCC81] hover:bg-[#FDC470] py-2 px-28">
              Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const loader = ({ params }) => {
  const id = params.id;
  const data = pets.find((pet) => pet.id === parseInt(id));

  return data;
};
