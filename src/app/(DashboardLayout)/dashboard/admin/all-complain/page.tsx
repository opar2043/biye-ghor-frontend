"use client"

import React, { useEffect, useState } from "react"
import { 
  AlertTriangle, 
  Search, 
  Trash2, 
  ChevronLeft, 
  ChevronRight,
  User,
  Mail,
  ShieldAlert,
  Eye,
  X,
  Calendar,
  Info,
  MessageSquare
} from "lucide-react"
import { complainRoutes } from "@/src/Service/complain.route"
import { toast } from "sonner"

export default function AllComplainPage() {
  const [complains, setComplains] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedComplain, setSelectedComplain] = useState<any>(null);

  const fetchComplains = async () => {
    try {
      setLoading(true);
      const data = await complainRoutes.getComplains();
      setComplains(data);
    } catch (error) {
      console.error("Error fetching complains:", error);
      toast.error("Failed to load complaints");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComplains();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this complaint? This action cannot be undone.")) return;

    const toastId = toast.loading("Deleting complaint...");
    try {
      await complainRoutes.deleteComplain(id);
      setComplains(prev => prev.filter(c => c._id !== id));
      toast.success("Complaint deleted successfully", { id: toastId });
      if (selectedComplain?._id === id) setSelectedComplain(null);
    } catch (error) {
      console.error("Error deleting complaint:", error);
      toast.error("Failed to delete complaint", { id: toastId });
    }
  }

  const filteredComplains = complains.filter(c => 
    c.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.opponentName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.reason?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="p-10 flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-10 space-y-8 relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tight flex items-center gap-3">
            User <span className="text-rose-600">Complaints</span>
            <AlertTriangle className="text-rose-600 animate-pulse" size={28} />
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
            Review and manage reports submitted by users regarding other applicants.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative group flex-1 md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-rose-600 transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="Search by name, opponent or reason..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md pl-10 pr-4 py-2 text-sm outline-none focus:ring-4 focus:ring-rose-600/10 focus:border-rose-600/50 transition-all"
            />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800">
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Reporter</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Opponent</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Reason</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Preview</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {filteredComplains.map((c) => (
                <tr key={c._id} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/20 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-1.5">
                        <User size={14} className="text-zinc-400" /> {c.name}
                      </span>
                      <span className="text-[12px] text-zinc-500 flex items-center gap-1.5">
                        <Mail size={12} className="text-zinc-400" /> {c.email}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                      {c.opponentName}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter bg-amber-50 text-amber-600 border border-amber-100 dark:bg-amber-500/10 dark:border-amber-500/20">
                      {c.reason}
                    </span>
                  </td>
                  <td className="px-6 py-4 max-w-[200px]">
                    <p className="text-sm text-zinc-500 truncate">
                      {c.message}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button 
                         onClick={() => setSelectedComplain(c)}
                         className="p-2 text-zinc-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-md transition-all"
                         title="View Details"
                      >
                        <Eye size={18} />
                      </button>
                      <button 
                        onClick={() => handleDelete(c._id)}
                        className="p-2 text-zinc-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-md transition-all"
                        title="Delete Complaint"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredComplains.length === 0 && (
            <div className="p-20 text-center flex flex-col items-center justify-center gap-3">
              <ShieldAlert className="text-zinc-200 dark:text-zinc-800" size={48} />
              <p className="text-zinc-500 text-sm font-medium">No complaints found matching your criteria.</p>
            </div>
          )}
        </div>

        <div className="px-6 py-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <p className="text-xs text-zinc-500">Showing <span className="font-bold text-zinc-900 dark:text-white">{filteredComplains.length}</span> entries</p>
          <div className="flex items-center gap-2">
            <button disabled className="p-2 border border-zinc-200 dark:border-zinc-800 rounded-md opacity-50"><ChevronLeft size={16} /></button>
            <button className="px-3 py-1 bg-rose-600 text-white rounded-md text-xs font-bold shadow-sm shadow-rose-600/20">1</button>
            <button className="p-2 border border-zinc-200 dark:border-zinc-800 rounded-md hover:bg-zinc-50"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedComplain && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-zinc-900 w-full max-w-lg rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden animate-in zoom-in-95 duration-200">
             {/* Modal Header */}
             <div className="bg-zinc-50 dark:bg-zinc-800/50 px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-rose-600">
                   <ShieldAlert size={20} />
                   <h2 className="font-bold text-lg tracking-tight">Complaint Details</h2>
                </div>
                <button 
                  onClick={() => setSelectedComplain(null)}
                  className="p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full transition-colors"
                >
                   <X size={20} className="text-zinc-500" />
                </button>
             </div>

             {/* Modal Body */}
             <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Reporter</p>
                      <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                        <User size={14} className="text-rose-500" /> {selectedComplain.name}
                      </p>
                      <p className="text-xs text-zinc-500">{selectedComplain.email}</p>
                   </div>
                   <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Against</p>
                      <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                         <ShieldAlert size={14} className="text-amber-500" /> {selectedComplain.opponentName}
                      </p>
                   </div>
                </div>

                <div className="space-y-1">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Reason for report</p>
                   <div className="inline-flex px-2.5 py-1 rounded-md bg-rose-50 text-rose-600 text-xs font-bold border border-rose-100">
                      {selectedComplain.reason}
                   </div>
                </div>

                <div className="space-y-2 p-4 bg-zinc-50 dark:bg-zinc-800/80 rounded-xl border border-zinc-100 dark:border-zinc-800">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
                      <MessageSquare size={12} /> Detailed Message
                   </p>
                   <p className="text-[13px] leading-relaxed text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap">
                      {selectedComplain.message}
                   </p>
                </div>

                <div className="flex items-center gap-2 text-zinc-400 text-[11px] pt-2 border-t border-zinc-50 dark:border-zinc-800">
                   <Calendar size={12} />
                   <span>Complaint ID: {selectedComplain._id}</span>
                </div>
             </div>

             {/* Modal Footer */}
             <div className="px-6 py-4 bg-zinc-50 dark:bg-zinc-800/30 border-t border-zinc-200 dark:border-zinc-800 flex justify-end gap-3">
                <button 
                   onClick={() => setSelectedComplain(null)}
                   className="px-4 py-2 text-xs font-bold text-zinc-500 hover:text-zinc-800 transition-colors"
                >
                   Close
                </button>
                <button 
                   onClick={() => handleDelete(selectedComplain._id)}
                   className="px-5 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-lg transition-all shadow-md shadow-rose-600/20 active:scale-95 flex items-center gap-2"
                >
                   <Trash2 size={14} /> Delete Case
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  )
}
