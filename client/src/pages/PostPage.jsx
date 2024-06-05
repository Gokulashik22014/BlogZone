import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import {format} from 'date-fns'
import { UserContext } from "../components/context"
const PostPage=()=>{
    const [postInfo,setPostInfo]=useState(null)
    const {id}=useParams()
    const {userInfo}=useContext(UserContext)
    const toPage=useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:3000/profile/post/${id}`).then(response=>setPostInfo(response.data))
    },[])
    if(!postInfo) return ''
    if (!userInfo.username) 
        return <div className="flex flex-col space-y-3 text-center">
                    <h1 className="text-3xl">Sign in to read the content</h1>
                    <h1>Click here to <span onClick={()=>toPage("/login")} className="hover:text-white">login in</span> </h1>
                </div> 
    return(
        <div>
            <div className="flex flex-col justify-center items-center mb-3">
                <h1 className="text-2xl font-bold mb-2 px-2 text-center">{postInfo.title}</h1>
                <h1 className="text-[12px] text-stone-600">{format(new Date(postInfo.createdAt),"dd-MMM-yyyy hh:mm:ss")}</h1>
                <div className="flex flex-row space-x-3  justify-center items-center mt-2">
                    <h1 className="mb-1 text-md">{postInfo.author.username}</h1>
                    {
                        userInfo.username==postInfo.author.username && 
                        <button className="flex flex-row justify-center items-center text-sm bg-yellow-500 rounded-full px-2 py-1 border border-solid border-teal-400 hover:border-zinc-900 " onClick={()=>toPage(`/edit/${postInfo._id}`)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                      Edit button</button>
                    }
                </div>
            </div>
            <div className="flex justify-center max-h-96 truncate">
                <img src={`http://localhost:3000/uploads/${postInfo.file}`} className="object-cover object-center w-[1080px] rounded-2xl" />
            </div>
            <div className="flex flex-col mt-2 mx-20 bg-zinc-50 rounded-lg">
                
                <div className="px-4 leading-loose" dangerouslySetInnerHTML={{__html:postInfo.content}}/>
            </div>
        </div>
    )
}


export default PostPage