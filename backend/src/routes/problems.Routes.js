import express from "express";
import { authMiddleware, checkAdmin } from "../middlewares/Auth.middlewares.js";
import ProblemsController from "../controllers/problems.Controllers.js";

const problemRoutes = express.Router()

problemRoutes.post("/create-problem", authMiddleware, checkAdmin, ProblemsController.createProblem)

problemRoutes.get("/get-problem/:id", authMiddleware, ProblemsController.getProblem)

problemRoutes.get("/get-all-problems", authMiddleware, ProblemsController.getAllProblems)

problemRoutes.put("/update-problem/:id" ,authMiddleware, checkAdmin, ProblemsController.updateProblem)

problemRoutes.delete("/delete-problem/:id", authMiddleware, checkAdmin, ProblemsController.deleteProblem)

problemRoutes.get("/get-solved-problems", authMiddleware, ProblemsController.getSolvedProblems)


export default problemRoutes;