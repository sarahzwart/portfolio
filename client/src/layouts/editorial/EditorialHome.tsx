import { getPosts } from "@/lib/posts";
import { Header } from "./Header";
import { Intro } from "./Intro";
import { About } from "./About";
import { Hobbies } from "./Hobbies";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Journal } from "./Journal";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export function EditorialHome() {
  const posts = getPosts();
  return (
    <div className="isolate overflow-x-clip">
      <Header showJournal={posts.length > 0} />
      <main className="mx-auto max-w-5xl px-5 sm:px-8">
        <Intro />
        <About />
        <Hobbies />
        <Experience />
        <Projects />
        <Journal posts={posts} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
