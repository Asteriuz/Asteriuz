import Logo from "@/assets/logo/Logo";
import HeaderMobile from "./HeaderMobile";
import {
  IoBriefcase,
  IoDocumentText,
  IoHome,
  IoLayers,
  IoMail,
  IoPerson,
} from "react-icons/io5";
import HeaderLink from "./HeaderLink";
import Profile from "@/assets/profile/Profile.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav
      id="nav"
      className="fixed z-40 flex h-screen w-72 flex-col items-center shadow-xl transition-all duration-500 ease-in-out bg-white"
    >
      <HeaderMobile />
      <div className="flex h-full w-full flex-col ">
        <div className="side-menu-avatar relative flex flex-col items-center justify-center gap-5 overflow-hidden py-7">
          <Link className="flex w-36 items-center justify-center overflow-hidden rounded-full border-4 border-semiblack  bg-semiblack shadow-lg" href="#hero">
            <Image src={Profile} alt="Profile" className="rounded-full hover:scale-110 transition-all duration-500 ease-in-out" />
          </Link>
          <h2 className="font-semibold text-center text-lg">
            Augusto Barcelos Barros
          </h2>
        </div>
        <div className="divider m-0"></div>
        <div className="ml-10 flex flex-1 flex-col gap-9 py-7 ">
          <HeaderLink Icon={IoHome} title="Home" link="#hero" />
          <HeaderLink Icon={IoPerson} title="Sobre" link="#about" />
          <HeaderLink Icon={IoBriefcase} title="Serviços" link="#services" />
          <HeaderLink Icon={IoDocumentText} title="Currículo" link="#resume" />
          <HeaderLink Icon={IoLayers} title="Projetos" link="#projects" />
          <HeaderLink Icon={IoMail} title="Contato" link="#contact" />
        </div>
        <div className="ml-10 flex flex-col justify-center gap-1 py-7 text-sm">
          <p>
            © 2024{" "}
            <Link
              href={"https://github.com/Asteriuz"}
              target="_blank"
              className="underline decoration-primary hover:text-primary transition-all duration-500 ease-in-out"
            >
              Asteriuz
            </Link>
          </p>
          <p>Todos os direitos reservados</p>
        </div>
      </div>
    </nav>
  );
}
