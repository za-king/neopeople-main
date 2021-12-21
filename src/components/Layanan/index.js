import React from 'react'
import { GiMedallist } from 'react-icons/gi';
import { FaLaptopMedical } from 'react-icons/fa'
import { SiBookstack } from 'react-icons/si'
import EventIMG from '../../../public/images/Completed-pana 1.svg'
import Image from 'next/dist/client/image';

export default function Layanan() {
    const layananMenu = "w-[131px] flex justify-center items-center flex-col"
    return (
        <div className=" bg-[#F4F8FE] h-[100vh] justify-center flex flex-col items-center" >
            <div className=" w-full h-[30%] flex justify-center items-center" >
                <div className="text-[32px] font-Montserrat font-medium">Layanan Kami</div>
            </div>
            <div className="w-[1080px] h-[10%] flex items-center pb-12 justify-center flex-row ">
                <div className={layananMenu}>
                    <div className="font-Raleway font-reguler text-[24px] ">
                        Event
                    </div>
                    <div className="w-full h-[2px] bg-[#FA1E0E]"></div>
                </div>
                <div className={layananMenu}>
                    <div className="font-Raleway font-reguler text-[24px] ">
                        Konseling
                    </div>
                </div>
                <div className={layananMenu}>
                    <div className="font-Raleway font-reguler text-[24px] ">
                        Karya
                    </div>
                </div>    
            </div>
            <div className="w-[75%] h-[60%] flex items-center justify-center pb-12">
                <div className="w-[40%] h-full flex justfiy-center items-center">
                    <Image src={EventIMG}></Image>
                </div>
                <div className="w-[60%] h-full flex flex-col justify-center items-start gap-8">
                    <div className="font-normal font-Raleway text-[16px]">
                        Event Seputar Mental
                    </div>
                    <div className="font-Raleway text-[16px] font-semibold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla vel nisl vitae dolor volutpat porttitor vel nec nibh.
                    </div>
                    <button className="h-[39px] w-[162px] bg-[#FF725E] font-Montserrat text-[10px] font-thin rounded-3xl text-white">
                        Lihat Selengkapnya
                    </button>
                </div>
            </div>
        </div>
    )
}
