"use client";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode, Autoplay } from "swiper/modules";

const TestimonialSlider = ({ testimonials }) => {
  return (
    <div className="w-full ">
      <Swiper
        slidesPerView={3}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 70,
          },
        }}
      >
        {testimonials &&
          testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className={`${index === 0 ? "hasMarL" : ""}`}
            >
              <div className="slick_heads colored_bg shadowed">
                <div className="slick_middle text-[#fff]">
                  <div className="slick_header">
                    <h3>
                      My experience with <span>FUND10X</span> has been truly
                      exceptional.
                    </h3>
                  </div>
                  <div className="slicks_bottom">
                    <div>
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="slicksBoth">
                      <p className="slicks_Name">{testimonial.name}</p>
                      <p className="slicks_p">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
