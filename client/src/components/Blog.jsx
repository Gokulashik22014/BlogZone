import React from 'react'
import img1 from "../assets/image1.png"
import {format} from 'date-fns'
import { useNavigate } from 'react-router-dom'
const Blog=({_id,title,createdAt,summary,author,file})=>{
    const toPage=useNavigate()
    return(
        <div className='flex flex-row justify-center items-center h-1/2 mx-32 my-4'>
            <div className='max-w-full w-fit justify-center items-center'>
                <img onClick={()=>toPage(`/post/${_id}`)} className="w-[300px] h-[150px] cursor-pointer rounded-lg" src={"http://localhost:3000/uploads/"+file} alt="loading..."/>
            </div>
            <div className='flex flex-col mx-5 py-4 w-1/2'>
                <h1 onClick={()=>toPage(`/post/${_id}`)} className='text-lg font-bold cursor-pointer'>{title}</h1>
                <div className='flex space-x-6 text-xs text-zinc-800 my-1'> 
                    <a className='font-bold hover:text-zinc-50'>{author.username}</a>
                    <time>{format(new Date(createdAt),"dd-MMM-yyyy hh:mm")}</time>
                </div>
                <p className='w-2/3'>
                    {summary}
                </p>
            </div>
        </div>
    )
}

export default Blog