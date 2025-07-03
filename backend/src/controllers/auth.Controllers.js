import bcrypt from "bcryptjs"
import db from "../libs/db.js"
import { UserRoles } from "../generated/prisma/index.js";
import jwt from "jsonwebtoken"

export default class AuthControllers{

    
    static register = async (req, res) =>{
        const {email, name, password} = req.body

        try {
            const existingUser = await db.user.findUnique({
                where:{
                    email
                }
            });

            if(existingUser){
                return res.status(400).json({
                    status:400, 
                    success: false,
                    error: true,
                    message: "User already exists with this email account\nTry to login!!"
                })
            }

            const hashedPassowrd = await bcrypt.hash(password, 16)

            const newUser = await db.user.create({
                data:{
                    email, 
                    password : hashedPassowrd,
                    name,
                    userRole : UserRoles.USER,
                    isVerified:true
                }
            })
            
            const token = jwt.sign({id: newUser.id}, process.env.JWT_SECRET, {
                expiresIn: "7d"
            })

            res.cookie("jwt" , token , {
                httpOnly: true,
                sameSite: "strict",
                secure: process.env.NODE_ENV === "production",
                maxAge: 1000 * 60 * 60 * 24 * 7
            })

            res.status(201).json({
                status:201, 
                success: true,
                error: false,
                message: "User Created Successfully",
                user:{
                    id: newUser.id,
                    userEmail : newUser.email,
                    userName : newUser.name,
                    userRole: newUser.userRole,
                    imageUrl: newUser.image
                }
                
            })
        } catch (error) {
            console.log(error);
            
             res.status(500).json({
                    status:500, 
                    success: false,
                    error: error,
                    message: "Error Accurred in Registering User: "
                })
        }

    }
    static login = async (req, res) =>{
        const {email, password} = req.body;
        try {
            const user = await db.user.findUnique({
                where:{
                    email
                }
            })
            if(!user){
                return res.status(401).json({
                    status:401, 
                    success: false,
                    error: null,
                    message: "User doesn't exit. Please register yourself."
                })
            }
            const isMatch = await bcrypt.compare(password, user.password)

            if(!isMatch){
                return res.status(401).json({
                    status:401, 
                    success: false,
                    error: null,
                    message: "Password doesn't match"
                })
            }

            const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {
                expiresIn: "7d"
            })

            res.cookie("jwt", token, {
                httpOnly: true,
                sameSite: "strict",
                secure: process.env.NODE_ENV === "production",
                maxAge: 1000 * 60 * 60 * 24 * 7
            })

            res.status(200).json({
                status:200, 
                success: true,
                error: false,
                message: "User logged in Successfully",
                user:{
                    id: user.id,
                    userEmail : user.email,
                    userName : user.name,
                    userRole: user.userRole,
                    imageUrl: user.image
                }
                
            })
        } catch (error) {
            console.log(error);
            
            res.status(500).json({
                    status:500, 
                    success: false,
                    error: error,
                    message: "Error Accurred in logging in User: "
            })
        }
    }
    static logout = async (req, res) =>{
        try {
            res.clearCookie("jwt", {
                httpOnly: true,
                sameSite: "strict",
                secure: process.env.NODE_ENV === "production"
            })
            res.status(204).json({
                status:204, 
                success: true,
                error: false,
                message: "User Logged out successfully",
            })
        } catch (error) {
            console.log(error);
            
            res.status(500).json({
                    status:500, 
                    success: false,
                    error: error,
                    message: "Error Accurred in logout User: "
            })
        }
    }
    static check = async (req, res) =>{
        try {
            res.status(200).json({
                status:200, 
                success: true,
                error: false,
                message: "User Authenticated Successfully",
                user: req.user
            })
        } catch (error) {
             res.status(500).json({
                    status:500, 
                    success: false,
                    error: error,
                    message: "Checking User"
            })
        }
    }
    static getAllUsers= async (req, res) =>{
        try {
            const users = await db.user.findMany()

            res.status(200).json({
                data:{
                    users
                }
            })
        } catch (error) {
            
        }
    }
    
}