import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Skills from "@/components/Skills";
import Chat from "@/components/Chat";
import Contact from "@/components/Contact";
import AmbientBackground from "@/components/AmbientBackground";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <AmbientBackground />
      <Navigation />
      <Hero />
      <About />
      <Works />
      <Skills />
      <Chat />
      <Contact />
    </main>
  );
};

export default Index;
