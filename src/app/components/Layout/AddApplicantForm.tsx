"use client"

import React, { useState } from "react"
import { 
  User, 
  Phone, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Camera, 
  Eye, 
  CloudHail,
  Plus,
  ArrowRight,
  CheckCircle2,
  Map
} from "lucide-react"
import { DIVISIONS, BANGLADESH_LOCATIONS, Division } from "../../constants/locationData"

export default function AddApplicantForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    age: "",
    gender: "",
    education: "",
    division: "" as Division | "",
    district: "",
    color: "",
    hairColor: "",
    eyeColor: "",
    appoionmentAdress: "",
    adress: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => {
      const newData = { ...prev, [name]: value }
      if (name === "division") newData.district = "" // Reset district when division changes
      return newData
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-white dark:bg-zinc-900 rounded-md p-10 border border-emerald-100 dark:border-emerald-900/30 text-center animate-in zoom-in duration-500">
        <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-500" />
        </div>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Applicant Added Successfully</h2>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-sm mx-auto">
          The new profile has been registered and is now visible in the applicant directory.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="px-8 py-3 bg-indigo-600 text-white rounded-md font-bold hover:bg-indigo-700 transition-all flex items-center gap-2 mx-auto"
        >
          <Plus size={18} />
          Add Another Applicant
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-md shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="p-8 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-10">
          
          {/* Section: Basic Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
              <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-md flex items-center justify-center text-indigo-600">
                <User size={18} />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Basic Information</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FormField label="Full Name" name="name" icon={<User size={16} />}>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Ayesha Rahman" />
              </FormField>

              <FormField label="Phone Number" name="number" icon={<Phone size={16} />}>
                <input required type="text" name="number" value={formData.number} onChange={handleChange} placeholder="e.g. 017XXXXXXXX" />
              </FormField>

              <FormField label="Age" name="age" icon={<Calendar size={16} />}>
                <input required type="number" name="age" value={formData.age} onChange={handleChange} placeholder="e.g. 24" />
              </FormField>

              <FormField label="Gender" name="gender" icon={<Users size={16} />}>
                <select required name="gender" value={formData.gender} onChange={handleChange}>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </FormField>

              <FormField label="Education" name="education" icon={<GraduationCap size={16} />}>
                <input required type="text" name="education" value={formData.education} onChange={handleChange} placeholder="e.g. BSc in CSE" />
              </FormField>
            </div>
          </div>

          {/* Section: Physical Appearance */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
              <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-md flex items-center justify-center text-indigo-600">
                <Camera size={18} />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Appearance Details</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormField label="Skin Color" name="color" icon={<CloudHail size={16} />}>
                <input required type="text" name="color" value={formData.color} onChange={handleChange} placeholder="e.g. Fair" />
              </FormField>

              <FormField label="Hair Color" name="hairColor" icon={<CloudHail size={16} />}>
                <input required type="text" name="hairColor" value={formData.hairColor} onChange={handleChange} placeholder="e.g. Black" />
              </FormField>

              <FormField label="Eye Color" name="eyeColor" icon={<Eye size={16} />}>
                <input required type="text" name="eyeColor" value={formData.eyeColor} onChange={handleChange} placeholder="e.g. Brown" />
              </FormField>
            </div>
          </div>

          {/* Section: Location Details */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
              <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-md flex items-center justify-center text-emerald-600">
                <Map size={18} />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Location & Appointment</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FormField label="Division" name="division" icon={<Map size={16} />}>
                <select required name="division" value={formData.division} onChange={handleChange}>
                  <option value="">Select Division</option>
                  {DIVISIONS.map(div => <option key={div} value={div}>{div}</option>)}
                </select>
              </FormField>

              <FormField label="District" name="district" icon={<MapPin size={16} />}>
                <select required name="district" value={formData.district} onChange={handleChange} disabled={!formData.division}>
                  <option value="">Select District</option>
                  {formData.division && BANGLADESH_LOCATIONS[formData.division].map(dist => (
                    <option key={dist} value={dist}>{dist}</option>
                  ))}
                </select>
              </FormField>

              <div className="lg:col-span-2">
                <FormField label="Appointment Address" name="appoionmentAdress" icon={<MapPin size={16} />}>
                  <input required type="text" name="appoionmentAdress" value={formData.appoionmentAdress} onChange={handleChange} placeholder="Specific area or office address" />
                </FormField>
              </div>
            </div>
            
            <FormField label="Full Address" name="adress" icon={<MapPin size={16} />}>
              <textarea required name="adress" value={formData.adress} onChange={handleChange} placeholder="Full residential address..." rows={2} className="resize-none" />
            </FormField>
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full h-14 bg-indigo-600 text-white rounded-md font-bold shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 active:scale-[0.99] transition-all flex items-center justify-center gap-3 disabled:opacity-70 mt-4"
          >
            {isSubmitting ? (
              <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>Publish Applicant Profile</span>
                <ArrowRight size={20} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

function FormField({ label, name, icon, children }: { label: string, name: string, icon: React.ReactNode, children: React.ReactElement }) {
  return (
    <div className="space-y-2">
      <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 ml-1">
        {label}
      </label>
      <div className="relative group">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-indigo-600 transition-colors pointer-events-none">
          {icon}
        </div>
        {React.cloneElement(children, {
          className: `w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-md pl-12 pr-4 py-3 text-sm outline-none focus:ring-4 focus:ring-indigo-600/10 focus:border-indigo-600/50 transition-all ${children.props.className || ""}`
        })}
      </div>
    </div>
  )
}

function Users({ size, className }: { size: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
