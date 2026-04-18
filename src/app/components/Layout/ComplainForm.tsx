"use client"

import React, { useState } from "react"
import { 
  AlertTriangle, 
  User, 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle2,
  AlertCircle,
  Users
} from "lucide-react"
import { complainRoutes } from "@/src/Service/complain.route";
import { toast } from "sonner";
import { useAuth } from "../lib/useAuth";
import { useEffect } from "react";

export default  function ComplainForm() {
  const { user  } = useAuth()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    opponentName: "",
    reason: "",
    message: ""
  })

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: user.displayName || prev.name,
        email: user.email || prev.email
      }))
    }
  }, [user])

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const obj = {
      name: formData.name,
      email: formData.email,
      opponentName: formData.opponentName,
      reason: formData.reason,
      message: formData.message
    }
    const toastId = toast.loading("Creating complain...");

     try{
    const data = await complainRoutes.createComplain(obj);
    toast.success("Complain created successfully", { id: toastId });
    setIsSubmitting(false)
    setIsSubmitted(true)
     }catch(error){
      console.log(error);
      toast.error("Failed to create complain", { id: toastId });
      setIsSubmitting(false)
     }
  }

  if (isSubmitted) {
    return (
      <div className="bg-white dark:bg-zinc-900 rounded-md p-8 border border-emerald-100 dark:border-emerald-900/30 shadow-2xl shadow-emerald-500/10 text-center animate-in scale-in fade-in duration-500">
        <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Complaint Received</h2>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8">
          Thank you for bringing this to our attention. Our moderation team will review your complaint and take necessary actions.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="w-full py-3 px-6 bg-indigo-600 text-white rounded-md font-bold hover:bg-indigo-700 transition-all"
        >
          Back to Form
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 rounded-md shadow-2xl shadow-black/5 p-8 md:p-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name */}
          <div className="space-y-2.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 ml-1">
              Your Name
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-blue-500 transition-colors">
                <User size={18} />
              </div>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-md pl-12 pr-4 py-3.5 text-sm outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 ml-1">
              Your Email
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-blue-500 transition-colors">
                <Mail size={18} />
              </div>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-md pl-12 pr-4 py-3.5 text-sm outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all"
              />
            </div>
          </div>

          {/* Opponent Name */}
          <div className="space-y-2.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 ml-1">
               Opponent Name
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-blue-500 transition-colors">
                <Users size={18} />
              </div>
              <input
                required
                type="text"
                name="opponentName"
                value={formData.opponentName}
                onChange={handleChange}
                placeholder="Name of the person you're reporting"
                className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-md pl-12 pr-4 py-3.5 text-sm outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all"
              />
            </div>
          </div>

          {/* Reason */}
          <div className="space-y-2.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 ml-1">
              Complaint Reason
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-blue-500 transition-colors">
                <AlertCircle size={18} />
              </div>
              <select
                required
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-md pl-12 pr-4 py-3.5 text-sm outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all appearance-none"
              >
                <option value="" disabled>Select a reason</option>
                <option value="harassment">Harassment</option>
                <option value="fake_profile">Fake Profile</option>
                <option value="misleading_info">Misleading Information</option>
                <option value="inappropriate_behavior">Inappropriate Behavior</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 ml-1">
            Detailed Message
          </label>
          <div className="relative group">
            <div className="absolute left-4 top-4 text-zinc-400 group-focus-within:text-blue-500 transition-colors">
              <MessageSquare size={18} />
            </div>
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Please provide as much detail as possible..."
              className="w-full bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-md pl-12 pr-4 py-4 text-sm outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          disabled={isSubmitting}
          type="submit"
          className="group relative w-full h-14 bg-indigo-600 text-white rounded-md font-bold overflow-hidden shadow-xl shadow-indigo-500/10 hover:bg-indigo-700 active:scale-[0.99] transition-all disabled:opacity-70"
        >
          <div className="relative flex items-center justify-center gap-2">
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>Submit Complaint</span>
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </div>
        </button>
      </form>
    </div>
  )
}
