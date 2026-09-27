'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePlan } from '@/context/PlanContext';

export default function MyPlan() {
  const { plan, saved, removeFromPlan, removeFromSaved } = usePlan();
  const [activeTab, setActiveTab] = useState('plan'); // 'plan' or 'saved'
  const [sortBy, setSortBy] = useState('duration');

  const list = activeTab === 'plan' ? plan : saved;

  // Sorting Logic
  const sortedList = [...list].sort((a, b) => {
    if (sortBy === 'duration') return (a.duration || 0) - (b.duration || 0);
    if (sortBy === 'caloriesBurned') return (a.caloriesBurned || 0) - (b.caloriesBurned || 0);
    if (sortBy === 'name') return (a.name || '').localeCompare(b.name || '');
    return 0;
  });

  const totalExercises = list.length;
  const totalMinutes = list.reduce((acc, item) => acc + (Number(item.duration) || 0), 0);
  const totalCalories = list.reduce((acc, item) => acc + (Number(item.caloriesBurned) || 0), 0);

  const handleRemove = (id) => {
    if (activeTab === 'plan') removeFromPlan(id);
    else removeFromSaved(id);
  };

  return (
    <div className="min-h-screen bg-[#121316] text-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <h1 className="font-oswald text-4xl sm:text-5xl font-extrabold uppercase tracking-wide text-white">
            MY PLAN
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats Summary */}
        <div className="bg-[#171923] border border-gray-800/80 rounded-2xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-800/80">
          <div className="flex flex-col gap-1">
            <span className="text-gray-400 text-xs font-semibold uppercase">Exercises</span>
            <span className="font-oswald text-4xl font-extrabold text-[#a3e635]">{totalExercises}</span>
          </div>
          <div className="pt-4 sm:pt-0 sm:pl-8 flex flex-col gap-1">
            <span className="text-gray-400 text-xs font-semibold uppercase">Minutes</span>
            <span className="font-oswald text-4xl font-extrabold text-white">{totalMinutes}</span>
          </div>
          <div className="pt-4 sm:pt-0 sm:pl-8 flex flex-col gap-1">
            <span className="text-gray-400 text-xs font-semibold uppercase">Calories</span>
            <span className="font-oswald text-4xl font-extrabold text-white">{totalCalories}</span>
          </div>
        </div>

        {/* Tab & Sort Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="bg-[#171923] p-1 rounded-xl border border-gray-800/80 inline-flex">
            <button
              onClick={() => setActiveTab('plan')}
              className={`px-5 py-2 text-xs font-bold uppercase rounded-lg transition-all ${
                activeTab === 'plan' ? 'bg-[#212431] text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Today&apos;s Plan
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`px-5 py-2 text-xs font-bold uppercase rounded-lg transition-all ${
                activeTab === 'saved' ? 'bg-[#212431] text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-xs font-bold text-gray-400 uppercase">Sort By</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="select select-sm bg-[#171923] border-gray-800 text-white text-xs font-bold rounded-lg"
            >
              <option value="duration">Duration</option>
              <option value="caloriesBurned">Calories</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        {/* Workouts List */}
        {sortedList.length === 0 ? (
          <div className="border border-dashed border-gray-800/80 rounded-2xl bg-[#171923]/30 min-h-[320px] flex flex-col items-center justify-center p-8 text-center">
            <h3 className="font-oswald text-2xl font-extrabold uppercase text-white">NOTHING HERE YET</h3>
            <p className="text-gray-400 text-sm mt-1">Browse the library and add a lift to get today moving.</p>
            <Link href="/" className="btn border-none bg-[#a3e635] hover:bg-[#84cc16] text-black font-extrabold text-xs uppercase px-6 h-11 min-h-11 rounded-lg mt-4">
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {sortedList.map((item) => (
              <div key={item.id} className="bg-[#171923] border border-gray-800/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-16 rounded-xl bg-[#252834] overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-oswald text-lg font-bold uppercase text-white">{item.name}</h4>
                    <p className="text-xs text-gray-400">{item.equipment}</p>
                    <p className="text-xs text-gray-400 mt-1 flex items-center gap-3">
                      <span>⏱ {item.duration} min</span>
                      <span>🔥 {item.caloriesBurned} kcal</span>
                      <span>⭐ {item.rating}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-auto">
                  <Link href={`/workouts/${item.id}`} className="btn btn-sm bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 text-xs rounded-full px-4">
                    View Details
                  </Link>

                  {activeTab === 'plan' && (
                    <button
                      onClick={() => removeFromPlan(item.id)}
                      className="btn btn-sm border-none bg-[#a3e635] hover:bg-[#84cc16] text-black font-extrabold text-xs rounded-full px-4 flex items-center gap-1"
                    >
                      ✓ Mark as Done
                    </button>
                  )}

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-gray-500 hover:text-white p-1 text-sm font-bold ml-1"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}