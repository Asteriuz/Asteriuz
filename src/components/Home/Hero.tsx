"use client";
import Image from "next/image";
import Profile from "@/assets/profile/Profile.webp";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import Link from "next/link";
import Sunset from "@/assets/bg/sunset.webp";
import TypeIt from "typeit-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-40 flex h-screen w-full flex-col bg-black px-2 overflow-hidden"
    >
      <canvas
        id="matrix-bg"
        className="absolute h-full w-full brightness-[0.7]"
      ></canvas>
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-7 xl:gap-8">
        <div className="flex w-52 items-center justify-center overflow-hidden rounded-full border-[3px] border-primary shadow-2xl xl:mb-2 xl:w-64  xl:border-[5px]">
          <Image src={Profile} alt="Profile" className="rounded-full" />
        </div>
        <div className=" flex flex-col items-center justify-center gap-3 xl:gap-4">
          <h1 className="text-center text-3xl font-bold tracking-wider text-white xl:text-5xl">
            Augusto Barcelos Barros
          </h1>
          <h2 className="text-lg font-semibold tracking-wide text-white xl:text-2xl">
            Eu sou um {/* UX/UI Designer, Web Developer, Logo Designer */}
            <TypeIt
              className="text-primary"
              // change caret color
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
          >
            <FaGithub className=" p-1 text-3xl text-white" />
          </Link>

          <Link
            href={"https://www.linkedin.com/in/asteriuz/"}
            target="_blank"
            className="rounded-full border border-transwhite bg-black p-2 transition-colors duration-300 ease-in hover:bg-primary"
          >
            <FaLinkedinIn className="p-1 text-3xl text-white" />
          </Link>

          <Link
            href={"https://twitter.com/Asteriuz_"}
            target="_blank"
            className="rounded-full
              border border-transwhite bg-black p-2 transition-colors duration-300 ease-in hover:bg-primary"
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
          <button className="material-bubble material-bubble-red relative rounded-lg bg-primary px-5 py-3 uppercase text-white xl:px-7">
            <span className="relative z-20">Contate-me</span>
          </button>
          <button className="material-bubble material-bubble-white relative rounded-lg bg-white px-5 py-3 uppercase text-primary xl:px-7 ">
            <span className="relative z-20">Meu Portfólio</span>
          </button>
        </div>
      </div>
      <Link
        href="#about"
        passHref
        className="scroll-down-arrow-hero absolute bottom-6
         left-1/2 z-40 mx-auto block -translate-x-1/2 cursor-pointer text-center"
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
