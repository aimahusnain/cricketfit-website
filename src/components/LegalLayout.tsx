import Link from "next/link";

export type LegalSection = {
  title: string;
  content: React.ReactNode;
};

export default function LegalLayout({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-[#1E261C]">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight"
          >
            Cricket<span className="text-[#B8F004]">Fit</span>
          </Link>
          <Link href="/" className="text-sm text-[#B0B0B0] hover:text-white">
            Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-extrabold uppercase leading-none sm:text-6xl">
          {title}
        </h1>
        <p className="mt-4 text-sm text-[#808080]">Last updated: {updated}</p>
        <p className="mt-8 leading-relaxed text-[#B0B0B0]">{intro}</p>

        <nav
          aria-label="On this page"
          className="mt-10 rounded-2xl border border-[#1E261C] bg-[#1E1E1E] p-6"
        >
          <p className="font-semibold">Contents</p>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm text-[#B0B0B0]">
            {sections.map((s, i) => (
              <li key={s.title}>
                <a href={`#section-${i + 1}`} className="hover:text-[#B8F004]">
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-12 space-y-12">
          {sections.map((s, i) => (
            <section key={s.title} id={`section-${i + 1}`} className="scroll-mt-8">
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold">
                {i + 1}. {s.title}
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-[#B0B0B0] [&_a]:text-[#B8F004] [&_a]:underline [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-white">
                {s.content}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-[#1E261C] py-10 text-sm text-[#808080]">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-3 px-5 sm:flex-row">
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