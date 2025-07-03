import axiosInstance from "../libs/axios";
import { create } from "zustand";
import toast from "react-hot-toast";

const useSubmissionStore = create((set)=>({
  isLoading: false,
  submission : null,
  allSubmission : [],
  submissionCount: null,
  

  getAllSubmissions: async() =>{
    try {
      set({isLoading:true})
      const res = await axiosInstance.get("/submission/get-all-submissions")
      set({allSubmission:res.data.results})
      toast.success(res.data.message)
    } catch (error) {
      console.log(error)
      toast.error(res.data.message)
    }finally{
      set({isLoading:false})
    }
  },
  getSubmissions:async(id) =>{
    try {
      set({isLoading:true})
      const res = await axiosInstance.get(`/submission/get-submissions/${id}`)
      set({allSubmission:res.data.results})
      toast.success(res.data.message)
    } catch (error) {
      console.log(error)
      toast.error(res.data.message)
    }finally{
      set({isLoading:false})
    }
  },
  getSubmissionCount:  async (id) =>{
    try {
      set({isLoading:true})
      const res = await axiosInstance.get(`/submission/get-submission-count/${id}`)
      set({submissionCount:res.data.results})
      toast.success(res.data.message)
    } catch (error) {
      console.log(error)
      toast.error(res.data.message)
    }finally{
      set({isLoading:false})
    }
  }
}))

export default useSubmissionStore