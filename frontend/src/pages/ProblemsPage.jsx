import React, { useEffect , useState} from 'react'
import usePlaylistStore from '../store/usePlaylistStore'
import PlaylistPopUp from '../components/PlaylistPopUp'
import useProblemStore from '../store/useProblemStore'
import ProblemTable from '../components/ProblemTable'
import { Loader } from 'lucide-react'

function ProblemsPage() {

  const {playlists, getAllPlaylists, isPlaylistsLoading} = usePlaylistStore()
  let popupHidden = true
  const [problems, setProblems] = useState([])
  const [selectedPlaylist , setSelectedPlaylist] = useState("all-problem")
  const {allProblems, isProblemsLoading, getAllProblems} = useProblemStore()

  useEffect(()=>{
    getAllPlaylists()
    getAllProblems()
    setProblems([...allProblems])
    if(!isPlaylistsLoading){
      console.log(playlists)
    }
  }, [popupHidden])
  if(isProblemsLoading ) 
  return (
    <div className="flex items-center justify-center h-screen">
            <Loader className="size-10 animate-spin"/>
      </div>
  ) 
  return (
    <div className='text-white min-w-screen grid grid-cols-9 mt-4'>
      <div className="hidden col-start-1 col-end-3  lg:flex w-full mt-4 ">
        <div className='flex flex-col'>
          <h3>Playlists</h3>
          <select onSelect={setSelectedPlaylist}>
            <option value="all-problems">
              All Problems
            </option>
            {playlists.map((playlist) => (
              <option value={playlist.id} key={playlist.id}>
              
                  <span>{playlist.title}</span>
                
              </option>
            ))}
          </select>
          <button>create new +</button>

        </div>
      </div>
      {
        problems.length > 0 && !isProblemsLoading? <ProblemTable 
        problems={problems} /> : <p>There is no problems found</p>
      }
      
    </div>
    
  )
}

export default ProblemsPage