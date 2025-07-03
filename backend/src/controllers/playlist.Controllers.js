import db from "../libs/db.js";

export default class PlaylistController{
    static createPlaylist = async (req, res) =>{
        try{
            const {name , description} = req.body;

            const userId = req.user.id;

            const existingPlaylist  = await db.playList.findUnique({
                where:{
                    name_userId:{
                        name, userId
                    } 
                }
            })
            if(existingPlaylist){
                return res.status(400).json({
                    success: false,
                    error: null,
                    message: "Play list already exists"
                })
            }

            const playlist = await db.playList.create({
                data:{
                    name,
                    description, 
                    userId
                }
            })

            res.status(201).json({
                success: true,
                error: null,
                message: "Play list created successfully",
                playlist
            })
        }catch(error){
            console.log(error)
            res.status(500).json({
                success: false,
                message: error.message + " Error in creating playlist",
                error:error
            })
        }
    }
    static getAllPlayLists = async (req, res) =>{
        try {
            const userId = req.user.id

            const playlists = await db.playList.findMany({
                where:{
                    userId
                },
                include:{
                    problems:{
                        include:{
                            problem:true
                        }
                    }
                }
            })

            res.status(202).json({
                successs: true,
                error: null,
                message:"Fetched All the playlist successfully",
                playlists
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message + " Error in getting all playlist",
                error:error
            })
        }
    }
    static getPlayList = async (req, res) =>{
        try {
            const { playlistId } = req.params;

            const problems = await db.playList.findUnique({
                where:{
                    id: playlistId,
                    userId: req.user.id
                },include:{
                    problems:{
                        include:{
                            problem: true
                        }
                    }
                }
            })

            if(!problems){
                res.status(403).json({
                    success: false,
                    error:null,
                    message: "There are no problems inside the playlist"
                })
            }
            res.status(202).json({
                success: true,
                error:null,
                message: "Successfully fetched the playlist",
                problems
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message + " Error in getting playlist",
                error:error
            })
        }
    }
    static addProblemToPlayList = async (req, res) =>{
        try {
            const {problemIds} = req.body;
            const playlistId = req.params.playlistId;

            if(!Array.isArray(problemIds)){
                return res.status(400).json({message: "Invlaid or missing problemId"})
            }

            const problem = await db.problemInPlayList.createMany({
                data: problemIds.map(problemId => ({
                    playListId:playlistId,
                    problemId
                }))
            })
            res.status(201).json({
                success: true,
                error: null,
                message: "Added problem inside the playlist",
                problem
            })
        } catch (error) {
            console.log(error.message)
            res.status(500).json({
                success: false,
                message: error.message + " Error in adding problem in playlist",
                error:error
            })
        }
    }
    static deletePlayList = async (req, res) =>{
        try {
            const playlistId = req.params.playlistId;

            await db.playList.delete({
                where:{
                    id:playlistId
                }
            })
            res.status(200).json({
                message: "Play list deleted successfully"
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message + " Error in deleting playlist",
                error:error
            })
        }
    }
    static deleteProblemFromPlayList = async (req, res) =>{
        try {
            const userId = req.user.id;
            const problemId = req.body.problemId;
            const playlistId = req.params.playlistId;

            const result= await db.problemInPlayList.delete({
                where:{
                    playListId_problemId:{
                        playListId:playlistId,
                        problemId,
                    }
                }
            })
            console.log(result);
            
            res.status(200).json({
                message: "Problem deleted from playlist successfully"
            })
        } catch (error) {
            console.log(error);
            
            res.status(500).json({
                success: false,
                message: error.message + " Error in deleting problem from playlist",
                error:error
            })
        }
    }
}