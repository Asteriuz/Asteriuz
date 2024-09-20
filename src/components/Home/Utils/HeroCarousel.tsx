"use client"; // Ensures this component is a Client Component

import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import Link from "next/link";

type Slide = {
  imageUrl: string;
  title: string;
  toptitle: string;
  subtitle: string;
  button1: string;
  button1Link: string;
};

type HeroCarouselProps = {
  slides: Slide[];
};

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      onSelect();
      emblaApi.on("select", onSelect);
    }
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative mt-28 h-[500px] w-full flex-[0_0_100%] lg:h-[calc(100vh-7rem)]"
            >
              <Image
                className="brightness-[0.4]"
                src={slide.imageUrl}
                alt={slide.title}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex  flex-col items-center justify-center gap-4 text-center text-white md:max-w-screen-md lg:max-w-[900px] lg:gap-8">
                  <p className="text-lg uppercase tracking-wide lg:text-2xl">
                    {slide.toptitle}
                  </p>
                  <h1 className="text-3xl font-bold uppercase tracking-wide md:text-5xl lg:text-6xl lg:leading-tight">
                    {slide.title}
                  </h1>
                  <p className="mb-6 px-10 text-[15px] leading-relaxed tracking-wide lg:text-lg  lg:uppercase">
                    {slide.subtitle}
                  </p>
                  <div className="flex gap-6 text-base lg:text-lg">
                    <Link
                      href={slide.button1Link}
                      passHref
                      className="rounded-lg bg-white px-6 py-3 text-black shadow-2xl"
                    >
                      {slide.button1}
                    </Link>
                    <Link
                      href="#contato"
                      passHref
                      className="rounded-lg bg-primary px-6 py-3 text-white shadow-2xl transition-colors hover:bg-primary-hover"
                    >
                      Contato
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows for larger screens */}
      <button
        className="absolute left-6 top-1/2 hidden -translate-y-1/2 transform rounded-full bg-primary px-4 py-4 text-xl text-white transition-colors hover:bg-primary-hover lg:block"
        onClick={scrollPrev}
        aria-label="Slide anterior"
      >
        <IoArrowBack />
      </button>
      <button
        className="absolute right-6 top-1/2 hidden -translate-y-1/2 transform rounded-full bg-primary px-4 py-4 text-xl text-white transition-colors hover:bg-primary-hover lg:block"
        onClick={scrollNext}
        aria-label="Próximo slide"
      >
        <IoArrowForward />
      </button>

      <Link
        href="#sobre"
        passHref
        className="scroll-down-arrow-hero absolute bottom-6
         left-1/2 z-40 mx-auto hidden -translate-x-1/2 cursor-pointer text-center lg:block"
        aria-label="Scrolle para baixo para saber mais"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon relative bottom-0.5 w-16 animate-bounce text-white"
          viewBox="0 0 512 512"
        >
          <path
            className="fill-none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="48"
            d="M112 184l144 144 144-144"
          />
        </svg>
      </Link>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-2 lg:hidden">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 w-3 rounded-full ${
              index === selectedIndex ? "bg-primary" : "bg-cinza"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
