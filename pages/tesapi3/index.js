import axios from "axios";
import { useState, useEffect } from "react";


import React from 'react'

function index() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:3004/konsul");
      setPosts(res.data);
    };

    fetchPosts();
  }, []);

  console.log(posts)

  
    return (
        <div>
           {posts.map(a => {
             return(<div key={a.id}>
               {a.started_at}
             </div>)
           })} 
        </div>
    )
}

export default index
