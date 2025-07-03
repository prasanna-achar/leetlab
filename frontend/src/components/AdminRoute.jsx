import React from 'react'
import useAuthStore from '../store/useAuthStore'
import { Outlet } from 'react-router-dom'
import { Loader } from 'lucide-react'

function AdminRoute({children}) {
    const {authUser, isCheckingAuth} = useAuthStore()
    console.log(authUser)
//     if(authUser?.userRole !== "ADMIN"){
//         return( 
//             <div className='flex justify-center items-center'>
//                 <h1 className='text-5xl text-red-500'>You are not an Admin !!</h1>
//             </div>
//         )
//     }
//   return (
//     <Outlet />
//   )
    if(!authUser || isCheckingAuth){
        <div className="flex items-center justify-center h-screen">
            <Loader className="size-10 animate-spin"/>
        </div>
    }
    return authUser?.userRole !== "ADMIN" ? (
        <div className='flex justify-center items-center'>
            <h1 className='text-5xl text-red-500'>You are not an Admin !!</h1>
        </div>
    ) : 
    <Outlet />
}

export default AdminRoute