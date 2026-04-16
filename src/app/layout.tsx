import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ui/theme-provider";
import { Navbar } from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MatriMony - Find Your Perfect Match",
  description: "Find your perfect life partner بسهولة with MatriMony",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false} // 🔥 IMPORTANT: avoids hydration mismatch
          disableTransitionOnChange
        >
          {children}
            <Toaster richColors  />
        </ThemeProvider>
      </body>
    </html>
  );
}