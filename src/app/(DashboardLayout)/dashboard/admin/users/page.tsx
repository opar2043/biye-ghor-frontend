"use client"

import React from "react"
import { 
  UserCircle, 
  ShieldCheck, 
  UserCog, 
  Trash2, 
  Mail,
  MoreVertical,
  Check
} from "lucide-react"

const mockUsers = [
  { id: "1", name: "Super Admin", email: "admin@biyeghor.com", role: "admin" },
  { id: "2", name: "Kamal Ahmed", email: "kamal.mod@example.com", role: "moderator" },
  { id: "3", name: "Sumi Akter", email: "sumi.user@gmail.com", role: "user" },
  { id: "4", name: "Tanvir Hossain", email: "tanvir.h@outlook.com", role: "user" },
  { id: "5", name: "Mehedi Hasan", email: "mehedi@provider.net", role: "moderator" },
]

export default function UsersPage() {
  return (
    <div className="p-6 lg:p-10 space-y-8">
      <div>
        <h1 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
          User <span className="text-indigo-600">Management</span>
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
          Review user roles and manage access levels for the platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {mockUsers.map(user => (
           <div key={user.id} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-6 relative group hover:border-blue-500/30 transition-all shadow-sm">
             <div className="absolute right-4 top-4">
               <button className="p-1 px-2 text-[10px] font-bold uppercase tracking-tighter rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                 ID: {user.id}
               </button>
             </div>

             <div className="flex items-center gap-4 mb-6">
               <div className={`w-12 h-12 rounded-md flex items-center justify-center ${
                 user.role === "admin" ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600" : 
                 user.role === "moderator" ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600" : 
                 "bg-zinc-100 dark:bg-zinc-800 text-zinc-400"
               }`}>
                 {user.role === "admin" ? <ShieldCheck size={24} /> : user.role === "moderator" ? <UserCog size={24} /> : <UserCircle size={24} />}
               </div>
               <div>
                  <h3 className="font-bold text-zinc-900 dark:text-white">{user.name}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <Mail size={12} />
                    {user.email}
                  </div>
               </div>
             </div>

             <div className="space-y-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
               <div className="flex items-center justify-between">
                 <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Current Role</span>
                 <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${
                    user.role === "admin" ? "bg-blue-600 text-white" : 
                    user.role === "moderator" ? "bg-emerald-500 text-white" : 
                    "bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                 }`}>
                   {user.role}
                 </span>
               </div>

               <div className="grid grid-cols-2 gap-2 pt-2">
                 <button className="flex items-center justify-center gap-2 py-2 text-xs font-bold rounded-md bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-indigo-500 hover:text-indigo-600 transition-all">
                   <ShieldCheck size={14} />
                   Admin
                 </button>
                 <button className="flex items-center justify-center gap-2 py-2 text-xs font-bold rounded-md bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-emerald-500 hover:text-emerald-600 transition-all">
                   <UserCog size={14} />
                   Mod
                 </button>
               </div>

               <button className="w-full flex items-center justify-center gap-2 py-2 text-xs font-bold rounded-md bg-rose-50 dark:bg-rose-500/10 text-rose-600 border border-rose-100 dark:border-rose-900/30 hover:bg-rose-600 hover:text-white transition-all">
                 <Trash2 size={14} />
                 Remove User
               </button>
             </div>
           </div>
         ))}
      </div>
    </div>
  )
}
