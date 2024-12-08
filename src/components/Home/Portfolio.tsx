import ProjectCard from "../utils/Cards/ProjectCard";
import SectionText from "../utils/SectionText";
import ClinicaPlena from "@/assets/projects/clinica-plena.png";
import Thndr from "@/assets/projects/thndr.png";
import Ferpan from "@/assets/projects/ferpan.png";
import Asteriuz from "@/assets/projects/asteriuz.png";

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto flex w-full justify-center">
      <div className="relative flex w-full max-w-screen-xl flex-col items-center pt-[50px] xl:pt-[100px]">
        <SectionText firstWord="MEU" lastWord="PORTFÓLIO" bgWord="PORTFÓLIO" />
        {/* Grid layout */}
        <div className="grid gap-10 md:grid-cols-2 xl:col-span-2">
          {/* Project Cards */}
          <ProjectCard
            title="Clínica Plena"
            image={ClinicaPlena.src}
            link="https://clinicaplenatatuape.com.br"
          />
          <ProjectCard
            title="Thndr Group"
            image={Thndr.src}
            link="https://thndr.com.br"
          />
          <ProjectCard
            title="Ferpan Comércio de Ferros"
            image={Ferpan.src}
            link="https://ferpancomerciodeferro.com.br"
          />
          <ProjectCard
            title="Asteriuz"
            image={Asteriuz.src}
            link="https://asteriuz.com.br"
          />
        </div>
      </div>
    </section>
  );
}
