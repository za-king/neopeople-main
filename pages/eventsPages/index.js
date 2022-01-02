import { useState ,useEffect} from "react";
import ReactPaginate from "react-paginate";


import Link from "next/link";
import Layout from "../../src/components/Layout";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";




export async function getStaticProps() {
  const getdata = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_limit=9`
  );
  const data = await getdata.json();
  return {
    props: { data },
  };
}



export default function events({ data }) {
  
  return (
    <>
      <Layout>
        <div className="bg-[#F4F8FE] w-full h-full">
          <div className="h-[20%] pt-36 w-full flex justify-end items-center flex-col md:justify-center">
            <div className="text-4xl font-sans font-medium">EVENT</div>
          </div>

          <div className=" pl-12 justify-start ">
            <div className="text-3xl font-sans font-thin">UPCOMING EVENT</div>
          </div>

          <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
            {data.map((photo) => {
              return (
                <Link href={`/eventsPages/` + photo.id} key={photo.id}>
                  <div className="my-10 flex bg-white w-[340px] h-[400px] rounded-lg drop-shadow-xl flex-col  cursor-pointer">
                    <div className="flex bg-gray-600  w-[340px] h-[250px] rounded-t-lg  ">
                      <img
                        className="flex  w-[340px] h-[250px] rounded-t-lg "
                        src={photo.url}
                        alt="Mountain"
                      />
                    </div>
                    <div className=" py-2 pl-2 font-bold text-xl mb-2">
                      {photo.albumId}
                    </div>
                    <p className="text-gray-700 text-base pl-2">
                      {photo.title}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="h-[10%] p-10 w-full flex justify-end items-center flex-col md:justify-center">
            <Stack spacing={2}>
              <Pagination count={20} variant="outlined" shape="rounded" />
            </Stack>
          </div>
        </div>
      </Layout>
    </>
  );
}
