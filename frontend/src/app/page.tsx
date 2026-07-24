import Hero from "@/features/hero";
import About from "@/features/about";
import Projects from "@/features/projects";
import Skills from "@/features/skills";
import Education from "@/features/education";
import Contact from "@/features/contact";
import Comments from "@/features/comments";
import Journey from "@/features/journey/Journey";
import Volunteering from "@/features/volunteering/Volunteering";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Skills />
        <Volunteering />
        <Comments />
      <Contact />
    </>
  );
}
