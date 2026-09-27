import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function WorkoutBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#171923] p-8 md:p-12 lg:p-16 text-white border border-gray-800 shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start gap-4 z-10">
          <span className="text-xs font-bold tracking-widest text-[#a3e635] uppercase">
            Workout Library
          </span>
          
          <h1 className="font-oswald text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.05] tracking-tight text-white">
            Train with intent. Log every set.
          </h1>
          
          <p className="text-gray-400 text-base sm:text-lg max-w-xl font-normal leading-relaxed mt-1">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>
          <Link href="/#library">
          <button className="btn bg-[#c084fc] hover:bg-[#a855f7] border-none text-black font-extrabold text-sm uppercase px-6 min-h-11 h-11 rounded-lg mt-4 bg-[#a3e635] hover:bg-[#84cc16]">
            Browse Workouts
          </button>
          </Link>
        </div>

        {/* Right Image Column */}
        <div className="lg:col-span-5 relative min-h-75 lg:min-h-95 w-full flex items-center justify-center lg:justify-end">
          <Image
            src="/banner.png"
            alt="Workout Equipment Illustration"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-contain object-right"
            priority
          />
        </div>

      </div>
    </div>
  );
}