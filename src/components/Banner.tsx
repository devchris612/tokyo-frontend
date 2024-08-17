"use client";
import { Song } from "@/lib/types";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperLib from "swiper";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

type Props = {
  songs: Song[];
};

SwiperLib.use([Navigation, Pagination, Autoplay]);

function Banner({ songs }: Props) {
  return (
    <Swiper
      spaceBetween={0}
      className="mb-10"
      slidesPerView={1}
      loop
      autoplay={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}>
      {songs.map((song) => (
        <SwiperSlide
          key={song._id}
          className="banner-img overflow-hidden">
          <img
            src={song.imageUrl}
            alt="thumb"
            className="w-full h-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Banner;
