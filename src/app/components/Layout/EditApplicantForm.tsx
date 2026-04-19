"use client"

import React, { useState, useEffect } from "react"
import { 
  User, 
  Phone, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Camera, 
  Eye, 
  CloudHail,
  ArrowRight,
  CheckCircle2,
  Map,
  Users,
  Save,
  Loader2
} from "lucide-react"
import { DIVISIONS, BANGLADESH_LOCATIONS } from "../../constants/locationData"
import { personRoutes } from "@/src/Service/person.route"
import personType from "@/src/Service/type"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function EditApplicantForm({ id }: { id: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<personType | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  useEffect(() => {
    const fetchApplicantData = async () => {
      try {
        const data = await personRoutes.getPersonById(id)
        setFormData(data)
        if (data.image) setImagePreview(data.image)
      } catch (error) {
        toast.error("Failed to fetch applicant details")
        router.back()
      } finally {
        setLoading(false)
      }
    }
    fetchApplicantData()
  }, [id, router])

  const handleChange = (e: any) => {
    const { name, value, type, files } = e.target

    if (type === "file" && files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setImagePreview(base64);
        setFormData(prev => prev ? ({ ...prev, image: base64 }) : null);
      };
      reader.readAsDataURL(file);
      return;
    }

    setFormData(prev => {
      if (!prev) return null
      const newData = { 
        ...prev, 
        [name]: type === "number" ? (value === "" ? 0 : Number(value)) : value 
      }
      if (name === "division") newData.district = "" 
      return newData
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData) return

    setIsSubmitting(true)
    const toastId = toast.loading("Updating applicant...")
    try {
      await personRoutes.updatePerson(formData)
      toast.success("Applicant updated successfully", { id: toastId })
      router.push("/dashboard/user/all-applicant")
    } catch (error) {
      console.error("Update error:", error)
      toast.error("Something went wrong", { id: toastId })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-3">
        <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
        <p className="text-zinc-500 font-medium">Loading applicant details...</p>
      </div>
    )
  }

  if (!formData) return null

  return (
    <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-2xl overflow-hidden animate-in fade-in duration-500">
      <div className="p-6 md:p-10">
        <div className="mb-10 flex items-center justify-between">
           <div>
              <h2 className="text-2xl font-black text-zinc-900 dark:text-white">Edit Profile</h2>
              <p className="text-zinc-500 text-sm">Update the information for {formData.name}</p>
           </div>
           <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest bg-zinc-50 dark:bg-zinc-900 px-3 py-1.5 rounded-md border border-zinc-200 dark:border-zinc-800">
             ID: {id.slice(-6)}
           </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 md:space-y-12">
          
          {/* Section: Basic Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
              <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-900 rounded-md flex items-center justify-center text-zinc-900 dark:text-zinc-100">
                <User size={20} />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Basic Information</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
              <FormField label="Full Name" icon={<User size={18} />}>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md pl-12 pr-4 py-3 focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all" />
              </FormField>

              <FormField label="Phone Number" icon={<Phone size={18} />}>
                <input required type="text" name="number" value={formData.number} onChange={handleChange} className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md pl-12 pr-4 py-3 focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all" />
              </FormField>

              <FormField label="Age" icon={<Calendar size={18} />}>
                <input required type="number" name="age" value={formData.age} onChange={handleChange} className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md pl-12 pr-4 py-3 focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all" />
              </FormField>

              <FormField label="Gender" icon={<Users size={18} />}>
                <select required name="gender" value={formData.gender} onChange={handleChange} className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md pl-12 pr-4 py-3 appearance-none cursor-pointer focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </FormField>

              <FormField label="Education" icon={<GraduationCap size={18} />}>
                <input required type="text" name="education" value={formData.education} onChange={handleChange} className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md pl-12 pr-4 py-3 focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all" />
              </FormField>

              <FormField label="Profile Image" icon={<Camera size={18} />}>
                <div className="flex flex-col gap-3">
                  <input 
                    type="file" 
                    name="image" 
                    accept="image/*"
                    onChange={handleChange} 
                    className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-md p-2 text-sm"
                  />
                  {imagePreview && (
                    <img src={imagePreview} className="w-16 h-16 object-cover rounded-md border" alt="Preview" />
                  )}
                </div>
              </FormField>

              <FormField label="YouTube Link" icon={<Eye size={18} />}>
                <input 
                  type="text" 
                  name="videoLink" 
                  value={formData.videoLink || ""} 
                  onChange={handleChange} 
                  placeholder="Paste YouTube URL here" 
                  className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md pl-12 pr-4 py-3 focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all"
                />
              </FormField>
            </div>
          </div>

          {/* Section: Physical Appearance */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
              <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-900 rounded-md flex items-center justify-center text-zinc-900 dark:text-zinc-100">
                <Camera size={20} />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Appearance Details</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
              <FormField label="Skin Color" icon={<CloudHail size={18} />}>
                <input required type="text" name="color" value={formData.color} onChange={handleChange} className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md pl-12 pr-4 py-3 focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all" />
              </FormField>

              <FormField label="Hair Color" icon={<CloudHail size={18} />}>
                <input required type="text" name="hairColor" value={formData.hairColor} onChange={handleChange} className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md pl-12 pr-4 py-3 focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all" />
              </FormField>

              <FormField label="Eye Color" icon={<Eye size={18} />}>
                <input required type="text" name="eyeColor" value={formData.eyeColor} onChange={handleChange} className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md pl-12 pr-4 py-3 focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all" />
              </FormField>
            </div>
          </div>

          {/* Section: Location Details */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
              <div className="w-10 h-10 bg-zinc-100 dark:bg-zinc-900 rounded-md flex items-center justify-center text-zinc-900 dark:text-zinc-100">
                <Map size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Location & Appointment</h3>
                <p className="text-sm text-zinc-500">Address and meeting preferences</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
              <FormField label="Division" icon={<Map size={18} />}>
                <select required name="division" value={formData.division} onChange={handleChange} className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md pl-12 pr-4 py-3 appearance-none cursor-pointer focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all">
                  <option value="">Select Division</option>
                  {(Object.keys(BANGLADESH_LOCATIONS)).map(div => <option key={div} value={div}>{div}</option>)}
                </select>
              </FormField>

              <FormField label="District" icon={<MapPin size={18} />}>
                <select required name="district" value={formData.district} onChange={handleChange} disabled={!formData.division} className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md pl-12 pr-4 py-3 appearance-none cursor-pointer focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all disabled:opacity-50">
                  <option value="">Select District</option>
                  {formData.division && (BANGLADESH_LOCATIONS as any)[formData.division]?.map((dist: string) => <option key={dist} value={dist}>{dist}</option>)}
                </select>
              </FormField>

              <div className="sm:col-span-2">
                <FormField label="Appointment Address" icon={<MapPin size={18} />}>
                  <input required type="text" name="appoionmentAdress" value={formData.appoionmentAdress} onChange={handleChange} placeholder="Specific area or office address" className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md pl-12 pr-4 py-3 focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all" />
                </FormField>
              </div>
            </div>
            
            <FormField label="Full Address" icon={<MapPin size={18} />}>
              <textarea required name="adress" value={formData.adress} onChange={handleChange} placeholder="Full residential address..." rows={3} className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md pl-12 pr-4 py-3 focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all resize-none" />
            </FormField>
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full h-14 bg-indigo-600 text-white rounded-md font-bold shadow-xl shadow-indigo-600/10 hover:bg-indigo-700 active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <>
                <Save size={20} />
                <span>Save Changes</span>
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
      <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 ml-1">
        {label}
      </label>
      <div className="relative group">
        <div className="absolute left-4 top-[14px] text-zinc-400 group-focus-within:text-indigo-600 transition-colors pointer-events-none">
          {icon}
        </div>
        {children}
      </div>
    </div>
  )
}
