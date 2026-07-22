import Hero from "@/features/hero";
import About from "@/features/about";
import Projects from "@/features/projects";
import Skills from "@/features/skills";
import Experience from "@/features/experience";
import Education from "@/features/education";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
    </>
  );
}
