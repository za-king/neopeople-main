import React from 'react'
import Image from 'next/dist/client/image';
import { GiMedallist } from 'react-icons/gi';
import { FaLaptopMedical } from 'react-icons/fa'
import { SiBookstack } from 'react-icons/si'
import EventIcon from '../../../public/icons/image 24.svg'


export default function LayananPage() {
    const cardStyle= "bg-[#F4F4F4] w-[315px] drop-shadow-2xl h-[494px] rounded flex justify-center items-center flex-col"
    return (
        <div className=" bg-[#F4F8FE] h-screen justify-center flex flex-col items-center" >
            <div className="h-[25%] w-full flex justify-end items-center flex-col">
                <div className="text-5xl font-sans font-thin">
                    LAYANAN
                </div >
                <div className="text-2xl font-sans font-thin">
                    Temukan layanan Satu Persen yang sesuai untuk kamu.
                </div>
            </div>
            <div className="h-[75%] w-full grid grid-cols-3 gap-8 justify-items-center pt-10">
                <div className={cardStyle}>
                    <div>
                        Event
                    </div>
                    <div>
                        <Image src={EventIcon}>
                        </Image>
                    </div>
                    <div>
                        <ul>
                            <li>Kami mengadakan Webinar</li>
                            <li>Workshop</li>
                            <li>Sharing Session</li>
                            <li>membahas mengenai kesehatan mental dan juga produktivitas</li> 
                        </ul>
                    </div>
                    <div>
                        <div>
                            Rp. 13.000
                        </div>
                    </div>
                    <button>
                        Daftar Sekarang
                    </button>
                </div>
                <div className={cardStyle}>

                </div>
                <div className={cardStyle}>

                </div>
            </div>
        </div>
    )
}
