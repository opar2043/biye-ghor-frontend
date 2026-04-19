import React from "react"
import { Heart, Shield, Users, Star, CheckCircle, Globe, Sparkles, Lock } from "lucide-react"

// ─── Data ─────────────────────────────────────────────────────

const stats = [
  { value: "2M+",   label: "Registered Members"  },
  { value: "85K+",  label: "Successful Marriages" },
  { value: "50+",   label: "Communities Served"   },
  { value: "15+",   label: "Years of Trust"       },
]

const values = [
  {
    icon: Heart,
    title: "Meaningful Matches",
    description:
      "We don't just connect profiles — we bring together two people whose values, dreams, and lives are truly compatible.",
  },
  {
    icon: Shield,
    title: "Privacy & Safety",
    description:
      "Every profile is manually verified. Your personal information is always in your control, shared only when you choose.",
  },
  {
    icon: Sparkles,
    title: "Personalized Experience",
    description:
      "Our smart matching system learns your preferences and surfaces profiles that genuinely align with who you are.",
  },
  {
    icon: Users,
    title: "Family-Centered",
    description:
      "We understand that marriage is a union of families. Our platform is built to respect and include family involvement naturally.",
  },
  {
    icon: Globe,
    title: "Every Community",
    description:
      "Whether you're Bengali, Tamil, Punjabi, or from any background — we celebrate diversity and serve every community with care.",
  },
  {
    icon: Lock,
    title: "Verified Profiles Only",
    description:
      "Zero tolerance for fake accounts. Our dedicated trust team reviews every registration to keep the platform genuine.",
  },
]

const steps = [
  {
    number: "01",
    title: "Create Your Profile",
    description: "Share your story — your background, values, interests, and what you're looking for in a life partner.",
  },
  {
    number: "02",
    title: "Get Matched",
    description: "Our system surfaces compatible profiles based on your preferences, community, and lifestyle.",
  },
  {
    number: "03",
    title: "Connect & Talk",
    description: "Express interest, exchange messages, and get to know each other at your own pace — safely.",
  },
  {
    number: "04",
    title: "Begin Your Journey",
    description: "When the time is right, take the next step. We celebrate every success story.",
  },
]

const testimonials = [
  {
    quote: "We matched in February and got married in December. This platform gave us the space to really know each other before deciding.",
    name: "Rahim & Nusrat",
    detail: "Dhaka, 2023",
    initials: "RN",
    color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300",
  },
  {
    quote: "What I loved most was how safe the platform felt. I never felt pressured. The verified profiles gave me real confidence.",
    name: "Arjun & Meera",
    detail: "Kolkata, 2023",
    initials: "AM",
    color: "bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-300",
  },
  {
    quote: "Our families were involved from the beginning. It was the most natural process — like it was always meant to be.",
    name: "Tariq & Sana",
    detail: "Lahore, 2024",
    initials: "TS",
    color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  },
]

const team = [
  {
    name: "Fatema Akter",
    role: "Founder & CEO",
    bio: "Built this platform after seeing too many people struggle to find genuine connection. 12 years in social technology.",
    initials: "FA",
    color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300",
  },
  {
    name: "Karim Hassan",
    role: "Head of Trust & Safety",
    bio: "Former cybersecurity lead. Dedicated to keeping every profile real and every interaction safe.",
    initials: "KH",
    color: "bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-300",
  },
  {
    name: "Priya Sharma",
    role: "Lead Matchmaking Advisor",
    bio: "Relationship counsellor with 10+ years experience. Guides members through their journey with empathy.",
    initials: "PS",
    color: "bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-300",
  },
  {
    name: "Rafi Uddin",
    role: "CTO",
    bio: "Built the matching algorithm from the ground up. Believes technology should serve human connection, not replace it.",
    initials: "RU",
    color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300",
  },
]

// ─── Page ─────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-zinc-100 dark:border-zinc-800/60">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-indigo-50 dark:bg-indigo-950/20 blur-3xl opacity-60" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-blue-50 dark:bg-blue-950/20 blur-3xl opacity-50" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-36 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-800/60 bg-indigo-50 dark:bg-indigo-950/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-8">
            <Heart className="w-3 h-3 fill-indigo-400" />
            About Us
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] text-zinc-900 dark:text-white max-w-3xl mx-auto mb-6">
            Where lifelong
            <br />
            <span className="relative inline-block text-indigo-500 dark:text-indigo-400">
              love stories
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6 C60 2, 150 2, 298 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </span>{" "}
            begin.
          </h1>

          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed">
            We are a matrimony platform built on trust, respect, and the belief that
            every person deserves to find a partner who truly complements their life.
          </p>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────── */}
      <section className="border-b border-zinc-100 dark:border-zinc-800/60">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-100 dark:bg-zinc-800 rounded-md overflow-hidden border border-zinc-100 dark:border-zinc-800">
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-white dark:bg-zinc-950 px-8 py-10 flex flex-col gap-1 items-center text-center">
                <span className="text-3xl md:text-4xl font-black tracking-tight text-zinc-900 dark:text-white">
                  {value}
                </span>
                <span className="text-sm text-zinc-400 dark:text-zinc-500 font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ───────────────────────────────────────── */}
      <section className="border-b border-zinc-100 dark:border-zinc-800/60">
        <div className="mx-auto max-w-5xl px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
              Our Mission
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-snug text-zinc-900 dark:text-white mb-6">
              Built with one purpose — helping you find the right one.
            </h2>
            <div className="space-y-4 text-zinc-500 dark:text-zinc-400 leading-relaxed text-[15px]">
              <p>
                Marriage is one of life's most significant decisions. We built this platform
                because we believe finding the right person should be safe, dignified, and
                meaningful — not overwhelming.
              </p>
              <p>
                We serve families and individuals from all communities, backgrounds, and walks
                of life. Whether you're looking for a partner who shares your faith, your
                culture, or simply your values — we're here to help.
              </p>
              <p>
                Since 2009, we have had the honour of being part of over 85,000 marriage
                journeys. Each one reminds us exactly why we do what we do.
              </p>
            </div>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 border border-indigo-100 dark:border-indigo-900/30 p-8">
              <div className="space-y-4">
                {[
                  { label: "Profile Verification", pct: "100%" },
                  { label: "Match Compatibility",  pct: "94%"  },
                  { label: "Member Satisfaction",  pct: "98%"  },
                  { label: "Privacy Compliance",   pct: "100%" },
                ].map(({ label, pct }) => (
                  <div key={label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-zinc-700 dark:text-zinc-300">{label}</span>
                      <span className="font-bold text-indigo-500 dark:text-indigo-400">{pct}</span>
                    </div>
                    <div className="h-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-indigo-400 dark:bg-indigo-500"
                        style={{ width: pct }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-3 pt-6 border-t border-indigo-100 dark:border-indigo-900/30">
                <div className="flex -space-x-2">
                  {["RN","AM","TS","FA"].map((i, idx) => (
                    <div key={idx} className="w-8 h-8 rounded-full bg-indigo-200 dark:bg-indigo-800 border-2 border-white dark:border-zinc-950 flex items-center justify-center text-[10px] font-bold text-indigo-700 dark:text-indigo-300">
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">85,000+</span> happy couples
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────── */}
      <section className="border-b border-zinc-100 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-900/20">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4 text-center">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-900 dark:text-white mb-16 text-center">
            Simple steps, sincere connections
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map(({ number, title, description }, i) => (
              <div key={number} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+24px)] w-full h-px border-t-2 border-dashed border-zinc-200 dark:border-zinc-800 z-0" />
                )}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-md bg-indigo-500 dark:bg-indigo-600 flex items-center justify-center text-white font-black text-sm mb-4 shadow-lg shadow-indigo-200 dark:shadow-indigo-900/40">
                    {number}
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-2">{title}</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* ── Trust badges ──────────────────────────────────── */}
      <section className="border-b border-zinc-100 dark:border-zinc-800/60 bg-zinc-50/50 dark:bg-zinc-900/20">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "100% Verified Profiles",
              "SSL Secured Platform",
              "GDPR Compliant",
              "24/7 Support Team",
              "Zero Fake Profiles Policy",
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                <CheckCircle className="w-4 h-4 text-indigo-500" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/10 dark:to-blue-950/10" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-md bg-indigo-500 dark:bg-indigo-600 shadow-xl shadow-indigo-200 dark:shadow-indigo-900/40 mb-8">
            <Heart className="w-6 h-6 text-white fill-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mb-6">
            Your story starts here.
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-md mx-auto mb-10 leading-relaxed">
            Join millions of people who found love, companionship, and lifelong partnership
            through our platform. Your match is waiting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/register"
              className="px-8 py-3.5 rounded-full text-sm font-semibold bg-indigo-500 dark:bg-indigo-600 text-white hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-colors duration-200 shadow-lg shadow-indigo-200 dark:shadow-indigo-900/30"
            >
              Create Free Profile
            </a>
            <a
              href="/contact"
              className="px-8 py-3.5 rounded-full text-sm font-semibold bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors duration-200"
            >
              Talk to an Advisor
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}