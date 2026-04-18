'use client'
import React from 'react'
import Link from 'next/link'

type Person = {
  _id: string
  name: string
  number: string
  adress: string
  age: number
  gender: string
  color: string
  hairColor: string
  eyeColor: string
  education: string
  appoionmentAdress: string
  isSeen: boolean
  images?: string[]
}

export default function Card({ p }: { p: Person }) {
  const profileImage = p.images?.[0] || `https://api.dicebear.com/7.x/avataaars/svg?seed=${p.name}`
  
  // Extract district from address (assuming "District, Country" or similar)
  const addressParts = p.adress.split(',')
  const district = addressParts.length > 1 ? addressParts[addressParts.length - 2].trim() : p.adress.trim()

  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group max-w-sm mx-auto w-full">
      {/* Full Width Image (Facebook Profile Style) */}
      <div className="aspect-[4/5] relative overflow-hidden bg-gray-50">
        <img 
          src={profileImage} 
          alt={p.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Status Indicator */}
        <div className="absolute top-4 right-4">
          <span 
            className={`flex h-3 w-3 rounded-full border-2 border-white shadow-sm ${p.isSeen ? 'bg-green-500' : 'bg-red-500'}`}
          />
        </div>

        {/* Visual Overlay for hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>

      {/* Profile Info */}
      <div className="p-5">
        <div className="text-center mb-5">
          <h3 className="font-bold text-[1.1rem] text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">
            {p.name}
          </h3>
          <div className="flex items-center justify-center gap-1.5 mt-1">
            <svg 
              className="w-3.5 h-3.5 text-gray-400" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <p className="text-[13px] font-medium text-gray-500 uppercase tracking-wide">
              {district}
            </p>
          </div>
        </div>

        {/* View Profile Button (Facebook Style) */}
        <Link
          href={`/applicant/${p._id}`}
          className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#e4e6eb] hover:bg-[#d8dadf] text-[#050505] text-[14px] font-bold rounded-lg transition-all duration-200 active:scale-[0.98]"
        >
          View Profile
        </Link>
      </div>
    </div>
  )
}