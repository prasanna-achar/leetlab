import React from 'react'
import { User, Code, LogOut } from 'lucide-react'
import useAuthStore from '../store/useAuthStore'
import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton'

function NavBar() {

    const {authUser} = useAuthStore()
  return (
    <nav className="sticky top-0 z-50 w-full py-5">
      <div className="flex w-full justify-between  bg-linear-to-br bg-cover from-[#000000] to-[#3d3d3d] mx-auto max-w-4xl shadow-lg shadow-neutral-600/5 backdrop-blur-lg border border-gray-200/10 p-4 rounded-2xl">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer">
          <img src="/Code Chaos.png" className="h-12 w-12 bg-primary/20 text-primary border-none rounded-full " />
          <span className="text-lg md:text-2xl font-bold tracking-tight text-white hidden md:block">
          Code Chaos 
          </span>
        </Link>

        {/* User Profile and Dropdown */}
        <div className="flex items-center gap-8">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar flex flex-row ">
              <div className="w-10 rounded-full ">
                <img
                  src={
                    authUser?.image ||
                    "https://avatar.iran.liara.run/public/boy"
                  }
                  alt="User Avatar"
                  className="object-cover"
                />
              </div>
           
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-3"
            >
              {/* Admin Option */}
             

              {/* Common Options */}
              <li>
                <p className="text-base font-semibold">
                 
                  {authUser?.name}

                </p>
                <hr className="border-gray-200/10" />
              </li>
              <li>
                <Link
                  to="/profile"
                  className="hover:bg-primary hover:text-white text-base font-semibold"
                >
                  <User className="w-4 h-4 mr-2" />
                  My Profile
                </Link>
              </li>
              {authUser?.userRole === "ADMIN" && (
                <li>
                  <Link
                    to="/add-problem"
                    className="hover:bg-primary hover:text-white text-base font-semibold"
                  >
                    <Code className="w-4 h-4 mr-1" />
                    Add Problem
                  </Link>
                </li>
              )}
              <li>
                <LogoutButton className="hover:bg-primary hover:text-white">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </LogoutButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar