import React , { useState, useMemo } from 'react'
import useAuthStore from '../store/useAuthStore'
import {Link} from 'react-router-dom'
import {Bookmark, PencilIcon , Trash, TrashIcon, Plus, } from 'lucide-react'

function ProblemTable({problems}) {
    const {authUser} = useAuthStore();
    
    const [search, setSearch] = useState("")
    const [difficulty, setDifficulty] = useState("ALL")
    const [selectedTag, setSelectedTag] = useState("ALL");
    const [currentPage, setCurrentPage] = useState(1)

    const difficulties = ["EASY", "MEDIUM", "HARD"]

    const allTags =useMemo(()=>{
        if(!Array.isArray(problems)) return [];

        const tagSet = new Set()

        problems.forEach((problem) => problem.tags?.forEach((tag) => tagSet.add(tag)))

        return Array.from(tagSet)
    }, [problems]);

    const filteredProblems = useMemo(()=>{
        return(problems|| [])
        .filter((problem) => problem.title.toLowerCase().includes(search.toLowerCase()))
        .filter((problem)=> difficulty === "ALL" ? true : problem.difficulty?.includes(difficulty))
        .filter((problem) => selectedTag === "ALL" ? true : problem.tags?.includes(selectedTag))
    }, [problems, search, selectedTag, difficulty])

    const problemsPerPage = 5;

    const paginatedProblems = useMemo(() => {
       return filteredProblems.slice(
            (currentPage - 1) * problemsPerPage ,
            currentPage * problemsPerPage
       )
    }, [filteredProblems, currentPage])

    const handleDelete =() =>{}
    const handleAddToPlaylist =() =>{}

    return (
        <div className='col-start-1 lg:col-start-3 col-end-10 w-full  mx-auto px-4 py-16'>
            <div className=' flex justify-between items-center mb-6'>
                <h2 className='text-2xl font-bold'>
                    Problems
                </h2>
                <button
                    className='btn btn-primary bg-red-600 shadow-2xs shadow-red-400 border-red-400 gap-2'
                >
                    <Plus className='w-4 h-4'/>
                    Create Playlist
                </button>
            </div>
            <div className='flex flex-wrap justify-between items-center mb-6 gap-4'>
                <input type="text" 
                placeholder='Search by Title'
                className='input input-bordered  md:w-1/3 bg-linear-to-br bg-cover from-[#000000] to-[#3d3d3d]'
                onChange={(e) => setSearch(e.target.value)}
                />
                <select 
                className='select select-bordered bg-linear-to-br bg-cover from-[#000000] to-[#3d3d3d]'
                value= {difficulty}
                onChange={(e)=> setDifficulty(e.target.value)}
                >
                    <option value="ALL">All Difficulties</option>
                    {difficulties.map((diff) => (
                        <option key={diff} value={diff}>
                            {diff.charAt(0).toUpperCase() + diff.slice(1).toLowerCase()}
                        </option>
                    ))}
                </select>

                <select
                className='select select-bordered bg-linear-to-br bg-cover from-[#000000] to-[#3d3d3d]'
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                >
                    <option value="ALL">All tags</option>
                    {allTags.map((tag) =>(
                        <option value={tag} key={tag}>
                            {tag}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <table className='table rounded-xl bg-linear-to-br bg-cover from-[#3d3d3d] to-[#000000]'>
                    <thead className='w-fit bg-linear-to-br bg-cover from-[#000000] to-[#3d3d3d] text-white '>
                        <tr>
                            <th>Solved</th>
                            <th>Title</th>
                            <th>Tags</th>
                            <th>Difficulty</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='overflow'>
                        {paginatedProblems.length > 0 ? (
                            paginatedProblems.map((problem) => {
                const isSolved = problem.problemSolved.some(
                  (user) => user.userId === authUser?.id
                );
                return (
                  <tr key={problem.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={isSolved}
                        readOnly
                        className="checkbox checkbox-sm"
                      />
                    </td>
                    <td>
                      <Link to={`/problem/${problem.id}`} className="font-semibold hover:underline">
                        {problem.title}
                      </Link>
                    </td>
                    <td>
                      <div className="flex flex-wrap gap-1">
                        {(problem.tags || []).map((tag, idx) => (
                          <span
                            key={idx}
                            className="badge badge-outline badge-warning text-xs font-bold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td>
                      <span
                        className={`badge font-semibold text-xs text-white ${
                          problem.difficulty === "EASY"
                            ? "badge-success"
                            : problem.difficulty === "MEDIUM"
                            ? "badge-warning"
                            : "badge-error"
                        }`}
                      >
                        {problem.difficulty}
                      </span>
                    </td>
                    <td>
                      <div className="flex flex-col md:flex-row gap-2 items-start md:items-center">
                        {authUser?.userRole === "ADMIN" && (
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleDelete(problem.id)}
                              className="btn btn-sm btn-error"
                            >
                              <TrashIcon className="w-4 h-4 text-white" />
                            </button>
                            <button disabled className="btn btn-sm btn-warning">
                              <PencilIcon className="w-4 h-4 text-white" />
                            </button>
                          </div>
                        )}
                        <button
                          className="btn btn-sm btn-outline flex gap-2 items-center"
                          onClick={() => handleAddToPlaylist(problem.id)}
                        >
                          <Bookmark className="w-4 h-4" />
                          <span className="hidden sm:inline">Save to Playlist</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )  :
                        (<p>Problems Not available</p>)}
                    </tbody>
                </table>
                <div className='w-full flex items-center justify-center  mt-8'>
                   <button
                  className='btn btn-primary'
                  onClick={() => {
                    if(currentPage === 1){
                      return
                    }
                    setCurrentPage(currentPage-1)
                  }}>
                    Prev
                  </button>
                  <span>
                    {currentPage}/{Math.ceil(paginatedProblems.length/ problemsPerPage)}
                  </span>

                 
                  <button 
                  className='btn btn-primary'
                  onClick={() => {
                    if(Math.ceil(paginatedProblems.length / problemsPerPage) === currentPage){
                      return
                    }
                    setCurrentPage(currentPage+1)
                  }}>
                    Next
                  </button>
                </div>
            </div>
        </div>
    )
            
}

export default ProblemTable