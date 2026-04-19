'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import personType from '@/src/Service/type'


export default function InstagramProfile({ p }: { p: personType }) {
  const [activeTab, setActiveTab] = useState('images')
  
  const images = p.images && p.images.length > 0 ? p.images : [
    `https://api.dicebear.com/7.x/avataaars/svg?seed=${p.name}`,
    `https://api.dicebear.com/7.x/pixel-art/svg?seed=${p.name}`,
    `https://api.dicebear.com/7.x/bottts/svg?seed=${p.name}`,
    `https://api.dicebear.com/7.x/adventurer/svg?seed=${p.name}`
  ]

  const tabs = [
    { id: 'images', label: 'Images', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    )},
    { id: 'details', label: 'Details', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )},
    { id: 'contact', label: 'Contact', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )},
    { id: 'info', label: 'Info', icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )}
  ]

  return (
    <div className="max-w-4xl mx-auto bg-white min-h-screen pb-20">
      {/* Mobile Instagram Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 flex items-center justify-between px-4 py-3">
        <Link href="/applicant" className="text-gray-900 overflow-hidden">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <span className="font-bold text-gray-900 truncate max-w-[200px]">{p.name}</span>
        <div className="w-6" /> {/* Spacer */}
      </div>

      {/* Profile Header Section */}
      <div className="p-4 md:p-8">
        <div className="flex items-center gap-6 md:gap-12 mb-6">
          <div className="relative group">
            <div className="w-20 h-20 md:w-36 md:h-36 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600">
               <div className="w-full h-full rounded-full border-4 border-white overflow-hidden bg-gray-100">
                  <img 
                    src={images[0]} 
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
               </div>
            </div>
          </div>

          <div className="flex-1">



            <div className="hidden md:block">
               <p className="font-bold text-gray-900">{p.name}</p>
               <p className="text-gray-600 text-sm">{p.education}</p>
               <p className="text-gray-500 text-sm">{p.adress}</p>
            </div>
          </div>
        </div>

        {/* Mobile Bio */}
        <div className="md:hidden mb-6">
           <p className="font-bold text-sm text-gray-900">{p.name}</p>
           <p className="text-gray-600 text-sm">{p.education}</p>
           <p className="text-gray-500 text-sm italic mt-1 font-hindi text-xs block">
              "Matching souls, building homes."
           </p>
           <p className="text-blue-900 text-sm font-medium mt-0.5">matrimony.com/{p._id}</p>
        </div>

        {/* Mobile Stats */}
        <div className="flex md:hidden justify-around py-3 border-t border-gray-100 text-center text-sm">
           <div><p className="font-semibold">{images.length}</p><p className="text-gray-500">posts</p></div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-t border-gray-100">
        <div className="flex justify-around">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex flex-col items-center py-3 border-t transition-all duration-300 ${
                activeTab === tab.id 
                ? 'border-gray-900 text-gray-900' 
                : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab.icon}
              <span className="text-[10px] uppercase tracking-widest mt-1 font-bold md:hidden">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-0.5">
          {activeTab === 'images' && (
            <div className="grid grid-cols-3 gap-0.5 md:gap-4 px-0.5 md:px-0">
              {images.map((img, idx) => (
                <div key={idx} className="aspect-square bg-gray-100 relative group overflow-hidden">
                  <img 
                    src={img} 
                    alt={`Selfie ${idx}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white font-bold">
                    <span className="flex items-center gap-1"><svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg> 84</span>
                    <span className="flex items-center gap-1"><svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" /></svg> 12</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'details' && (
            <div className="p-4 md:p-10 space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest border-b pb-2">Personal Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                <DetailItem label="Age" value={`${p.age} years`} />
                <DetailItem label="Gender" value={p.gender} />
                <DetailItem label="Education" value={p.education} />
                <DetailItem label="Skin Tone" value={p.color} />
                <DetailItem label="Hair Color" value={p.hairColor} />
                <DetailItem label="Eye Color" value={p.eyeColor} />
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="p-4 md:p-10 space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
               <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest border-b pb-2">Contact Information</h2>
               <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-md">
                    <div className="p-2 bg-green-100 text-green-600 rounded-full">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Phone</p>
                      <p className="font-medium text-gray-900">{p.number}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-md">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-full">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Address</p>
                      <p className="font-medium text-gray-900">{p.adress}</p>
                    </div>
                  </div>
                  <a 
                    href={`tel:${p.number}`}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gray-900 text-white font-bold rounded-md active:scale-95 transition-transform"
                  >
                    Call Now
                  </a>
               </div>
            </div>
          )}

          {activeTab === 'info' && (
            <div className="p-4 md:p-10 space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
               <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest border-b pb-2">Biography & Info</h2>
               <div className="prose prose-sm text-gray-600">
                  <p>
                    {p.name} is a {p.age}-year-old {p.gender.toLowerCase()} professional with a background in {p.education}. 
                    Currently residing in {p.adress}, they are looking for a meaningful connection and a life partner who values tradition combined with modern perspectives.
                  </p>
                  <p>
                    <strong>Appearance:</strong> {p.color} skin tone with {p.hairColor.toLowerCase()} hair and {p.eyeColor.toLowerCase()} eyes.
                  </p>
                  <p>
                    <strong>Availability:</strong> Contact at {p.appoionmentAdress} for formal meetings and appointments.
                  </p>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-50">
      <span className="text-sm text-gray-500 font-medium">{label}</span>
      <span className="text-sm text-gray-900 font-bold">{value}</span>
    </div>
  )
}
