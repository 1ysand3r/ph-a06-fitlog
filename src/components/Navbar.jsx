'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";

const Navbar = () => {
  const { plan, saved } = usePlan();
  const pathname = usePathname();

  const isWorkoutsActive = pathname === "/";
  const isMyPlanActive = pathname === "/my-plan";

  return (
    <nav className="grid min-h-16 grid-cols-[1fr_auto] items-center gap-x-3 bg-[#121315] px-4 py-3 md:grid-cols-3 md:px-6 md:py-0">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" width={20} height={20} alt="Fitlog logo" className="h-5 w-5 object-contain" />
        <span className="text-white font-oswald">FITLOG</span>
      </Link>

      <div className="col-span-2 row-start-2 flex justify-center md:col-span-1 md:col-start-2 md:row-start-1">
        <div className="flex items-center gap-1">
          <Link
            href="/"
            className={`btn btn-sm min-h-8 h-8 rounded-full border-0 px-3 text-xs sm:px-4 transition-colors ${
              isWorkoutsActive
                ? "bg-lime-400/10 text-lime-400 font-medium hover:bg-lime-400/20"
                : "bg-transparent text-gray-400 font-normal hover:bg-transparent hover:text-white"
            }`}
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            className={`btn btn-sm min-h-8 h-8 rounded-full border-0 px-3 text-xs sm:px-4 transition-colors ${
              isMyPlanActive
                ? "bg-lime-400/10 text-lime-400 font-medium hover:bg-lime-400/20"
                : "bg-transparent text-gray-400 font-normal hover:bg-transparent hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 text-xs sm:gap-5">
        <div className="flex items-center gap-1.5 text-gray-400 sm:gap-2">
          <span>Plan</span>
          <span className="badge badge-sm border-0 bg-lime-400 font-bold text-black">
            {plan.length}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-gray-500 sm:gap-2">
          <span>Saved</span>
          <span className="badge badge-sm border border-gray-700 bg-transparent text-gray-400">
            {saved.length}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;