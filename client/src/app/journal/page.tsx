import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/layouts/editorial/Header";
import { Footer } from "@/layouts/editorial/Footer";
import { formatDate, getPosts } from "@/lib/posts";
import { profile } from "@/content/site";

export const metadata: Metadata = {
  title: `Journal | ${profile.name}`,
  description: "Seasonal updates on where I'm at and what I'm working toward.",
};

export default function JournalPage() {
  const posts = getPosts();

  return (
    <>
      <Header showJournal base="/" />
      <main className="mx-auto max-w-3xl px-5 pb-20 pt-10 sm:px-8 sm:pt-16">
        <p className="caps text-cocoa/80">Journal</p>
        <h1 className="display mt-3 text-2xl sm:text-4xl">Seasonal updates</h1>
        <p className="mt-4 max-w-xl leading-relaxed">
          Where I&apos;m at, what I&apos;m learning and what I&apos;m working toward, a few times a year.
        </p>

        {posts.length === 0 ? (
          <p className="mt-12 rounded-3xl border-2 border-dashed border-cocoa/40 p-8 text-center">
            The first update is on its way. Check back soon!
          </p>
        ) : (
          <ul className="-mx-4 mt-12 space-y-2">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/journal/${p.slug}`}
                  className="block rounded-3xl px-4 py-6 transition-colors duration-300 hover:bg-petal/60 focus-visible:bg-petal/60"
                >
                  <span className="caps !text-[0.6rem] text-cocoa/80">
                    {p.season} <span aria-hidden>·</span> {formatDate(p.date)}
                  </span>
                  <span className="display mt-2 block text-base sm:text-lg">{p.title}</span>
                  <span className="mt-2 block leading-relaxed">{p.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </>
  );
}
