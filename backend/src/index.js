import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser  from "cookie-parser"

import authRoutes from "./routes/auth.Routes.js"
import problemRoutes from "./routes/problems.Routes.js"
import executionRouter from "./routes/execution.Routes.js"
import submissionRouter from "./routes/submission.Routes.js"
import playListRouter from "./routes/playlist.Routes.js"

dotenv.config()

const PORT = process.env.PORT || 8080

const app = express()
app.use(cookieParser())
// CORS configuration - allow frontend and same origin for production
const allowedOrigins = process.env.CORS_ORIGINS 
  ? process.env.CORS_ORIGINS.split(',')
  : ['http://localhost:5173', 'http://localhost'];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests) or from allowed origins
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true                // 👈 allow credentials
}));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res)=>{
    try {
        res.send(
        "<h1> Welcome to leet lab</h1>"
    )
    } catch (error) {
        res.send(
        `${error}`
    )
    }
})

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/problems", problemRoutes)
app.use("/api/v1/execute-code", executionRouter)
app.use("/api/v1/submission", submissionRouter)
app.use("/api/v1/playlist", playListRouter)


app.listen(PORT, ()=>{
    console.log(`The server is running on the port ${PORT}\nhttp://127.0.0.1:${PORT}`);
    
})