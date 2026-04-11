"use client"

import Link from "next/link"
import { Eye, EyeOff} from "lucide-react"
import { useState } from "react"
import { Button } from "@/src/app/components/ui/button"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Create an account</h1>
        <p className="text-muted-foreground text-sm">
          Join Biye Ghor and start your search for a life partner
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground" htmlFor="firstName">
              First name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="John"
              className="w-full bg-background border border-border rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground" htmlFor="lastName">
              Last name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Doe"
              className="w-full bg-background border border-border rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="name@example.com"
            className="w-full bg-background border border-border rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full bg-background border border-border rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          <p className="text-[10px] text-muted-foreground px-1 italic">
            Must be at least 8 characters with a mix of letters and numbers.
          </p>
        </div>

        <div className="flex items-start gap-2 px-1 py-1">
          <input 
            type="checkbox" 
            id="terms" 
            className="w-4 h-4 rounded-md border-border text-primary focus:ring-primary/20 mt-0.5 cursor-pointer" 
          />
          <label htmlFor="terms" className="text-xs font-medium text-muted-foreground cursor-pointer select-none leading-tight">
            I agree to the <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
          </label>
        </div>

        <Button className="w-full h-10 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
          Create Account
        </Button>
      </div>

      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground font-medium">Or join with</span>
        </div>
      </div>



      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link 
          href="/login" 
          className="font-semibold text-primary hover:underline hover:underline-offset-4"
        >
          Sign in
        </Link>
      </p>
    </div>
  )
}
