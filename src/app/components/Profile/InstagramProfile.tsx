'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import personType from '@/src/Service/type'
import { ImageIcon, Film, Phone, Info, ChevronLeft, MapPin, List, Heart, MessageCircle } from 'lucide-react'
export default function InstagramProfile({ p }: { p: personType }) {
  const [activeTab, setActiveTab] = useState('images')
  
  const defaultImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(p.name || 'User')}&background=random&size=400`;
  
  let imagesList: string[] = [];
  const pData = p as any;
  if (pData.images && pData.images.length > 0) {
    imagesList = pData.images;
  } else if (p.image) {
    imagesList = Array.isArray(p.image) ? p.image : [p.image];
  } else {
    imagesList = [defaultImage];
  }

  const tabs = [
    { id: 'images', label: 'Photos', icon: <ImageIcon className="w-5 h-5" /> },
    { id: 'video', label: 'Video', icon: <Film className="w-5 h-5" /> },
    { id: 'details', label: 'Details', icon: <List className="w-5 h-5" /> },
    { id: 'contact', label: 'Contact', icon: <Phone className="w-5 h-5" /> },
    { id: 'info', label: 'About', icon: <Info className="w-5 h-5" /> }
  ]

  return (
    <div className="max-w-4xl mx-auto bg-white min-h-screen pb-20">
      {/* Mobile Instagram Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 flex items-center justify-between px-4 py-3">
        <Link href="/applicant" className="text-gray-900 overflow-hidden">
          <ChevronLeft className="w-6 h-6" />
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
                    src={imagesList[0]} 
                    alt={p.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = defaultImage;
                    }}
                  />
               </div>
            </div>
          </div>

          <div className="flex-1">



            <div className="hidden md:block">
               <p className="font-bold text-gray-900 text-xl">{p.name}</p>
               <p className="text-gray-600 text-sm mt-1">{p.education}</p>
               <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                 <MapPin className="w-4 h-4" /> {p.district ? `${p.district}, ${p.division}` : p.adress}
               </p>
            </div>
          </div>
        </div>

        {/* Mobile Bio */}
        <div className="md:hidden mb-6">
           <p className="font-bold text-sm text-gray-900">{p.name}</p>
           <p className="text-gray-600 text-sm">{p.education}</p>
           <p className="text-gray-500  italic mt-1 font-hindi text-xs block">
              "Matching souls, building homes."
           </p>
           <p className="text-blue-900 text-sm font-medium mt-0.5">matrimony.com/{p._id}</p>
        </div>

        {/* Mobile Stats */}
        <div className="flex md:hidden justify-around py-3 border-t border-gray-100 text-center text-sm">
           <div><p className="font-semibold">{imagesList.length}</p><p className="text-gray-500">photos</p></div>
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
              {imagesList.map((img, idx) => (
                <div key={idx} className="aspect-square bg-gray-100 relative group overflow-hidden">
                  <img 
                    src={img} 
                    alt={`Photo ${idx}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = defaultImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white font-bold">
                    <span className="flex items-center gap-1"><Heart className="w-5 h-5 fill-current" /> {Math.floor(Math.random() * 100) + 10}</span>
                    <span className="flex items-center gap-1"><MessageCircle className="w-5 h-5 fill-current" /> {Math.floor(Math.random() * 20) + 1}</span>
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
                <DetailItem label="Gender" value={p.gender || "N/A"} />
                <DetailItem label="Education" value={p.education || "N/A"} />
                <DetailItem label="Skin Tone" value={p.color || "N/A"} />
                <DetailItem label="Hair Color" value={p.hairColor || "N/A"} />
                <DetailItem label="Eye Color" value={p.eyeColor || "N/A"} />
                <DetailItem label="Division" value={p.division || "N/A"} />
                <DetailItem label="District" value={p.district || "N/A"} />
              </div>
            </div>  
          )}

          {activeTab === 'video' && (
            <div className="p-4 md:p-10 space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest border-b pb-2">Profile Video</h2>
              {p.videoLink ? (
                <div className="aspect-video w-full max-w-2xl mx-auto rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                  <a href={p.videoLink} target="_blank" rel="noreferrer" className="text-blue-600 font-medium hover:underline flex items-center gap-2">
                    <Film className="w-5 h-5" /> View Video Presentation
                  </a>
                </div>
              ) : (
                <div className="py-12 text-center bg-gray-50 rounded-lg border border-dashed border-gray-200">
                  <Film className="w-8 h-8 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500 font-medium">No video uploaded yet</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="p-4 md:p-10 space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
               <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest border-b pb-2">Contact Information</h2>
               <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-md">
                    <div className="p-2 bg-green-100 text-green-600 rounded-full">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Phone</p>
                      <p className="font-medium text-gray-900">{p.number || "N/A"}</p>
                    </div>
                  </div>
                  {p.email && (
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-md">
                      <div className="p-2 bg-purple-100 text-purple-600 rounded-full">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Email</p>
                        <p className="font-medium text-gray-900">{p.email}</p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-md">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-full">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Address</p>
                      <p className="font-medium text-gray-900">{p.adress || "N/A"}</p>
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
                    {p.name} is a {p.age}-year-old {p.gender?.toLowerCase() || "person"} with a background in {p.education || "education"}. 
                    Currently residing in {p.district ? `${p.district}, ${p.division}` : p.adress}, they are looking for a meaningful connection and a life partner who values tradition combined with modern perspectives.
                  </p>
                  <p>
                    <strong>Appearance:</strong> {p.color || "N/A"} skin tone with {p.hairColor?.toLowerCase() || "N/A"} hair and {p.eyeColor?.toLowerCase() || "N/A"} eyes.
                  </p>
                  <p>
                    <strong>Availability:</strong> Contact at {p.appoionmentAdress || p.adress || "their provided address"} for formal meetings and appointments.
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
