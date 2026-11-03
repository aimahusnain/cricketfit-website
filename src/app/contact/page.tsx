import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us - CricketFit",
  description: "Get in touch with the CricketFit team.",
};

const EMAIL = "aimahusnain@gmail.com";
const COMPANY = "Devkins";

export default function ContactPage() {
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
          Contact Us
        </h1>
        <p className="mt-8 max-w-lg leading-relaxed text-[#B0B0B0]">
          Have questions, feedback or need support? We'd love to hear from you. Fill out the form
          below or email us directly.
        </p>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold">
              Send us a message
            </h2>
            <form
              action={`mailto:${EMAIL}`}
              method="post"
              encType="text/plain"
              className="mt-6 space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-2 w-full rounded-xl border border-[#1E261C] bg-[#1E1E1E] px-4 py-3 text-white placeholder-[#505050] transition focus:border-[#B8F004] focus:outline-none focus:ring-1 focus:ring-[#B8F004]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-xl border border-[#1E261C] bg-[#1E1E1E] px-4 py-3 text-white placeholder-[#505050] transition focus:border-[#B8F004] focus:outline-none focus:ring-1 focus:ring-[#B8F004]"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="mt-2 w-full rounded-xl border border-[#1E261C] bg-[#1E1E1E] px-4 py-3 text-white placeholder-[#505050] transition focus:border-[#B8F004] focus:outline-none focus:ring-1 focus:ring-[#B8F004]"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="mt-2 w-full rounded-xl border border-[#1E261C] bg-[#1E1E1E] px-4 py-3 text-white placeholder-[#505050] transition focus:border-[#B8F004] focus:outline-none focus:ring-1 focus:ring-[#B8F004] resize-none"
                  placeholder="Tell us more..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#B8F004] px-7 py-3.5 font-semibold text-black transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Send message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold">
                Email us directly
              </h2>
              <p className="mt-4 leading-relaxed text-[#B0B0B0]">
                Prefer to email us directly? Send your questions, feedback or support requests to:
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-3 inline-block rounded-xl border border-[#1E261C] bg-[#1E1E1E] px-4 py-3 text-[#B8F004] transition hover:border-[#B8F004]"
              >
                {EMAIL}
              </a>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold">
                Response time
              </h2>
              <p className="mt-4 leading-relaxed text-[#B0B0B0]">
                We typically respond to all inquiries within 1-2 business days. For urgent matters,
                please include "Urgent" in your subject line.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold">
                About CricketFit
              </h2>
              <p className="mt-4 leading-relaxed text-[#B0B0B0]">
                CricketFit is operated by {COMPANY}. We're passionate about helping cricketers at
                all levels improve their fitness and performance.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-[#1E261C] py-10 text-sm text-[#808080]">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-3 px-5 sm:flex-row">
          <p>© 2026 CricketFit. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/legal/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-white">Terms &amp; Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
