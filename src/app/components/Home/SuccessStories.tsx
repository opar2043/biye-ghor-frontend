

import React from "react"
import { Quote, Star, Heart } from "lucide-react"

const stories = [
  {
    names: "Rahim & Ayesha",
    location: "Dhaka",
    year: "Married 2024",
    quote:
      "We found each other within just two months of joining. The verified profiles gave our families complete peace of mind throughout the process.",
    initials: "RA",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    names: "Tanvir & Nusrat",
    location: "Chattogram",
    year: "Married 2023",
    quote:
      "The smart matching truly works. Our values, family backgrounds, and dreams aligned perfectly — it felt like destiny brought us together.",
    initials: "TN",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    names: "Sakib & Farzana",
    location: "Sylhet",
    year: "Married 2024",
    quote:
      "Filtering by division and district helped us find someone close to home. The private messaging kept everything respectful and safe.",
    initials: "SF",
    gradient: "from-emerald-500 to-teal-500",
  },
]

export function SuccessStories() {
  return (
    <section className="relative py-20 md:py-28 bg-white dark:bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-rose-50 dark:bg-rose-900/10 rounded-full blur-3xl opacity-50 -ml-32" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-3xl opacity-50 -mr-32" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-500/10 border border-rose-100 dark:border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Heart className="w-3.5 h-3.5 fill-current" />
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mb-4 leading-tight">
            Real journeys, <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">real happiness</span>
          </h2>
          <p className="max-w-xl mx-auto text-zinc-500 dark:text-zinc-400">
            Thousands of couples have started their story of togetherness with us. Here are just a few.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div
              key={story.names}
              className="relative group bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-7 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-zinc-100 dark:text-zinc-800" />

              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-7 relative z-10">
                "{story.quote}"
              </p>

              <div className="flex items-center gap-4 pt-5 border-t border-zinc-100 dark:border-zinc-800">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${story.gradient} flex items-center justify-center text-white font-bold text-sm shadow-md`}
                >
                  {story.initials}
                </div>
                <div>
                  <p className="font-bold text-zinc-900 dark:text-white text-sm">
                    {story.names}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {story.location} · {story.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center">
            <p className="text-4xl font-black text-zinc-900 dark:text-white">85,400+</p>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mt-1">
              Happy Couples
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-zinc-900 dark:text-white">2M+</p>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mt-1">
              Verified Members
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-zinc-900 dark:text-white">98%</p>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mt-1">
              Satisfaction Rate
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
