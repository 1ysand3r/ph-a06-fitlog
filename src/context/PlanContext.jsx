'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const PlanContext = createContext();

export function PlanProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  // Load initial state from localStorage
  useEffect(() => {
    const localPlan = localStorage.getItem('fitlog_plan');
    const localSaved = localStorage.getItem('fitlog_saved');
    if (localPlan) setPlan(JSON.parse(localPlan));
    if (localSaved) setSaved(JSON.parse(localSaved));
  }, []);

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem('fitlog_plan', JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem('fitlog_saved', JSON.stringify(saved));
  }, [saved]);

  // Actions
  const addToPlan = (workout) => {
    if (plan.length >= 5) {
      alert("Cap of five lifts for today reached!");
      return;
    }
    if (!plan.some((item) => item.id === workout.id)) {
      setPlan((prev) => [...prev, workout]);
    }
  };

  const addToSaved = (workout) => {
    if (!saved.some((item) => item.id === workout.id)) {
      setSaved((prev) => [...prev, workout]);
    }
  };

  const removeFromPlan = (id) => {
    setPlan((prev) => prev.filter((item) => item.id !== id));
  };

  const removeFromSaved = (id) => {
    setSaved((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export const usePlan = () => useContext(PlanContext);