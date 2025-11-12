import React , { useEffect, useMemo, useState } from 'react'
import useAuthStore from '../store/useAuthStore'
import {Link} from 'react-router-dom'
import {Bookmark, PencilIcon , TrashIcon } from 'lucide-react'

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
        .filter((problem) => problem.title?.toLowerCase().includes(search.toLowerCase()))
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

    useEffect(() => {
        setCurrentPage(1)
    }, [search, selectedTag, difficulty, problems])

    const handleDelete =() =>{}
    const handleAddToPlaylist =() =>{}

    const totalPages = Math.max(1, Math.ceil(filteredProblems.length / problemsPerPage))

    return (
        <div className='space-y-6'>
            <div className='flex flex-col gap-4 rounded-2xl border border-white/5 bg-white/5 p-5 shadow-inner shadow-black/20 sm:flex-row sm:items-center sm:justify-between'>
                <div className='space-y-1'>
                    <h2 className='text-xl font-semibold text-white'>Problems</h2>
                    <p className='text-sm text-slate-400'>
                        Search, filter, and practice from curated coding challenges.
                    </p>
                </div>
                <div className='flex flex-col gap-3 sm:flex-row'>
                    <input type="text" 
                        placeholder='Search by title or keyword'
                        className='input input-bordered w-full bg-slate-950/60 sm:w-56'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className='flex flex-col gap-3 sm:flex-row'>
                        <select 
                            className='select select-bordered w-full bg-slate-950/60 sm:w-36'
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
                            className='select select-bordered w-full bg-slate-950/60 sm:w-40'
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
                </div>
            </div>
            <div className='overflow-hidden rounded-2xl border border-white/5 shadow-xl shadow-black/30'>
                <table className='table table-pin-rows w-full'>
                    <thead className='bg-slate-950/70 text-xs uppercase tracking-wide text-slate-300'>
                        <tr>
                            <th className='font-semibold'>Solved</th>
                            <th className='font-semibold'>Title</th>
                            <th className='font-semibold'>Tags</th>
                            <th className='font-semibold'>Difficulty</th>
                            <th className='font-semibold'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-white/5 bg-slate-950/40'>
                        {paginatedProblems.length > 0 ? (
                            paginatedProblems.map((problem) => {
                const isSolved = problem.problemSolved?.some(
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
                      <Link to={`/problem/${problem.id}`} className="font-semibold text-white hover:text-rose-400 hover:underline">
                        {problem.title}
                      </Link>
                      <p className="text-xs text-slate-400">
                        {problem.description?.slice(0, 90)}
                        {problem.description && problem.description.length > 90 ? '…' : ''}
                      </p>
                    </td>
                    <td>
                      <div className="flex flex-wrap gap-1">
                        {(problem.tags || []).map((tag, idx) => (
                          <span
                            key={idx}
                            className="badge badge-outline border-rose-500/60 bg-rose-500/10 text-xs font-medium text-rose-200"
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
                      <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
                        {authUser?.userRole === "ADMIN" && (
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleDelete(problem.id)}
                              className="btn btn-sm btn-error btn-outline"
                            >
                              <TrashIcon className="w-4 h-4 text-white" />
                            </button>
                            <button disabled className="btn btn-sm btn-warning btn-outline opacity-60">
                              <PencilIcon className="w-4 h-4 text-white" />
                            </button>
                          </div>
                        )}
                        <button
                          className="btn btn-sm btn-outline flex gap-2 items-center border-rose-500/60 text-rose-200 hover:border-rose-500 hover:text-white"
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
                        (<tr>
                            <td colSpan={5} className='py-10 text-center text-slate-400'>
                                Problems Not available
                            </td>
                        </tr>)}
                    </tbody>
                </table>
                <div className='flex items-center justify-between gap-4 border-t border-white/5 bg-slate-950/60 px-5 py-4 text-sm text-slate-300'>
                  <span>
                    Showing{' '}
                    <span className='font-semibold text-white'>
                      {paginatedProblems.length}
                    </span>{' '}
                    of{' '}
                    <span className='font-semibold text-white'>
                      {filteredProblems.length}
                    </span>{' '}
                    problems
                  </span>
                   <button
                  className='btn btn-sm btn-outline border-white/20 text-slate-200 hover:border-rose-500 hover:text-white'
                  onClick={() => {
                    if(currentPage === 1){
                      return
                    }
                    setCurrentPage(currentPage-1)
                  }}>
                    Prev
                  </button>
                  <span className='rounded-full bg-white/10 px-4 py-1 font-semibold text-white'>
                    {currentPage} / {totalPages}
                  </span>

                 
                  <button 
                  className='btn btn-sm btn-outline border-white/20 text-slate-200 hover:border-rose-500 hover:text-white'
                  onClick={() => {
                    if(totalPages === currentPage){
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