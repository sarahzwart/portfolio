import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/layouts/editorial/Header";
import { Footer } from "@/layouts/editorial/Footer";
import { formatDate, getPost, getPosts } from "@/lib/posts";
import { profile } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

// Static export: one HTML page is built per post. Static export refuses an
// empty list, so before the first post exists it builds a single 404 page.
export const dynamicParams = false;
export const generateStaticParams = () => {
  const slugs = getPosts().map((p) => ({ slug: p.slug }));
  return slugs.length > 0 ? slugs : [{ slug: "coming-soon" }];
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  return post ? { title: `${post.title} | ${profile.name}`, description: post.summary } : {};
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <>
      <Header showJournal base="/" />
      <main className="mx-auto max-w-2xl px-5 pb-20 pt-10 sm:px-8 sm:pt-16">
        <Link href="/journal" className="caps link-underline">
          ← All updates
        </Link>
        <article className="mt-10">
          <header>
            <p className="caps text-cocoa/80">
              {post.season} <span aria-hidden>·</span> <time dateTime={post.date}>{formatDate(post.date)}</time>
            </p>
            <h1 className="display mt-3 text-2xl sm:text-4xl">{post.title}</h1>
          </header>
          {/* Post HTML comes from Markdown files in this repo, never from visitors */}
          <div className="journal-prose mt-10" dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </main>
      <Footer />
    </>
  );
}
