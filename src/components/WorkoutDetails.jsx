'use client'
import { usePlan } from '@/context/PlanContext';
import React from 'react';

export default function WorkoutDetails({ workout }) {
  const { addToPlan, addToSaved } = usePlan();
  if (!workout) {
    return (
      <div className="min-h-screen bg-[#121316] text-white flex items-center justify-center">
        <p className="text-gray-400">Workout data not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121316] text-white p-6 md:p-12 lg:p-16 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Image Container */}
        <div className="lg:col-span-6 w-full aspect-square bg-[#1a1c23] rounded-2xl overflow-hidden relative border border-gray-800">
          <img
            src={workout.image}
            alt={workout.name || 'Workout image'}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column: Workout Info */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          
          {/* Header & Badges */}
          <div>
            <h1 className="font-oswald text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-white">
              {workout.name}
            </h1>
            
            {workout.description && (
              <p className="text-gray-400 text-sm sm:text-base mt-2 leading-relaxed">
                {workout.description}
              </p>
            )}

            {Array.isArray(workout.muscleGroups) && (
              <div className="flex flex-wrap gap-2 mt-4">
                {workout.muscleGroups.map((group, idx) => (
                  <span
                    key={idx}
                    className="badge border-none bg-[#a3e635] text-black font-extrabold text-xs uppercase px-3 py-1 rounded-md"
                  >
                    {group}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Stats Box Table */}
          <div className="bg-[#181a20] border border-gray-800/80 rounded-xl divide-y divide-gray-800/60 text-sm">
            {workout.equipment && (
              <div className="flex justify-between px-5 py-3.5">
                <span className="text-gray-500 font-bold uppercase text-xs tracking-wider">Equipment</span>
                <span className="text-gray-200 font-semibold">{workout.equipment}</span>
              </div>
            )}

            {workout.difficulty && (
              <div className="flex justify-between px-5 py-3.5">
                <span className="text-gray-500 font-bold uppercase text-xs tracking-wider">Difficulty</span>
                <span className="text-gray-200 font-semibold">{workout.difficulty}</span>
              </div>
            )}

            {workout.sets && (
              <div className="flex justify-between px-5 py-3.5">
                <span className="text-gray-500 font-bold uppercase text-xs tracking-wider">Sets</span>
                <span className="text-gray-200 font-semibold">{workout.sets}</span>
              </div>
            )}

            {workout.reps && (
              <div className="flex justify-between px-5 py-3.5">
                <span className="text-gray-500 font-bold uppercase text-xs tracking-wider">Reps</span>
                <span className="text-gray-200 font-semibold">{workout.reps}</span>
              </div>
            )}

            {workout.duration && (
              <div className="flex justify-between px-5 py-3.5">
                <span className="text-gray-500 font-bold uppercase text-xs tracking-wider">Duration</span>
                <span className="text-gray-200 font-semibold">{workout.duration} min</span>
              </div>
            )}

            {workout.caloriesBurned && (
              <div className="flex justify-between px-5 py-3.5">
                <span className="text-gray-500 font-bold uppercase text-xs tracking-wider">Calories</span>
                <span className="text-gray-200 font-semibold">{workout.caloriesBurned} kcal</span>
              </div>
            )}

            {workout.rating && (
              <div className="flex justify-between px-5 py-3.5">
                <span className="text-gray-500 font-bold uppercase text-xs tracking-wider">Rating</span>
                <span className="text-gray-200 font-semibold">{workout.rating}</span>
              </div>
            )}
          </div>

          {/* Instructions List */}
          {Array.isArray(workout.instructions) && workout.instructions.length > 0 && (
            <div>
              <h3 className="font-oswald text-lg font-bold uppercase tracking-wider text-white mb-3">
                Instructions
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300 leading-relaxed">
                {workout.instructions.map((step, idx) => (
                  <li key={idx} className="pl-1">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          onClick={() => addToPlan(workout)}
          className="btn border-none bg-[#a3e635] hover:bg-[#84cc16] text-black font-extrabold text-xs uppercase px-5 h-11 min-h-11 rounded-lg flex items-center gap-2"
        >
          Add to today's plan
        </button>

        <button
          onClick={() => addToSaved(workout)}
          className="btn border border-gray-700 bg-transparent hover:bg-gray-800 text-gray-300 font-bold text-xs uppercase px-5 h-11 min-h-11 rounded-lg flex items-center gap-2"
        >
          Save for later
        </button>
      </div>

        </div>
      </div>
    </div>
  );
}