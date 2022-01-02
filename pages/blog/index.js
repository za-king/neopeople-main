import Layout from "../../src/components/Layout";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";

import Posts from "./post";
import Pagination from "./pagination";


export default function blog({ data }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

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

  return (
    <Layout>
      <>
        <div className=" bg-[#F4F8FE] w-full h-full ">
          <div className="h-[20%] pt-36 w-full flex justify-end items-center flex-col">
            <div className="text-4xl font-sans font-medium">Blog</div>
          </div>
          <Posts posts={currentPosts} loading={loading} />
          
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>
      </>
    </Layout>
  );
}
