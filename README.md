# 🏋️ FitLog

FitLog is a dark-themed, responsive gym companion built with **Next.js** (App Router), **Tailwind CSS**, and **DaisyUI**. It allows users to browse an extensive exercise library, track their workout plan for the day, and save lifts for later—complete with persistent storage and real-time toast notifications.

---

## ✨ Features

- **🏋️ Workout Library**: Explore exercises categorized by targeted muscle groups, equipment, duration, calories burned, and ratings.
- **📅 Today's Plan**: Add up to 5 lifts for today's active routine.
- **🔖 Saved Workouts**: Bookmark exercises to build your future routines.
- **📊 Real-time Stats**: Dynamic calculations of total exercises, total minutes, and total calories burned.
- **🔀 Sorting & Filtering**: Sort your saved/planned exercises by duration, calories, or name.
- **💾 LocalStorage Persistence**: Plan and saved list states persist across browser refreshes.
- **🔔 Toast Notifications**: Interactive feedback on user actions powered by `react-toastify`.
- **📱 Dynamic Navigation & Smooth Scrolling**: Active link indicators and quick jump anchor scrolling.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- **Fonts**: [Google Fonts (`Oswald`, `Geist`)](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) via `next/font`
- **State Management**: React Context API (`PlanContext`)
- **Notifications**: `react-toastify`
- **Icons & Images**: Next.js `Image` Optimization

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
- **Node.js**: `v18.x` or later
- **npm**: `v9.x` or later (or `yarn` / `pnpm`)

### Installation

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/your-username/fitlog.git](https://github.com/1ysand3r/ph-a06-fitlog.git)
   cd fitlog
   ```
2. **Install dependencies**:
```bash
npm install

```
3. **Run the development server**:
```bash
npm run dev

```
4. **Open in browser**:
Navigate to [http://localhost:3000](http://localhost:3000?utm_source=gemini) to see the application live.

---

## 📁 Project Structure

```text
├── app/
│   ├── globals.css          # Global styles & Tailwind directives
│   ├── layout.js            # Root layout containing PlanProvider, Navbar & Footer
│   ├── page.js              # Homepage (Hero Banner + Workout Library)
│   ├── my-plan/
│   │   └── page.js          # My Plan route
│   └── workouts/
│       └── [id]/
│           └── page.js      # Dynamic workout details route
├── components/
│   ├── Footer.jsx           # Application footer
│   ├── Hero.jsx             # Hero banner component
│   ├── MyPlan.jsx           # Plan and Saved management component
│   ├── Navbar.jsx           # Global navigation bar with live counters
│   ├── WorkoutDetails.jsx   # Detailed view for individual workouts
│   └── WorkoutLibrary.jsx   # Grid listing for exercise cards
├── context/
│   └── PlanContext.jsx      # Global React Context store
└── public/                  # Static assets and images

```

---

## 🔌 API Endpoint

The workout data is fetched dynamically from the following worker endpoint:

```text
[https://api.abcz.workers.dev/api/fitlog](https://api.abcz.workers.dev/api/fitlog)

```

---

## 📜 Scripts

* `npm run dev`: Starts the local development server.
* `npm run build`: Builds the production application bundle.
* `npm run start`: Starts the production build server.
* `npm run lint`: Runs ESLint to check code quality.