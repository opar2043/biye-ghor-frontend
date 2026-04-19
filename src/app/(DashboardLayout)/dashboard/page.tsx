"use client"

import React, { useEffect, useState } from 'react'
import { 
  Users, 
  FileText, 
  AlertCircle, 
  TrendingUp, 
  Activity,
  ArrowUpRight,
  UserPlus,
  Heart,
  Calendar
} from 'lucide-react'
import { statsRoutes } from "@/src/Service/stats.route"
import { toast } from "sonner"

interface DashboardStats {
  usersCount: number;
  profilesCount: number;
  complaintsCount: number;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await statsRoutes.getStats();
        setStats(data);
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
        toast.error("Failed to load dashboard statistics");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: "Total Users",
      value: stats?.usersCount || 0,
      icon: Users,
      color: "indigo",
      description: "Registered account holders",
      trend: "+12.5%",
      bg: "bg-indigo-50 dark:bg-indigo-500/10",
      text: "text-indigo-600 dark:text-indigo-400",
      border: "border-indigo-100 dark:border-indigo-500/20"
    },
    {
      title: "Total Profiles",
      value: stats?.profilesCount || 0,
      icon: Heart,
      color: "emerald",
      description: "Active matrimony profiles",
      trend: "+8.2%",
      bg: "bg-emerald-50 dark:bg-emerald-500/10",
      text: "text-emerald-600 dark:text-emerald-400",
      border: "border-emerald-100 dark:border-emerald-500/20"
    },
    {
      title: "New Complaints",
      value: stats?.complaintsCount || 0,
      icon: AlertCircle,
      color: "rose",
      description: "Pending user reports",
      trend: "-2.4%",
      bg: "bg-rose-50 dark:bg-rose-500/10",
      text: "text-rose-600 dark:text-rose-400",
      border: "border-rose-100 dark:border-rose-500/20"
    }
  ];

  if (loading) {
    return (
      <div className="p-10 flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-10 space-y-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
            Dashboard <span className="text-indigo-600">Overview</span>
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-base mt-2 max-w-2xl font-medium">
            Welcome back! Here's what's happening across your platform today.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-white dark:bg-zinc-900 p-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <div className="px-4 py-2 flex items-center gap-2 text-sm font-bold text-zinc-700 dark:text-zinc-300">
            <Calendar size={16} className="text-indigo-600" />
            {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((card, idx) => (
          <div 
            key={idx} 
            className={`group p-8 rounded-md bg-white dark:bg-zinc-900 border ${card.border} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 ${card.bg} -mr-16 -mt-16 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity`} />
            
            <div className="flex justify-between items-start relative z-10">
              <div className={`p-4 rounded-md ${card.bg} ${card.text}`}>
                <card.icon size={28} strokeWidth={2.5} />
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[11px] font-bold text-zinc-600 dark:text-zinc-400">
                <TrendingUp size={12} className={card.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'} />
                {card.trend}
              </div>
            </div>

            <div className="mt-8 relative z-10">
              <span className="text-sm font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 block mb-1">
                {card.title}
              </span>
              <div className="flex items-baseline gap-2">
                <h2 className="text-4xl font-black text-zinc-900 dark:text-white tracking-tighter">
                  {card.value.toLocaleString()}
                </h2>
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-4 font-medium italic">
                {card.description}
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-zinc-50 dark:border-zinc-800/50 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-zinc-400 group-hover:text-indigo-600 transition-colors">
              View detailed report
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Activity Section Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-md p-8 text-white relative overflow-hidden shadow-2xl shadow-indigo-600/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 -mr-20 -mt-20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/20 -ml-16 -mb-16 rounded-full blur-2xl" />
          
          <div className="relative z-10 flex flex-col h-full justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-4 backdrop-blur-md">
                <Activity size={14} />
                System Activity
              </div>
              <h3 className="text-3xl font-black tracking-tight mb-4">
                Platform performance is <br /> <span className="text-indigo-200">at its peak today.</span>
              </h3>
              <p className="text-indigo-100/80 font-medium max-w-md">
                User engagement has increased by 15% compared to yesterday. All server clusters are operating normally.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-auto">
              <button className="px-6 py-2.5 bg-white text-indigo-600 rounded-md font-bold text-sm hover:scale-105 transition-transform shadow-lg">
                Generate Monthly Analysis
              </button>
              <button className="px-6 py-2.5 bg-white/10 text-white rounded-md font-bold text-sm hover:bg-white/20 transition-colors backdrop-blur-md">
                Systems Status
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md p-8 shadow-sm flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-zinc-900 dark:text-white">Recent Quick Actions</h4>
            <div className="w-8 h-8 rounded-full bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center">
              <Plus size={16} className="text-zinc-400" />
            </div>
          </div>
          
          <div className="space-y-3">
            {[
              { label: "Verify New Profiles", icon: Heart, color: "rose" },
              { label: "Approve User Edits", icon: UserPlus, color: "indigo" },
              { label: "Review Reports", icon: AlertCircle, color: "amber" }
            ].map((action, i) => (
              <button key={i} className="w-full flex items-center gap-4 p-3 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors group text-left">
                <div className={`w-10 h-10 rounded-md flex items-center justify-center bg-${action.color}-50 dark:bg-${action.color}-500/10 text-${action.color}-600`}>
                  <action.icon size={18} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-zinc-800 dark:text-zinc-200">{action.label}</div>
                  <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mt-0.5">Quick Link</div>
                </div>
                <ArrowUpRight size={16} className="text-zinc-300 group-hover:text-indigo-600 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Plus({ size, className }: { size: number, className: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}
