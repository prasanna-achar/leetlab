import { create } from "zustand";
import toast from "react-hot-toast";
import axiosInstance from "../libs/axios";

const useProblemStore = create((set)=>({
    allProblems : [],
    problem : null,
    isProblemsLoading: false,
    isProblemLoading: false,
    isSolvedProblemsLoading: false,

    getAllProblems : async()=>{
        try {
            set({isProblemsLoading: true})
            const res = await axiosInstance.get("/problems/get-all-problems")
            set({allProblems: res.data.problems})
            toast.success(res.data.message)
        } catch (error) {
            console.log(error.message)
            toast.error(res.data.message)
        }finally{
            set({isProblemsLoading:false})
        }
    },
    getProblemById : async (id) =>{
        try {
            set({isProblemLoading:true})
            const res = await axiosInstance.get(`/problems/get-problem/${id}`)
            set({problem: res.data.problem})
            toast.success(res.data.message)
        } catch (error) {
            toast.error(res.data.message)
            console.log(error.message)
        }finally{
            set({isProblemLoading: false})
        }
    },
    getSolvedProblems: async () =>{
        try {
            set({isSolvedProblemsLoading:true})
            const res = await axiosInstance.get(`/problems/get-solved-problems`)
            set({problem: res.data.problem})
        } catch (error) {
            console.log(error.message)
        }finally{
            set({isSolvedProblemsLoading: false})
        }
    }
}))

export default useProblemStore