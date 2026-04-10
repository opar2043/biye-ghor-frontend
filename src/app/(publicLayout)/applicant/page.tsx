
// import { personRoutes } from '@/src/Service/person.route'

import Card from "../../components/Layout/Card"

const persons = [
  { _id: "1", name: "Ayesha Rahman", number: "01712345678", adress: "Dhaka, Bangladesh", age: 24, gender: "Female", color: "Fair", hairColor: "Black", eyeColor: "Brown", education: "BSc in CSE", appoionmentAdress: "Dhanmondi, Dhaka", isSeen: false },
  { _id: "2", name: "Rahim Ahmed", number: "01887654321", adress: "Chattogram, Bangladesh", age: 28, gender: "Male", color: "Wheatish", hairColor: "Black", eyeColor: "Black", education: "MBA", appoionmentAdress: "Agrabad, Chattogram", isSeen: true },
  { _id: "3", name: "Nusrat Jahan", number: "01911223344", adress: "Sylhet, Bangladesh", age: 23, gender: "Female", color: "Fair", hairColor: "Brown", eyeColor: "Brown", education: "BA in English", appoionmentAdress: "Zindabazar, Sylhet", isSeen: false },
  { _id: "4", name: "Tanvir Hasan", number: "01655667788", adress: "Rajshahi, Bangladesh", age: 30, gender: "Male", color: "Medium", hairColor: "Black", eyeColor: "Black", education: "BBA", appoionmentAdress: "Shaheb Bazar, Rajshahi", isSeen: true },
  { _id: "5", name: "Mim Akter", number: "01799887766", adress: "Khulna, Bangladesh", age: 25, gender: "Female", color: "Fair", hairColor: "Black", eyeColor: "Hazel", education: "BSc in Pharmacy", appoionmentAdress: "Sonadanga, Khulna", isSeen: false },
  { _id: "6", name: "Sabbir Hossain", number: "01544332211", adress: "Barishal, Bangladesh", age: 27, gender: "Male", color: "Wheatish", hairColor: "Black", eyeColor: "Brown", education: "Diploma in Engineering", appoionmentAdress: "Sadar Road, Barishal", isSeen: true },
  { _id: "7", name: "Farzana Islam", number: "01366778899", adress: "Comilla, Bangladesh", age: 22, gender: "Female", color: "Fair", hairColor: "Dark Brown", eyeColor: "Brown", education: "HSC", appoionmentAdress: "Kandirpar, Comilla", isSeen: false },
  { _id: "8", name: "Mahmudul Hasan", number: "01422334455", adress: "Rangpur, Bangladesh", age: 29, gender: "Male", color: "Medium", hairColor: "Black", eyeColor: "Black", education: "BSc in Civil Engineering", appoionmentAdress: "Modern Mor, Rangpur", isSeen: true },
  { _id: "9", name: "Shila Chowdhury", number: "01833445566", adress: "Mymensingh, Bangladesh", age: 24, gender: "Female", color: "Wheatish", hairColor: "Black", eyeColor: "Brown", education: "BSc in Biology", appoionmentAdress: "Ganginarpar, Mymensingh", isSeen: false },
  { _id: "10", name: "Imran Khan", number: "01755664433", adress: "Dhaka, Bangladesh", age: 31, gender: "Male", color: "Medium", hairColor: "Black", eyeColor: "Black", education: "MSc in IT", appoionmentAdress: "Uttara, Dhaka", isSeen: true },
]

export default async function ApplicantPage() {
  // const persons = await personRoutes.getPersons()

  return (
    <div className="min-h-screen bg-[#f8f7f5] py-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <h1 className="text-xl font-medium text-gray-900">Profile directory</h1>
          <span
            className="text-xs px-3 py-1 rounded-full"
            style={{ background: '#E6F1FB', color: '#0C447C' }}
          >
            {persons.length} profiles
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {persons.map(p => (
            <Card key={p._id} p={p} />
          ))}
        </div>
      </div>
    </div>
  )
}