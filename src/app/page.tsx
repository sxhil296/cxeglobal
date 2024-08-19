import About from "./components/About";
import Companies from "./components/Companies";
import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import WhyCXE from "./components/WhyCXE";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Companies/>
      <WhyCXE />
      <TechStack />
      <ContactForm />
    </main>
  );
}
