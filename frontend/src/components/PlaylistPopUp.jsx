import React from 'react'
import usePlaylistStore from '../store/usePlaylistStore'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

function PlaylistPopUp({ hidden = true }) {
  const { createPlaylist, isPlaylistsLoading } = usePlaylistStore()

  const playlistSchema = z.object({
    title: z.string().min(3, "Title should have minimum 3 characters"),
    description: z.string().min(5, "Description should have minimum 5 characters"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(playlistSchema),
  })

  const onSubmit = (data) => {
    createPlaylist(data)
  }

  if (hidden) return null

  return (
    <div className='w-screen h-screen fixed flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white p-6 rounded-lg shadow-lg w-80 space-y-4'
      >
        <div>
          <label className='block mb-1 font-medium'>Title</label>
          <input
            {...register('title')}
            className='w-full border border-gray-300 rounded px-3 py-2'
          />
          {errors.title && <p className='text-red-500 text-sm'>{errors.title.message}</p>}
        </div>

        <div>
          <label className='block mb-1 font-medium'>Description</label>
          <textarea
            {...register('description')}
            className='w-full border border-gray-300 rounded px-3 py-2'
          />
          {errors.description && <p className='text-red-500 text-sm'>{errors.description.message}</p>}
        </div>

        <button
          type='submit'
          disabled={isPlaylistsLoading}
          className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'
        >
          {isPlaylistsLoading ? 'Creating...' : 'Create Playlist'}
        </button>
      </form>
    </div>
  )
}

export default PlaylistPopUp
