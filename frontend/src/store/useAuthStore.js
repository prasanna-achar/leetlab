import {create} from "zustand"
import axiosInstance from "../libs/axios"
import toast from "react-hot-toast"

const useAuthStore = create((set) =>({
    authUser: null ,
    isSigninUp: false,
    isLoggingIn:false,
    isCheckingAuth: false,

    checkAuth : async() =>{
        set({isCheckingAuth: true})
        try {
            const res = await axiosInstance.get("/auth/check");
            set({authUser:res.data.user})
        } catch (error) {
            console.log("Error in auth checking",error)
            set({authUser:null})
        }
        set({isCheckingAuth:false})
    },
    signup: async(data) =>{
        set({isSigninUp:true});
        try {
            const res = await axiosInstance.post(`/auth/register`, data)

            
            set({authUser: res.data.user})
            toast.success(res.data.message)
        } catch (error) {
            console.log("Error signing up: ",error)
            toast.error("Error signing up")
        }
        set({isSigninUp:false})
    },
    login:async (data)=>{
        set({isLoggingIn:true});
        try {
            const res = await axiosInstance.post("/auth/login", data)

            set({authUser: res.data.user})

            toast.success(res.data.message)
        } catch (error) {
            console.log("Error Logging in: ",error)
            toast.error("Error Logging in")
        }
        set({isLoggingIn:false})
    },
     logout: async()=>{
        try {
            const res = await axiosInstance.post("/auth/logout")

            set({authUser: null})

            toast.success(res.data.message)
        } catch (error) {
            console.log("Error logging out: ",error)
            toast.error("Error logging out")
        }
     }
}))

export default useAuthStore