import React from "react";
import Image from "next/dist/client/image";
import Fitmind from "../../../public/icons/fitmind-logo.png";
import TanyaP from "../../../public/icons/Logo-TP-e1629008515711.png";
import SehatMental from "../../../public/icons/logo.d52539a.png";
import Fade from "react-reveal/Fade";
export default function Media() {
  const sponsors = [Fitmind, TanyaP, SehatMental];

  // const listSponsor = sponsors.map((sponsor)=>{

  // })

  const listSponsor = [];
  for (const [index, value] of sponsors.entries()) {
    console.log(value);
    listSponsor.push(
      <div className="w-[90px] h-[90px]">
        <Image src={value}></Image>
      </div>
    );
  }
  return (
    <div className=" flex bg-gray-300 h-screen justify-center flex-col">
      <div className="bg-[#FF9D69] w-full h-[15%] flex justify-center items-center">
        <Fade bottom>
          <div className="text-6xl font-sans font-thin">Media Partner</div>
        </Fade>
      </div>

      <div className="bg-[#F4F8FE] w-[full] h-[85%] grid grid-cols-4 gap-8 justify-items-center px-[180px] py-[20px]">
        <Fade bottom>{listSponsor}</Fade>
      </div>
    </div>
  );
}
