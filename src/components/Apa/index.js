import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Image from "next/dist/client/image";
import Profile from "../../../public/images/img1.jpg";



export default function Apa() {
  return (
    <div className=" flex bg-[#050C44] h-[95vh] justify-center">
      <div className="m-[60px] flex justify-center flex-col items-start w-full">
        <div className="text-4xl h-[10%] text-white font-thin">
          Apa kata mereka?
        </div>
        <div className="text-2xl h-[20%] text-white font-thin w-[20%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div className="w-[full] h-[50%] flex flex-row justify-center items-center">
          <div className="bg-[#E4E4E4] h-full w-[75%] flex flex-row justify-center items-center rounded">
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
          <div className="rounded-md bg-blue-300 p-4 absolute left-[12%]">
            <GrPrevious size={35} />
          </div>
          <div className="rounded-md bg-blue-300 p-4 absolute right-[12%]">
            <GrNext size={35} />
          </div>
        </div>
      </div>
    </div>
  );
}
