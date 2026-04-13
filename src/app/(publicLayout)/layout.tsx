import React from "react"
import { Navbar } from "../components/Layout/Navbar"
import Footer from "../components/Layout/Footer"

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar user={null} />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
