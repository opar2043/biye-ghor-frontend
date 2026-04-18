"use client"

import React from "react"
import AddApplicantForm from "@/src/app/components/Layout/AddApplicantForm"
import { PlusCircle } from "lucide-react"

export default function AddAppliciantUserPage() {
  return (
    <div className="relative min-h-screen p-6 lg:p-10 space-y-8 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-50 -mr-48 -mt-48" />
      
      <div className="relative z-10 max-w-5xl mx-auto space-y-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-indigo-600 font-bold uppercase tracking-widest text-[10px]">
            <PlusCircle size={14} />
            Applicant Management
          </div>
          <h1 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
            Register New <span className="text-indigo-600">Applicant</span>
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xl">
            Fill out the form below to add a new profile to the matrimony directory. 
            All fields are required to maintain high-quality matching data.
          </p>
        </div>

        <AddApplicantForm />
      </div>
    </div>
  )
}
