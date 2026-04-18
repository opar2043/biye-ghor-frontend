"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  User,
  Menu,
  X,
  LayoutDashboard,
  LogIn,
  LogOut,
  ChevronDown,
} from "lucide-react"
import { ModeToggle } from "../ui/ModeToggle"

// ─── Nav Links ────────────────────────────────────────────────
const navLinks = [
  { label: "Home",      href: "/" },
  { label: "About",     href: "/about" },
  { label: "Contact",   href: "/contact" },
  { label: "Applicant", href: "/applicant" },
  { label: "Complain", href: "/complain" },
]

// ─── Types ────────────────────────────────────────────────────
interface NavbarProps {
  user?: {
    email: string
    name?: string
  } | null
  onLogin?: () => void
  onLogout?: () => void
}


import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { useAuth } from "../lib/useAuth"

// ... (navLinks remain the same)

function UserMenu() {
  const { user, handleLogout } = useAuth();
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const initials = user?.displayName
    ? user.displayName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    : user?.email?.[0].toUpperCase() || "U"

  const onSignOut = async () => {
    try {
      await handleLogout()
      toast.success("Logged out successfully")
      router.push("/")
    } catch (error) {
      toast.error("Failed to log out")
    }
  }

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen((p) => !p)}
        aria-label="User menu"
        className="
          flex items-center gap-1.5 pl-2 pr-3 h-9 rounded-full
          bg-zinc-100 dark:bg-zinc-800
          hover:bg-zinc-200 dark:hover:bg-zinc-700
          text-zinc-700 dark:text-zinc-200
          transition-all duration-200 text-sm font-medium
        "
      >
        {/* Avatar */}
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-zinc-300 dark:bg-zinc-600 text-zinc-700 dark:text-zinc-100 text-[10px] font-bold">
          {initials}
        </span>
        <span className="hidden sm:block">
          {user ? (user.displayName?.split(" ")[0] ?? "Account") : "Sign in"}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="
          absolute right-0 top-[calc(100%+10px)] w-56 z-50
          bg-white dark:bg-zinc-900
          border border-zinc-200 dark:border-zinc-700
          rounded-2xl shadow-xl shadow-black/10 dark:shadow-black/40
          overflow-hidden
        ">
          {user ? (
            <>
              {/* User info */}
              <div className="px-4 pt-4 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                <p className="text-[11px] text-zinc-400 dark:text-zinc-500 mb-0.5 uppercase tracking-wider">
                  Signed in as
                </p>
                {user.displayName && (
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white truncate">
                    {user.displayName}
                  </p>
                )}
                <p className="text-xs text-zinc-400 dark:text-zinc-500 truncate">
                  {user.email}
                </p>
              </div>

              {/* Dashboard */}
              <div className="p-1.5">
                <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  <LayoutDashboard className="w-4 h-4 text-zinc-400" />
                  Dashboard
                </Link>
              </div>

              <div className="mx-3 border-t border-zinc-100 dark:border-zinc-800" />

              {/* Logout */}
              <div className="p-1.5">
                <button
                  onClick={onSignOut}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Log out
                </button>
              </div>
            </>
          ) : (
            /* Login */
            <div className="p-1.5">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <LogIn className="w-4 h-4 text-zinc-400" />
                Log in
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Navbar ───────────────────────────────────────────────────
export function Navbar() {
  const { user } = useAuth()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/60 dark:border-zinc-800/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">

        {/* ── LEFT: Brand ────────────────────────────────── */}
        <Link
          href="/"
          className="shrink-0 flex items-center gap-2.5 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-xl bg-zinc-900 dark:bg-white flex items-center justify-center text-white dark:text-zinc-900 text-xs font-black">
            BG
          </div>
          <span className="font-bold text-[15px] tracking-tight text-zinc-900 dark:text-white hidden sm:block">
            Ollo
          </span>
        </Link>

        {/* ── CENTER: Desktop Links ──────────────────────── */}
        <ul className="hidden md:flex items-center gap-0.5">
          {navLinks.map(({ label, href }) => {
            const active = pathname === href
            return (
              <li key={label}>
                <Link
                  href={href}
                  className={`
                    px-4 py-2 text-sm font-medium rounded-full transition-colors duration-150
                    ${active
                      ? "text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    }
                  `}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* ── RIGHT: Actions ─────────────────────────────── */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          <UserMenu />
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 transition-all duration-200"
          >
            {mobileOpen
              ? <X className="h-[1.1rem] w-[1.1rem]" />
              : <Menu className="h-[1.1rem] w-[1.1rem]" />
            }
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer ─────────────────────────────────── */}
      {mobileOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-3">
          <ul className="flex flex-col gap-0.5">
            {navLinks.map(({ label, href }) => {
              const active = pathname === href
              return (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`
                      flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-colors
                      ${active
                        ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
                        : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white"
                      }
                    `}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}