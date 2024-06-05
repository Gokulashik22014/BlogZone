import { useState,useEffect } from "react";
import Blog from "../components/Blog";
import axios from "axios";
const BlogPage=()=>{
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        const getData=()=>{
            axios.get("http://localhost:3000/profile/post").then(response=>setPosts(response.data))
            
        }
        getData()
        console.log(posts)
    },[])
    return(
        <div>
            {posts.length>0 && posts.map(post=><Blog {...post}/>)}
        </div>

    )
}

export default  BlogPage