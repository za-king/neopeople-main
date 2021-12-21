import React from "react";

export default function openSesion() {
  return (
    <div className="flex bg-[#F4F8FE] h-screen justify-center flex-col items-center ">
      <div className="font-sans font-normal  text-4xl p-5">SESI 1</div>

      <div className="bg-[#C4C4C4] w-[250px] h-[250px] rounded-full "></div>

      <div className="font-sans font-normal  text-2xl p-10">MENTOR</div>

      <div className="flex flex-row justify-center pb-5 text-[#BD2001] ">
        <div className="font-sans text-3xl pr-48 items-center justify-center ">
          JAM 08.00-10.00
        </div>
        <div className="flex bg-[#F8F8F8] w-[196px] cursor-pointer  items-center justify-center h-[54px] rounded-full border-solid border-2 border-yellow-600">
          Daftar
        </div>
      </div>

      <div className="flex flex-row justify-center text-[#BD2001] ">
        <div className="font-sans text-3xl pr-48 ">JAM 08.00-10.00</div>
        <div className="flex bg-[#F8F8F8] w-[196px] cursor-pointer items-center justify-center h-[54px] rounded-full border-solid border-2 border-yellow-600">
          Daftar
        </div>
      </div>
    </div>
  );
}
