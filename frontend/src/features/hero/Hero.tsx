import Container from "@/components/layout/Container";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center"
      aria-label="Introduction"
    >
      <Container>
        <HeroContent />
      </Container>
    </section>
  );
}
