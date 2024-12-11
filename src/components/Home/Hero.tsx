"use client";
import Image from "next/image";
import Profile from "@/assets/profile/Profile.webp";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import TypeIt from "typeit-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-40 flex h-screen w-full flex-col overflow-hidden bg-black"
    >
      <canvas
        id="matrix-bg"
        className="absolute h-full w-full brightness-[0.7]"
      ></canvas>
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-7 xl:gap-8">
        <div className="hero-profile">
          <Image
            src={Profile}
            alt="Profile"
            className="rounded-full"
            width={246}
            height={246}
            priority
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className=" flex flex-col items-center justify-center gap-3 xl:gap-4">
          <h1 className="text-center font-heading text-3xl font-bold tracking-wider text-white xl:text-5xl">
            Augusto Barcelos Barros
          </h1>
          <h2 className="font-heading text-lg font-medium tracking-wide text-white xl:text-2xl">
            Eu sou{" "}
            <TypeIt
              className="text-primary"
              options={{
                loop: true,
                strings: [
                  "Full-Stack Developer",
                  "UX/UI Designer",
                  "Programador",
                ],
                speed: 100,
                deleteSpeed: 50,
                breakLines: false,
                nextStringDelay: 750,
              }}
            />
          </h2>
        </div>
        <div className="flex items-center justify-center gap-5">
          <Link
            href={"https://github.com/Asteriuz"}
            target="_blank"
            className="rounded-full border border-transwhite bg-black p-2 transition-colors duration-300 ease-in-out hover:bg-primary"
            aria-label="Github"
          >
            <FaGithub className="p-1 text-3xl text-white" />
          </Link>

          <Link
            href={"https://www.linkedin.com/in/asteriuz/"}
            target="_blank"
            className="rounded-full border border-transwhite bg-black p-2 transition-colors duration-300 ease-in hover:bg-primary"
            aria-label="Linkedin"
          >
            <FaLinkedinIn className="p-1 text-3xl text-white" />
          </Link>

          <Link
            href={"https://wa.me/5511997434003"}
            target="_blank"
            className="rounded-full
              border border-transwhite bg-black p-2 transition-colors duration-300 ease-in hover:bg-primary"
            aria-label="Twitter"
          >
            <FaWhatsapp className="p-[2px] text-3xl text-white" />
          </Link>

          {/* <Link
            href={"https://www.instagram.com/asteriuz_o_2/"}
            target="_blank"
            className="rounded-full border border-transwhite bg-black p-2 transition-colors duration-300 ease-in hover:bg-primary"
          >
            <FaInstagram className="p-1 text-3xl text-white" />
          </Link> */}
        </div>
        <div className="mt-2 flex items-center justify-center gap-5 text-sm font-medium xl:text-base">
          <Link
            href={"https://wa.me/5511997434003"}
            target="_blank"
            className="material-bubble material-bubble-red relative rounded-lg bg-primary px-5 py-3 uppercase text-white xl:px-7"
          >
            <span className="relative z-20">Contate-me</span>
          </Link>
          <Link
            href="/Curriculo.pdf"
            target="_blank"
            className="material-bubble material-bubble-white relative rounded-lg bg-white px-5 py-3 uppercase text-primary xl:px-7 "
          >
            <span className="relative z-20">Meu Portfólio</span>
          </Link>
        </div>
      </div>
      <Link
        href="#about"
        passHref
        className="scroll-down-arrow-hero absolute bottom-3
         left-1/2 z-40 mx-auto hidden -translate-x-1/2 cursor-pointer text-center tall:block"
        aria-label="Scrolle para baixo para saber mais"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon relative bottom-0.5 w-14 animate-bounce text-white"
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
    </section>
  );
}
