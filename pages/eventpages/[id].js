
import Link from "next/link";
import Layout from "../../src/components/Layout";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  const data = await res.json();

  const paths = data.map((hasil) => {
    return {
      params: { id: hasil.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const getdata = await fetch(
    `https://jsonplaceholder.typicode.com/photos/` + id
  );
  const datas = await getdata.json();

  return {
    props: { datas: datas },
  };
};

function blogdetail({ datas }) {
  return (
    <>
      <Layout>
      <div className="bg-[#F4F8FE] h-full flex flex-col justify-center ">
        <div className="pb-10 pt-20 w-full flex  items-center justify-center">
          <div className="text-4xl font-sans font-thin">EVENTDETAIL</div>
        </div>

        <div className="flex item-center justify-center  space-between ">
          <div className="flex w-1/2  justify-center  ">
            <img
              src={datas.url}
              width={540}
              height={665}
              alt="fe"
            />
          </div>

          <div className="  w-1/2 bg-[#F4F4F4] w-[540px]  h-[665px] rounded flex justify-around items-center flex-col  mr-20 relative">
            <Swiper navigation={true} className="mySwiper">
              <SwiperSlide>
                <p className="font-sans indent-8 text-left p-10">
                  {datas.title}
                </p>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-[#F2F2F2] w-[540px] h-[665px] rounded-xl ">
                  <div className="flex justify-center pt-24">
                    <div className="w-[247px] h-[147px] ">
                      <div>Date & Time :</div>
                      <div>Sabtu 17 April 2021 </div>
                      <div>10.00-11.30</div>
                    </div>

                    <div className="w-[206px] h-[93px]">
                      <div>Tempat:</div>
                      <div>Zoom</div>
                    </div>
                  </div>

                  <div className="flex justify-center py-10  ">
                    <div className="">
                      BENEFITS: 
                    </div>
                    <div>
                        E-SERTIFIKAT ILMU & PENGETAHUAN KOMUNITAS
                    </div>
                  </div>

                  <div className="justify-center pt-48">
                    <div>
                      35.000
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className=" pt-10 mb-10 flex justify-center">
          <Link href="/eventsPages/eventdetail/pendaftaran" passHref>
            <button className=" bg-[#FF5800] hover:bg-[#FF3800] w-64 h-12 shadow-2xl rounded-full">
              Daftar Event
            </button>
          </Link>
        </div>
      </div>
      </Layout>
    </>
  );
}

export default blogdetail;
