import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'
//importing the routers 
import loginRouter from "./routes/login.js"
import registerRouter from "./routes/register.js"
import profileRouter from "./routes/profile.js"
import multer from 'multer'
import {fileURLToPath} from "url"
import path from 'path'
const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)

const app=express()
dotenv.config()
app.use(cors({credentials:true,origin:"http://localhost:5173"}))
app.use(express.json())
app.use(cookieParser())
app.use("/uploads",express.static(__dirname))

const uploadMiddleware=multer({ dest: 'uploads/' })

app.get("/",(req,res)=>{
    res.json({page:1})
})
//routes useage
app.use("/register",registerRouter)
app.use("/login",loginRouter)
app.get("/profile",profileRouter)
app.use("/profile",uploadMiddleware.single('file'),profileRouter)

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser  :true,
    useUnifiedTopology:true,
}).then(()=>app.listen(3000,()=>console.log(`Server is listening at Port ${3000}...`)))
.catch(error=>console.log(error))

