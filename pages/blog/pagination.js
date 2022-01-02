import React from 'react';
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";


const Paginations = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='flex justify-center '>
      <ul className=' flex mb-12'>
        {pageNumbers.map(number => (
          <li key={number} className='p-2'>
            <div onClick={() => paginate(number)}  className=' flex p-4 w-[24px] h-[24px] items-center justify-center bg-gray-200 rounded-full cursor-pointer'>
              {number}
            </div>
          </li>
          
        ))}
      </ul>
    </nav>
  );
};

export default Paginations;