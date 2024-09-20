"use client";

import ProductCard from "./Utils/ProductCard";
import Elotrodo from "@/assets/products/eletrodo.webp";
import Metalon from "@/assets/products/metalon.webp";
import Raiada from "@/assets/products/raiada.webp";
import Zarcao from "@/assets/products/zarcao.webp";
import TelhaZinco from "@/assets/products/telha-zinco.webp";
import Abrasivos from "@/assets/products/abrasivos.webp";
import Ferramentas from "@/assets/products/ferramentas.webp";
import Laminados from "@/assets/products/laminados.webp";
import EPI from "@/assets/products/material-epi.webp";
import PerfilU from "@/assets/products/perfil-u.webp";
import PainelWall from "@/assets/products/painel-wall.webp";
import Vigas from "@/assets/products/vigas.webp";
import FadeInSection from "./Utils/FadeInSection";

export default function Product() {
  return (
    <FadeInSection>
      <section
        id="produtos"
        className="relative mb-8 flex flex-col items-center justify-center gap-12 px-8 py-6 lg:my-8 lg:mb-16 lg:gap-16"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="text-center text-xl font-bold tracking-wider text-primary lg:text-2xl">
            Qualidade Garantida
          </h3>
          <h2 className="text-center text-5xl font-bold tracking-wider lg:text-[54px]">
            Nossos produtos
          </h2>
          <hr className="obs-hidden obs-visible mx-auto my-2 mt-6 h-1 w-52 rounded border-0 bg-primary"></hr>
        </div>
        <div className="grid  grid-cols-1 gap-x-14 min-[1400px]:gap-x-24 gap-y-12 lg:grid-cols-2 lg:gap-y-24 xl:grid-cols-3">
          <ProductCard
            title="Eletrodo (6013/7018/inox/ferro fundido)"
            description="Eletrodos de alta qualidade para soldagem eficiente em aço carbono, inox e ferro fundido."
            image={Elotrodo.src}
            promotion
          />
          <ProductCard
            title="Metalon em geral (Preto/Galvanizado)"
            description="Tubos metalon, disponíveis em versões preta ou galvanizada, para múltiplas aplicações."
            image={Metalon.src}
          />
          <ProductCard
            title="Raiada (Manual, automática e perfurada)"
            description="Chapas raiadas, disponíveis em versões manuais, automáticas e perfuradas, para múltiplas aplicações."
            promotion
            image={Raiada.src}
          />
          <ProductCard
            title="Zarcão e Galvite (fundo e dupla função)"
            description="Protetores anticorrosivos para preparação e proteção de superfícies metálicas."
            image={Zarcao.src}
          />
          <ProductCard
            title="Telhas de zinco (normal, saduíche e translúcida)"
            description="Telhas de zinco robustas para coberturas seguras e duráveis, em diferentes modelos."
            promotion
            image={TelhaZinco.src}
          />
          <ProductCard
            title="Abrasivos (disco de corte, desbaste, flap e lixa de ferro)"
            description="Abrasivos especializados para cortes precisos e acabamentos em metais."
            image={Abrasivos.src}
          />
          <ProductCard
            title="Ferramentas elétricas (marcara automática, inversora elétrica, esmerilhadeira e furadeira)"
            description="Máscaras, inversoras, esmerilhadeiras e furadeiras para trabalhos profissionais."
            promotion
            image={Ferramentas.src}
          />
          <ProductCard
            title="Laminados (Barra redonda, chata, cantoneira e Ferro T)"
            description="Perfis e barras laminadas, como cantoneiras e barras chatas, para diversas construções."
            image={Laminados.src}
          />
          <ProductCard
            title="Material para EPI (BOTA, ÓCULOS, LUVAS E AVENTAL)"
            description="Equipamentos de proteção individual, incluindo botas, óculos, luvas e aventais."
            promotion
            image={EPI.src}
          />
          <ProductCard
            title="Perfil U (Chapa/Laminado)"
            description="Perfis U laminados ou em chapa, ideais para estruturas robustas."
            image={PerfilU.src}
          />
          <ProductCard
            title="Painel wall 2.50x1.20"
            description="Painel durável, ideal para revestimentos e divisórias com acabamento superior."
            promotion
            image={PainelWall.src}
          />
          <ProductCard
            title="Vigas (W/H/I)"
            description="Vigas metálicas em perfis W, H e I, para suportes e construções."
            promotion
            image={Vigas.src}
          />
        </div>
      </section>
    </FadeInSection>
  );
}
