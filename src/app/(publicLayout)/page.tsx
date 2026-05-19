import { Hero } from "../components/Home/Hero";
import { HowItWorks } from "../components/Home/HowItWorks";
import { SuccessStories } from "../components/Home/SuccessStories";
import ApplicantPage from "./applicant/page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ApplicantPage />
      <HowItWorks />
      <SuccessStories />
    </div>
  );
}
