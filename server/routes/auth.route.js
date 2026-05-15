import express from "express"
import { googleAuth, logOut } from "../controllers/auth.controller.js"
// Extra
import { verifyToken } from "../middleware/auth.middleware.js"
const authRouter = express.Router()

authRouter.post("/google",googleAuth)
authRouter.get("/louout",logOut)
// Extra
authRouter.get("/logout", verifyToken, logout)

export default authRouter
