import { getPosts } from "@/lib/posts";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { About } from "./About";
import { Hobbies } from "./Hobbies";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Journal } from "./Journal";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export function PanelsHome() {
  const posts = getPosts();
  return (
    <>
      <Navbar showJournal={posts.length > 0} />
      <main>
        <Hero />
        <About />
        <Hobbies />
        <Experience />
        <Projects />
        <Journal posts={posts} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
