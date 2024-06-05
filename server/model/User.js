import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        min:4,
        unique:[true,"User already exist"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    }
})

const User=mongoose.model("User",UserSchema)
export default User
