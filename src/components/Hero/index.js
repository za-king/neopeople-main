import React from "react";
import Image from "next/dist/client/image";
import HeaderImg from "../../../public/icons/Mental health-pana 1.svg"
export default function Hero() {

  
  return ( 
    <div
      className="bg-[#F4F8FE] h-screen flex flex-row
        justify-center items-center"
    >
      <div className=" w-2/5 h-screen inline-flex flex-col ">
        <div className=" h-5/6 flex justify-center px-[20px] flex-col">
            <div className="font-TentangNanti font-bold text-[100px]">
              Growing with <div className="text-[#FF5800]">community</div>
            </div>
            <div className="font-Montserrat font-thin text-3xl">
              #TumbuhBersama
            </div>
        </div>
        <div className=" h-1/6 px-[20px] flex justify-start flex-row items-start">
            <button className="bg-gray-200 w-[170px] h-[50px] rounded-full mr-[100px]">
                Daftar Event
            </button>
            <button className="bg-gray-200 w-[170px] h-[50px] rounded-full">
                Join With Us
            </button>
        </div>


      </div>
      <div className="w-3/5 h-full flex items-start justify-center">
        <Image src={HeaderImg} width={900}></Image>
      </div>
    </div>
  );
}
