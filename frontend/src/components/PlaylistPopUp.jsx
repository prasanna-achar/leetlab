import React from 'react'
import usePlaylistStore from '../store/usePlaylistStore'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

function PlaylistPopUp({ isOpen = false, onClose }) {
  const { createPlaylist, isPlaylistsLoading } = usePlaylistStore()

  const playlistSchema = z.object({
    name: z.string().min(3, "Title should have minimum 3 characters"),
    description: z
      .string()
      .min(5, "Description should have minimum 5 characters")
      .max(160, "Description should be shorter than 160 characters"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(playlistSchema),
  })

  const onSubmit = async (data) => {
    try {
      await createPlaylist(data)
      onClose?.()
    } catch (error) {
      // errors are handled via toast in the store
    }
  }

  if (!isOpen) return null

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose?.()
    }
  }

  return (
    <div
      onClick={handleOverlayClick}
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4'
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-md space-y-5 rounded-2xl border border-white/10 bg-slate-900/95 p-6 text-slate-100 shadow-2xl shadow-black/40'
      >
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold'>Create Playlist</h2>
          <p className='text-sm text-slate-400'>
            Organize problems into themed collections to revisit later.
          </p>
        </div>
        <div className='space-y-2'>
          <label className='text-sm font-medium text-slate-300'>Title</label>
          <input
            {...register('name')}
            className='input input-bordered w-full bg-slate-950/60'
            placeholder='e.g. Dynamic Programming Essentials'
          />
          {errors.title && <p className='text-red-500 text-sm'>{errors.title.message}</p>}
        </div>

        <div className='space-y-2'>
          <label className='text-sm font-medium text-slate-300'>Description</label>
          <textarea
            {...register('description')}
            rows={3}
            className='textarea textarea-bordered w-full bg-slate-950/60'
            placeholder='Give your playlist some context...'
          />
          {errors.description && <p className='text-red-500 text-sm'>{errors.description.message}</p>}
        </div>

        <div className='flex items-center justify-end gap-3 pt-2'>
          <button
            type='button'
            onClick={onClose}
            className='btn btn-ghost gap-2 rounded-xl border border-white/10 bg-slate-900/80 px-5 text-sm text-slate-200 hover:border-rose-500/60 hover:text-white'
          >
            Cancel
          </button>
          <button
            type='submit'
            disabled={isPlaylistsLoading}
            className='btn btn-primary gap-2 rounded-xl bg-rose-600 px-6 text-sm font-semibold text-white shadow-lg shadow-rose-900/40 hover:bg-rose-500 disabled:bg-rose-500/60'
          >
            {isPlaylistsLoading ? 'Creating...' : 'Create Playlist'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default PlaylistPopUp
