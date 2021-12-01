import React from 'react'
import Image from 'next/dist/client/image';
import { GiMedallist } from 'react-icons/gi';
import { FaLaptopMedical } from 'react-icons/fa'
import { SiBookstack } from 'react-icons/si'


export default function LayananCard({cardData}) {
    const cardStyle= "bg-[#F4F4F4] w-[315px] drop-shadow-2xl h-[494px] rounded flex justify-around items-center flex-col pt-4 px-8"
    return (
        <div className={cardStyle}>
        <div className="font-sans font-semibold text-2xl">
            {cardData[0]}
        </div>
        <div>
            <Image src={cardData[1]}>
            </Image>
        </div>
        <div className="min-h-[169px]"> 
            <ul className="inline-flex justify-end items-start flex-col">
                <li>{cardData[2][0]}</li>
                <li>{cardData[2][1]}</li>
                <li>{cardData[2][2]}</li>
                <li>{cardData[2][3]}</li> 
            </ul>
        </div>
        <div>
            <div className="font-sans font-semibold text-3xl">
                {cardData[3]}
            </div>
        </div>
        <button className="rounded border-2 border-[#FF5800] border-solid w-[239px] h-[34px] bg-[#FCFCFC]">
            Daftar Sekarang
        </button>
    </div>

    )
}
