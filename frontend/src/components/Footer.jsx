import React from 'react'
import { Github, Heart, Linkedin, Twitter } from 'lucide-react'

function Footer() {
  return (
    <footer className='mt-auto w-full rounded-3xl border border-white/5 bg-slate-950/70 px-6 py-8 text-slate-300 shadow-[0_-20px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur'>
      <div className='mx-auto flex w-full max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between'>
        <div>
          <p className='text-sm uppercase tracking-[0.4em] text-rose-400/80'>Code Chaos</p>
          <p className='mt-2 text-sm text-slate-400'>
            Built to make competitive programming practice more focused, delightful, and effective.
          </p>
        </div>
        <div className='flex flex-wrap items-center gap-4 text-sm text-slate-400'>
          <a
            href='https://github.com/'
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:border-rose-500/60 hover:text-white'
          >
            <Github className='h-4 w-4' />
            GitHub
          </a>
          <a
            href='https://twitter.com/'
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:border-rose-500/60 hover:text-white'
          >
            <Twitter className='h-4 w-4' />
            Twitter
          </a>
          <a
            href='https://linkedin.com/'
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 hover:border-rose-500/60 hover:text-white'
          >
            <Linkedin className='h-4 w-4' />
            LinkedIn
          </a>
        </div>
      </div>
      <div className='mt-6 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between'>
        <p>
          © {new Date().getFullYear()} Code Chaos. Crafted with{' '}
          <Heart className='inline h-3 w-3 text-rose-500' /> for learners and builders.
        </p>
        <div className='flex gap-4'>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Support</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer