import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register=()=>{
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const toPage=useNavigate()
    const register=async(e)=>{
        e.preventDefault()
        try{
           await axios.post("http://localhost:3000/register",{username,password}).then(response=>toPage("/login"))
        }catch(error){
            alert("User already Exist")
            console.log("In Register"+error)
        }
    }
    return(
       <form className='flex flex-col w-2/5 px-32 mt-12 items-center border border-black py-12 rounded-lg' onSubmit={register}>
        <h1 className='font-extrabold text-2xl mb-5 uppercase'>Register</h1>
        <input 
            className="bg-zinc-300 mb-6 w-full px-4 py-2 rounded-md focus:outline-none border border-yellow-500" 
            type="text"
            value={username}
            onChange={e=>setUsername(e.target.value)} 
            placeholder='username'/>
        <input 
            className="bg-zinc-300 mb-6 w-full px-4 py-2 rounded-md focus:outline-none border border-yellow-500" 
            type="password"
            value={password}
            onChange={e=>setPassword(e.target.value)} 
            placeholder='password'/>
        <button className="bg-yellow-500 mb-6 w-1/4 px-4 py-2 rounded-full">Register</button>
       </form>
    )
}


export default Register