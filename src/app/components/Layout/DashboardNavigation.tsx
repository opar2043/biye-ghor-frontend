"use client";
import Link from "next/link";
import { useState } from "react";
import { AiFillShopping as OrderIcon } from "react-icons/ai";
import { MdPerson2 as ProfileIcon } from "react-icons/md";
import { MdOutlineRateReview as ReviewIcon } from "react-icons/md";
import { IoMdHome as HomeIcon } from "react-icons/io";
import { GiShoppingBag as AllOrdersIcon } from "react-icons/gi";
import { RiMedicineBottleFill as MedicineIcon } from "react-icons/ri";
import { MdInventory as StockIcon } from "react-icons/md";
import { ElementType } from "react";

type Role = "admin" | "customer" | "provider";

const DashboardNavigation = () => {
  // 🔥 Set to admin so the user can see the new sections
  const user = { role: "admin" as Role };

  return (
    <div className="space-y-1">
      {user.role === "customer" && <CustomerNavigation />}
      {user.role === "provider" && <ProviderNavigation />}
      {user.role === "admin" && <AdminNavigation />}
    </div>
  );
};

const CustomerNavigation = () => (
  <>
    <Navigator route="/" Icon={HomeIcon} label="Home" />
    <Navigator route="/dashboard/customer/my-orders" Icon={OrderIcon} label="My Orders" />
    <Navigator route="/dashboard/customer/my-reviews" Icon={ReviewIcon} label="My Reviews" />
    <Navigator route="/dashboard/customer/profile" Icon={ProfileIcon} label="Profile" />
  </>
);

const ProviderNavigation = () => (
  <>
    <Navigator route="/" Icon={HomeIcon} label="Home" />
    <Navigator route="/dashboard/provider/add-items" Icon={MedicineIcon} label="Add Items" />
    <Navigator route="/dashboard/provider/all-orders" Icon={AllOrdersIcon} label="All Orders" />
    <Navigator route="/dashboard/provider/manage-items" Icon={StockIcon} label="Manage Items" />
  </>
);

const AdminNavigation = () => (
  <>
    <Navigator route="/" Icon={HomeIcon} label="Home" />
    <Navigator route="/dashboard/admin/add-applicant" Icon={MedicineIcon} label="Add Applicant" />
    <Navigator route="/dashboard/admin/all-applicant" Icon={StockIcon} label="All Applicants" />
    <Navigator route="/dashboard/admin/users" Icon={AllOrdersIcon} label="All Users" />
    <Navigator route="/dashboard/admin/profile" Icon={ProfileIcon} label="Profile" />
  </>
);

const Navigator = ({
  route,
  Icon,
  label,
}: {
  route: string;
  Icon: ElementType;
  label: string;
}) => {
  return (
    <Link
      href={route}
      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-all group"
    >
      <Icon className="text-xl group-hover:translate-x-1 transition" />
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
};

export default DashboardNavigation;