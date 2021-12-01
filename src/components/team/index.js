import React from 'react'
import Yushar from '../../../public/images/image 33.png';
import Rindang from '../../../public/images/image 34.png';
import Novita from '../../../public/images/image 35.png';
import Azmi from '../../../public/images/image 36.png';
import Image from 'next/dist/client/image';

export default function TeamPage() {
        return (
        <div className=" bg-[#F4F8FE] h-[120vh] justify-center flex flex-row items-center" >
            <div className="h-[20%] w-full flex justify-center items-start flex-col">
                <div className="text-6xl font-sans font-bold">
                    Our Team
                </div >
                <div className="text-xl font-sans font-thin">
                    Temukan layanan Satu Persen yang sesuai untuk kamu.
                </div>
            </div>
            <div className="h-[90%] max-h-[90%] w-full flex flex-row my-10 pt-10 overflow-scroll justify-between px-10">
                <div className="flex flex-col ">
                    {/* Yushar */}
                    <div className="flex-none w-[259px] h-[279px] ">
                        {/* The gap */}
                    </div>

                    <div className="flex-none w-[259px] h-[397px] bg-blue-500">
                        <Image src={Rindang}></Image>
                    </div>

                    <div className="flex-none w-[259px] h-[279px] ">
                        {/* The gap */}
                    </div>

                    <div className="flex-none w-[259px] h-[397px] bg-blue-500">
                        <Image src={Azmi}></Image>
                    </div>  
                </div>
                <div className="flex flex-col">
                    <div className="flex-none w-[259px] h-[397px] bg-gray-400">
                        
                        <Image src={Yushar}></Image>
                    </div>

                    <div className="flex-none w-[259px] h-[279px] ">
                        {/* The gap */}
                    </div>

                    <div className="flex-none w-[259px] h-[397px] bg-gray-400">
                        <Image src={Novita}></Image>
                    </div>

                    <div className="flex-none w-[259px] h-[500px] ">
                        {/* The gap */}
                    </div>
                </div>

            </div>
        </div>
    )
}
