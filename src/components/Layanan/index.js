import EventIMG from "../../../public/images/Completed-pana 1.svg";
import Image from "next/dist/client/image";
import Link from "next/link";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, FreeMode, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, FreeMode, Thumbs]);

export default function Layanan() {
  const pagination = {
    clickable: true,
  };

  const layananMenu =" w-[131px] flex justify-center items-center flex-col cursor-pointer ";
  const layananMenuActive ="bg-gray-300 w-[131px] flex justify-center items-center flex-col cursor-pointer rounded-xl";

  const [click, setClick] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleClick = (index)=>{
      setClick(index)
  }
  return (
    <>
      <div className=" bg-[#F4F8FE] h-[100vh] justify-center flex flex-col items-center">
        <div className=" w-full h-[30%] flex justify-center items-center">
          <div className="text-[32px] font-Montserrat font-medium">
            Layanan Kami
          </div>
        </div>

        <div className="w-[1080px] h-[10%] flex items-center pb-12 justify-center flex-row ">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={3}
            freeMode={true}
          >
            <SwiperSlide className=" bg-[#F4F8FE] ">
              <div className={click === 1 ? layananMenuActive : layananMenu}>
                <button onClick={() =>handleClick(1)} className="font-Raleway font-reguler text-[24px] ">
                  Event
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" bg-[#F4F8FE]">
              <div className={click === 2 ? layananMenuActive : layananMenu}>
                <button onClick={() =>handleClick(2)} className="font-Raleway font-reguler text-[24px] ">
                  Konseling
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" bg-[#F4F8FE]">
              <div className={click === 3 ? layananMenuActive : layananMenu}>
                <button onClick={() =>handleClick(3)} className="font-Raleway font-reguler text-[24px] ">
                  Karya
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <Swiper
          pagination={pagination}
          thumbs={{ swiper: thumbsSwiper }}
          className="mySwiper swiper"
        >
          <SwiperSlide className=" bg-[#F4F8FE]">
            <div className="w-[75%] h-[60%] flex items-center justify-center pb-12">
              <div className="w-[40%] h-full flex justfiy-center items-center">
                <Image src={EventIMG}></Image>
              </div>
              <div className="w-[60%] h-full flex flex-col justify-center items-start gap-8">
                <div className="font-normal font-Raleway text-[16px]">
                  Event Seputar Mental
                </div>
                <div className="font-Raleway text-[16px] font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  vel nisl vitae dolor volutpat porttitor vel nec nibh.
                </div>
                <Link href="/eventsPages">
                  <button className="h-[39px] w-[162px] bg-[#FF725E] font-Montserrat text-[10px] font-thin rounded-3xl text-white">
                    Lihat Selengkapnya
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" bg-[#F4F8FE]">
            <div className="w-[75%] h-[60%] flex items-center justify-center pb-12">
              <div className="w-[40%] h-full flex justfiy-center items-center">
                <Image src={EventIMG}></Image>
              </div>
              <div className="w-[60%] h-full flex flex-col justify-center items-start gap-8">
                <div className="font-normal font-Raleway text-[16px]">
                  Event Seputar Mental
                </div>
                <div className="font-Raleway text-[16px] font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  vel nisl vitae dolor volutpat porttitor vel nec nibh.
                </div>
                <button className="h-[39px] w-[162px] bg-[#FF725E] font-Montserrat text-[10px] font-thin rounded-3xl text-white">
                  Lihat Selengkapnya
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" bg-[#F4F8FE]">
            <div className="w-[75%] h-[60%] flex items-center justify-center pb-12">
              <div className="w-[40%] h-full flex justfiy-center items-center">
                <Image src={EventIMG}></Image>
              </div>
              <div className="w-[60%] h-full flex flex-col justify-center items-start gap-8">
                <div className="font-normal font-Raleway text-[16px]">
                  Event Seputar Mental
                </div>
                <div className="font-Raleway text-[16px] font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  vel nisl vitae dolor volutpat porttitor vel nec nibh.
                </div>
                <button className="h-[39px] w-[162px] bg-[#FF725E] font-Montserrat text-[10px] font-thin rounded-3xl text-white">
                  Lihat Selengkapnya
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
