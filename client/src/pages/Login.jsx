import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../components/context'
const Login=()=>{
    const toPage=useNavigate()
    const {userInfo,setUserInfo}=useContext(UserContext)
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const login=async(e)=>{
        e.preventDefault()
        try{
            const res=await axios.post("http://localhost:3000/login",
                {username,password},
                {withCredentials:true}
            )
            if(res.data.message=="success"){
                setUserInfo(res.data)
                console.log(res.data)
                toPage("/")
            }else{  
                alert("Invalid username or pasword")
            }
        }catch(error){
            alert("Invalid username or pasword")
            console.log("In login:"+error)
        }
    }
    return(
       <form className='flex flex-col w-2/5 px-32 mt-12 items-center border border-black py-12 rounded-lg' onSubmit={login}>
        <h1 className='font-extrabold text-2xl mb-5 uppercase'>Login</h1>
        <input 
            className="bg-zinc-300 mb-6 w-full px-4 py-2 rounded-md focus:outline-none border border-yellow-500" 
            type="text" 
            placeholder='username'
            value={username}
            onChange={e=>setUsername(e.target.value)}
        />
        <input 
            className="bg-zinc-300 mb-6 w-full px-4 py-2 rounded-md focus:outline-none border border-yellow-500" 
            type="password" 
            placeholder='password'
            value={password}
            onChange={e=>setPassword(e.target.value)}
        />
        <button className="bg-yellow-500 mb-6 w-1/4 px-4 py-2 rounded-full">Login</button>
        <h1>Dont have a account? <span className='text-yellow-500 cursor-pointer' onClick={()=>toPage("/register")}>Register</span></h1>
       </form>
    )
}


export default Login