import { useEffect } from "react"
import useAuthStore from "../store/useAuthStore"
import useProblemStore from "../store/useProblemStore"
import { Link } from "react-router-dom"
import {Loader} from "lucide-react"
function Home(){

    const {getAllProblems, allProblems, isProblemsLoading} = useProblemStore()

    useEffect(() => {
        getAllProblems()
    }, [])

    return (
        <div className="flex flex-col min-h-screen ">
            <div 
            
            className="grid md:min-h-[50vh] min-h-[60vh] p-4  md:grid-cols-2 grid-rows-1 justify-center items-center ">
                <div className="flex flex-col justify-center items-center">
                    <h1
                    className="text-5xl text-red-700 font-bold mt-16"
                    >Code Chaos!!</h1>
                    <p className="text-white opacity-50 mb-8">A software where your code can create chaos by using your brain,<br />
                            Destroy Error as much as you can.</p>
                            <Link to={`/problems`}>
                                <button className="btn btn-primary my-8 bg-red-700 shadow-red-500 border-red-700">Begin Chaos</button>
                            </Link>
                </div>
                <div className="p-10 hidden md:block">
                    <img src="/Code Chaos.png" className="hidden md:block rounded-2xl shadow-2xs shadow-red-500 min-w-4" />
                </div>
            </div> 
            <h1 className="text-center text-red-700 font-bold text-4xl">Features</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 p-4 md:p-20 m-10 gap-10 ">
                <div className="card border-2 border-red-700 hover:scale-[0.995] duration-1000 hover:shadow-xl shadow-neutral-700"
                style={{
                    transition: "ease-in-out scale 0.6s"
                }}>
                    <div className="">
                        <img className="rounded-md" src="/image2.png" alt="" />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title text-red-400 text-xl ">Create your own Playlist</h3>
                        <p className="">Create your own playlist for recognize the problems as you wish.</p>
                    </div>
                </div>
                <div className="card border-2 border-red-700 hover:scale-[0.995] duration-1000 hover:shadow-xl shadow-neutral-700"
                style={{
                    transition: "ease-in-out scale 0.6s"
                }}>
                    <div className="">
                        <img className="rounded-md" src="/image2.png" alt="" />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title text-red-400 text-xl">Distraction free editor</h3>
                        <p className="">Clean and Inituative Code editor</p>
                    </div>
                </div>
                <div className="card border-2 border-red-700 hover:scale-[0.995] hover:shadow-xl hover:shadow-neutral-700"
                style={{
                    transition: "ease-in-out scale 0.6s, ease-in shadow 0.6s"
                }}>
                    <div className="">
                        <img className="rounded-md" src="/image2.png" alt="" />
                    </div>
                    <div className="card-body">
                        <h3 className="card-title text-red-400 text-xl">Smart Progress Tracking</h3>
                        <p className="">Detailed analytics and insights to monitor your improvement</p>
                    </div>
                </div>
            </div>    
        </div> 
    )
}

export default Home

