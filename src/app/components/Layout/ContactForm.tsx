
'use client'
import { CheckCircle, Send } from 'lucide-react'
import React, { useState } from 'react'

export default function ContactForm() {
      const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Replace with your API call
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div>
                  <div>
            <div className="rounded-3xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center h-full py-12 gap-5">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }) }}
                    className="mt-2 px-6 py-2.5 rounded-full text-sm font-semibold bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-100 transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-black text-zinc-900 dark:text-white mb-1">
                    Send us a message
                  </h2>
                  <p className="text-sm text-zinc-400 dark:text-zinc-500 mb-7">
                    Fill in the form and we'll get back to you shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahim Uddin"
                        className="
                          w-full px-4 py-3 rounded-xl text-sm
                          bg-white dark:bg-zinc-950
                          border border-zinc-200 dark:border-zinc-700
                          text-zinc-900 dark:text-zinc-100
                          placeholder:text-zinc-300 dark:placeholder:text-zinc-600
                          focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white
                          transition-all duration-150
                        "
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="
                          w-full px-4 py-3 rounded-xl text-sm
                          bg-white dark:bg-zinc-950
                          border border-zinc-200 dark:border-zinc-700
                          text-zinc-900 dark:text-zinc-100
                          placeholder:text-zinc-300 dark:placeholder:text-zinc-600
                          focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white
                          transition-all duration-150
                        "
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1.5">
                        Subject
                      </label>
                      <select
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="
                          w-full px-4 py-3 rounded-xl text-sm
                          bg-white dark:bg-zinc-950
                          border border-zinc-200 dark:border-zinc-700
                          text-zinc-900 dark:text-zinc-100
                          focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white
                          transition-all duration-150
                        "
                      >
                        <option value="" disabled>Select a topic…</option>
                        <option value="general">General Enquiry</option>
                        <option value="profile">Profile Help</option>
                        <option value="matching">Matching & Search</option>
                        <option value="billing">Billing & Plans</option>
                        <option value="report">Report an Issue</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1.5">
                        Message
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Write your message here…"
                        className="
                          w-full px-4 py-3 rounded-xl text-sm resize-none
                          bg-white dark:bg-zinc-950
                          border border-zinc-200 dark:border-zinc-700
                          text-zinc-900 dark:text-zinc-100
                          placeholder:text-zinc-300 dark:placeholder:text-zinc-600
                          focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white
                          transition-all duration-150
                        "
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="
                        mt-1 w-full flex items-center justify-center gap-2
                        px-6 py-3.5 rounded-xl text-sm font-semibold
                        bg-zinc-900 dark:bg-white
                        text-white dark:text-zinc-900
                        hover:bg-zinc-700 dark:hover:bg-zinc-100
                        disabled:opacity-60 disabled:cursor-not-allowed
                        transition-all duration-200
                      "
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
    </div>
  )
}
