import React from 'react';
import Link from 'next/link'
const Posts = ({ posts,  }) => {
  

  return (
    
       <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            {posts.map((props) => {
              return (
                <Link href={`blog/`  +props.id} ><a>
                <div  key={props.id} passHref className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg cursor-pointer">
                  
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
                
              );
            })}
          </div>
    
  );
};

export default Posts;