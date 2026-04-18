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
  Map,
  Users
} from "lucide-react"
import { DIVISIONS, BANGLADESH_LOCATIONS } from "../../constants/locationData"
import { personRoutes } from "@/src/Service/person.route"
import personType from "@/src/Service/type"
import { toast } from "sonner"
import { useAuth } from "../lib/useAuth"

export default function AddApplicantForm() {
  const { user } = useAuth()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<personType>({
    _id: "",
    name: "",
    number: "",
    age: 0,
    gender: "",
    education: "",
    division: "",
    district: "",
    color: "",
    hairColor: "",
    eyeColor: "",
    appoionmentAdress: "",
    adress: "",
    isSeen: false,
    isApprove: false,
  })

  const handleChange = (e: any) => {
    const { name, value, type } = e.target
    setFormData(prev => {
      const newData = { 
        ...prev, 
        [name]: type === "number" ? (value === "" ? 0 : Number(value)) : value 
      }
      if (name === "division") newData.district = "" // Reset district when division changes
      return newData
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const toastId = toast.loading("Adding applicant...")
    try {
      // Remove _id for new entries
      const { _id, ...submitData } = formData
      const data = await personRoutes.addPerson({ ...submitData, userEmail: user?.email } as personType)
      if (data) {
        toast.success("Applicant added successfully", { id: toastId })
        setIsSubmitted(true)
        // Reset form
        setFormData({
          _id: "",
          name: "",
          number: "",
          age: 0,
          gender: "",
          education: "",
          division: "",
          district: "",
          color: "",
          hairColor: "",
          eyeColor: "",
          appoionmentAdress: "",
          adress: "",
          isSeen: false,
          isApprove: false,
        })
      }
    } catch (error) {
      console.error("Submission error:", error)
      toast.error("Something went wrong", { id: toastId })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-white dark:bg-zinc-950 rounded-xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800 text-center animate-in zoom-in duration-500 shadow-2xl">
        <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-500" />
        </div>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Applicant Added Successfully</h2>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-sm mx-auto">
          The new profile has been registered and is now visible in the applicant directory.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="px-8 py-3 bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 rounded-lg font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all flex items-center gap-2 mx-auto"
        >
          <Plus size={18} />
          Add Another Applicant
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="p-6 md:p-10">
        <form onSubmit={handleSubmit} className="space-y-8 md:space-y-12">
          
          {/* Section: Basic Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
              <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-900 rounded-lg flex items-center justify-center text-zinc-900 dark:text-zinc-100">
                <User size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Basic Information</h3>
                <p className="text-sm text-zinc-500">Provide the essential details of the applicant</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
              <FormField label="Full Name" icon={<User size={18} />}>
                <input 
                  required 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="e.g. Ayesha Rahman" 
                  className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 dark:focus:border-zinc-100 transition-all"
                />
              </FormField>

              <FormField label="Phone Number" icon={<Phone size={18} />}>
                <input 
                  required 
                  type="text" 
                  name="number" 
                  value={formData.number} 
                  onChange={handleChange} 
                  placeholder="e.g. 017XXXXXXXX" 
                  className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 dark:focus:border-zinc-100 transition-all"
                />
              </FormField>

              <FormField label="Age" icon={<Calendar size={18} />}>
                <input 
                  required 
                  type="number" 
                  name="age" 
                  value={formData.age || ""} 
                  onChange={handleChange} 
                  placeholder="e.g. 24" 
                  className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 dark:focus:border-zinc-100 transition-all"
                />
              </FormField>

              <FormField label="Gender" icon={<Users size={18} />}>
                <select 
                  required 
                  name="gender" 
                  value={formData.gender} 
                  onChange={handleChange}
                  className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 dark:focus:border-zinc-100 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </FormField>

              <FormField label="Education" icon={<GraduationCap size={18} />}>
                <input 
                  required 
                  type="text" 
                  name="education" 
                  value={formData.education} 
                  onChange={handleChange} 
                  placeholder="e.g. BSc in CSE" 
                  className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 dark:focus:border-zinc-100 transition-all"
                />
              </FormField>
            </div>
          </div>

          {/* Section: Physical Appearance */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
              <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-900 rounded-lg flex items-center justify-center text-zinc-900 dark:text-zinc-100">
                <Camera size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Appearance Details</h3>
                <p className="text-sm text-zinc-500">How the applicant looks</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
              <FormField label="Skin Color" icon={<CloudHail size={18} />}>
                <input 
                  required 
                  type="text" 
                  name="color" 
                  value={formData.color} 
                  onChange={handleChange} 
                  placeholder="e.g. Fair" 
                  className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 dark:focus:border-zinc-100 transition-all"
                />
              </FormField>

              <FormField label="Hair Color" icon={<CloudHail size={18} />}>
                <input 
                  required 
                  type="text" 
                  name="hairColor" 
                  value={formData.hairColor} 
                  onChange={handleChange} 
                  placeholder="e.g. Black" 
                  className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 dark:focus:border-zinc-100 transition-all"
                />
              </FormField>

              <FormField label="Eye Color" icon={<Eye size={18} />}>
                <input 
                  required 
                  type="text" 
                  name="eyeColor" 
                  value={formData.eyeColor} 
                  onChange={handleChange} 
                  placeholder="e.g. Brown" 
                  className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 dark:focus:border-zinc-100 transition-all"
                />
              </FormField>
            </div>
          </div>

          {/* Section: Location Details */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
              <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-900 rounded-lg flex items-center justify-center text-zinc-900 dark:text-zinc-100">
                <Map size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Location & Appointment</h3>
                <p className="text-sm text-zinc-500">Address and meeting preferences</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
              <FormField label="Division" icon={<Map size={18} />}>
                <select 
                  required 
                  name="division" 
                  value={formData.division} 
                  onChange={handleChange}
                  className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 dark:focus:border-zinc-100 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select Division</option>
                  {(Object.keys(BANGLADESH_LOCATIONS)).map(div => <option key={div} value={div}>{div}</option>)}
                </select>
              </FormField>

              <FormField label="District" icon={<MapPin size={18} />}>
                <select 
                  required 
                  name="district" 
                  value={formData.district} 
                  onChange={handleChange} 
                  disabled={!formData.division}
                  className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 dark:focus:border-zinc-100 transition-all appearance-none cursor-pointer disabled:opacity-50"
                >
                  <option value="">Select District</option>
                  {formData.division && BANGLADESH_LOCATIONS[formData.division as keyof typeof BANGLADESH_LOCATIONS]?.map(dist => (
                    <option key={dist} value={dist}>{dist}</option>
                  ))}
                </select>
              </FormField>

              <div className="sm:col-span-2">
                <FormField label="Appointment Address" icon={<MapPin size={18} />}>
                  <input 
                    required 
                    type="text" 
                    name="appoionmentAdress" 
                    value={formData.appoionmentAdress} 
                    onChange={handleChange} 
                    placeholder="Specific area or office address" 
                    className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 dark:focus:border-zinc-100 transition-all"
                  />
                </FormField>
              </div>
            </div>
            
            <FormField label="Full Address" icon={<MapPin size={18} />}>
              <textarea 
                required 
                name="adress" 
                value={formData.adress} 
                onChange={handleChange} 
                placeholder="Full residential address..." 
                rows={3} 
                className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 dark:focus:border-zinc-100 transition-all resize-none" 
              />
            </FormField>
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full h-14 bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 rounded-xl font-bold shadow-xl shadow-zinc-900/10 hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
          >
            {isSubmitting ? (
              <div className="w-6 h-6 border-2 border-current border-t-transparent rounded-full animate-spin" />
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

function FormField({ label, icon, children }: { label: string, icon: React.ReactNode, children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 ml-1">
        {label}
      </label>
      <div className="relative group">
        <div className="absolute left-4 top-[14px] text-zinc-400 group-focus-within:text-zinc-900 dark:group-focus-within:text-zinc-100 transition-colors pointer-events-none">
          {icon}
        </div>
        {children}
      </div>
    </div>
  )
}

