import express from 'express'
import {login,logout} from "../controllers/Login.js"
const router=express.Router();

router.route("/").post(login)
router.route("/logout").post(logout)

export default router
