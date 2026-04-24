'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin } from 'lucide-react'

type Person = {
  _id: string
  name: string
  number: string
  adress: string
  age: number
  gender: string
  color?: string
  hairColor?: string
  eyeColor?: string
  education?: string
  appoionmentAdress?: string
  isSeen?: boolean
  district?: string
  division?: string
  images?: string[]
  image?: string
}

export default function Card({ p }: { p: Person }) {
  const profileImage = p.image || p.images?.[0] || `https://ui-avatars.com/api/?name=${encodeURIComponent(p.name || 'User')}&background=random&size=400`
  
  // Extract district from address (assuming "District, Country" or similar)
  const addressParts = p.adress?.split(',') || []
  const district = p.district || (addressParts.length > 1 ? addressParts[addressParts.length - 2].trim() : p.adress?.trim() || 'Unknown')

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-md border border-gray-100 dark:border-zinc-800 overflow-hidden hover:shadow-xl dark:hover:shadow-indigo-500/5 transition-all duration-300 group max-w-sm mx-auto w-full">
      {/* Full Width Image (Facebook Profile Style) */}
      <div className="h-[200px] relative overflow-hidden bg-gray-50 dark:bg-zinc-800">
        <img
          src={profileImage}
          alt={p.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(p.name || 'User')}&background=random&size=400`
          }}
        />
        
        {/* Status Indicator */}
        <div className="absolute top-4 right-4">
          <span 
            className={`flex h-3 w-3 rounded-full border-2 border-white dark:border-zinc-900 shadow-sm ${p.isSeen ? 'bg-green-500' : 'bg-red-500'}`}
          />
        </div>

        {/* Visual Overlay for hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>

      {/* Profile Info */}
      <div className="p-5">
        <div className="text-center mb-5">
          <h3 className="font-bold text-[0.9rem] text-gray-900 dark:text-zinc-100 tracking-tight group-hover:text-indigo-600 transition-colors">
            {p.name}
          </h3>
          <div className="flex items-center justify-center gap-1.5 mt-1">
            <MapPin className="w-3.5 h-3.5 text-gray-400 dark:text-zinc-500" />
            <p className="text-[13px] font-medium text-gray-500 dark:text-zinc-400 uppercase tracking-wide">
              {district}
            </p>
          </div>
        </div>

        {/* View Profile Button (Facebook Style) */}
        <Link
          href={`/applicant/${p._id}`}
          className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#e4e6eb] dark:bg-zinc-800 hover:bg-[#d8dadf] dark:hover:bg-zinc-700 text-[#050505] dark:text-zinc-100 text-[14px] font-bold rounded-md transition-all duration-200 active:scale-[0.98]"
        >
          View Profile
        </Link>
      </div>
    </div>
  )
}