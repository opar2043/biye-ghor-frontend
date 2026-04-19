import React from 'react'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full gap-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-indigo-600/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="text-sm font-medium text-zinc-500 animate-pulse">Loading content...</p>
    </div>
  )
}
