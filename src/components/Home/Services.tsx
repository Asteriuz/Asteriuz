import Card from "../utils/Cards";
import DesignImg from "@/assets/icons/design.webp";
import CodeImg from "@/assets/icons/code.webp";
import CreativeImg from "@/assets/icons/creative.webp";
import PCImg from "@/assets/icons/pc.webp";
import RocketImg from "@/assets/icons/rocket.webp";
import SeoImg from "@/assets/icons/seo.webp";
import SectionText from "../utils/SectionText";

export default function Services() {
  return (
    <section id="services" className="mx-auto flex w-full justify-center ">
      <div className="relative flex w-full max-w-screen-xl flex-col items-center pt-[50px] xl:pt-[100px] ">
        <SectionText firstWord="MEUS" lastWord="SERVIÇOS" bgWord="SERVIÇOS" />
        <div className="grid w-full grid-cols-1 xl:grid-cols-3 gap-x-6 gap-y-8">
          <Card
            title="Design de Sites"
            subtitle="Ofereço as últimas tendências de design, aprimorando a experiência do usuário."
            icon={DesignImg.src}
          />
          <Card
            title="Desenvolvimento Web"
            subtitle="Gerencio todas as ações necessárias para garantir um site funcional e atualizado."
            icon={CodeImg.src}
          />
          <Card
            title="Design Criativo"
            subtitle="Disponibilizo sempre três personalizações únicas sem custo adicional."
            icon={CreativeImg.src}
          />
          <Card
            title="Desenvolvimento de Apps"
            subtitle="Realizo o rastreamento de aplicativos para corrigir falhas e otimizar a performance."
            icon={PCImg.src}
          />
          <Card
            title="Rápido & Otimizado"
            subtitle="Asseguro o desempenho e a velocidade do seu site sempre no seu máximo."
            icon={RocketImg.src}
          />
          <Card
            title="Seo Master"
            subtitle="Monitoro o tráfego para melhorar a visibilidade e atrair mais visitantes."
            icon={SeoImg.src}
          />
        </div>
      </div>
    </section>
  );
}
