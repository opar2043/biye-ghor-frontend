"use client"

import React from "react"
import { Search, Heart, Shield, Users, MapPin, ChevronRight, CheckCircle2 } from "lucide-react"

export function Hero() {
  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-zinc-950">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-3xl opacity-60 -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-50 -ml-32 -mb-32" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Heart className="w-3.5 h-3.5 fill-current" />
          Trust By 2 Million+ Members
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 dark:text-white mb-8 leading-[1.05] animate-in fade-in slide-in-from-bottom-6 duration-1000">
          Find your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400">perfect match</span>
          <br />for life's journey.
        </h1>

        <p className="max-w-xl mx-auto text-lg text-zinc-500 dark:text-zinc-400 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
          Search from thousands of verified profiles across communities and locations.
          Your story of togetherness starts here.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500">
            <Shield className="w-5 h-5 text-indigo-500" />
            <span className="text-xs font-semibold uppercase tracking-widest">100% Verified</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500">
            <Users className="w-5 h-5 text-blue-500" />
            <span className="text-xs font-semibold uppercase tracking-widest">Safe & Secure</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <span className="text-xs font-semibold uppercase tracking-widest">Smart Matching</span>
          </div>
        </div>
      </div>

      {/* Stats Floatie */}
      <div className="hidden lg:block absolute right-12 bottom-24 p-4 rounded-md bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-xl animate-bounce duration-[3000ms]">
         <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
               <Heart className="w-5 h-5 text-indigo-600 fill-indigo-600" />
            </div>
            <div className="text-left">
               <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Success Stories</p>
               <p className="text-lg font-black text-zinc-900 dark:text-white">85,400+</p>
            </div>
         </div>
      </div>
    </div>
  )
}
