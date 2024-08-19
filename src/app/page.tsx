import About from "./components/About";
import Companies from "./components/Companies";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Companies/>
    </main>
  );
}
