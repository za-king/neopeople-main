import Layout from "../../src/components/Layout";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";

import EventPosts from "./post";
import Pagination from "./pagination";

export default function event({ data }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos?_limit=100"
      );
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <Layout>
      <>
        <div className=" bg-[#F4F8FE] w-full h-full ">
          <div className="h-[20%] pt-36 w-full flex justify-end items-center flex-col">
            <div className="text-4xl font-sans font-medium">EVENT</div>
          </div>
          <EventPosts posts={currentPosts} loading={loading} />

          <Pagination
            previousLabel={handlePrevbtn}
            nextLabel={handleNextbtn}
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            currentPage={currentPage}
            pageNumberLimit={pageNumberLimit}
            setpageNumberLimit={setpageNumberLimit}
            maxPageNumberLimit={maxPageNumberLimit}
            setmaxPageNumberLimit={setmaxPageNumberLimit}
            minPageNumberLimit={minPageNumberLimit} 
            setminPageNumberLimit={setminPageNumberLimit}
          />
        </div>
      </>
    </Layout>
  );
}
