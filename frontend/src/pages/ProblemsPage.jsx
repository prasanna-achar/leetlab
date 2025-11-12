import React, { useEffect, useMemo, useState } from 'react'
import { Loader, ListPlus, Sparkles } from 'lucide-react'

import usePlaylistStore from '../store/usePlaylistStore'
import useProblemStore from '../store/useProblemStore'
import PlaylistPopUp from '../components/PlaylistPopUp'
import ProblemTable from '../components/ProblemTable'

function ProblemsPage() {
  const { playlists, getAllPlaylists, isPlaylistsLoading } = usePlaylistStore()
  const { allProblems, isProblemsLoading, getAllProblems } = useProblemStore()

  const [visibleProblems, setVisibleProblems] = useState([])
  const [selectedPlaylist, setSelectedPlaylist] = useState('all-problems')
  const [isPlaylistModalOpen, setIsPlaylistModalOpen] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      await Promise.all([getAllPlaylists(), getAllProblems()])
    }
    loadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setVisibleProblems(allProblems ?? [])
  }, [allProblems])

  const handlePlaylistChange = (playlistId) => {
    setSelectedPlaylist(playlistId)
    if (playlistId === 'all-problems') {
      setVisibleProblems(allProblems ?? [])
      return
    }

    const playlist = playlists.find(({ id }) => id === playlistId)
    setVisibleProblems(playlist?.problems ?? [])
  }

  const playlistSummary = useMemo(() => {
    if (!Array.isArray(playlists)) return { total: 0, problems: 0 }
    const problemsInPlaylists = playlists.reduce(
      (acc, playlist) => acc + (playlist?.problems?.length ?? 0),
      0
    )
    return {
      total: playlists.length,
      problems: problemsInPlaylists,
    }
  }, [playlists])

  if (isProblemsLoading && !visibleProblems.length) {
    return (
      <div className='flex min-h-[60vh] items-center justify-center'>
        <Loader className='size-10 animate-spin text-rose-500' />
      </div>
    )
  }

  return (
    <div className='mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-16 sm:px-6 lg:px-8'>
      <header className='mt-6 flex flex-col gap-6 rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-black/30 backdrop-blur'>
        <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <p className='flex items-center gap-2 text-sm font-medium uppercase tracking-[0.3em] text-rose-400/80'>
              <Sparkles className='h-4 w-4' />
              Problem Explorer
            </p>
            <h1 className='mt-2 text-3xl font-bold text-white sm:text-4xl'>
              Practice problems tailored for your growth
            </h1>
            <p className='mt-2 max-w-2xl text-sm text-slate-300 sm:text-base'>
              Filter by playlists, difficulty, and tags. Save problems into curated lists to revisit and
              track your progress over time.
            </p>
          </div>
          <button
            onClick={() => setIsPlaylistModalOpen(true)}
            className='btn btn-primary gap-2 rounded-xl bg-rose-600 px-5 text-sm font-semibold text-white shadow-lg shadow-rose-900/40 hover:bg-rose-500'
          >
            <ListPlus className='h-4 w-4' />
            New Playlist
          </button>
        </div>
        <dl className='grid gap-4 text-sm text-slate-300 sm:grid-cols-3'>
          <div className='rounded-2xl border border-white/5 bg-white/5 p-4'>
            <dt className='text-xs uppercase tracking-wider text-slate-400'>All Problems</dt>
            <dd className='mt-2 text-2xl font-semibold text-white'>{allProblems?.length ?? 0}</dd>
          </div>
          <div className='rounded-2xl border border-white/5 bg-white/5 p-4'>
            <dt className='text-xs uppercase tracking-wider text-slate-400'>Playlists</dt>
            <dd className='mt-2 text-2xl font-semibold text-white'>{playlistSummary.total}</dd>
          </div>
          <div className='rounded-2xl border border-white/5 bg-white/5 p-4'>
            <dt className='text-xs uppercase tracking-wider text-slate-400'>Problems Curated</dt>
            <dd className='mt-2 text-2xl font-semibold text-white'>{playlistSummary.problems}</dd>
          </div>
        </dl>
      </header>

      <div className='grid gap-6 lg:grid-cols-[300px,1fr]'>
        <aside className='space-y-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/20 backdrop-blur'>
          <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold text-white'>Playlists</h2>
            <span className='rounded-full bg-rose-500/20 px-3 py-1 text-xs font-medium text-rose-300'>
              {playlists?.length ?? 0}
            </span>
          </div>
          <div className='space-y-2'>
            <button
              onClick={() => handlePlaylistChange('all-problems')}
              className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition hover:bg-white/10 ${
                selectedPlaylist === 'all-problems'
                  ? 'bg-rose-500/20 text-white ring-1 ring-rose-500/60'
                  : 'text-slate-300'
              }`}
            >
              <span>All Problems</span>
              <span className='text-xs font-semibold text-slate-400'>{allProblems?.length ?? 0}</span>
            </button>
            {isPlaylistsLoading ? (
              <div className='space-y-2'>
                {[...Array(3)].map((_, idx) => (
                  <div
                    key={idx}
                    className='h-12 animate-pulse rounded-xl bg-white/5'
                  />
                ))}
              </div>
            ) : (
              playlists?.map((playlist) => (
                <button
                  key={playlist.id}
                  onClick={() => handlePlaylistChange(playlist.id)}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition hover:bg-white/10 ${
                    selectedPlaylist === playlist.id
                      ? 'bg-rose-500/20 text-white ring-1 ring-rose-500/60'
                      : 'text-slate-300'
                  }`}
                >
                  <div className='flex flex-col'>
                    <span className='font-medium'>{playlist.title}</span>
                    {playlist.description && (
                      <span className='text-xs text-slate-400 line-clamp-1'>{playlist.description}</span>
                    )}
                  </div>
                  <span className='text-xs font-semibold text-slate-400'>
                    {playlist?.problems?.length ?? 0}
                  </span>
                </button>
              ))
            )}
          </div>
        </aside>

        <section className='rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-2xl shadow-black/30 backdrop-blur'>
          {visibleProblems.length > 0 ? (
            <ProblemTable problems={visibleProblems} />
          ) : (
            <div className='flex min-h-[300px] flex-col items-center justify-center gap-3 rounded-xl border border-white/5 bg-white/5 p-10 text-center text-slate-300'>
              <Sparkles className='h-8 w-8 text-rose-500' />
              <p className='text-lg font-semibold text-white'>No problems found</p>
              <p className='max-w-sm text-sm text-slate-400'>
                Try switching to a different playlist, or clear your filters to explore the full problem
                set.
              </p>
            </div>
          )}
        </section>
      </div>

      <PlaylistPopUp
        isOpen={isPlaylistModalOpen}
        onClose={() => setIsPlaylistModalOpen(false)}
      />
    </div>
  )
}

export default ProblemsPage
