'use client'

import { useState, useMemo, useEffect } from "react"
import { Users, MapPin, RotateCcw, Map, ChevronDown, Search, Loader2 } from "lucide-react"
import Card from "../../components/Layout/Card"
import { BANGLADESH_LOCATIONS, DIVISIONS, Division } from "../../constants/locationData"
import { personRoutes } from "@/src/Service/person.route"
import personType from "@/src/Service/type"

export default function ApplicantPage() {
  const [initialPersons, setInitialPersons] = useState<personType[]>([])
  const [loading, setLoading] = useState(true)

  const [gender, setGender] = useState<string>("")
  const [division, setDivision] = useState<Division | "">("")
  const [district, setDistrict] = useState<string>("")

  useEffect(() => {
    const fetchPersons = async () => {
      try {
        const data = await personRoutes.getPersons()
        setInitialPersons(data)
      } catch (error) {
        console.error("Failed to fetch persons", error)
      } finally {
        setLoading(false)
      }
    }
    fetchPersons()
  }, [])

  const filteredPersons = useMemo(() => {
    return initialPersons.filter(person => {
      const matchGender = gender ? person.gender === gender : true
      const matchDivision = division ? person.division === division : true
      const matchDistrict = district ? person.district === district : true
      return matchGender && matchDivision && matchDistrict
    })
  }, [gender, division, district, initialPersons])

  const handleDivisionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDivision(e.target.value as Division | "")
    setDistrict("") // Reset district when division changes
  }

  const resetFilters = () => {
    setGender("")
    setDivision("")
    setDistrict("")
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-10 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h1 className="text-2xl font-bold tracking-tight">Profile Directory</h1>
          <p className="text-muted-foreground text-sm">Showing {filteredPersons.length} matches</p>
        </div>

        {/* Filters bar */}
        <div className="bg-card border border-border rounded-md p-6 mb-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
            {/* Gender Filter */}
            <div className="space-y-2.5">
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.05em] text-muted-foreground px-1">
                Gender
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none group-focus-within:scale-110 transition-transform">
                  <Users size={18} />
                </div>
                <select 
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full bg-background border border-border rounded-md pl-12 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all cursor-pointer hover:border-muted-foreground/30 appearance-none"
                >
                  <option value=""> All Genders</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                  <ChevronDown size={14} strokeWidth={2} />
                </div>
              </div>
            </div>

            {/* Division Filter */}
            <div className="space-y-2.5">
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.05em] text-muted-foreground px-1">
                Division
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none group-focus-within:scale-110 transition-transform">
                  <Map size={18} />
                </div>
                <select 
                  value={division}
                  onChange={handleDivisionChange}
                  className="w-full bg-background border border-border rounded-md pl-12 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all cursor-pointer hover:border-muted-foreground/30 appearance-none"
                >
                  <option value="">All Divisions</option>
                  {DIVISIONS.map(div => (
                    <option key={div} value={div}>{div}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                  <ChevronDown size={14} strokeWidth={2} />
                </div>
              </div>
            </div>

            {/* District Filter */}
            <div className="space-y-2.5">
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.05em] text-muted-foreground px-1">
                District
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none group-focus-within:scale-110 transition-transform">
                  <MapPin size={18} />
                </div>
                <select 
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  disabled={!division}
                  className="w-full bg-background border border-border rounded-md pl-12 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:border-muted-foreground/30 appearance-none"
                >
                  <option value="">All Districts</option>
                  {division && BANGLADESH_LOCATIONS[division].map(dist => (
                    <option key={dist} value={dist}>{dist}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                  <ChevronDown size={14} strokeWidth={2} />
                </div>
              </div>
            </div>

            {/* Reset Button */}
            <button 
              onClick={resetFilters}
              className="px-6 py-2.5 bg-secondary text-secondary-foreground font-semibold rounded-md text-sm border border-border hover:bg-muted transition-all cursor-pointer flex items-center justify-center gap-2 h-[42px] w-full lg:w-auto"
            >
              <RotateCcw size={16} />
              Reset
            </button>
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary mb-4" />
            <p className="text-muted-foreground">Loading profiles...</p>
          </div>
        ) : filteredPersons.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredPersons.map(p => (
              <Card key={p._id} p={p} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-card/50 rounded-3xl border border-dashed border-border">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-muted-foreground" strokeWidth={2} />
            </div>
            <h3 className="text-lg font-medium">No matches found</h3>
            <p className="text-muted-foreground mt-1">Try adjusting your filters to find more profiles.</p>
            <button 
              onClick={resetFilters}
              className="mt-6 text-primary font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
