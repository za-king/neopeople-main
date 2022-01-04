import React, { useEffect, useState } from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  previousLabel,
  nextLabel,
  currentPage,
  pageNumberLimit,
  setpageNumberLimit,
  maxPageNumberLimit,
  setmaxPageNumberLimit,
  minPageNumberLimit,
  setminPageNumberLimit,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const style =
    " flex p-4 w-[24px] h-[24px] active:bg-gray-600 items-center justify-center bg-gray-200 hover:bg-gray-300 border-solid border border-black  cursor-pointer";

  return (
    <> 
    
      <nav className="flex justify-center ">
        <button
          className={style}
          onClick={previousLabel}
        >
          {" "}
          prev
        </button>
        <ul className=" flex mb-12">
          {pageNumbers.map((number) => {
            if (
              number < maxPageNumberLimit + 1 &&
              number > minPageNumberLimit
            ) {
              return (
                <li key={number} className="">
                  <div onClick={() => paginate(number)} className={style}>
                    {number}
                  </div>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ul>
        <button className={style} onClick={nextLabel}>
          {" "}
          next
        </button>
      </nav>
    </>
  );
};

export default Pagination;
