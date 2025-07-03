import express from "express"
import SubmissionController from "../controllers/submission.Controllers.js"
import { authMiddleware } from "../middlewares/Auth.middlewares.js"

const submissionRouter = express.Router()

submissionRouter.post("/",authMiddleware,SubmissionController.submitCode)

submissionRouter.get("/get-all-submissions" , authMiddleware, SubmissionController.getSubmissions)

submissionRouter.get("/get-submissions/:problemId", authMiddleware, SubmissionController.getSubmission)

submissionRouter.get("/get-submission-count/:problemId", authMiddleware, SubmissionController.getSubmissionCount)
export default submissionRouter