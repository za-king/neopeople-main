import React from "react";
import Link from "next/link";
const Posts = ({ posts, loading }) => {
  var lowEnd = 1;
  var highEnd = 9;
  var arr = [];
  while (lowEnd <= highEnd) {
    arr.push(lowEnd++);
  }
  if (loading) {
    return (
      <>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          {arr.map((a) => {
            return (
              <div className=" flex justify-center ">
                <div className="flex bg-gray-200 w-[600px] h-[200px] rounded-lg">
                  <div className=" flex bg-gray-300 w-[200px] h-[200px] rounded-l-lg animate-pulse"></div>
                  <div className="">
                    <div className="flex m-8 bg-gray-300 w-[200px] h-[20px] rounded-lg animate-pulse"></div>
                    <div className="flex m-2 bg-gray-300 w-[250px] h-[20px] rounded-lg animate-pulse"></div>
                    <div className="flex m-2 bg-gray-300 w-[200px] h-[20px] rounded-lg animate-pulse"></div>
                    <div className="flex m-2 bg-gray-300 w-[240px] h-[20px] rounded-lg animate-pulse"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  return (
    <div className="ml-5 p-10  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 ">
      {posts.map((props) => {
        return (
          <div className="justify-center">
            <Link href={`blog/` + props.id}>
              <a>
                <div
                  key={props.id}
                  passHref
                  className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg cursor-pointer"
                >
                  <img
                    className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src={props.url}
                    alt=""
                  />
                  <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">
                      {props.albumId}
                    </h5>
                    <p className="text-gray-700 text-base mb-4">
                      {props.title}
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
