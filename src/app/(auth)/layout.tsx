import React from "react"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      {/* Left side - Visual/Branding */}
      <div className="hidden lg:flex flex-col justify-between p-12 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-emerald-500/20 transition-opacity duration-300" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-12">
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
              <span className="text-black font-black text-xl italic select-none">B</span>
            </div>
            <span className="font-bold text-xl tracking-tight">Ollo</span>
          </div>
          
          <h2 className="text-5xl font-black leading-[1.1] tracking-tight max-w-md">
            Find your <br />
            <span className="text-indigo-400">perfect match</span> <br />
            with us.
          </h2>
        </div>

        <div className="relative z-10">
          <p className="text-zinc-400 text-sm max-w-xs leading-relaxed">
            Joining Ollo means joining a community built on trust, sincerity, and the pursuit of lifelong companionship.
          </p>
          <div className="mt-6 flex items-center gap-4 text-xs text-zinc-500">
            <span>&copy; 2026 Ollo</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Right side - Form container */}
      <div className="flex flex-col items-center justify-center p-6 sm:p-12 relative">
        {/* Subtle background element for mobile */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl lg:hidden" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl lg:hidden" />
        
        <div className="w-full max-w-[400px] z-10 transition-all">
          {children}
        </div>
      </div>
    </div>
  )
}
