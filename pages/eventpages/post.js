import React from "react";
import Link from "next/link";
const EventPosts = ({ posts, loading }) => {
  var lowEnd = 1;
  var highEnd = 9;
  var arr = [];
  while (lowEnd <= highEnd) {
    arr.push(lowEnd++);
  }
  if (loading) {
    return (
      <>
        <div className="ml-12 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
          {arr.map((a) => {
            return (
              <div className=" flex justify-center ">
                <div className=" flex bg-white w-[340px] h-[400px] rounded-lg drop-shadow-xl flex-col  cursor-pointer">
                  <div className=" flex bg-gray-200  w-[340px] h-[250px] rounded-t-lg animate-pulse "></div>
                  <div className=" m-4 bg-gray-200  w-[200px] h-[20px] rounded-lg animate-pulse "></div>
                  <div className=" ml-4 bg-gray-200  w-[250px] h-[20px] rounded-lg animate-pulse"></div>
                  <div className=" ml-4 mt-4 bg-gray-200  w-[150px] h-[20px] rounded-lg animate-pulse"></div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-[#F4F8FE] w-full h-full">
        <div className=" pl-24 justify-start ">
          <div className="text-3xl font-sans font-thin">UPCOMING EVENT</div>
        </div>

        <div className="ml-12 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
          {posts.map((photo) => {
            return (
              <Link href={`/eventpages/` + photo.id} key={photo.id}>
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
                  <p className="text-gray-700 text-base pl-2">{photo.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EventPosts;
