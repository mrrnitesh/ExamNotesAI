import express from "express"
import { googleAuth, logOut } from "../controllers/auth.controller.js"

const authRouter = express.Router()

authRouter.post("/google",googleAuth)
authRouter.get("/louout",logOut)

export default authRouter