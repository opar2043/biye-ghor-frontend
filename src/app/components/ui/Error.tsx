import React from 'react'
import { AlertCircle, RefreshCcw } from 'lucide-react'

interface ErrorProps {
  message?: string
  reset?: () => void
}

export default function Error({ message = "Something went wrong", reset }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full p-6 text-center">
      <div className="w-16 h-16 bg-rose-50 dark:bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-full flex items-center justify-center mb-4">
        <AlertCircle size={32} />
      </div>
      <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">Operation Failed</h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 max-w-xs mx-auto">
        {message}
      </p>
      {reset && (
        <button
          onClick={reset}
          className="flex items-center gap-2 px-6 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-md text-sm font-semibold hover:opacity-90 transition-all active:scale-95"
        >
          <RefreshCcw size={16} />
          Try Again
        </button>
      )}
    </div>
  )
}
