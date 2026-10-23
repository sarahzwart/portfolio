import Link from "next/link";
import { formatDate, type Post } from "@/lib/posts";
import { Section } from "./Section";

// Latest seasonal updates. Hidden until the first post exists.
export const Journal = ({ posts }: { posts: Post[] }) => {
  if (posts.length === 0) return null;

  return (
    <Section id="journal" label="Journal">
      <ul className="-mx-4 space-y-2">
        {posts.slice(0, 3).map((p) => (
          <li key={p.slug}>
            <Link
              href={`/journal/${p.slug}`}
              className="block rounded-3xl px-4 py-5 transition-colors duration-300 hover:bg-petal/60 focus-visible:bg-petal/60"
            >
              <span className="caps !text-[0.6rem] text-cocoa/80">
                {p.season} <span aria-hidden>·</span> {formatDate(p.date)}
              </span>
              <span className="display mt-2 block text-sm sm:text-base">{p.title}</span>
              <span className="mt-2 block leading-relaxed">{p.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/journal" className="caps link-underline mt-6 inline-block">
        All updates →
      </Link>
    </Section>
  );
};
