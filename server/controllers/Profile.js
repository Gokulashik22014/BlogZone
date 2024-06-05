import express from 'express'
import jwt from 'jsonwebtoken'
import fs from 'fs'
import Post from '../model/Post.js'

//get the user profile information
export const getProfile=(req,res)=>{
    try{
        const {token}=req.cookies
        //console.log(token)
        jwt.verify(token,process.env.SECRET,{},(error,info)=>{
            if(error) throw error
            res.status(200).json({info})
        })
    }catch(error){
        res.status(400).json({message:"failure"})
    }
}
//uploading a post
export const postFile=(req,res)=>{
    const {originalname,path}=req.file
    const arr=originalname.split(".")
    const ext=arr[arr.length-1]
    const newPath=path+"."+ext
    fs.renameSync(path,newPath)

    const {token}=req.cookies
    const {title,summary,content}=req.body
    jwt.verify(token,process.env.SECRET,{},async(error,info)=>{
        if(error) throw error
        // await Post.deleteMany()

        const post=await Post.create({
            title,
            summary,
            content,
            file:newPath,
            author:info.id
        })
        // console.log(post)
        res.status(200).json({message:"success"})
    })

}
//update post
export const updatePost=async(req,res)=>{
    const {id}=req.params
    const {title,summary,content}=req.body
    const {token}=req.cookies
    let newPath=null
    if(req.file){
        const {originalname,path}=req.file
        const arr=originalname.split(".")
        const ext=arr[arr.length-1]
        newPath=path+"."+ext
        fs.renameSync(path,newPath)
    }
    const postDoc=await Post.findById(id)
    jwt.verify(token,process.env.SECRET,{},async(err,info)=>{
        const isAuthor=(JSON.stringify(postDoc.author)===JSON.stringify(info.id))
        if(!isAuthor) res.status(400).json({message:"your not the author "})
        const response=await Post.updateOne({_id:id},{...req.body,file:newPath?newPath:postDoc.file})
    })
}
//get all the post
export const getPost=async(req,res)=>{
    const posts=await Post.find()
        .populate('author',['username'])
        .sort({createdAt:-1})
        .limit(20)
    res.status(200).json(posts)
}
//get a specific post
export const getSpecificPost=async(req,res)=>{
    const{id}=req.params
    const postData=await Post.findById(id).populate('author',["username"])
    res.status(200).json(postData)
}