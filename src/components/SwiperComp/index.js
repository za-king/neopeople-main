
import { Swiper, SwiperSlide } from "swiper/react";

import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Image from "next/dist/client/image";
import Profile from "../../../public/images/img1.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);

export default function SwiperComp() {
  return (
    <>
      <Swiper
        className="swiper"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide ">
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
                  Alhamdulillah setelah aku kenal Neo People ada perubahan hidup
                  pelan-pelan seperti sekarang agak tegar kalau menghadapi
                  masalah, terus lingkungan juga merasakan emosional aku lebih
                  stabil. Terima kasih yaa Neo People sudah membentuk komunitas
                  yang bermanfaat, semoga kita bisa selalu #tumbuhbersama
                </div>
                <div className="flex w-full justify-end">
                  <ImQuotesRight size={60} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide">
          <div className="w-[full] h-full flex flex-row justify-center items-center static">
            <div className="bg-[#E4E4E4] h-full w-[100%] flex flex-row justify-center items-center rounded">
              <div className="w-[30%] h-full bg-blue-200 relative overflow-hidden rounded">
                <Image src={Profile} height={100} layout="fill" />
              </div>
              <div className="w-[70%] px-8 flex justify-center flex-col items-center">
                <div className="flex w-full justify-start">
                  <ImQuotesLeft size={60} />
                </div>
                <div className="text-left w-[90%]">
                  Alhamdulillah setelah aku kenal Neo People ada perubahan hidup
                  pelan-pelan seperti sekarang agak tegar kalau menghadapi
                  masalah, terus lingkungan juga merasakan emosional aku lebih
                  stabil. Terima kasih yaa Neo People sudah membentuk komunitas
                  yang bermanfaat, semoga kita bisa selalu #tumbuhbersama
                </div>
                <div className="flex w-full justify-end">
                  <ImQuotesRight size={60} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
