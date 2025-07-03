import express from "express"
import { authMiddleware } from "../middlewares/Auth.middlewares.js"
import PlaylistController from "../controllers/playlist.Controllers.js"
const playListRouter = express.Router()

playListRouter.get("/", authMiddleware, PlaylistController.getAllPlayLists)

playListRouter.get("/:playlistId", authMiddleware, PlaylistController.getPlayList)

playListRouter.post("/create-playlist", authMiddleware, PlaylistController.createPlaylist)

playListRouter.post("/:playlistId/add-problem", authMiddleware, PlaylistController.addProblemToPlayList)

playListRouter.delete("/delete-playlist/:playlistId", authMiddleware, PlaylistController.deletePlayList)

playListRouter.delete("/:playlistId/delete-problem", authMiddleware, PlaylistController.deleteProblemFromPlayList)

export default playListRouter