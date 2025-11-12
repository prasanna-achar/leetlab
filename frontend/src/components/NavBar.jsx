import React from 'react'
import { User, Code, LogOut } from 'lucide-react'
import useAuthStore from '../store/useAuthStore'
import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton'

function NavBar() {
  const { authUser } = useAuthStore()
  return (
    <nav className="sticky top-3 z-50 w-full">
      <div className="rounded-2xl border border-white/10 bg-slate-900/75 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/Code Chaos.png"
              alt="Code Chaos logo"
              className="h-11 w-11 rounded-full border border-white/10 bg-slate-950/60 object-cover p-1 shadow-inner"
            />
            <span className="hidden text-lg font-semibold tracking-tight text-white sm:block md:text-[1.7rem]">
              Code Chaos
            </span>
          </Link>

          {/* User Profile and Dropdown */}
          <div className="flex items-center gap-6">
            <Link
              to="/problems"
              className="hidden text-sm font-semibold text-slate-200 transition hover:text-white md:inline-flex"
            >
              Problems
            </Link>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="h-11 w-11 rounded-full ring-2 ring-rose-500/60 ring-offset-2 ring-offset-black">
                  <img
                    src={
                      authUser?.image ||
                      "https://avatar.iran.liara.run/public/boy"
                    }
                    alt="User Avatar"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 w-56 rounded-xl border border-white/5 bg-slate-900/95 p-3 shadow-2xl backdrop-blur-xl"
              >
                <li className="px-2 pb-2">
                  <p className="text-sm font-semibold text-slate-100">
                    {authUser?.name}
                  </p>
                  <p className="text-xs text-slate-400">{authUser?.email}</p>
                </li>
                <li className="menu-title px-2 text-xs uppercase tracking-wide text-slate-500">
                  Account
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="text-sm font-medium text-slate-200 hover:bg-rose-600/90 hover:text-white"
                  >
                    <User className="h-4 w-4" />
                    My Profile
                  </Link>
                </li>
                {authUser?.userRole === "ADMIN" && (
                  <li>
                    <Link
                      to="/add-problem"
                      className="text-sm font-medium text-slate-200 hover:bg-rose-600/90 hover:text-white"
                    >
                      <Code className="h-4 w-4" />
                      Add Problem
                    </Link>
                  </li>
                )}
                <li className="pt-2">
                  <LogoutButton className="btn-sm btn-error/80 btn text-sm font-semibold text-white hover:bg-error">
                    <LogOut className="h-4 w-4" />
                    Logout
                  </LogoutButton>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar