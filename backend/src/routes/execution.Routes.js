import express from "express";
import { authMiddleware } from "../middlewares/Auth.middlewares.js";
import ExecutionController from "../controllers/execution.Controllers.js";

const executionRouter = express.Router()

executionRouter.post("/", authMiddleware, ExecutionController.executeCode)

export default executionRouter