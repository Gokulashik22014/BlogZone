import axios from "axios";
import React, { useState } from "react"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const CreatePost=()=>{
    const [title,setTitle]=useState('')
    const [summary,setSummary]=useState('')
    const [content,setContent]=useState('')
    const [file,setFile]=useState('')
    const [message,setMessage]=useState(null)
    const clear=()=>{
        setTitle('')
        setSummary('')
        setContent('')
        setFile(null)
    }
    const submit=()=>{
        const data=new FormData()
        data.set('title',title)
        data.set('summary',summary)
        data.set('content',content)
        data.set('file',file[0])
        axios.post("http://localhost:3000/profile/post",data,{withCredentials:true}).then(response=>setMessage(response.data,message))
    }
    return(
        <div className="w-3/4">
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
            <div className="flex flex-row justify-between">
                <button className="center bg-purple-500 rounded-md justify-center align-center px-2 py-1 my-2 text-white" onClick={submit}>Create Post</button>
                <button className="center bg-zinc-500 rounded-md justify-center align-center px-2 py-1 my-2 text-white" onClick={clear}>Clear post</button>
            </div>
            {
                message?
                <div>
                    <h1 className="bg-green-500 px-4 py-2 text-center">Post created successfully</h1>
                </div>:
                (
                    message=="failure"?
                    <div>
                        <h1 className="bg-rose-500 px-4 py-2 text-center">Unable to create post</h1>
                    </div>:
                    <div></div>
                )
            }
        </div>
    )
}


export default CreatePost