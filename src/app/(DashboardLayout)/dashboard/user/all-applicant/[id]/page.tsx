import EditApplicantForm from "@/src/app/components/Layout/EditApplicantForm"

export default function EditAppliciantPage({params}: {params: {id: string}}) {
  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">
      <EditApplicantForm id={params.id} />
    </div>
  )
}
