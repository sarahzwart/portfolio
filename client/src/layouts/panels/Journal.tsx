import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formatDate, type Post } from "@/lib/posts";

// Latest seasonal updates. Hidden until the first post exists.
export const Journal = ({ posts }: { posts: Post[] }) => {
  if (posts.length === 0) return null;

  return (
    <section id="journal" className="bg-petal px-5 py-20 text-center">
      <h2 className="display text-xl sm:text-2xl">From my journal</h2>
      <ul className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
        {posts.slice(0, 3).map((p) => (
          <li key={p.slug}>
            <Link
              href={`/journal/${p.slug}`}
              className="flex h-full flex-col rounded-3xl border-[3px] border-cocoa bg-cream p-6 text-left transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none"
            >
              <span className="caps !text-[0.6rem]">{p.season}</span>
              <span className="display mt-3 text-base">{p.title}</span>
              <span className="mt-3 flex-1 text-sm leading-relaxed">{p.summary}</span>
              <span className="mt-4 text-xs opacity-80">{formatDate(p.date)}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Button asChild variant="secondary" size="pill" className="mt-10">
        <Link href="/journal">All updates</Link>
      </Button>
    </section>
  );
};
