import Image from "next/image";

type CardProps = {
  title?: string;
  subtitle: string;
  number?: number;
  suffix?: string;
  icon: string;
};

export default function Card({
  title,
  number,
  icon,
  suffix,
  subtitle,
}: CardProps) {
  return (
    <div className="w-full rounded-lg p-6 shadow-float duration-300 ease-in hover:-translate-y-3 xl:p-8">
      <div className="flex flex-col items-center gap-x-4 gap-y-8">
        <div className="flex h-20 w-20 items-center justify-center">
          <Image src={icon} alt={subtitle} width={80} height={80} />
        </div>
        {(number && (
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-3xl font-bold">
              {number}
              {suffix}
            </h3>
            <p className="text-cinza-text">{subtitle}</p>
          </div>
        )) || (
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-center text-base text-cinza-text">{subtitle}</p>
          </div>
        )}
      </div>
    </div>
  );
}
