import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";

export default function HeroContent() {
  return (
      <div className="max-w-5xl text-center space-y-8">

        <p className="text-blue-400 font-medium">
          👋 Hello, I&#39;m
        </p>

        <h1 className="text-6xl font-bold">
          Ismail Lamraoui
        </h1>

        <h2 className="text-3xl text-slate-400">
          Backend Developer • AI Engineer
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-slate-400">
          I build intelligent software using Java,
          Spring Boot, AI and modern web technologies.
        </p>

        <HeroButtons />

        <HeroSocials />

      </div>
  );
}