import React from "react";
import Link from "next/link";
// import { personRoutes } from '@/src/Service/person.route'

type Person = {
  _id: string;
  name: string;
  number: string;
  adress: string;
  age: number;
  gender: string;
  color: string;
  hairColor: string;
  eyeColor: string;
  education: string;
  appoionmentAdress: string;
  isSeen: boolean;
};

// ── Temporary mock — replace with your real fetch ──────
const persons: Person[] = [
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

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-black/[0.06] last:border-none">
      <span className="text-xs text-gray-400 w-28 shrink-0 pt-0.5">
        {label}
      </span>
      <span className="text-sm text-gray-800 flex-1">{value}</span>
    </div>
  );
}

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
            className="text-xs border border-black/20 px-4 py-2 rounded-lg hover:bg-black/5 transition"
          >
            ← Back to list
          </Link>
        </div>
      </div>
    );
  }

  const isFemale = p.gender === "Female";

  return (
    <div className="min-h-screen bg-[#f8f7f5] py-10 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Back */}
        <Link
          href="/applicant"
          className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 mb-6 transition-colors"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to applicants
        </Link>

        {/* Profile card */}
        <div className="bg-white rounded-2xl border border-black/10 overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-4 p-6 border-b border-black/[0.06]">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center font-medium text-xl shrink-0"
              style={{
                background: isFemale ? "#EEEDFE" : "#E1F5EE",
                color: isFemale ? "#3C3489" : "#085041",
              }}
            >
              {getInitials(p.name)}
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-lg font-medium text-gray-900 truncate">
                {p.name}
              </h1>
              <p className="text-sm text-gray-400 truncate">
                {p.education} · {p.adress}
              </p>
              <div className="mt-1.5">
                <span
                  className="text-[11px] px-2.5 py-0.5 rounded-full"
                  style={{
                    background: p.isSeen ? "#EAF3DE" : "#FCEBEB",
                    color: p.isSeen ? "#27500A" : "#791F1F",
                  }}
                >
                  {p.isSeen ? "Seen" : "Not seen"}
                </span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="px-6 py-2">
            <DetailRow label="Phone" value={p.number} />
            <DetailRow label="Address" value={p.adress} />
            <DetailRow label="Appointment" value={p.appoionmentAdress} />
            <DetailRow label="Age" value={`${p.age} years old`} />
            <DetailRow label="Gender" value={p.gender} />
            <DetailRow label="Skin tone" value={p.color} />
            <DetailRow label="Hair color" value={p.hairColor} />
            <DetailRow label="Eye color" value={p.eyeColor} />
          </div>

          {/* Footer actions */}
          <div className="flex gap-2 p-6 pt-4 border-t border-black/[0.06]">
            <Link
              href="/applicant"
              className="px-5 py-2 text-sm rounded-xl border border-black/15 text-gray-500 hover:bg-gray-50 transition-colors"
            >
              Back
            </Link>
            <a
              href={`tel:${p.number}`}
              className="flex-1 text-center py-2 text-sm rounded-xl font-medium transition-colors"
              style={{
                background: "#E1F5EE",
                color: "#085041",
                border: "0.5px solid #0F6E56",
              }}
            >
              Call — {p.number}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
