"use client"

import Link from "next/link"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import { useState } from "react"
import { Button } from "@/src/app/components/ui/button"

import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { useAuth } from "../../components/lib/useAuth"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isPending, setIsPending] = useState(false)
  
  const { handleLogin, handleGoogle } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!email || !password) return toast.error("Please fill in all fields")

    setIsPending(true)
    try {
      await handleLogin(email, password)
      toast.success("Welcome back!")
      router.push("/dashboard")
    } catch (error: any) {
      console.error(error)
      toast.error(error.message || "Failed to sign in")
    } finally {
      setIsPending(false)
    }
  }

  const onGoogleLogin = async () => {
    try {
      await handleGoogle()
      toast.success("Logged in with Google")
      router.push("/dashboard/user")
    } catch (error: any) {
      toast.error(error.message || "Google login failed")
    }
  }

  return (
    <div className="max-w-md mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
        <p className="text-muted-foreground text-sm">
          Enter your credentials to access your account
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

        <Button 
          disabled={isPending}
          className="w-full h-10 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          {isPending && <Loader2 className="w-4 h-4 animate-spin" />}
          {isPending ? "Signing In..." : "Sign In"}
        </Button>
      </form>

      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground font-medium">Or continue with</span>
        </div>
      </div>

      <Button 
        variant="outline" 
        onClick={onGoogleLogin}
        className="w-full h-10 rounded-md border-border font-medium hover:bg-muted/50 transition-colors flex items-center justify-center gap-2"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="currentColor"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="currentColor"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
          />
          <path
            fill="currentColor"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        Google
      </Button>

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
