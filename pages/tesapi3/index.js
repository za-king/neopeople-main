import axios from "axios";
import { useState, useEffect } from "react";


import React from 'react'

function index() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://104.199.125.194:3001/session");
      setPosts(res.data);
    };

    fetchPosts();
  }, []);

  console.log(posts)
    return (
        <div>
            
        </div>
    )
}

export default index
