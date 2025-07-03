import {Routes , Route, Navigate} from "react-router-dom"
import SignUpPage from "./pages/SignUpPage"
import Home from "./pages/Home"
import LoginPage from "./pages/LoginPage"
import useAuthStore from "./store/useAuthStore"
import { useEffect } from "react"
import { Loader } from "lucide-react"
import { Toaster } from "react-hot-toast"
import Layout from "./layout/Layout"
import AdminRoute from "./components/AdminRoute"
import AddProblem from "./pages/AddProblem"
import ProblemsPage from "./pages/ProblemsPage"
import ExecutionPage from "./pages/ExecutionPage"
function App() {

  const { authUser, checkAuth, isCheckingAuth} = useAuthStore()

  useEffect(()=>{
    checkAuth()
  }, [checkAuth])
  if(isCheckingAuth && !authUser){
    return(
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin"/>
      </div>
    )
  }
  return (
    <div className="flex flex-col items-center justify-start h-[100vh] ">
      <Toaster />
      <Routes>
        <Route 
        path="/"
        element={authUser ? <Layout /> : <Navigate to={`/login`}/>}>
          <Route
          index
          element={<Home />} 
          />
          <Route path='/problems' element={<ProblemsPage />}/>

        </Route>
        <Route 
        path='/signup' 
        element={!authUser? <SignUpPage /> : <Navigate to={"/"}/>} />

        <Route 
        path='/login' 
        element={!authUser? <LoginPage /> : <Navigate to={"/"}/>} />

        <Route path='/problem/:id'
        element={authUser? <ExecutionPage /> : <Navigate to={'/login'}/>}
        />

        <Route element={<AdminRoute />}>
          <Route path='/add-problem' element={authUser? <AddProblem /> : <Navigate to="/login"/>} />
        </Route>
    
      </Routes>
    </div>
  )
}

export default App
