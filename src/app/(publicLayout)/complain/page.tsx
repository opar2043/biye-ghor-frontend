"use client"

import React from "react"
import { AlertTriangle } from "lucide-react"
import ComplainForm from "@/src/app/components/Layout/ComplainForm"

export default function ComplainPage() {
  return (
    <div className="relative min-h-screen py-20 px-4 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest">
            <AlertTriangle className="w-3.5 h-3.5 fill-current" />
            Report an Issue
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
            We value your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">Safety & Trust</span>
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
            Experienced an issue with a member? Let us know so we can maintain a safe environment for everyone.
          </p>
        </div>

        <ComplainForm />
      </div>
    </div>
  )
}
