// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ReactPaginate from 'react-paginate';
// import Router, { withRouter } from 'next/router'

// const Home = (props) => {
//     const [isLoading, setLoading] = useState(false);
//     const startLoading = () => setLoading(true);
//     const stopLoading = () => setLoading(false);

//     useEffect(() => {
//         Router.events.on('routeChangeStart', startLoading);
//         Router.events.on('routeChangeComplete', stopLoading);

//         return () => {
//             Router.events.off('routeChangeStart', startLoading);
//             Router.events.off('routeChangeComplete', stopLoading);
//         }
//     }, [])

//     const pagginationHandler = (page) => {
//         const currentPath = props.router.pathname;
//         const currentQuery = { ...props.router.query };
//         currentQuery.page = page.selected + 1;

//         props.router.push({
//             pathname: currentPath,
//             query: currentQuery,
//         });

//     };

//     let content = null;
//     if (isLoading)
//         content = <div>Loading...</div>;
//     else {
//         content = (
//             <ul>
//                 {props.posts.map(post => {
//                     return <li key={post.id}>{post.title}</li>;
//                 })}
//             </ul>
//         );
//     }

//     return (
//         <div className="container">
//             <h1>Posts List with Pagination in Next.js</h1>
//             <div className="posts">
//                 {content}
//             </div>

//             <ReactPaginate
//                 previousLabel={'previous'}
//                 nextLabel={'next'}
//                 breakLabel={'...'}
//                 breakClassName={'break-me'}
//                 activeClassName={'active'}
//                 containerClassName={'pagination'}
//                 subContainerClassName={'pages pagination'}

//                 initialPage={props.currentPage - 1}
//                 pageCount={props.pageCount} //page count
//                 marginPagesDisplayed={2}
//                 pageRangeDisplayed={5}
//                 onPageChange={pagginationHandler}
//             />
//         </div>
//     );
// };

// Home.getInitialProps = async ({ query }) => {
//     const page = query.page || 1;
//     const posts = await axios.get(`https://gorest.co.in/public-api/posts?_format=json&page=${page}`);
//     return {
//         totalCount: posts.data._meta.totalCount,
//         pageCount: posts.data._meta.pageCount,
//         currentPage: posts.data._meta.currentPage,
//         perPage: posts.data._meta.perPage,
//         posts: posts.data.result,
//         isLoading: false,
//     };
// }

// export default withRouter(Home);

import React from "react";
import Layout from "../../src/components/Layout";
export default function testapi() {
  return (
    <Layout>
     <div className="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        <div className=" flex justify-center ">
          <div className="flex bg-gray-200 w-[500px] h-[200px] rounded-lg">
            <div className=" flex bg-gray-300 w-[200px] h-[200px] rounded-l-lg animate-pulse"></div>

            <div className="">
              <div className="flex m-8 bg-gray-300 w-[200px] h-[20px] rounded-lg animate-pulse"></div>
              <div className="flex m-2 bg-gray-300 w-[250px] h-[20px] rounded-lg animate-pulse"></div>
              <div className="flex m-2 bg-gray-300 w-[200px] h-[20px] rounded-lg animate-pulse"></div>
              <div className="flex m-2 bg-gray-300 w-[240px] h-[20px] rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center ">
          <div className="flex bg-gray-200 w-[500px] h-[200px] rounded-lg">
            <div className=" flex bg-gray-300 w-[200px] h-[200px] rounded-l-lg animate-pulse"></div>

            <div className="">
              <div className="flex m-8 bg-gray-300 w-[200px] h-[20px] rounded-lg animate-pulse"></div>
              <div className="flex m-2 bg-gray-300 w-[250px] h-[20px] rounded-lg animate-pulse"></div>
              <div className="flex m-2 bg-gray-300 w-[200px] h-[20px] rounded-lg animate-pulse"></div>
              <div className="flex m-2 bg-gray-300 w-[240px] h-[20px] rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center ">
          <div className="flex bg-gray-200 w-[500px] h-[200px] rounded-lg">
            <div className=" flex bg-gray-300 w-[200px] h-[200px] rounded-l-lg animate-pulse"></div>

            <div className="">
              <div className="flex m-8 bg-gray-300 w-[200px] h-[20px] rounded-lg animate-pulse"></div>
              <div className="flex m-2 bg-gray-300 w-[250px] h-[20px] rounded-lg animate-pulse"></div>
              <div className="flex m-2 bg-gray-300 w-[200px] h-[20px] rounded-lg animate-pulse"></div>
              <div className="flex m-2 bg-gray-300 w-[240px] h-[20px] rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center ">
          <div className="flex bg-gray-200 w-[500px] h-[200px] rounded-lg">
            <div className=" flex bg-gray-300 w-[200px] h-[200px] rounded-l-lg animate-pulse"></div>

            <div className="">
              <div className="flex m-8 bg-gray-300 w-[200px] h-[20px] rounded-lg animate-pulse"></div>
              <div className="flex m-2 bg-gray-300 w-[250px] h-[20px] rounded-lg animate-pulse"></div>
              <div className="flex m-2 bg-gray-300 w-[200px] h-[20px] rounded-lg animate-pulse"></div>
              <div className="flex m-2 bg-gray-300 w-[240px] h-[20px] rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center ">
          <div className="flex bg-gray-200 w-[500px] h-[200px] rounded-lg">
            <div className=" flex bg-gray-300 w-[200px] h-[200px] rounded-l-lg animate-pulse"></div>

            <div className="">
              <div className="flex m-8 bg-gray-300 w-[200px] h-[20px] rounded-lg animate-pulse"></div>
              <div className="flex m-2 bg-gray-300 w-[250px] h-[20px] rounded-lg animate-pulse"></div>
              <div className="flex m-2 bg-gray-300 w-[200px] h-[20px] rounded-lg animate-pulse"></div>
              <div className="flex m-2 bg-gray-300 w-[240px] h-[20px] rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
