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
      <div className="relative flex w-full max-w-screen-xl flex-col items-center  pt-[100px] ">
        <SectionText firstWord="SOBRE" lastWord="MIM" bgWord="SOBRE" />
        <div className="flex flex-col gap-8">
          <div className="flex max-w-screen-xl flex-col items-center justify-center gap-6 md:flex-row ">
            <div className="shadow-float relative z-10 w-[900px] overflow-hidden rounded-lg p-5">
              <div
                id="about-image"
                className="relative shrink-0 rounded-lg bg-semiblack p-4"
              >
                <Image
                  src={AboutImage.src}
                  width={900}
                  height={900}
                  alt="about"
                />
              </div>
            </div>
            <div className="shadow-float  rounded-lg p-8">
              <div className="flex flex-col gap-4 text-cinza-text">
                <p>
                  Eu sou Augusto Barcelos Barros, desenvolvedor web com
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
                    className="rounded-md bg-primary px-7 py-3 uppercase text-white"
                  >
                    DOWNLOAD CV
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-float max-w-screen-xl  rounded-lg p-8">
            <div className="flex flex-col gap-4 text-cinza-text">
              <ul className="grid w-full grid-cols-[12fr_11fr] ">
                <ul className="flex flex-col gap-4 ">
                  {dict.slice(0, 5).map((item, index) => (
                    <DictList key={index} {...item} />
                  ))}
                </ul>
                <ul className="flex flex-col gap-4">
                  {dict.slice(5, 10).map((item, index) => (
                    <DictList key={index} {...item} />
                  ))}
                </ul>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
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
