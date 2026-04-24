import React from "react";
import Link from "next/link";
import InstagramProfile from "@/src/app/components/Profile/InstagramProfile";
import personType from "@/src/Service/type";


import { personRoutes } from "@/src/Service/person.route";

export default async function ViewCard({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let p = null;
  try {
    p = await personRoutes.getPersonById(id);
  } catch (error) {
    console.error("Failed to fetch person details", error);
  }

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

