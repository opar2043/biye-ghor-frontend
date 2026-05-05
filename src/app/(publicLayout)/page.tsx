import { Hero } from "../components/Home/Hero";
import ApplicantPage from "./applicant/page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Other sections like Features, Testimonials, etc. can go here */}
      <ApplicantPage />
      <Hero />

    </div>
  );
}
