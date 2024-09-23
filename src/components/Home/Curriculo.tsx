import ResumeCards from "../utils/ResumeCards";
import SectionText from "../utils/SectionText";

export default function Curriculo() {
  return (
    <section id="curriculo" className="mx-auto flex w-full justify-center ">
      <div className="relative flex w-full max-w-screen-xl flex-col items-center pt-[50px] xl:pt-[100px] ">
        <SectionText firstWord="MEU" lastWord="CURRÍCULO" bgWord="CURRÍCULO" />
        <div className="grid w-full grid-cols-1 gap-x-6 gap-y-8 xl:grid-cols-2">
          <ResumeCards title="Formação Acadêmica"></ResumeCards>
          <ResumeCards title="Experiência Profissional"></ResumeCards>
          {/* habilidades de programação, Fluência em Idiomas, Competências Profissionais,  Conhecimentos*/}
          <ResumeCards title="Habilidades de Programação"></ResumeCards>
          <ResumeCards title="Fluência em Idiomas"></ResumeCards>
          <ResumeCards title="Competências Profissionais"></ResumeCards>
          <ResumeCards title="Conhecimentos"></ResumeCards>
        </div>
      </div>
    </section>
  );
}
