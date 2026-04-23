

import { useState, useMemo } from "react"
import { Users, MapPin, RotateCcw, Map } from "lucide-react"
import Card from "../../components/Layout/Card"
import { BANGLADESH_LOCATIONS, DIVISIONS, Division } from "../../constants/locationData"
import { personRoutes } from "@/src/Service/person.route"

// const initialPersons = [
//   { _id: "1", name: "Ayesha Rahman", number: "01712345678", adress: "Dhaka, Bangladesh", age: 24, gender: "Female", color: "Fair", hairColor: "Black", eyeColor: "Brown", education: "BSc in CSE", appoionmentAdress: "Dhanmondi, Dhaka", isSeen: false, division: "Dhaka", district: "Dhaka" },
//   { _id: "2", name: "Rahim Ahmed", number: "01887654321", adress: "Chattogram, Bangladesh", age: 28, gender: "Male", color: "Wheatish", hairColor: "Black", eyeColor: "Black", education: "MBA", appoionmentAdress: "Agrabad, Chattogram", isSeen: true, division: "Chattogram", district: "Chattogram" },
//   { _id: "3", name: "Nusrat Jahan", number: "01911223344", adress: "Sylhet, Bangladesh", age: 23, gender: "Female", color: "Fair", hairColor: "Brown", eyeColor: "Brown", education: "BA in English", appoionmentAdress: "Zindabazar, Sylhet", isSeen: false, division: "Sylhet", district: "Sylhet" },
//   { _id: "4", name: "Tanvir Hasan", number: "01655667788", adress: "Rajshahi, Bangladesh", age: 30, gender: "Male", color: "Medium", hairColor: "Black", eyeColor: "Black", education: "BBA", appoionmentAdress: "Shaheb Bazar, Rajshahi", isSeen: true, division: "Rajshahi", district: "Rajshahi" },
//   { _id: "5", name: "Mim Akter", number: "01799887766", adress: "Khulna, Bangladesh", age: 25, gender: "Female", color: "Fair", hairColor: "Black", eyeColor: "Hazel", education: "BSc in Pharmacy", appoionmentAdress: "Sonadanga, Khulna", isSeen: false, division: "Khulna", district: "Khulna" },
//   { _id: "6", name: "Sabbir Hossain", number: "01544332211", adress: "Barishal, Bangladesh", age: 27, gender: "Male", color: "Wheatish", hairColor: "Black", eyeColor: "Brown", education: "Diploma in Engineering", appoionmentAdress: "Sadar Road, Barishal", isSeen: true, division: "Barishal", district: "Barishal" },
//   { _id: "7", name: "Farzana Islam", number: "01366778899", adress: "Comilla, Bangladesh", age: 22, gender: "Female", color: "Fair", hairColor: "Dark Brown", eyeColor: "Brown", education: "HSC", appoionmentAdress: "Kandirpar, Comilla", isSeen: false, division: "Chattogram", district: "Comilla" },
//   { _id: "8", name: "Mahmudul Hasan", number: "01422334455", adress: "Rangpur, Bangladesh", age: 29, gender: "Male", color: "Medium", hairColor: "Black", eyeColor: "Black", education: "BSc in Civil Engineering", appoionmentAdress: "Modern Mor, Rangpur", isSeen: true, division: "Rangpur", district: "Rangpur" },
//   { _id: "9", name: "Shila Chowdhury", number: "01833445566", adress: "Mymensingh, Bangladesh", age: 24, gender: "Female", color: "Wheatish", hairColor: "Black", eyeColor: "Brown", education: "BSc in Biology", appoionmentAdress: "Ganginarpar, Mymensingh", isSeen: false, division: "Mymensingh", district: "Mymensingh" },
//   { _id: "10", name: "Imran Khan", number: "01755664433", adress: "Dhaka, Bangladesh", age: 31, gender: "Male", color: "Medium", hairColor: "Black", eyeColor: "Black", education: "MSc in IT", appoionmentAdress: "Uttara, Dhaka", isSeen: true, division: "Dhaka", district: "Dhaka" },
// ]

export default async function ApplicantPage() {
   const initialPersons = await personRoutes.getPersons() // Fetch initial data from API
  const [gender, setGender] = useState<string>("")
  const [division, setDivision] = useState<Division | "">("")
  const [district, setDistrict] = useState<string>("")

  const filteredPersons = useMemo(() => {
    return initialPersons.filter(person => {
      const matchGender = gender ? person.gender === gender : true
      const matchDivision = division ? person.division === division : true
      const matchDistrict = district ? person.district === district : true
      return matchGender && matchDivision && matchDistrict
    })
  }, [gender, division, district])

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
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
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
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
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
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
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
        {filteredPersons.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredPersons.map(p => (
              <Card key={p._id} p={p} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-card/50 rounded-3xl border border-dashed border-border">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
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
