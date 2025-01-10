import React from "react";
import { assets } from "../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/keyboard";

const Hero = () => {
  return (
    <Swiper
      className="flex flex-col border border-gray-400 sm:flex-row"
      modules={[Navigation, Pagination, Keyboard, Autoplay]}
      slidesPerView={1}
      direction={"horizontal"}
      loop={true}
      keyboard={{ enabled: true }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      speed={300}
      clickable={true}
      autoplay={false}
      effect={"slide"}
    >
      <SwiperSlide>
        <div className="flex flex-col border border-gray-400 sm:flex-row">
          {/* Hero left Side */}
          <div className="flex w-full items-center justify-center py-10 sm:w-1/2 sm:py-0">
            <div className="text-[#414141]">
              <div className="flex items-center gap-2">
                <p className="h-[2px] w-8 bg-[#414141] md:w-11"></p>
                <p className="text-sm font-medium md:text-base">
                  OUR BESTSELLERS
                </p>
              </div>
              <h1 className="prata-regular text-3xl leading-relaxed sm:py-3 lg:text-5xl">
                Latest Arrivals
              </h1>
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold md:text-base">SHOP NOW</p>
                <p className="h-[1px] w-8 bg-[#414141] md:w-11"></p>
              </div>
            </div>
          </div>
          {/* Hero Right Side  */}
          <img
            className="w-full sm:w-1/2"
            src={assets.hero_img}
            alt="Hero Image"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col border border-gray-400 sm:flex-row">
          <p>Slide 2</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col border border-gray-400 sm:flex-row">
          <p>Slide 3</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-col border border-gray-400 sm:flex-row">
          <p>Slide 4</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
