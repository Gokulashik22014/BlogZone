import mongoose from "mongoose"
import User from "../model/User.js"
import bcrypt from 'bcrypt'
export const regis=async (req,res)=>{
    try{
        const {username,password}=req.body
        const salt=bcrypt.genSaltSync(10)
        //await User.deleteMany()
        await User.create({username,password:await bcrypt.hash(password,salt)})
        res.status(200).json({message:"success"})
    }catch(error){
        res.status(400).json({message:"faliure",error})
    }
}


