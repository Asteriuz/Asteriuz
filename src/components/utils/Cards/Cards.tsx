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
          <Image
            src={icon}
            alt={subtitle}
            width={80}
            height={80}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
        {(number && (
          <div className="flex flex-col items-center gap-2">
            <p className="text-3xl font-semibold">
              {number}
              {suffix}
            </p>
            <p className="text-cinza-text">{subtitle}</p>
          </div>
        )) || (
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-center text-base text-cinza-text">{subtitle}</p>
          </div>
        )}
      </div>
    </div>
  );
}
