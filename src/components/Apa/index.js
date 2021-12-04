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

export default function Apa() {
  return (
    <>
      <div className=" flex bg-[#050C44] h-[95vh] ">
        <div className="m-[60px] flex justify-center flex-col items-start w-full">
          <div className="text-4xl h-[10%] text-white font-thin">
            Apa kata mereka?
          </div>
          <div className="text-2xl h-[20%] text-white font-thin w-[20%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>

        <Swiper
        className="swiper w-24"
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide w-24 h-[50%]">
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

       
      </div>
    </>
  );
}
