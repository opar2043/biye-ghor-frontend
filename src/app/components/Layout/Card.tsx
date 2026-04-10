"use client";

// import React from "react";
// import Link from "next/link";
// import { FiPhone, FiMapPin, FiCalendar } from "react-icons/fi";

// type Person = {
//   _id: string;
//   name: string;
//   number: string;
//   adress: string;
//   age: number;
//   gender: string;
//   color: string;
//   hairColor: string;
//   eyeColor: string;
//   education: string;
//   appoionmentAdress: string;
//   isSeen: boolean;
// };

// function getInitials(name: string) {
//   return name
//     .split(" ")
//     .map((w) => w[0])
//     .join("")
//     .slice(0, 2)
//     .toUpperCase();
// }

// export default function Card({ p }: { p: Person }) {
//   const isFemale = p.gender === "Female";

//   return (
//     <div className="bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200">

//       {/* Top */}
//       <div className="flex items-start gap-3 p-5 pb-3 relative">
//         <div
//           className={`w-12 h-12 rounded-full flex items-center justify-center font-medium text-sm ${
//             isFemale
//               ? "bg-purple-100 text-purple-800"
//               : "bg-green-100 text-green-800"
//           }`}
//         >
//           {getInitials(p.name)}
//         </div>

//         <div className="flex-1 min-w-0">
//           <p className="font-medium text-sm text-gray-900 truncate">
//             {p.name}
//           </p>
//           <p className="text-xs text-gray-400">ID #{p._id}</p>
//         </div>

//         <div
//           className={`w-2.5 h-2.5 rounded-full mt-1 ${
//             p.isSeen ? "bg-green-500" : "bg-red-500"
//           }`}
//         />
//       </div>

//       {/* Tags */}
//       <div className="flex flex-wrap gap-2 px-5 pb-3 text-xs">
//         <span className="px-2 py-0.5 rounded-full bg-pink-100 text-pink-700">
//           {p.gender}
//         </span>
//         <span className="px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700">
//           {p.age} yrs
//         </span>
//         <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
//           {p.education}
//         </span>
//       </div>

//       {/* Info */}
//       <div className="px-5 pb-3 space-y-2 text-xs text-gray-500">
//         <div className="flex items-center gap-2">
//           <FiPhone className="text-gray-400" />
//           <span className="truncate">{p.number}</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <FiMapPin className="text-gray-400" />
//           <span className="truncate">{p.adress}</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <FiCalendar className="text-gray-400" />
//           <span className="truncate">{p.appoionmentAdress}</span>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="mx-5 border-t border-gray-200" />

//       {/* Actions */}
//       <div className="flex gap-2 p-5 pt-3">
//         <Link
//           href={`/applicant/${p._id}`}
//           className="flex-1 text-center py-1.5 text-xs rounded-md border border-indigo-500 text-indigo-600 hover:bg-indigo-100 transition"
//         >
//           View Profile
//         </Link>

//         <a
//           href={`tel:${p.number}`}
//           className="flex-1 text-center py-1.5 text-xs rounded-md border border-green-600 text-green-600 hover:bg-green-100 transition"
//         >
//           Contact
//         </a>
//       </div>
//     </div>
//   );
// }


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
}
 
function getInitials(name: string) {
  return name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()
}
 
function PhoneIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.71 3.41 2 2 0 0 1 3.68 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.66a16 16 0 0 0 6.06 6.06l1.02-1.02a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
 
function PinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
 
function CalendarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}
 
export default function Card({ p }: { p: Person }) {
  const isFemale = p.gender === 'Female'
 
  return (
    <div className="bg-white rounded-2xl border border-black/10 overflow-hidden hover:border-black/20 hover:shadow-md transition-all duration-200">
 
      {/* Top */}
      <div className="flex items-start gap-3 p-5 pb-3 relative">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center font-medium text-sm shrink-0"
          style={{
            background: isFemale ? '#EEEDFE' : '#E1F5EE',
            color: isFemale ? '#3C3489' : '#085041',
          }}
        >
          {getInitials(p.name)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-[15px] text-gray-900 truncate">{p.name}</p>
          <p className="text-xs text-gray-400">ID #{p._id}</p>
        </div>
        <div
          title={p.isSeen ? 'Seen' : 'Not seen'}
          className="w-2.5 h-2.5 rounded-full shrink-0 mt-1"
          style={{ background: p.isSeen ? '#1D9E75' : '#E24B4A' }}
        />
      </div>
 
      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 px-5 pb-3">
        <span className="text-[11px] px-2.5 py-0.5 rounded-full" style={{ background: '#FBEAF0', color: '#72243E' }}>
          {p.gender}
        </span>
        <span className="text-[11px] px-2.5 py-0.5 rounded-full" style={{ background: '#FAEEDA', color: '#633806' }}>
          {p.age} yrs
        </span>
        <span className="text-[11px] px-2.5 py-0.5 rounded-full" style={{ background: '#E6F1FB', color: '#0C447C' }}>
          {p.education}
        </span>
      </div>
 
      {/* Info rows */}
      <div className="px-5 pb-3 space-y-1.5">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <PhoneIcon /> <span className="truncate">{p.number}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <PinIcon /> <span className="truncate">{p.adress}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <CalendarIcon /> <span className="truncate">{p.appoionmentAdress}</span>
        </div>
      </div>
 
      {/* Divider */}
      <div className="mx-5 border-t border-black/[0.06]" />
 
      {/* Actions */}
      <div className="flex gap-2 p-5 pt-3">
        <Link
          href={`/applicant/${p._id}`}
          className="flex-1 text-center py-1.5 text-xs rounded-lg border transition-colors duration-150"
          style={{ borderColor: '#534AB7', color: '#534AB7' }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#EEEDFE')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
        >
          View profile
        </Link>
        <a
          href={`tel:${p.number}`}
          className="flex-1 text-center py-1.5 text-xs rounded-lg border transition-colors duration-150"
          style={{ borderColor: '#0F6E56', color: '#0F6E56' }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#E1F5EE')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
        >
          Contact
        </a>
      </div>
    </div>
  )
}
 