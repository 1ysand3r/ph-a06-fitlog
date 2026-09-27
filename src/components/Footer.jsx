import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="min-h-17.75 bg-[#101114] px-5 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
<Image src="/logo.png" alt="logo" width={20} height={20}/>
        <span className="font-oswald">
          FITLOG
        </span>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-500">
        © 2026 FitLog — Workout Library. Train hard, log honest.
      </p>
    </footer>
  );
};

export default Footer;
