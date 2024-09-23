"use client";
import Image from "next/image";
import AboutImage from "@/assets/logo/LogoMark.svg"; // Import the image using the path alias
import DictList from "../utils/DictList";
import Link from "next/link";
import Card from "../utils/Cards";
import AlvoImg from "@/assets/icons/alvo.png";
import CursoImg from "@/assets/icons/curso.png";
import ExpImg from "@/assets/icons/exp.png";
import PessoaImg from "@/assets/icons/pessoa.png";
import SectionText from "../utils/SectionText";
import { IoDownloadOutline } from "react-icons/io5";

export default function About() {
  // Aniversário, Cidade, Estudo, Website, Telefone, Idade, Expêriencia, Degree, Email, Github
  const dict = [
    {
      chave: "Estudo",
      valor: "FIAP",
    },
    {
      chave: "Cidade",
      valor: "São Paulo, SP",
    },

    {
      chave: "Email",
      valor: "augustobb@live.com",
      href: "mailto:augustobb@live.com",
    },

    {
      chave: "Telefone",
      valor: "+55 11 99743-4003",
      href: "tel:+5511997434003",
    },
    {
      chave: "Aniversário",
      valor: "26 de Dezembro de 2002",
    },
    {
      chave: "Idade",
      valor: "21",
    },
    {
      chave: "Expêriencia",
      valor: "+3 anos",
    },
    {
      chave: "Escolaridade",
      valor: "Ensino Superior",
    },
    {
      chave: "Website",
      valor: "asteriuz.com.br",
      href: "https://asteriuz.com.br",
    },
    {
      chave: "Github",
      valor: "@Asteriuz",
      href: "github.com/Asteriuz",
    },
  ];

  return (
    <section id="about" className="mx-auto flex w-full justify-center">
      <div className="relative flex w-full max-w-screen-xl flex-col items-center pt-[50px] xl:pt-[100px] ">
        <SectionText firstWord="SOBRE" lastWord="MIM" bgWord="SOBRE" />
        <div className="flex max-w-full flex-col gap-8 ">
          <div className="flex max-w-screen-xl flex-col items-center justify-center gap-6 md:flex-row ">
            <div className="relative z-10 overflow-hidden rounded-lg p-5 shadow-float xl:w-[900px]">
              <div
                id="about-image"
                className="relative shrink-0 rounded-lg bg-semiblack p-4"
              >
                <Image
                  src={AboutImage.src}
                  width={900}
                  height={900}
                  alt="about"
                  className="h-auto w-auto rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="rounded-lg p-6 shadow-float xl:p-8">
              <div className="flex flex-col gap-4  text-cinza-text">
                <p>
                  Eu sou Augusto Barcelos Barros, full-stack developer com
                  experiência na criação de WebSites Mordernos. Ao longo da
                  minha jornada, tenho me dedicado a oferecer soluções
                  funcionais e personalizadas para meus clientes, garantindo
                  satisfação em cada projeto.
                </p>
                <p>
                  Proporciando código limpo e fácil de manter, com foco em
                  design responsivo para dispositivos móveis. Desenvolvo sites
                  modernos que atendem às necessidades básicas de presença
                  online e estratégias de marketing digital.
                </p>
                <p>
                  Ofereço suporte durante o desenvolvimento e estou disponível
                  para trabalhos freelancers. Conecte-se comigo pelo meu perfil
                  para discutirmos como posso ajudar a trazer sua ideia à vida.
                </p>
                <div className="mt-2 flex items-center gap-5 text-base font-medium">
                  <Link
                    href="/Curriculo.pdf"
                    target="_blank"
                    className="group relative flex items-center justify-center gap-2 rounded-md bg-primary px-11 py-3 uppercase text-white"
                  >
                    <IoDownloadOutline className="absolute left-4 translate-y-8 text-3xl opacity-0 transition-all duration-300 group-hover:-translate-y-0 group-hover:opacity-100" />
                    <p className="inline transition-transform duration-300 ease-in-out group-hover:translate-x-4">
                      DOWNLOAD CV
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-screen-xl rounded-lg p-6 shadow-float xl:p-8">
            <div className="flex flex-col gap-4 text-cinza-text">
              <ul className="grid w-full grid-cols-1 gap-y-3 xl:grid-cols-[12fr_11fr] ">
                <ul className="flex flex-col gap-3 xl:gap-4 ">
                  {dict.slice(0, 5).map((item, index) => (
                    <DictList key={index} {...item} />
                  ))}
                </ul>
                <ul className="flex flex-col gap-3 xl:gap-4">
                  {dict.slice(5, 10).map((item, index) => (
                    <DictList key={index} {...item} />
                  ))}
                </ul>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 xl:grid-cols-4">
            <Card
              subtitle="Projetos concluídos"
              number={10}
              suffix="+"
              icon={AlvoImg.src}
            />
            <Card
              subtitle="Clientes satisfeitos"
              number={94}
              suffix=" k+"
              icon={PessoaImg.src}
            />
            <Card
              subtitle="Cursos realizados"
              number={20}
              suffix="+"
              icon={CursoImg.src}
            />
            <Card
              subtitle="Anos de experiência"
              number={3}
              suffix="+"
              icon={ExpImg.src}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
