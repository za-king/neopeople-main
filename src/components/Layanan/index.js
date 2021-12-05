import React from "react";
import { GiMedallist } from "react-icons/gi";
import { FaLaptopMedical } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import Fade from "react-reveal/Fade";

export default function Layanan() {
  return (
    <div className=" bg-[#F4F8FE] h-[100vh] justify-center flex flex-col items-center">
      <Fade bottom>
        <div className=" w-full h-[30%] flex justify-center items-center">
          <div className="text-6xl font-sans font-thin">Layanan Kami</div>
        </div>
      </Fade>

      <Fade bottom>
        <div className=" w-[80%] h-[70%] flex items-end pb-12">
          <div className="flex-1 flex justify-center items-center flex-col">
            <GiMedallist size={100} />
            <div className="font-sans text-3xl font-bold">Karya</div>
            <div className="font-sans text-xl font-thin text-center w-2/4">
              Kamu dapat Berkarya dengan keterampilan yang kamu kuasai
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center flex-col">
            <FaLaptopMedical size={100} />
            <div className="font-sans text-3xl font-bold">Karya</div>
            <div className="font-sans text-xl font-thin text-center w-2/4">
              Kamu dapat Berkarya dengan keterampilan yang kamu kuasai
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center flex-col">
            <SiBookstack size={100} />
            <div className="font-sans text-3xl font-bold">Karya</div>
            <div className="font-sans text-xl font-thin text-center w-2/4">
              Kamu dapat Berkarya dengan keterampilan yang kamu kuasai
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
