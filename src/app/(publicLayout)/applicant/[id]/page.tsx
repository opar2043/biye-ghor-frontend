import React from "react";
import Link from "next/link";
import InstagramProfile from "@/src/app/components/Profile/InstagramProfile";
import personType from "@/src/Service/type";


// ── Mock data with image placeholders ──────
const persons = [
  {
    _id: "1",
    name: "Ayesha Rahman",
    number: "01712345678",
    adress: "Dhaka, Bangladesh",
    age: 24,
    gender: "Female",
    color: "Fair",
    hairColor: "Black",
    eyeColor: "Brown",
    education: "BSc in CSE",
    appoionmentAdress: "Dhanmondi, Dhaka",
    isSeen: false,
    images: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=800&q=80"
    ]
  },
  {
    _id: "2",
    name: "Rahim Ahmed",
    number: "01887654321",
    adress: "Chattogram, Bangladesh",
    age: 28,
    gender: "Male",
    color: "Wheatish",
    hairColor: "Black",
    eyeColor: "Black",
    education: "MBA",
    appoionmentAdress: "Agrabad, Chattogram",
    isSeen: true,
    images: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&q=80"
    ]
  },
  {
    _id: "3",
    name: "Nusrat Jahan",
    number: "01911223344",
    adress: "Sylhet, Bangladesh",
    age: 23,
    gender: "Female",
    color: "Fair",
    hairColor: "Brown",
    eyeColor: "Brown",
    education: "BA in English",
    appoionmentAdress: "Zindabazar, Sylhet",
    isSeen: false,
    images: [
      "https://images.unsplash.com/photo-1567532939604-b6c5b0ad2e01?w=800&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80"
    ]
  },
  {
    _id: "4",
    name: "Tanvir Hasan",
    number: "01655667788",
    adress: "Rajshahi, Bangladesh",
    age: 30,
    gender: "Male",
    color: "Medium",
    hairColor: "Black",
    eyeColor: "Black",
    education: "BBA",
    appoionmentAdress: "Shaheb Bazar, Rajshahi",
    isSeen: true,
    images: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80"
    ]
  },
  {
    _id: "5",
    name: "Mim Akter",
    number: "01799887766",
    adress: "Khulna, Bangladesh",
    age: 25,
    gender: "Female",
    color: "Fair",
    hairColor: "Black",
    eyeColor: "Hazel",
    education: "BSc in Pharmacy",
    appoionmentAdress: "Sonadanga, Khulna",
    isSeen: false,
  },
  {
    _id: "6",
    name: "Sabbir Hossain",
    number: "01544332211",
    adress: "Barishal, Bangladesh",
    age: 27,
    gender: "Male",
    color: "Wheatish",
    hairColor: "Black",
    eyeColor: "Brown",
    education: "Diploma in Engineering",
    appoionmentAdress: "Sadar Road, Barishal",
    isSeen: true,
  },
  {
    _id: "7",
    name: "Farzana Islam",
    number: "01366778899",
    adress: "Comilla, Bangladesh",
    age: 22,
    gender: "Female",
    color: "Fair",
    hairColor: "Dark Brown",
    eyeColor: "Brown",
    education: "HSC",
    appoionmentAdress: "Kandirpar, Comilla",
    isSeen: false,
  },
  {
    _id: "8",
    name: "Mahmudul Hasan",
    number: "01422334455",
    adress: "Rangpur, Bangladesh",
    age: 29,
    gender: "Male",
    color: "Medium",
    hairColor: "Black",
    eyeColor: "Black",
    education: "BSc in Civil Engineering",
    appoionmentAdress: "Modern Mor, Rangpur",
    isSeen: true,
  },
  {
    _id: "9",
    name: "Shila Chowdhury",
    number: "01833445566",
    adress: "Mymensingh, Bangladesh",
    age: 24,
    gender: "Female",
    color: "Wheatish",
    hairColor: "Black",
    eyeColor: "Brown",
    education: "BSc in Biology",
    appoionmentAdress: "Ganginarpar, Mymensingh",
    isSeen: false,
  },
  {
    _id: "10",
    name: "Imran Khan",
    number: "01755664433",
    adress: "Dhaka, Bangladesh",
    age: 31,
    gender: "Male",
    color: "Medium",
    hairColor: "Black",
    eyeColor: "Black",
    education: "MSc in IT",
    appoionmentAdress: "Uttara, Dhaka",
    isSeen: true,
  },
];

export default async function ViewCard({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // const p = await personRoutes.getPersonById(id)   ← swap in when ready
  const p = persons.find((x) => x._id === id);

  if (!p) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f7f5]">
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-4">Profile not found.</p>
          <Link
            href="/applicant"
            className="text-xs border border-black/20 px-4 py-2 rounded-md hover:bg-black/5 transition"
          >
            ← Back to list
          </Link>
        </div>
      </div>
    );
  }

  return <InstagramProfile p={p as personType} />;
}

