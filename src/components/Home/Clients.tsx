import Image from "next/image";
import SectionText from "../utils/SectionText";
import ClinicaPlenaLogo from "@/assets/clients/clinica-plena.png";
import ThunderLogo from "@/assets/clients/thndr.svg";
import FerpanLogo from "@/assets/clients/ferpan.svg";

export default function Clients() {
  return (
    <section id="client" className="mx-auto flex w-full justify-center ">
      <div className="relative flex w-full max-w-screen-xl flex-col items-center  pt-[50px] xl:pt-[100px] ">
        <SectionText firstWord="MEUS" lastWord="CLIENTES" bgWord="CLIENTES" />
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 xl:grid-cols-3">
          {/* up when hover */}
          <div className="group flex items-center justify-center rounded-lg p-8 shadow-float duration-300 ease-in hover:-translate-y-4">
            <div className="flex flex-col items-center gap-x-4 gap-y-8">
              <div className="">
                <Image
                  className="duration-300 ease-in group-hover:scale-105"
                  src={ClinicaPlenaLogo.src}
                  alt={"Clinica Plena Logo"}
                  width={240}
                  height={240}
                />
              </div>
            </div>
          </div>
          <div className="group flex items-center justify-center rounded-lg p-8 shadow-float duration-300 ease-in hover:-translate-y-4">
            <div className="flex flex-col items-center gap-x-4 gap-y-8">
              <div className="flex flex-col items-center justify-center gap-y-2 duration-300 ease-in group-hover:scale-105">
                <Image
                  src={ThunderLogo.src}
                  alt={"Clinica Plena Logo"}
                  width={100}
                  height={100}
                />
                <p className="font-heading text-4xl font-medium">Thdnr Group</p>
              </div>
            </div>
          </div>
          <div className="group flex items-center justify-center rounded-lg p-8 shadow-float duration-300 ease-in hover:-translate-y-4">
            <div className="flex flex-col items-center gap-x-4 gap-y-8">
              <div className="px-3 py-7">
                <Image
                  className="duration-300 ease-in group-hover:scale-105"
                  src={FerpanLogo.src}
                  alt={"Clinica Plena Logo"}
                  width={334.21}
                  height={129.93}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
