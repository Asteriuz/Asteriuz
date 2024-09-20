import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import Mapa from "@/components/Home/Mapa";
import Product from "@/components/Home/Product";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Product />
      <Contact />
      <Mapa />
    </main>
  );
}
