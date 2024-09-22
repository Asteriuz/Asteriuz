import SectionText from "../utils/SectionText";

export default function Clients() {
  return (
    <section id="services" className="mx-auto flex w-full justify-center ">
      <div className="relative flex w-full max-w-screen-xl flex-col items-center  pt-[100px] ">
        <SectionText firstWord="MEUS" lastWord="CLIENTES" bgWord="CLIENTES" />
      </div>
    </section>
  );
}
