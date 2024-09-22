"use client";
import HeroBg from "@/assets/bg/hero.webp";
import Image from "next/image";
import Profile from "@/assets/profile/Profile.jpg";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-screen w-full flex-col bg-semiblack"
    >
      <Image
        src={
          "https://hinglajcorporation.com/html/shivam-template/shivam-sidebar/sidebar-default/assets/images/home-banner.jpg"
        }
        alt="Hero"
        fill
        style={{ objectFit: "cover" }}
        className="absolute h-full w-full brightness-[0.40]"
      />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-7">
        <div className="flex w-48 items-center justify-center overflow-hidden rounded-full border-[5px] border-primary  shadow-2xl">
          <Image src={Profile} alt="Profile" className="rounded-full" />
        </div>
        <div className=" flex flex-col items-center justify-center gap-3">
          <h1 className="text-4xl font-bold text-white">
            Augusto Barcelos Barros
          </h1>
          <h2 className="font-semibold text-lg text-white">
            Eu sou um <span className="text-primary">UX/UI Designer</span>
          </h2>
        </div>
        <div className="flex items-center justify-center gap-5">
          <Link
            href={"https://github.com/Asteriuz"}
            target="_blank"
            className="rounded-full border border-transwhite p-2 transition-colors duration-300 ease-in-out hover:bg-primary"
          >
            <FaGithub className=" p-1 text-2xl text-white" />
          </Link>
          <Link
            href={"https://pt-br.facebook.com/augusto.barcelosbarros/"}
            target="_blank"
            className="rounded-full border border-transwhite p-2 transition-colors duration-300 ease-in hover:bg-primary"
          >
            <FaFacebookF className="p-1 text-2xl text-white" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/asteriuz/"}
            target="_blank"
            className="rounded-full border border-transwhite p-2 transition-colors duration-300 ease-in hover:bg-primary"
          >
            <FaLinkedinIn className="p-1 text-2xl text-white" />
          </Link>
          <Link
            href={"https://twitter.com/@gutocebola"}
            target="_blank"
            className="rounded-full border border-transwhite p-2 transition-colors duration-300 ease-in hover:bg-primary"
          >
            <FaXTwitter className="p-1 text-2xl text-white" />
          </Link>

          <Link
            href={"https://www.instagram.com/asteriuz_o_2/"}
            target="_blank"
            className="rounded-full border border-transwhite p-2 transition-colors duration-300 ease-in hover:bg-primary"
          >
            <FaInstagram className="p-1 text-2xl text-white" />
          </Link>
        </div>
        <div className="font-medium mt-2 flex items-center justify-center gap-5 text-base">
          <button className="rounded-lg bg-primary px-7 py-3 uppercase text-white">
            Contate-me
          </button>
          <button className="rounded-lg bg-white px-7 py-3 uppercase text-primary ">
            Meu Portfolio
          </button>
        </div>
      </div>
      <Link
        href="#about"
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
    </section>
  );
}
