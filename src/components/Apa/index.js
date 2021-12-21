import Fade from "react-reveal/Fade";

import { Swiper, SwiperSlide } from "swiper/react";

import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Image from "next/dist/client/image";
import Profile from "../../../public/images/img1.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Apa() {
  return (
    <>
      <div className=" flex bg-[#050C44] w-full h-screen  ">
        <div className="flex flex-col">
          <div className="flex mt-24 flex-col ml-[161px] ">
          <Fade bottom>
            <div className="text-2xl  text-white font-thin">
              Apa kata mereka?
            </div>
          </Fade>
            <div className="text-4xl text-white font-thin w-3/4 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
          </div>
          <div className="flex flex-col justify-center items-center px-48 pt-20 ">
            <div className="w-[1124.26px] h-[354px] bg-gray-300  rounded ">
              <Swiper
                className="swiper "
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                autoplay={{
                  "delay": 4500,
                  "disableOnInteraction": false
                }}
                className="mySwiper "
              >
                <SwiperSlide className="swiper-slide">
                  <div className="w-[full] h-full flex flex-row justify-center items-center">
                    <div className="bg-[#E4E4E4] h-full w-[100%] flex flex-row justify-center items-center rounded">
                      <div className="w-[30%] h-full bg-blue-200 relative overflow-hidden rounded">
                        <Image src={Profile} height={100} layout="fill" />
                      </div>
                      <div className="w-[70%] px-8 flex justify-center flex-col items-center">
                        <div className="flex w-full justify-start">
                          <ImQuotesLeft size={60} />
                        </div>
                        <div className="text-left w-[90%]">
                          Alhamdulillah setelah aku kenal Neo People ada
                          perubahan hidup pelan-pelan seperti sekarang agak
                          tegar kalau menghadapi masalah, terus lingkungan juga
                          merasakan emosional aku lebih stabil. Terima kasih yaa
                          Neo People sudah membentuk komunitas yang bermanfaat,
                          semoga kita bisa selalu #tumbuhbersama
                        </div>
                        <div className="flex w-full justify-end">
                          <ImQuotesRight size={60} />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="swiper-slide">
                  <div className="w-[full] h-full flex flex-row justify-center items-center ">
                    <div className="bg-[#E4E4E4] h-full w-[100%] flex flex-row justify-center items-center rounded">
                      <div className="w-[30%] h-full bg-blue-200 relative overflow-hidden rounded">
                        <Image src={Profile} height={100} layout="fill" />
                      </div>
                      <div className="w-[70%] px-8 flex justify-center flex-col items-center">
                        <div className="flex w-full justify-start">
                          <ImQuotesLeft size={60} />
                        </div>
                        <div className="text-left w-[90%]">
                          Alhamdulillah setelah aku kenal Neo People ada
                          perubahan hidup pelan-pelan seperti sekarang agak
                          tegar kalau menghadapi masalah, terus lingkungan juga
                          merasakan emosional aku lebih stabil. Terima kasih yaa
                          Neo People sudah membentuk komunitas yang bermanfaat,
                          semoga kita bisa selalu #tumbuhbersama
                        </div>
                        <div className="flex w-full justify-end">
                          <ImQuotesRight size={60} />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
