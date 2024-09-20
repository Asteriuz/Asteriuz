import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  description: string;
  promotion?: boolean;
  image: string;
};

export default function ProductCard(props: ProductCardProps) {
  const href = `https://wa.me/5511940775846?text=Olá, gostaria de saber sobre o produto ${props.title}`;
  return (
    <div className="flex max-w-96 flex-col overflow-hidden rounded-lg border border-cinza-border shadow-lg lg:w-96">
      <div className="relative">
        <div className="h-80 bg-white">
          <Image
            alt={props.title}
            src={props.image}
            fill
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        </div>
        {props.promotion && (
          <div className="absolute left-0 top-0 rounded-br-lg bg-primary px-2 py-1 text-white">
            Promoção
          </div>
        )}
      </div>
      <div className="flex flex-grow flex-col gap-5 p-4 pb-5">
        <div className="flex flex-grow flex-col gap-2">
          <h3 className="text-xl font-bold">{props.title}</h3>
          <p className="text-base text-cinza-text">{props.description}</p>
        </div>
        <div className="mt-auto">
          <Link
            href={href}
           className="rounded-lg bg-primary px-4 py-2 text-white transition-colors hover:bg-primary-hover">
            Comprar
          </Link>
        </div>
      </div>
    </div>
  );
}
