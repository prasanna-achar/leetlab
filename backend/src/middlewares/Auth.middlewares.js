import jwt from "jsonwebtoken"
import db from "../libs/db.js";
import { UserRoles } from "../generated/prisma/index.js";

export const authMiddleware = async (req , res, next)=>{
    try {
        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({
                status:401, 
                success: false,
                error: null,
                message: "Not Authenticated - Invalid Token"
            })
        }

        let decoded;

        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET)
        } catch (error) {
            return res.status(401).json({
                status:401, 
                success: false,
                error: null,
                message: "Not Authenticated - Invalid Token"
            })
        }

        const user = await db.user.findUnique({
            where:{
                id : decoded.id
            }, 
            select:{
                id:true,
                image: true,
                email: true,
                name:true,
                userRole:true
            }
        })
        if(!user) {
            return res.status(404).json({
                status:404, 
                success: false,
                error: null,
                message: "User Not Found"
            })
        }

        req.user = user;
        next()
    } catch (error) {
        console.log(error.message);
            
            res.status(500).json({
                    status:500, 
                    success: false,
                    error: error,
                    message: "Error Accurred in Auth Middleware 1"
            })
    }
}

export const checkAdmin = async (req, res, next)=>{
    try {
        const userId = req.user.id;
        const user = await db.user.findUnique({
            where:{
                id: userId
            }, select:{
                userRole :true
            }
        })

        if(!user || user.userRole !== UserRoles.ADMIN){
            return res.status(403).json({
                    status:403, 
                    success: false,
                    error: null,
                    message: "Access denied - Admins Only",
                    
            })
        }

        next();
    } catch (error) {
        console.log(error.message);
            
            res.status(500).json({
                    status:500, 
                    success: false,
                    error: error,
                    message: "Error Accurred in Auth Middleware 2"
            })
    }
}