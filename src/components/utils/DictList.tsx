import Link from "next/link";

type DictListProps = {
  chave: string;
  valor: string;
  href?: string;
};

export default function DictList({ chave, valor, href }: DictListProps) {
  return (
    <li>
      <p className="flex gap-6">
        <span className="min-w-28 font-semibold text-semiblack">{chave}:</span>
        {" "}
        {/* {valor} */}
        {href
          ? (
            <Link href={href} className="transition-colors  hover:text-primary">
              {valor}
            </Link>
          )
          : valor}
      </p>
    </li>
  );
}
