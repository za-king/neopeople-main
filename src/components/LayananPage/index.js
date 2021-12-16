import React from 'react'
import LayananCard from './card/';
import EventIcon from '../../../public/icons/image 24.svg'
import KonselingIcon from '../../../public/icons/image 25.svg'
import KaryaIcon from '../../../public/icons/image 27.svg'



export default function LayananPage() {
        const cardData = [
            [
                'Event',
                EventIcon,
                [
                    'Kami mengadakan Webinar',
                    'Workshop',
                    'Sharing Session',
                    'membahas mengenai kesehatan mental dan juga produktivitas'
                ],
                'Rp 30.000'
            ],
            [
                'Konseling',
                KonselingIcon,
                [
                    'Kamu dapat Konsultasi dengan Mentor Neo People',
                    'Psikolog yang sudah mempunyai Izin Praktek',
                ],
                'Rp 30.000'
            ],
            [
                'Karya',
                KaryaIcon,
                [
                    'Kamu dapat Berkarya dengan keterampilan yang kamu kuasai',
 
                ],
                'Rp 30.000'
            ]
        ]
        return (
        <div className=" bg-[#F4F8FE] h-[120vh] justify-center flex flex-col items-center" >
            <div className="h-[20%] w-full flex justify-end items-center flex-col">
                <div className="text-4xl font-sans font-medium">
                    LAYANAN
                </div >
                <div className="text-xl font-sans font-thin">
                    Temukan layanan Satu Persen yang sesuai untuk kamu.
                </div>
            </div>
            <div className="h-[80%] w-full grid grid-cols-3 gap-4 justify-items-center pt-10">
                <LayananCard cardData = {cardData[0]}/>
                <LayananCard cardData = {cardData[1]}/>
                <LayananCard cardData = {cardData[2]}/>
                
            </div>
        </div>
    )
}
