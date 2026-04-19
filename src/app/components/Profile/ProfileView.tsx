"use client"

import React from "react"
import { useAuth } from "../lib/useAuth"
import { 
  User, 
  Mail, 
  Shield, 
  Calendar,
  Settings,
  ShieldCheck,
} from "lucide-react"

export function ProfileView() {
  const { user } = useAuth()

  if (!user) return null

  const initials = user.displayName
    ? user.displayName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : user.email?.[0].toUpperCase() || "U"

  return (
    <div className="max-w-2xl mx-auto p-6 md:py-20 animate-in fade-in duration-500">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-8 md:p-12 shadow-sm">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-4 mb-10">
          <div className="w-24 h-24 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-2xl font-black text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700">
            {initials}
          </div>
          <div>
            <h1 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
              {user.displayName || "User Profile"}
            </h1>
            <p className="text-zinc-500 font-medium text-sm">{user.email}</p>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-wider border border-indigo-100 dark:border-indigo-500/20">
            <ShieldCheck size={12} />
            {user.email === "admin@test.com" ? "Administrator" : "User Member"}
          </div>
        </div>

        {/* Info Grid */}
        <div className="space-y-6 pt-10 border-t border-zinc-100 dark:border-zinc-800">
          <DetailItem 
            label="Email Address" 
            value={user.email || "N/A"} 
            icon={<Mail size={16} />} 
          />
          <DetailItem 
            label="Account ID" 
            value={user.uid} 
            icon={<Shield size={16} />} 
          />
          <DetailItem 
            label="Member Since" 
            value={user.metadata.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : "Unknown"} 
            icon={<Calendar size={16} />} 
          />
        </div>

        {/* Footer Actions */}
        <div className="mt-12 flex gap-3">
          <button className="flex-1 px-6 py-3 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-md font-bold hover:opacity-90 transition-all text-sm">
            Edit Information
          </button>
          <button className="px-3.5 py-3 border border-zinc-200 dark:border-zinc-800 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all">
            <Settings size={20} className="text-zinc-500" />
          </button>
        </div>
      </div>
    </div>
  )
}

function DetailItem({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between group">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-md bg-zinc-50 dark:bg-zinc-800/50 flex items-center justify-center text-zinc-400 group-hover:text-indigo-600 transition-colors">
          {icon}
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{label}</p>
          <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate max-w-[200px] md:max-w-none">
            {value}
          </p>
        </div>
      </div>
    </div>
  )
}
