import React from 'react';
import WorkoutDetails from '@/components/WorkoutDetails'; // Adjust import path as needed

export default async function WorkoutPage({ params }) {
  const { id } = await params;

  // Fetch all workouts from the API
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  const json = await res.json();

  // Safely extract the array from response
  const lifts = Array.isArray(json)
    ? json
    : json?.lifts || json?.data || [];

  // Match item by id (handling both string and number IDs)
  const workout = lifts.find((item) => String(item.id) === String(id));

  return(
    <>
    <WorkoutDetails workout={workout} />
    </>
  );
}