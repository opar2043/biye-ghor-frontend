"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiFillShopping as OrderIcon } from "react-icons/ai";
import { MdPerson2 as ProfileIcon } from "react-icons/md";
import { MdOutlineRateReview as ReviewIcon } from "react-icons/md";
import { IoMdHome as HomeIcon } from "react-icons/io";
import { GiShoppingBag as AllOrdersIcon } from "react-icons/gi";
import { RiMedicineBottleFill as MedicineIcon } from "react-icons/ri";
import { MdInventory as StockIcon } from "react-icons/md";
import { LogOut as LogoutIcon  } from "lucide-react";
import { ElementType } from "react";
import { useAuth } from "../lib/useAuth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userApi } from "@/src/Service/users.route";

type Role = "admin" | "user" | "moderator";


const DashboardNavigation = () => {
  const { user, handleLogout } = useAuth();
  const router = useRouter();
  const [role, setRole] = useState<Role | "">("");

  useEffect(() => {
    const fetchUserRole = async () => {
      if (user?.email) {
        try {
          const currentUser = await userApi.getAllUsers();
          const foundUser = currentUser.find((u: any) => u.email === user.email);
          setRole(foundUser?.role || "user");
        } catch (error) {
          console.error("Error fetching role:", error);
          setRole("user");
        }
      }
    };
    fetchUserRole();
  }, [user]);


  const onSignOut = async () => {
    try {
      await handleLogout();
      toast.success("Logged out successfully");
      router.push("/");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <div className="flex flex-col h-full space-y-1">
      <div className="flex-1 space-y-1">
        {role === "user" && <UserNavigation />}
        {role === "admin" && <AdminNavigation />}
      </div>
      
      <div className="pt-4 mt-4 border-t border-zinc-200 dark:border-zinc-800">
        <button
          onClick={onSignOut}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all group font-medium"
        >
          <LogoutIcon className="text-xl group-hover:-translate-x-1 transition" size={20} />
          <span className="text-sm">Log Out</span>
        </button>
      </div>
    </div>
  );
};

const UserNavigation = () => (
  <>
     <Navigator route="/" Icon={HomeIcon} label="Home" className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20" />
    <Navigator route="/dashboard/user/all-applicant" Icon={OrderIcon} label="My Applicants" />
    <Navigator route="/dashboard/user/all-complain" Icon={ReviewIcon} label="My Complaints" />
    <Navigator route="/dashboard/user/profile" Icon={ProfileIcon} label="Profile" />
  </>
);

const AdminNavigation = () => (
  <>
    <Navigator route="/dashboard/admin/add-applicant" Icon={MedicineIcon} label="Add Applicant" />
    <Navigator route="/dashboard/admin/all-applicant" Icon={StockIcon} label="All Applicants" />
    <Navigator route="/dashboard/admin/users" Icon={AllOrdersIcon} label="All Users" />
    <Navigator route="/dashboard/admin/profile" Icon={ProfileIcon} label="Profile" />
    <Navigator route="/dashboard/admin/all-complain" Icon={ReviewIcon} label="All Complaints" />
    <Navigator route="/" Icon={HomeIcon} label="Home" className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20" />
  </>
);

const Navigator = ({
  route,
  Icon,
  label,
  className = ""
}: {
  route: string;
  Icon: ElementType;
  label: string;
  className?: string;
}) => {
  return (
    <Link
      href={route}
      className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-primary/10 transition-all group ${className}`}
    >
      <Icon className="text-xl group-hover:translate-x-1 transition" />
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
};

export default DashboardNavigation;
