import { create } from "zustand";
import axiosInstance from "../libs/axios";
import toast from "react-hot-toast";
const usePlaylistStore =create((set)=>({
    playlists : [],
    playlist: null,
    isPlaylistsLoading: false,
    isPlaylistLoading: false,
    createPlaylist : async({name, description}) =>{
        try {
            set({isPlaylistsLoading: true})
            const res = await axiosInstance.post("/playlist/create-playlist", {name, description})
            set({playlists: [...state.playlists, res.data.playlist]})
        } catch (error) {
            console.log(error.message)
            toast.error(res.data.message)
        }finally{
            set({isPlaylistsLoading: false})
        }
    },
    getAllPlaylists: async () =>{
        try {
            set({isPlaylistsLoading: true})
            const res = await axiosInstance.get("/playlist")
            set({playlists:res.data.playlists})
        } catch (error) {
            console.log(error.message)
            toast.error(res.data.message)
        }finally{
            set({isPlaylistsLoading: false})
        }
    },
    getPlaylistById: async (id) =>{
        try {
            set({isPlaylistLoading: true})
            const res = await axiosInstance.get(`/playlist/${id}`)
            set({playlist:res.data.playlist})
        } catch (error) {
            console.log(error.message)
            toast.error(res.data.message)
        }finally{
            set({isPlaylistLoading: false})
        }
    },
    addProblemsInPlaylist: async (id, data) =>{
        try {
            set({isPlaylistLoading: true})
            const res = await axiosInstance.post(`/playlist/${id}/add-problem`, data)
            
            toast.success(res.data.message)
        } catch (error) {
            console.log(error.message)
            toast.error(res.data.message)
        }finally{
            set({isPlaylistLoading: false})
        }
    },
    deleteProblemInPlaylist: async (data) =>{
        try {
            set({isPlaylistLoading: true})
            const res = await axiosInstance.delete(`/playlist/${id}/delete-problem`, data)
            toast.success(res.data.message)
        } catch (error) {
            console.log(error.message)
            toast.error(res.data.message)
        }finally{
            set({isPlaylistLoading: false})
        }
    },
    deletePlaylist: async (id) =>{
        try {
            set({isPlaylistsLoading: true})
            const res = await axiosInstance.delete(`/playlist/delete-playlist/${id}`)

            toast.success(res.data.message)
        } catch (error) {
            console.log(error.message)
            toast.error(res.data.message)
        }finally{
            set({isPlaylistsLoading: false})
        }
    }
}))

export default usePlaylistStore