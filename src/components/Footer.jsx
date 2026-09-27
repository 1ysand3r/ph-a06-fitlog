import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="min-h-17.75 px-5 flex items-center justify-between gap-6">
      {/* Logo */}
      <div className="flex items-center gap-2">
<Image src="/logo.png" alt="logo" width={20} height={20}/>
        <span className="font-oswald">
          FITLOG
        </span>
      </div>

      {/* Copyright */}
      <p className="text-right text-[11px] text-gray-500 sm:text-xs w-full">
        © 2026 FitLog — Workout Library. Train hard, log honest.
      </p>
    </footer>
  );
};

export default Footer;
