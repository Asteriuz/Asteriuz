import About from "@/components/Home/About";
import Clients from "@/components/Home/Clients";
import Curriculo from "@/components/Home/Curriculo";
import Hero from "@/components/Home/Hero";
import Portfolio from "@/components/Home/Portfolio";
import Services from "@/components/Home/Services";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col overflow-x-hidden">
      <Hero />
      <div className="px-4 xl:ml-72 xl:px-0">
        <About />
        <Services />
        <Curriculo />
        <Clients />
        <Portfolio />
      </div>
    </main>
  );
}
