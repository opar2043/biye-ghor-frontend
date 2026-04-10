
import {
  Mail,
  Phone,
  MapPin,
  Send,
//   Facebook,
//   Twitter,
//   Instagram,
//   Youtube,
//   Linkedin,

  Clock,

} from "lucide-react"
import ContactForm from "../../components/Layout/ContactForm"
type Icon = React.ReactNode;
// ─── do not use this Social Links ─────────────────────────────────────────────
const socials = [
  {
    icon: 'Facebook',
    label: "Facebook",
    handle: "@YourBrandMatrimony",
    href: "https://facebook.com",
    color: "hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 dark:hover:bg-blue-950/20 dark:hover:border-blue-800 dark:hover:text-blue-400",
  },
  {
    icon: 'Instagram',
    label: "Instagram",
    handle: "@yourbrand",
    href: "https://instagram.com",
    color: "hover:bg-pink-50 hover:border-pink-200 hover:text-pink-600 dark:hover:bg-pink-950/20 dark:hover:border-pink-800 dark:hover:text-pink-400",
  },
  {
    icon: 'Twitter',
    label: "Twitter / X",
    handle: "@yourbrand",
    href: "https://twitter.com",
    color: "hover:bg-zinc-100 hover:border-zinc-300 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:border-zinc-600 dark:hover:text-white",
  },
  {
    icon: 'Youtube',
    label: "YouTube",
    handle: "YourBrand Matrimony",
    href: "https://youtube.com",
    color: "hover:bg-red-50 hover:border-red-200 hover:text-red-600 dark:hover:bg-red-950/20 dark:hover:border-red-800 dark:hover:text-red-400",
  },
  {
    icon: 'Linkedin',
    label: "LinkedIn",
    handle: "YourBrand",
    href: "https://linkedin.com",
    color: "hover:bg-sky-50 hover:border-sky-200 hover:text-sky-600 dark:hover:bg-sky-950/20 dark:hover:border-sky-800 dark:hover:text-sky-400",
  },
  {
    icon: 'WhatsApp',
    label: "WhatsApp",
    handle: "+880 1XXX-XXXXXX",
    href: "https://wa.me/880",
    color: "hover:bg-green-50 hover:border-green-200 hover:text-green-600 dark:hover:bg-green-950/20 dark:hover:border-green-800 dark:hover:text-green-400",
  },
]

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "support@yourbrand.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+880 1XXX-XXXXXX",
    sub: "Sat – Thu, 9am – 6pm",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "123 Gulshan Avenue, Dhaka",
    sub: "Bangladesh — 1212",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Sat – Thu: 9am – 6pm",
    sub: "Friday: Closed",
  },
]

// ─── Page ─────────────────────────────────────────────────────
export default function ContactPage() {

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="border-b border-zinc-100 dark:border-zinc-800/60">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-7">
            Contact Us
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] text-zinc-900 dark:text-white max-w-2xl mb-5">
            We'd love to
            <br />
            hear from you.
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-lg leading-relaxed">
            Whether you have a question, need guidance on your journey, or just want to say hello — our team is here and happy to help.
          </p>
        </div>
      </section>

      {/* ── Contact Info + Form ───────────────────────────── */}
      <section className="border-b border-zinc-100 dark:border-zinc-800/60">
        <div className="mx-auto max-w-5xl px-6 py-16 grid md:grid-cols-2 gap-14">

          {/* ── Left: Info ──────────────────────────── */}
          <div className="flex flex-col gap-8">

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map(({ icon: Icon, label, value, sub }) => (
                <div
                  key={label}
                  className="p-5 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col gap-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-zinc-900 dark:bg-white flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white dark:text-zinc-900" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-1">
                      {label}
                    </p>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">{value}</p>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
                Find us on social media
              </p>
              <div className="flex flex-col gap-2">
                {socials.map(({ icon: Icon, label, handle, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-xl
                      border border-zinc-100 dark:border-zinc-800
                      text-zinc-600 dark:text-zinc-400
                      bg-white dark:bg-zinc-950
                      transition-all duration-150 group
                      ${color}
                    `}
                  >
                    <Icon  />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold leading-none mb-0.5">{label}</p>
                      <p className="text-xs text-zinc-400 dark:text-zinc-500 truncate">{handle}</p>
                    </div>
                    <Send className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Form ─────────────────────────── */}
            <ContactForm  />
        </div>
      </section>

      {/* ── Map placeholder ───────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
            Our Location
          </p>
          <h2 className="text-2xl font-black text-zinc-900 dark:text-white mb-6">
            Come visit us
          </h2>
          <div className="w-full h-64 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center overflow-hidden">
            {/* Replace this div with an actual <iframe> Google Map embed */}
            <div className="text-center">
              <MapPin className="w-8 h-8 text-zinc-300 dark:text-zinc-600 mx-auto mb-3" />
              <p className="text-sm text-zinc-400 dark:text-zinc-500 font-medium">123 Gulshan Avenue, Dhaka — 1212</p>
              <p className="text-xs text-zinc-300 dark:text-zinc-600 mt-1">Replace with Google Maps iframe</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}