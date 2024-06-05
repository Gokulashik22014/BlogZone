import express from 'express'
import { regis } from '../controllers/Register.js'
const router=express.Router()

router.route("/").post(regis)


export default router
