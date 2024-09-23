import SectionText from "../utils/SectionText";

export default function Portfolio() {
  return (
    <section id="services" className="mx-auto flex w-full justify-center ">
      <div className="relative flex w-full max-w-screen-xl flex-col items-center pt-[50px] xl:pt-[100px] ">
        <SectionText firstWord="MEU" lastWord="PORTFÓLIO" bgWord="PORTFÓLIO" />
      </div>
    </section>
  );
}
