import express from 'express'
import {getProfile,postFile,getPost,getSpecificPost,updatePost} from "../controllers/Profile.js"

const router=express.Router()

router.route("/").get(getProfile)
router.route("/post").post(postFile).get(getPost)
router.route("/post/:id").get(getSpecificPost).patch(updatePost)

export default router
