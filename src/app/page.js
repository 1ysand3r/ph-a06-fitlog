import WorkoutBanner from "@/components/Hero";
import WorkoutLibrary from "@/components/WorkoutLibrary";

export default async function Home() {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const json = await res.json();

  const lifts = Array.isArray(json) ? json : json?.lifts || json?.data || [];

  return (
    <main className="flex-1 bg-[#121316]">
      <WorkoutBanner />
      <WorkoutLibrary lifts={lifts} />
    </main>
  );
}