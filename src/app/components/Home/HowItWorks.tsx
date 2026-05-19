"use client"

import React from "react"
import { UserPlus, Search, MessageCircle, Heart } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    title: "Create Profile",
    description: "Sign up and build your verified profile with photos, interests, and family background.",
    color: "indigo",
  },
  {
    icon: Search,
    title: "Search & Filter",
    description: "Browse thousands of profiles by gender, division, and district to find ideal matches.",
    color: "blue",
  },
  {
    icon: MessageCircle,
    title: "Connect Privately",
    description: "Reach out to matches you like through our safe and private messaging system.",
    color: "emerald",
  },
  {
    icon: Heart,
    title: "Find Your Match",
    description: "Begin your journey of togetherness with someone who shares your values and dreams.",
    color: "rose",
  },
]

const colorClasses: Record<string, { bg: string; text: string; ring: string }> = {
  indigo: {
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    text: "text-indigo-600 dark:text-indigo-400",
    ring: "ring-indigo-100 dark:ring-indigo-500/20",
  },
  blue: {
    bg: "bg-blue-50 dark:bg-blue-500/10",
    text: "text-blue-600 dark:text-blue-400",
    ring: "ring-blue-100 dark:ring-blue-500/20",
  },
  emerald: {
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    text: "text-emerald-600 dark:text-emerald-400",
    ring: "ring-emerald-100 dark:ring-emerald-500/20",
  },
  rose: {
    bg: "bg-rose-50 dark:bg-rose-500/10",
    text: "text-rose-600 dark:text-rose-400",
    ring: "ring-rose-100 dark:ring-rose-500/20",
  },
}

export function HowItWorks() {
  return (
    <section className="relative py-20 md:py-28 bg-zinc-50 dark:bg-zinc-900/30 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mb-4 leading-tight">
            Your journey in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400">four simple steps</span>
          </h2>
          <p className="max-w-xl mx-auto text-zinc-500 dark:text-zinc-400">
            From creating your profile to finding your life partner, we've made every step easy and secure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon
            const c = colorClasses[step.color]
            return (
              <div
                key={step.title}
                className="relative group bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-black flex items-center justify-center shadow-lg">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <div className={`w-14 h-14 rounded-xl ${c.bg} ${c.text} ring-1 ${c.ring} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
