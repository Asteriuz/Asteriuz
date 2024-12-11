import {
  IoCheckmark,
  IoCodeSlash,
  IoFlash,
  IoHammer,
  IoLanguage,
  IoMedkit,
  IoSchool,
} from "react-icons/io5";
import CircularProgress from "../utils/CircularProgress";
import ResumeCards from "../utils/Cards/ResumeCards";
import SectionText from "../utils/SectionText";
import "react-circular-progressbar/dist/styles.css";
import BarProgress from "../utils/BarProgress";
import CertificateCard from "../utils/Cards/CertificateCard";
import CustomerExperienceImg from "@/assets/certificado/customer-experience.webp";
import PythonImg from "@/assets/certificado/python.webp";
import ReactImg from "@/assets/certificado/react.webp";
import VerticalTimelineWrapper from "../utils/VerticalTimelineWrapper";

const timelineFormationItems = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    date: "FIAP / 2023 - 2025",
    icon: <IoSchool />,
    list: [
      "Criação de soluções completas, abrangendo frontend e backend.",
      "Implementação de metodologias ágeis para entrega rápida e flexível.",
    ],
  },
  {
    title: "Curso de Inglês Avançado",
    date: "Cultura Inglesa / 2014 - 2018",
    icon: <IoLanguage />,
    list: [
      "Compreensão avançada da língua inglesa, tanto oral quanto escrita.",
      "Capacidade de analisar textos literários e acadêmicos.",
    ],
  },
  {
    title: "Cursos de Desenvolvimento na Alura",
    date: "Alura / 2021 - Presente",
    icon: <IoCodeSlash />,
    list: [
      "Aprendizado de diversas linguagens de programação e frameworks modernos.",
      "Foco em desenvolvimento web e mobile",
    ],
  },
];

const timelineExperienceItems = [
  {
    title: "Clínica Plena",
    date: "Freelancer",
    icon: <IoMedkit />,
    list: [
      "Desenvolvimento e lançamento do site da Clínica Plena",
      "Registro de domínio, otimização de SEO e performance",
      "https://clinicaplenatatuape.com.br/",
    ],
  },
  {
    title: "Thndr Group",
    date: "Freelancer",
    icon: <IoFlash />,
    list: [
      "Desenvolvimento e lançamento do site da Thndr Group",
      "Registro de domínio, otimização de SEO e performance",
      "https://thndr.com.br/",
    ],
  },
  {
    title: "Ferpan Comércio de Ferros",
    date: "Freelancer",
    icon: <IoHammer />,
    list: [
      "Desenvolvimento e lançamento do site da Ferpan",
      "Registro de domínio, otimização de SEO e performance",
      "https://ferpancomerciodeferro.com.br/",
    ],
  },
];

export default function Curriculo() {
  const knowledge = [
    "Fornecimento para Design e Desenvolvimento",
    "Vontade de aprender novas Tecnologias",
    "Habilidades de resolução de problemas e coordenação",
    "Desenvolvimento de Aplicativos Móveis e Websites",
    "Trabalho em equipe / Gerenciamento de Equipe",
    "Flexível com Condições de Trabalho",
    "Excelente habilidade de escuta e rápida aprendizagem",
    "Esforço para aplicar meus conhecimentos e habilidades",
  ];

  return (
    <section id="curriculo" className="mx-auto flex w-full justify-center ">
      <div className="relative flex w-full max-w-screen-xl flex-col items-center pt-[50px] xl:pt-[100px] ">
        <SectionText firstWord="MEU" lastWord="CURRÍCULO" bgWord="CURRÍCULO" />
        <div className="grid w-full grid-cols-1 gap-x-6 gap-y-8 xl:grid-cols-2">
          <ResumeCards title="Formação Acadêmica">
            <VerticalTimelineWrapper items={timelineFormationItems} />
          </ResumeCards>
          <ResumeCards title="Experiência Profissional">
            <VerticalTimelineWrapper items={timelineExperienceItems} />
          </ResumeCards>
          <ResumeCards title="Habilidades de Programação">
            <div className="flex flex-col gap-5">
              <BarProgress title="React & Next.js" value={90} />
              <BarProgress title="TailwindCSS" value={100} />
              <BarProgress title="Python" value={85} />
              <BarProgress title="TypeScript" value={90} />
            </div>
          </ResumeCards>
          <ResumeCards title="Fluência em Idiomas">
            <div className="flex flex-col gap-5">
              <BarProgress title="Português" value={100} />
              <BarProgress title="Inglês" value={95} />
              <BarProgress title="Espanhol" value={50} />
              <BarProgress title="Japonês" value={30} />
            </div>
          </ResumeCards>
          <ResumeCards title="Competências Profissionais">
            <div className="grid grid-cols-2 grid-rows-2 gap-y-8 ">
              <CircularProgress title="Web Design" value={80} />
              <CircularProgress title="Web Development" value={90} />
              <CircularProgress title="Graphic Design" value={70} />
              <CircularProgress title="Seo Marketing" value={85} />
            </div>
          </ResumeCards>
          <ResumeCards title="Atributos & Expertise">
            <ul className="flex h-full flex-col justify-between gap-y-3">
              {knowledge.map((item, index) => (
                <li key={index} className="flex items-center gap-2 ">
                  <IoCheckmark className="shrink-0 text-2xl text-primary" />
                  <p className="text-[15px] xl:text-base">{item}</p>
                </li>
              ))}
            </ul>
          </ResumeCards>
          <div className="grid gap-5 lg:grid-cols-3 xl:col-span-2">
            <CertificateCard
              title="Customer Experience Management"
              description="Gestão de Experiência do Cliente, garantindo a satisfação e fidelização."
              image={CustomerExperienceImg.src}
              link="https://on.fiap.com.br/local/nanocourses/validar-certificado/?chave=ba501d43f4a8e52f46d56c96a8d86ccf"
            />
            <CertificateCard
              title="Python 3 do Básico Ao Avançado"
              description="Dominío em Python 3, garantindo soluções rápidas, eficazes e automatizadas."
              image={PythonImg.src}
              link="https://www.udemy.com/certificate/UC-fba25b71-3441-4e33-8e8e-9cf43adc6944/"
            />
            <CertificateCard
              title="Aplicações React com Typescript"
              description="Desenvolvimento de aplicações web com React e Typescript."
              image={ReactImg.src}
              link="https://cursos.alura.com.br/user/asteriuz/degree-react-ts-v581770-581770/certificate"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
