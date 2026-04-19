"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 animate-pulse" />
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="Toggle theme"
          className="
            relative flex items-center justify-center
            w-9 h-9 rounded-full
            bg-zinc-100 dark:bg-zinc-800
            hover:bg-zinc-200 dark:hover:bg-zinc-700
            text-zinc-600 dark:text-zinc-300
            border border-zinc-200 dark:border-zinc-700
            transition-all duration-200
            focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400
          "
        >
          {/* Sun — visible in light mode */}
          {resolvedTheme === "dark" ? (
            <Moon className="h-[1.1rem] w-[1.1rem] transition-all duration-300 scale-100 opacity-100 rotate-0" />
          ) : (
            <Sun className="h-[1.1rem] w-[1.1rem] transition-all duration-300 scale-100 opacity-100 rotate-0" />
          )}
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="
          w-36 rounded-md p-1.5
          bg-white dark:bg-zinc-900
          border border-zinc-200 dark:border-zinc-700
          shadow-xl shadow-black/10 dark:shadow-black/40
        "
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="
            flex items-center gap-2.5 px-3 py-2 rounded-md
            text-sm font-medium cursor-pointer
            text-zinc-700 dark:text-zinc-300
            hover:bg-zinc-100 dark:hover:bg-zinc-800
            focus:bg-zinc-100 dark:focus:bg-zinc-800
            transition-colors duration-150
          "
        >
          <Sun className="w-4 h-4 text-zinc-400" />
          Light
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="
            flex items-center gap-2.5 px-3 py-2 rounded-md
            text-sm font-medium cursor-pointer
            text-zinc-700 dark:text-zinc-300
            hover:bg-zinc-100 dark:hover:bg-zinc-800
            focus:bg-zinc-100 dark:focus:bg-zinc-800
            transition-colors duration-150
          "
        >
          <Moon className="w-4 h-4 text-zinc-400" />
          Dark
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="
            flex items-center gap-2.5 px-3 py-2 rounded-md
            text-sm font-medium cursor-pointer
            text-zinc-700 dark:text-zinc-300
            hover:bg-zinc-100 dark:hover:bg-zinc-800
            focus:bg-zinc-100 dark:focus:bg-zinc-800
            transition-colors duration-150
          "
        >
          <Monitor className="w-4 h-4 text-zinc-400" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}