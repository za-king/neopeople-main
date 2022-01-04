import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <nav className="bg-gray-800 justify-center h-[30vh] flex flex-col items-center ">
      <div className="flex pb-5 ">
        <div className="bg-[#FF5800] hover:bg-[#FF4400] w-[35px] h-[35px] rounded-full flex justify-center items-center mx-2 cursor-pointer">
          <Image src="/icons/instagram.png" width={20} height={20}></Image>
        </div>

        <div className="bg-[#FF5800] hover:bg-[#FF4400] w-[35px] h-[35px] rounded-full flex justify-center items-center mx-2 cursor-pointer">
          <Image src="/icons/whatsapp.png" width={20} height={20}></Image>
        </div>
      </div>

      <div className="text-xl text-white font-sans font-normal">
      Tentang | kenapa mental sehat ? | Pentingnya kesehatan mental | F.A.Q
      </div>

      <div className="text-xl text-white font-sans font-normal">
      <h1>Hak Cipta © 2021 Hak cipta dilindungi undang-undang - Neo People</h1>
      </div>
        
      
      
    </nav>
  );
}
