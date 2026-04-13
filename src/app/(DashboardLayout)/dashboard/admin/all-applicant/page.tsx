"use client"

import React from "react"
import { 
  Users, 
  Search, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Filter, 
  ChevronLeft, 
  ChevronRight,
  Eye,
  EyeOff
} from "lucide-react"

const mockApplicants = [
  { id: "101", name: "Ayesha Rahman", gender: "Female", age: 24, location: "Dhaka", education: "BSc in CSE", status: "Seen" },
  { id: "102", name: "Rahim Ahmed", gender: "Male", age: 28, location: "Chattogram", education: "MBA", status: "Unseen" },
  { id: "103", name: "Nusrat Jahan", gender: "Female", age: 23, location: "Sylhet", education: "BA in English", status: "Seen" },
  { id: "104", name: "Tanvir Hasan", gender: "Male", age: 30, location: "Rajshahi", education: "BBA", status: "Unseen" },
  { id: "105", name: "Mim Akter", gender: "Female", age: 25, location: "Khulna", education: "BSc in Pharmacy", status: "Seen" },
]

export default function AllApplicantPage() {
  return (
    <div className="p-6 lg:p-10 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
            All <span className="text-indigo-600">Applicants</span>
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
            Manage and monitor all profiles registered in the directory.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative group flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-indigo-600 transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="Search by ID or name..." 
              className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md pl-10 pr-4 py-2 text-sm outline-none focus:ring-4 focus:ring-indigo-600/10 focus:border-indigo-600/50 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-md text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
            <Filter size={16} />
            Filter
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800">
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">ID</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Applicant</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Gender</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Location</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Status</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {mockApplicants.map((app) => (
                <tr key={app.id} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/20 transition-colors group">
                  <td className="px-6 py-4 text-sm font-mono text-zinc-400">#{app.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-zinc-900 dark:text-white">{app.name}</span>
                      <span className="text-[11px] text-zinc-500">{app.education}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter ${
                      app.gender === "Female" ? "bg-rose-50 text-rose-600 dark:bg-rose-500/10" : "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10"
                    }`}>
                      {app.gender}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-500">{app.location}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       {app.status === "Seen" ? (
                         <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                           <Eye size={12} />
                           <span className="text-[11px] font-medium tracking-tight">Reviewed</span>
                         </div>
                       ) : (
                         <div className="flex items-center gap-1.5 text-zinc-400">
                           <EyeOff size={12} />
                           <span className="text-[11px] font-medium tracking-tight">Pending</span>
                         </div>
                       )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-zinc-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-md transition-all">
                        <Edit size={16} />
                      </button>
                      <button className="p-2 text-zinc-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-md transition-all">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Placeholder */}
        <div className="px-6 py-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <p className="text-xs text-zinc-500">Showing <span className="font-bold text-zinc-900 dark:text-white">5</span> of <span className="font-bold text-zinc-900 dark:text-white">128</span> entries</p>
          <div className="flex items-center gap-2">
            <button disabled className="p-2 border border-zinc-200 dark:border-zinc-800 rounded-md opacity-50"><ChevronLeft size={16} /></button>
            <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-xs font-bold">1</button>
            <button className="px-3 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md text-xs font-medium">2</button>
            <button className="px-3 py-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md text-xs font-medium">3</button>
            <button className="p-2 border border-zinc-200 dark:border-zinc-800 rounded-md hover:bg-zinc-50"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
