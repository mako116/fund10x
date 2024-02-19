"use client";
import React from "react";
import googles from "../../public/images/Frame 2404.svg";
import apple from "../../public/images/Frame 2405.svg";
import apples from "../../public/images/Frame 2406.svg";
import micro from "../../public/images/Frame 2403.svg";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode, Autoplay } from "swiper/modules";

const Partners = () => {
  return (
    <>
      <div className="partners">
        <div className="">
          <h2 className="text-[#ffffff]">Our Partners</h2>
        </div>

        {/* <Swiper
          slidesPerView={3}
          pagination={{
            clickable: false,
          }}
          freeMode={true}
          className=""
        >
          <SwiperSlide>
            <Image width={100} height={30} src={apple} className="imagesd" />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={100} height={30} src={micro} className="imagesd" />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={100} height={30} src={apples} className="imagesd" />
          </SwiperSlide>
          <SwiperSlide>
            <Image width={100} height={30} src={googles} className="imagesd" />
          </SwiperSlide>
        </Swiper> */}

        <div className="partnerdImage">
          <Image width={100} height={30} src={apple} className="imagesd" />
          <Image width={100} height={30} src={micro} className="imagesd" />
          <Image width={100} height={30} src={apples} className="imagesd" />
          <Image width={100} height={30} src={googles} className="imagesd" />
        </div>
      </div>
    </>
  );
};

export default Partners;
