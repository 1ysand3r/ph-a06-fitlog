'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

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

  // Actions with Toasts
  const addToPlan = (workout) => {
    if (plan.length >= 5) {
      toast.error("Cap of five lifts for today reached!");
      return;
    }
    if (plan.some((item) => item.id === workout.id)) {
      toast.info(`${workout.name} is already in today's plan`);
      return;
    }
    setPlan((prev) => [...prev, workout]);
    toast.success(`Added ${workout.name} to Today's Plan!`);
  };

  const addToSaved = (workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      toast.info(`${workout.name} is already saved`);
      return;
    }
    setSaved((prev) => [...prev, workout]);
    toast.success(`Saved ${workout.name} for later!`);
  };

  const removeFromPlan = (id) => {
    const item = plan.find((i) => i.id === id);
    setPlan((prev) => prev.filter((i) => i.id !== id));
    if (item) toast.info(`Removed ${item.name} from Today's Plan`);
  };

  const removeFromSaved = (id) => {
    const item = saved.find((i) => i.id === id);
    setSaved((prev) => prev.filter((i) => i.id !== id));
    if (item) toast.info(`Removed ${item.name} from Saved`);
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