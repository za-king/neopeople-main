import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import Link from "next/link";
import Layout from "../../src/components/Layout";

import { useRouter } from "next/router";

export async function getServerSideProps({ query: { page = 1 } }) {
  const start = +page === 1 ? 0 : (+page - 1) * 9;
  const getdata = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_limit=9&_start=${start}`
  );

  const getdata2 = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_limit=3&_start=${start}`
  );
  const newdata = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_limit=27`
  );

  const newdata2 = await newdata.json();
  const data = await getdata.json();
  const data2 = await getdata2.json();

  const length = newdata2.length;
  return {
    props: {
      page: +page,
      data: data,
      data2: data2,
      length,
    },
  };
}

export default function events({ data,data2, page, length }) {
  const router = useRouter();
  const lastpage = Math.ceil(length / 9);
  var lowEnd = 1;
  var highEnd = lastpage;
  var arr = [];
  while (lowEnd <= highEnd) {
    arr.push(lowEnd++);
  }

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

          <div className="h-[10%] p-10 w-full flex justify-end items-center flex-row md:justify-center">
            <button
              className=" w-[50px] h-[40px] bg-gray-500 rounded-lg"
              onClick={() => router.push(`/eventsPages?page=${page - 1}`)}
              disabled={page <= 1}
            >
              prev
            </button>

            <div className="">
              {arr.map((m) => (
                <button
                className="w-[50px] h-[40px] bg-gray-500 m-2 rounded-lg"
                  disabled={page === m}
                  onClick={() => router.push(`/eventsPages?page=${m}`)}
                  key={m}
                >
                  {m}
                </button>
              ))}
            </div>
            <button
            className="w-[50px] h-[40px] bg-gray-500 rounded-lg"
              onClick={() => router.push(`/eventsPages?page=${page + 1}`)}
              disabled={page >= lastpage}
            >
              next
            </button>
          </div>

          <div className=" pl-12 justify-start ">
            <div className="text-3xl font-sans font-thin">COMPLETED EVENT</div>
          </div>

          <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">

            {data2.map(photo =>{
              return(
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
              )
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}
