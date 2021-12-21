import React from 'react'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { ImQuotesLeft, ImQuotesRight} from 'react-icons/im'
import Image from 'next/dist/client/image'
import Profile from '../../../public/images/029932100_1602670069-Sindrom-Good-Girl-Penyebab-Wanita-Sulit-Bahagia-shutterstock_1639602457.jpg' 

export default function Apa() {
    return (
        <div className=" flex bg-[#050C44] h-[100vh] justify-center" >
            <div className="mx-[10%] m-[60px] flex justify-center flex-col items-start w-full">
                <div className="font-Raleway text-xl h-[10%] text-white font-normal">Apa kata mereka?</div>
                <div className="font-Raleway text-xl h-[20%] text-white font-semibold w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                <div className="w-full h-[50%] flex flex-row justify-center items-center">
                    <div className="bg-[#E4E4E4] h-[324px] w-full flex flex-row justify-center items-center rounded">
                        <div className="w-[30%] h-full bg-blue-200 relative overflow-hidden rounded">
                            <Image src={Profile} height={100} layout="fill"/>
                        </div>
                        <div className="w-[70%] px-8 flex justify-center flex-col items-center">
                            <div className="flex w-full justify-start">
                                <ImQuotesLeft size={60}/>
                            </div>
                            <div className="text-left w-[90%] font-Raleway font-normal text-[14px]">
                                Alhamdulillah setelah aku kenal Neo People ada perubahan hidup 
                                pelan-pelan seperti sekarang agak tegar kalau menghadapi masalah,
                                terus lingkungan juga merasakan emosional aku  lebih stabil. 
                                Terima kasih yaa Neo People sudah membentuk komunitas yang bermanfaat, 
                                semoga kita bisa selalu #tumbuhbersama 
                            </div>
                            <div className="flex w-full justify-end">
                                <ImQuotesRight size={60}/>
                            </div>
                            <div className="flex flex-col justify-start items-start w-[90%]">
                                <div className="font-Raleway font-normal text-[14px]">
                                    nama seorang - asal
                                </div>
                                <div className="w-[174px] h-[1px] bg-[#000000]">
                                    
                                </div>
                                <div className="font-Raleway font-normal text-[14px]">
                                    jabatan
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md bg-blue-300 p-4 absolute left-[8%]">
                        <GrPrevious size={35}/>
                    </div>
                    <div className="rounded-md bg-blue-300 p-4 absolute right-[8%]">
                        <GrNext size={35}/>
                    </div>

                </div>
            </div>
        </div>
    )
}
