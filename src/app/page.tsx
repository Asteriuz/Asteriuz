import About from "@/components/Home/About";
import Clients from "@/components/Home/Clients";
import Curriculo from "@/components/Home/Curriculo";
import Hero from "@/components/Home/Hero";
import Portfolio from "@/components/Home/Portfolio";
import Services from "@/components/Home/Services";

export default function Home() {
  return (
    <main className="ml-72 flex flex-1 flex-col overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Curriculo />
      <Clients />
      <Portfolio />
    </main>
  );
}
