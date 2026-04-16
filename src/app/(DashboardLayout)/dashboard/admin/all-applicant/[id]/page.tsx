import React from 'react'

export default function EditAppliciantPage({params}: {params: {id: string}}) {
    const id = params.id;
  return (
    <div>EditAppliciantPage - {id}</div>
  )
}
