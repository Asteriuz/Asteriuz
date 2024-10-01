"use client";
import {
  IoBriefcase,
  IoDocumentText,
  IoHome,
  IoLayers,
  IoMail,
  IoPerson,
} from "react-icons/io5";
import HeaderLink from "./HeaderLink";
import Profile from "@/assets/profile/Profile.webp";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  // useEffect(() => {
  //   const sections = document.querySelectorAll("section");
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActiveSection(entry.target.id);
  //         }
  //       });
  //     },
  //     { threshold: 0.5 }, // Adjust threshold for when you want to detect the section in view
  //   );

  //   sections.forEach((section) => observer.observe(section));

  //   return () => {
  //     sections.forEach((section) => observer.unobserve(section));
  //   };
  // }, []);

  return <>
    <div
      id="overlay"
      className="fixed inset-0 z-50 hidden bg-black bg-opacity-50 transition-all duration-500 ease-in-out"
    ></div>
    <nav
      id="nav"
      className="fixed z-50 h-screen w-64  -translate-x-full flex-col items-center bg-white shadow-xl transition-all duration-300 ease-in-out xl:z-30 xl:flex xl:w-72 xl:translate-x-0"
    >
      <div className="flex h-full w-full flex-col ">
        <div className="side-menu-avatar relative flex shrink-0 flex-col items-center justify-center gap-5 overflow-hidden py-3 tall:py-7">
          <Link
            className="flex w-32 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-semiblack bg-semiblack  shadow-lg tall:w-36"
            href="#hero"
          >
            <Image
              src={Profile}
              alt="Profile"
              className="rounded-full transition-all duration-500 ease-in-out hover:scale-110"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </Link>
          <h2 className="text-center text-lg font-semibold">
            Augusto Barcelos Barros
          </h2>
        </div>
        <div className="divider m-0"></div>
        <div className="ml-6 flex flex-1 flex-col gap-7 tall:gap-9 py-4 tall:py-7 xl:ml-10">
          <HeaderLink
            Icon={IoHome}
            title="Home"
            link="#hero"
            isActive={activeSection === "hero"}
          />
          <HeaderLink
            Icon={IoPerson}
            title="Sobre"
            link="#about"
            isActive={activeSection === "about"}
          />
          <HeaderLink
            Icon={IoBriefcase}
            title="Serviços"
            link="#services"
            isActive={activeSection === "services"}
          />
          <HeaderLink
            Icon={IoDocumentText}
            title="Currículo"
            link="#curriculo"
            isActive={activeSection === "curriculo"}
          />
          <HeaderLink
            Icon={IoLayers}
            title="Portfólio"
            link="#portfolio"
            isActive={activeSection === "portfolio"}
          />
          <HeaderLink
            Icon={IoMail}
            title="Contato"
            link="#contact"
            isActive={activeSection === "contact"}
          />
        </div>
        <div className="ml-6 flex flex-col justify-center gap-1 py-7 text-xs tall:text-sm xl:ml-10">
          <p>
            © 2024{" "}
            <Link
              href={"https://github.com/Asteriuz"}
              target="_blank"
              className="underline decoration-primary transition-all duration-500 ease-in-out hover:text-primary"
            >
              Asteriuz
            </Link>
          </p>
          <p>Todos os direitos reservados</p>
        </div>
      </div>
    </nav>
  </>;
}
