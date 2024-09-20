import Background from "@/assets/contact/metal\.webp";
import Image from "next/image";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function Contact() {
  return (
    <section
      id="contato"
      className="h-96 bg-cover bg-scroll bg-center bg-no-repeat md:bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${Background.src})`,
      }}
    >
      <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center text-white">
        <h2 className="text-3xl font-bold tracking-wide xs:text-4xl md:text-5xl">
          Precisa de Ajuda?
        </h2>
        <p className="text-base xs:text-lg md:text-xl">
          Estamos aqui para tirar suas dúvidas sobre nossos produtos
        </p>
        <Link
          target="_blank"
          href="https://wa.me/5511940775846"
          className="bold mt-6 flex items-center justify-center gap-2 rounded-lg  bg-primary p-4 text-center text-lg font-bold uppercase text-white shadow-lg duration-300 ease-in-out hover:bg-primary-hover md:text-xl"
        >
          <IoLogoWhatsapp className="text-3xl" />
          Fale conosco
        </Link>
      </div>
    </section>
  );
}
