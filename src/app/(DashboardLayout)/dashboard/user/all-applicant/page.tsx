"use client"

import React, { useEffect, useState } from "react"
import { 
  Users, 
  Search, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Filter, 
  ChevronLeft, 
  ChevronRight,
  Eye,
  EyeOff,
  CheckCircle,
  Clock,
  Plus
} from "lucide-react"
import { personRoutes } from "@/src/Service/person.route"
import personType from "@/src/Service/type"
import { toast } from "sonner"
import Link from "next/link"
import { useAuth } from "@/src/app/components/lib/useAuth"

export default function AllApplicantPage() {
  const { user } = useAuth();
  const [mockApplicants, setMockApplicants] = useState<personType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchApplicants = async () => {
    try {
      const data = await personRoutes.getPersons();
      // Filter by user email if user is logged in
      const filteredData = user?.email 
        ? data.filter((app: personType) => app.email == user.email)
        : data;
      setMockApplicants(filteredData);
    } catch (error) {
      console.error("Error fetching applicants:", error);
      toast.error("Failed to load applicants");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchApplicants();
    }
  }, [user]);

  const handleApprove = async (id: string) => {
    try {
      const toastId = toast.loading("Approving applicant...");
      await personRoutes.approvePerson(id, { isSeen: true });
      
      // Update local state
      setMockApplicants(prev => prev.map(app => 
        app._id === id ? { ...app, isSeen: true } : app
      ));
      
      toast.success("Applicant approved successfully", { id: toastId });
    } catch (error) {
      toast.error("Failed to approve applicant");
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this applicant?")) return;

    const toastId = toast.loading("Deleting applicant...");
    try {
      await personRoutes.deletePerson(id);
      
      // Update local state
      setMockApplicants(prev => prev.filter(app => app._id !== id));
      
      toast.success("Applicant deleted successfully", { id: toastId });
    } catch (error) {
      toast.error("Failed to delete applicant", { id: toastId });
    }
  }

  if (loading) {
    return (
      <div className="p-10 flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-10 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
            All <span className="text-indigo-600">Applicants</span>
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
            Manage and monitor all profiles registered in the directory.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative group flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-indigo-600 transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="Search by ID or name..." 
              className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md pl-10 pr-4 py-2 text-sm outline-none focus:ring-4 focus:ring-indigo-600/10 focus:border-indigo-600/50 transition-all"
            />
          </div>
          <Link href="/dashboard/admin/add-applicant" className="flex items-center gap-2 px-4 py-2 border border-black dark:border-zinc-800 rounded-sm bg-black text-white hover:bg-white hover:text-black text-sm font-medium  transition-colors">
            <Plus size={16} />
            Add Applicant
          </Link>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800">
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">ID</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Applicant</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Gender</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Location</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Status</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {mockApplicants.map((app : personType) => (
                <tr key={app._id} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/20 transition-colors group">
                  <td className="px-6 py-4 text-sm font-mono text-zinc-400">#{ app._id.slice(-6)}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-zinc-900 dark:text-white">{app.name}</span>
                      <span className="text-[12px] text-zinc-500 uppercase">{'Edu: '+ app.education}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter ${
                      app.gender === "Female" ? "bg-rose-50 text-rose-600 dark:bg-rose-500/10" : "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10"
                    }`}>
                      {app.gender}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-500">{app.division}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       {app.isSeen === true ? (
                         <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 bg-green-500/15 p-1.5 rounded-sm">
                           <CheckCircle size={12} />
                           <span className="text-[12px] font-semibold tracking-tight ">Approved</span>
                         </div>
                       ) : (
                         <div className="flex items-center gap-1.5 text-amber-500 bg-amber-500/15 p-1.5 rounded-sm">
                           <Clock size={12} />
                           <span className="text-[12px] font-semibold tracking-tight">Pending</span>
                         </div>
                       )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 transition-opacity">
                      {app.isSeen && (
                        <button 
                          onClick={() => handleApprove(app._id)}
                          className="p-2 text-zinc-600 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-md transition-all tooltip"
                          title="Approve"
                        >
                          <CheckCircle size={16} />
                        </button>
                      )}
                      <Link 
                        href={`/dashboard/admin/all-applicant/${app._id}`}
                        className="p-2 text-zinc-600 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-md transition-all"
                      >
                        <Edit size={16} />
                      </Link>
                      <button 
                        onClick={() => handleDelete(app._id)}
                        className="p-2 text-zinc-600 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-md transition-all"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {mockApplicants.length === 0 && (
            <div className="p-10 text-center text-zinc-500 text-sm">
              No applicants found.
            </div>
          )}
        </div>

        {/* Pagination Placeholder */}
        <div className="px-6 py-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <p className="text-xs text-zinc-500">Showing <span className="font-bold text-zinc-900 dark:text-white">{mockApplicants.length}</span> entries</p>
          <div className="flex items-center gap-2">
            <button disabled className="p-2 border border-zinc-200 dark:border-zinc-800 rounded-md opacity-50"><ChevronLeft size={16} /></button>
            <button className="px-3 py-1 bg-indigo-600 text-white rounded-md text-xs font-bold">1</button>
            <button className="p-2 border border-zinc-200 dark:border-zinc-800 rounded-md hover:bg-zinc-50"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
