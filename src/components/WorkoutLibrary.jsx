import React from 'react';
import Link from 'next/link';

export default function WorkoutLibrary({ lifts = [] }) {
  return (
    <section id="library" className="bg-[#121316] text-white p-6 md:p-10 min-h-screen">
      <div className="mb-8">
        <h2 className="font-oswald text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wide text-white">
          THE LIBRARY
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mt-1 font-normal">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {lifts.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No workouts available.
        </div>
      )}

      {lifts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lifts.map((item) => (
            <Link
              key={item.id}
              href={`/workouts/${item.id}`}
              className="bg-[#1a1c23] border border-gray-800/80 rounded-2xl overflow-hidden hover:border-gray-600 hover:scale-[1.02] transition-all duration-200 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Image Placeholder */}
                <div className="relative w-full h-48 bg-[#252834] flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5">
                  {/* muscleGroups array */}
                  {Array.isArray(item.muscleGroups) && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.muscleGroups.map((group, idx) => (
                        <span
                          key={idx}
                          className="badge badge-sm border-none bg-[#a3e635] text-black font-extrabold text-[10px] tracking-wider uppercase px-2 py-1 rounded-md"
                        >
                          {group}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* name */}
                  <h3 className="font-oswald text-xl font-extrabold uppercase text-white tracking-wide group-hover:text-[#a3e635] transition-colors">
                    {item.name}
                  </h3>

                  {/* equipment */}
                  {item.equipment && (
                    <p className="text-xs text-gray-400 mt-1 font-medium">
                      {item.equipment}
                    </p>
                  )}
                </div>
              </div>

              {/* Card Footer Meta Info */}
              <div className="px-5 pb-5 pt-2 flex items-center gap-4 text-xs font-semibold text-gray-400 border-t border-gray-800/40">
                {/* duration */}
                {item.duration && (
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item.duration} min</span>
                  </div>
                )}

                {/* caloriesBurned */}
                {item.caloriesBurned && (
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    </svg>
                    <span>{item.caloriesBurned} kcal</span>
                  </div>
                )}

                {/* rating */}
                {item.rating && (
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-gray-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <span>{item.rating}</span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}