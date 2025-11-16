import axios from "axios"

// Use relative URL if VITE_CONNECTION_URL is not set (for production deployment)
const baseURL = import.meta.env.VITE_CONNECTION_URL || '/api/v1'

const axiosInstance = axios.create({
    baseURL: baseURL,
    withCredentials:true,

})

export default axiosInstance