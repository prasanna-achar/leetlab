import express from "express"
import AuthControllers from "../controllers/auth.Controllers.js"
import { authMiddleware } from "../middlewares/Auth.middlewares.js"

const authRoutes = express.Router()

authRoutes.post("/register", AuthControllers.register)

authRoutes.post("/login", AuthControllers.login)

authRoutes.post("/logout", authMiddleware,AuthControllers.logout)

authRoutes.get("/check", authMiddleware,AuthControllers.check)

authRoutes.get("/get-all-users", authMiddleware,AuthControllers.getAllUsers)

export default authRoutes