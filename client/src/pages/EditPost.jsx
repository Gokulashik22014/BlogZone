import axios from "axios";
import React, { useEffect, useState } from "react"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useParams } from "react-router-dom";
const EditPage=()=>{
    const {id}=useParams()
    const [title,setTitle]=useState('')
    const [summary,setSummary]=useState('')
    const [content,setContent]=useState('')
    const [file,setFile]=useState(null)
    const toPage=useNavigate()
    useEffect(()=>{
        console.log(id)
        axios.get(`http://localhost:3000/profile/post/${id}`).then(response=>{
            setTitle(response.data.title)
            setSummary(response.data.summary)
            setContent(response.data.content)
        })
    },[])
    const Update=()=>{
        const data=new FormData()
        data.set('title',title)
        data.set('summary',summary)
        data.set('content',content)
        data.set('id',id)         
        if(file?.[0]){
            data.set('file',file?.[0])
        }
        axios.patch(`http://localhost:3000/profile/post/${id}`,data,{withCredentials:true})
        toPage("/")
    }
    return(
        <div className="w-3/4">
            <h1 className="text-lg mb-4">Edit you Post</h1>
            <input type="text" 
                placeholder="title" 
                className="rounded-md bg-zinc-100 w-full mb-3 px-3 py-1 focus:outline-none border border-solid border-zinc-900"
                value={title}
                onChange={e=>setTitle(e.target.value)}
            />
            <input type="text" 
                placeholder="summary" 
                className="rounded-md bg-zinc-100 w-full mb-3 px-3 py-1 focus:outline-none border border-solid border-zinc-900"
                value={summary}
                onChange={e=>setSummary(e.target.value)}
            />
            <input type="file" 
                className="mb-3"
                onChange={e=>setFile(e.target.files)}
            />
            <ReactQuill 
                theme="snow" 
                className="bg-zinc-100"
                value={content}
                onChange={value=>setContent(value)}
            />
            <button className="center bg-purple-500 rounded-md justify-center align-center px-2 py-1 my-2 text-white" onClick={Update}>Update Post</button>
        </div>
    )
}

export default EditPage;