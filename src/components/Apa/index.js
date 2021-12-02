import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Image from "next/dist/client/image";
import Profile from "../../../public/images/img1.jpg";

import SwiperComp from "../SwiperComp";

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

          <SwiperComp />
        </div>
      </div>
    </>
  );
}
