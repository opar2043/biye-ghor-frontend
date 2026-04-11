"use client"

import Link from "next/link"
import { Eye, EyeOff} from "lucide-react"
import { useState } from "react"
import { Button } from "@/src/app/components/ui/button"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="max-w-md mx-auto  space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
        <p className="text-muted-foreground text-sm">
          Enter your credentials to access your account
        </p>
      </div>

      <div className="space-y-4">
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
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground" htmlFor="password">
              Password
            </label>
            <Link 
              href="/forgot-password" 
              className="text-xs font-medium text-primary hover:underline hover:underline-offset-4"
            >
              Forgot password?
            </Link>
          </div>
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
        </div>

        <div className="flex items-center gap-2 px-1">
          <input 
            type="checkbox" 
            id="remember" 
            className="w-4 h-4 rounded-md border-border text-primary focus:ring-primary/20 cursor-pointer" 
          />
          <label htmlFor="remember" className="text-xs font-medium text-muted-foreground cursor-pointer select-none">
            Stay logged in for 30 days
          </label>
        </div>

        <Button className="w-full h-10 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
          Sign In
        </Button>
      </div>

      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground font-medium">Or continue with</span>
        </div>
      </div>



      <p className="text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <Link 
          href="/register" 
          className="font-semibold text-primary hover:underline hover:underline-offset-4"
        >
          Create an account
        </Link>
      </p>
    </div>
  )
}
