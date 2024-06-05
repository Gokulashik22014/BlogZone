import bcrypt from 'bcrypt'
import User from '../model/User.js'
import jwt from 'jsonwebtoken'

export const login=async (req,res)=>{
    try{
        const {username,password}=req.body
        const user=await User.findOne({username})
        const result=bcrypt.compareSync(password,user.password)
        if(result){
            jwt.sign({username,id:user._id},process.env.SECRET,{},(error,token)=>{
                if(error) throw error
                res.cookie("token",token).json({message:"success",username,id:user._id})
            })
        }else{
            res.status(400).json({message:"Invalid username or password"})
        }
    }catch(error){
        res.status(400).json({message:"failure"})
    }
}

export const logout=async(req,res)=>{
    try {
        res.cookie("token",' ').json({message:"success"})
        //console.log("inside"+req.cookies)
    } catch (error) {
        res.status(400).json({message:"failure"})
    }
}
