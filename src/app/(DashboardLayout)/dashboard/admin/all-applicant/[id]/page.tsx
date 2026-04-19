import EditApplicantForm from "@/src/app/components/Layout/EditApplicantForm"

export default async function AdminEditApplicantPage({params}: {params: Promise<{id: string}>}) {
  const { id } = await params;
  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">
      <EditApplicantForm id={id} />
    </div>
  )
}
