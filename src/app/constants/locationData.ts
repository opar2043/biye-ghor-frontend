export const BANGLADESH_LOCATIONS = {
  "Dhaka": [
    "Dhaka", "Gazipur", "Kishoreganj", "Manikganj", "Munshiganj", "Narayanganj", "Narsingdi", "Tangail", "Faridpur", "Gopalganj", "Madaripur", "Rajbari", "Shariatpur"
  ],
  "Chattogram": [
    "Chattogram", "Cox's Bazar", "Bandarban", "Khagrachari", "Rangamati", "Noakhali", "Feni", "Lakshmipur", "Comilla", "Chandpur", "Brahmanbaria"
  ],
  "Rajshahi": [
    "Rajshahi", "Joypurhat", "Naogaon", "Natore", "Nawabganj", "Pabna", "Sirajganj", "Bogra"
  ],
  "Khulna": [
    "Khulna", "Bagerhat", "Chuadanga", "Jessore", "Jhenaidah", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira"
  ],
  "Barishal": [
    "Barishal", "Barguna", "Bhola", "Jhalokati", "Patuakhali", "Pirojpur"
  ],
  "Sylhet": [
    "Sylhet", "Habiganj", "Moulvibazar", "Sunamganj"
  ],
  "Rangpur": [
    "Rangpur", "Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Thakurgaon"
  ],
  "Mymensingh": [
    "Mymensingh", "Jamalpur", "Netrokona", "Sherpur"
  ]
} as const;

export type Division = keyof typeof BANGLADESH_LOCATIONS;
export const DIVISIONS = Object.keys(BANGLADESH_LOCATIONS) as Division[];
