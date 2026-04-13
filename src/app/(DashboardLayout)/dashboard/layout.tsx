"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  Menu, 
  X, 
  LogOut, 
  Bell, 
  User as UserIcon,
  ChevronRight
} from 'lucide-react'
import DashboardNavigation from '../../components/Layout/DashboardNavigation'

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-all duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 
        transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-full flex flex-col pt-20 lg:pt-0">
          
          {/* Sidebar Header (Mobile Only) */}
          <div className="flex items-center justify-between px-6 py-4 lg:hidden border-b border-zinc-100 dark:border-zinc-800">
            <span className="font-black text-xl tracking-tight text-indigo-600">DASHBOARD</span>
            <button onClick={() => setIsSidebarOpen(false)} className="p-2 -mr-2 text-zinc-500">
              <X size={20} />
            </button>
          </div>

          {/* Navigation Section */}
          <div className="flex-1 overflow-y-auto px-4 py-6 scrollbar-hide">
             <div className="mb-4 px-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
               Management
             </div>
             <DashboardNavigation />
          </div>

          {/* Sidebar Footer / User Profile */}
          <div className="p-4 border-t border-zinc-100 dark:border-zinc-800">
            <div className="flex items-center gap-3 p-3 rounded-md bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800/50 group transition-all">
              <div className="w-10 h-10 rounded-md bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-indigo-500/20">
                <UserIcon size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-zinc-900 dark:text-white truncate">Admin User</p>
                <p className="text-[10px] text-zinc-500 truncate">admin@biyeghor.com</p>
              </div>
              <button className="p-1.5 text-zinc-400 hover:text-rose-500 transition-colors">
                 <LogOut size={16} />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Dashboard Top Bar (Mobile Only Search/Menu) */}
        <header className="h-16 flex lg:hidden items-center justify-between px-6 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-30">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 -ml-2 text-zinc-500">
            <Menu size={20} />
          </button>
          <span className="font-black text-lg tracking-tight text-indigo-600">Biye Ghor</span>
          <div className="w-8" /> {/* Spacer */}
        </header>

        {/* Dashboard Breadcrumbs / Content Header */}
        <div className="hidden lg:flex items-center justify-between px-10 py-4 bg-white/50 dark:bg-zinc-900/30 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50">
           <div className="flex items-center gap-2 text-xs text-zinc-500">
             <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
             <ChevronRight size={12} className="text-zinc-300" />
             <span className="font-bold text-zinc-900 dark:text-white">Dashboard</span>
           </div>
           
           <div className="flex items-center gap-4">
             <button className="p-2 text-zinc-400 hover:text-indigo-600 transition-colors relative">
                <Bell size={18} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white dark:border-zinc-900" />
             </button>
             <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800" />
             <div className="text-[11px] font-bold text-zinc-900 dark:text-white bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1 rounded-md border border-indigo-100 dark:border-indigo-900/30">
               ADMIN MODE
             </div>
           </div>
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="pb-20">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
