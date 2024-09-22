import SectionText from "../utils/SectionText";

export default function Curriculo() {
  return (
    <section id="resume" className="mx-auto flex w-full justify-center ">
      <div className="relative flex w-full max-w-screen-xl flex-col items-center  pt-[100px] ">
        <SectionText firstWord="MEU" lastWord="CURRÍCULO" bgWord="CURRÍCULO" />
      </div>
    </section>
  );
}
