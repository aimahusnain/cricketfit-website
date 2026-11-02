import Link from "next/link";

const APP_STORE_URL = "#";
const PLAY_STORE_URL = "#";

const categories = [
  { name: "Agility", text: "Footwork drills, lateral shuffles, quick feet.", icon: "⚡" },
  { name: "Running", text: "Sprints, A-Skips, B-Skips and endurance runs.", icon: "🏃" },
  { name: "Stamina", text: "Cardio sessions that last a full day in the field.", icon: "🫀" },
  { name: "Batting", text: "Practice drills and technique work.", icon: "🏏" },
  { name: "Bowling", text: "Run-up practice and bowling technique drills.", icon: "🎯" },
  { name: "Fielding", text: "Catching drills and fielding exercises.", icon: "🧤" },
  { name: "Core", text: "Strength and stability for balance and power.", icon: "🧱" },
  { name: "Strength", text: "Medicine ball throws, box jumps, power moves.", icon: "💪" },
];

const features = [
  {
    title: "Build your own workout",
    text: "Pick exercises from the library, set the order, and save a routine that fits your week.",
  },
  {
    title: "Ready-made workouts",
    text: "Start with templates designed for different training goals and difficulty levels.",
  },
  {
    title: "Timer and rep counter",
    text: "Timed exercises count down for you. Rep-based exercises get a simple counter.",
  },
  {
    title: "Calendar and history",
    text: "See what you trained and when. Spot the gaps before your next match.",
  },
  {
    title: "Reminders",
    text: "Choose a daily workout time and get a nudge to keep your streak going.",
  },
  {
    title: "Exercise instructions",
    text: "Every exercise has clear instructions, so you know what to do before you start.",
  },
];

const steps = [
  { title: "Pick a workout", text: "Choose a ready-made plan or build your own from the exercise library." },
  { title: "Train", text: "Follow each exercise with the timer or rep counter. No internet needed." },
  { title: "Review", text: "Finish the session, see your summary, and find it later on your calendar." },
];

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px]">
      <div className="absolute -inset-6 rounded-[4rem] bg-[#B8F004]/10 blur-3xl" aria-hidden />
      <div className="relative rounded-[2.5rem] border border-[#1E261C] bg-[#0d0d10] p-3 shadow-2xl">
        <div className="rounded-[2rem] bg-[#09090b] px-5 pb-6 pt-8">
          <p className="text-sm text-[#808080]">Batting session</p>
          <p className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold">
            Front foot drives
          </p>

          <div className="my-7 flex justify-center">
            <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-[10px] border-[#1E261C]">
              <div
                className="absolute inset-[-10px] rounded-full border-[10px] border-[#B8F004] border-b-transparent border-l-transparent"
                style={{ transform: "rotate(35deg)" }}
                aria-hidden
              />
              <div className="text-center">
                <p className="font-[family-name:var(--font-display)] text-5xl font-extrabold">0:42</p>
                <p className="text-xs text-[#B0B0B0]">remaining</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {[
              ["Shadow batting", "Done", true],
              ["Front foot drives", "In progress", true],
              ["Lateral shuffles", "Next", false],
            ].map(([name, status, active]) => (
              <div
                key={name as string}
                className="flex items-center justify-between rounded-xl bg-[#1E1E1E] px-4 py-3 text-sm"
              >
                <span>{name}</span>
                <span className={active ? "text-[#B8F004]" : "text-[#808080]"}>{status}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-full bg-[#B8F004] py-3 text-center text-sm font-semibold text-black">
            Pause
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-[#1E261C] bg-[#09090b]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight">
            Cricket<span className="text-[#B8F004]">Fit</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-[#B0B0B0] md:flex" aria-label="Main">
            <a href="#exercises" className="hover:text-white focus-visible:text-white">Exercises</a>
            <a href="#features" className="hover:text-white focus-visible:text-white">Features</a>
            <a href="#offline" className="hover:text-white focus-visible:text-white">Offline</a>
            <a href="#how" className="hover:text-white focus-visible:text-white">How it works</a>
          </nav>
          <a
            href="#download"
            className="rounded-full bg-[#B8F004] px-5 py-2 text-sm font-semibold text-black transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get the app
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-24 pt-16 md:grid-cols-[1.15fr_1fr] md:pt-24">
          <div>
            <h1 className="font-[family-name:var(--font-display)] text-6xl font-extrabold uppercase leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">
              Train like
              <br />
              the match
              <br />
              is tomorrow.
            </h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-[#B0B0B0]">
              CricketFit gives batters, bowlers and fielders structured workouts they can build,
              follow and track, with or without an internet connection.
            </p>
            <div id="download" className="mt-9 flex flex-wrap gap-3">
              <a
                href={APP_STORE_URL}
                className="rounded-full bg-[#B8F004] px-7 py-3.5 font-semibold text-black transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Download for iOS
              </a>
              <a
                href={PLAY_STORE_URL}
                className="rounded-full border border-[#2c3a27] px-7 py-3.5 font-semibold transition hover:border-[#B8F004] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Download for Android
              </a>
            </div>
          </div>
          <PhoneMockup />
        </section>

        {/* Exercise categories */}
        <section id="exercises" className="border-y border-[#1E261C] bg-[#0d0d10] py-24">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="max-w-xl font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-none sm:text-5xl">
              Every part of your game has a drill
            </h2>
            <p className="mt-4 max-w-lg text-[#B0B0B0]">
              The exercise library covers eight categories, from footwork to power.
            </p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((c) => (
                <div
                  key={c.name}
                  className="rounded-2xl border border-[#1E261C] bg-[#1E1E1E] p-6 transition hover:border-[#B8F004]/60"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#09090b] text-xl" aria-hidden>
                    {c.icon}
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-bold">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#B0B0B0]">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-5 py-24">
          <h2 className="max-w-xl font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-none sm:text-5xl">
            Everything you need to stay consistent
          </h2>
          <dl className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="border-l-2 border-[#B8F004] pl-5">
                <dt className="text-lg font-semibold">{f.title}</dt>
                <dd className="mt-2 leading-relaxed text-[#B0B0B0]">{f.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Offline */}
        <section id="offline" className="bg-[#B8F004] text-black">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:grid-cols-2">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-5xl font-extrabold uppercase leading-[0.95] sm:text-6xl">
                No signal at the nets? No problem.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-black/75">
                Create workouts and complete full sessions offline. When you are back online,
                sync your changes from Settings.
              </p>
            </div>
            <ul className="space-y-4 self-center">
              {[
                ["Create offline", "Build custom workouts without a connection."],
                ["Train offline", "Start and finish sessions anywhere."],
                ["Cached for you", "Exercises, templates and your workouts are saved on your phone."],
                ["Sync when ready", "Upload offline changes and see anything still pending."],
              ].map(([t, d]) => (
                <li key={t} className="rounded-2xl bg-black/10 p-5">
                  <p className="font-semibold">{t}</p>
                  <p className="mt-1 text-sm text-black/70">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="mx-auto max-w-6xl px-5 py-24">
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold uppercase sm:text-5xl">
            Three steps to a better session
          </h2>
          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-[#1E261C] bg-[#1E1E1E] p-7">
                <span className="font-[family-name:var(--font-display)] text-5xl font-extrabold text-[#B8F004]">
                  {i + 1}
                </span>
                <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-[#B0B0B0]">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-6xl px-5 pb-24">
          <div className="rounded-[2rem] border border-[#1E261C] bg-gradient-to-br from-[#1E1E1E] to-[#09090b] px-8 py-16 text-center">
            <h2 className="mx-auto max-w-2xl font-[family-name:var(--font-display)] text-4xl font-extrabold uppercase leading-none sm:text-6xl">
              Your next innings starts in the gym.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[#B0B0B0]">
              Download CricketFit and start your first workout today.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={APP_STORE_URL} className="rounded-full bg-[#B8F004] px-7 py-3.5 font-semibold text-black transition hover:brightness-110">
                Download for iOS
              </a>
              <a href={PLAY_STORE_URL} className="rounded-full border border-[#2c3a27] px-7 py-3.5 font-semibold transition hover:border-[#B8F004]">
                Download for Android
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1E261C] py-10 text-sm text-[#808080]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 sm:flex-row">
          <p>© 2026 CricketFit. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-white">Terms &amp; Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}