import React from "react";
import Image from "next/dist/client/image";
import Fitmind from "../../../public/icons/fitmind-logo.png";
import TanyaP from "../../../public/icons/Logo-TP-e1629008515711.png";
import SehatMental from "../../../public/icons/logo.d52539a.png";
import g1 from "../../../public/icons/1.png";
import g2 from "../../../public/icons/2.png";
import g3 from "../../../public/icons/3.png";
import g4 from "../../../public/icons/4.png";
import g5 from "../../../public/icons/5.png";
import g6 from "../../../public/icons/6.png";
import g7 from "../../../public/icons/7.png";
import g8 from "../../../public/icons/8.png";

import Fade from "react-reveal/Fade";
export default function Media() {
  const sponsors = [
    Fitmind,
    TanyaP,
    SehatMental,
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
    g8,
  ];

  const listSponsor = [];
  for (const [index, value] of sponsors.entries()) {
    console.log(value);
    listSponsor.push(
      <div className="flex bg-[#EBF0F3] w-[250px] h-[250px] justify-center items-center rounded-xl shadow-lg hover:shadow-xl">
        <div className="w-[120px] h-[120px]">
          <Image src={value}></Image>
        </div>
      </div>
    );
  }
  return (
    <div className=" flex bg-[#F4F8FE] h-full w-full justify-center flex-col">
      <div className="bg-[#FF9D69] w-full h-[100px] flex justify-center items-center">
        <div className="text-6xl font-sans font-thin">Media Partner</div>
      </div>

      <div className=" w-[full] h-[85%]  ">
        <div className=" grid grid-cols-4 gap-6 justify center justify-items-center p-20">
          {listSponsor}
        </div>
      </div>
    </div>
  );
}
