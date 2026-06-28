import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Registers from "@/components/Registers";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Registers />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
