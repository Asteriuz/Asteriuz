"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io5";
import FadeInSection from "./Utils/FadeInSection";
import BigIron from "@/assets/about/big-iron.webp";
import SmallIron from "@/assets/about/small-iron.webp";

export default function About() {
  const [count, setCount] = useState(0);
  const [isClient, setIsClient] = useState(false); // Add state to check if it's client-side
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setIsClient(true); // Set isClient to true after the component mounts

    if (inView && window.innerWidth > 768) {
      let start = 0;
      let end = 15;
      let duration = 2000;
      let stepTime = Math.abs(Math.floor(duration / (end - start)));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [inView]);

  return (
    <FadeInSection>
      <section
        className="relative flex items-center justify-center py-12 lg:py-24"
        id="sobre"
      >
        <div className="lg:gap-18 grid max-w-screen-xl grid-cols-1 gap-20 rounded-lg px-8 lg:grid-cols-2">
          <div className="relative">
            <Image
              src={BigIron.src}
              alt="Metal"
              width={570}
              height={420}
              layout="responsive"
              className="rounded-lg"
              loading="lazy"
            />
            <div
              ref={ref}
              className="absolute right-0 top-0 flex items-center justify-center gap-4 rounded-bl-lg rounded-tr-lg bg-primary p-3 font-bold text-white lg:gap-6 lg:p-5"
            >
              {isClient && window.innerWidth > 768 ? (
                <p className="text-4xl font-bold lg:text-6xl">{count}</p>
              ) : (
                <p className="text-4xl font-bold lg:text-6xl">15</p>
              )}
              <div className="text-xl leading-none lg:text-3xl">
                <p>Anos de</p>
                <p>experiência</p>
              </div>
            </div>
            <div className="border-5 absolute -bottom-14 -left-7 flex items-center justify-center gap-6 rounded-lg border-[12px] border-white lg:-left-10 lg:border-[20px]">
              <Image
                src={SmallIron.src}
                alt="Metal"
                width={299.25}
                height={220.5}
                className="w-[176.4px] rounded-lg lg:w-[299.25px]"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5">
            <p className="text-lg font-bold text-primary">Sobre nós</p>
            <h2 className="text-5xl font-bold leading-tight">
              Melhor AÇO, <span className="text-primary">SEM RISCO</span>
            </h2>
            <h3 className="text-2xl font-bold">
              Uma força global na produção e engenharia de ferro e aço
            </h3>
            <p>
              Com nosso conhecimento e experiência, nosso objetivo é atender às
              necessidades dos nossos clientes, superando suas expectativas. A
              FERPAN, comércio e artefatos de ferro é a sua escolha para a mais
              alta qualidade e as ideias mais inovadoras em trabalhos e
              ornamentações de ferro e metal.
            </p>
            <Link
              target="_blank"
              href="https://wa.me/5511940775846"
              className="bold mr-auto flex items-center justify-center gap-2 rounded-lg bg-primary p-4 text-center text-lg font-bold uppercase text-white shadow-lg duration-300 ease-in-out hover:bg-primary-hover md:text-xl"
            >
              <IoLogoWhatsapp className="text-3xl" />
              Fale conosco
            </Link>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
