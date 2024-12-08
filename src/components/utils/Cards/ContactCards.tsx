import Link from "next/link";
import { IconType } from "react-icons";

type ContactCardProps = {
  title: string;
  subtitle: string;
  icon: IconType;
  color?: string;
  link?: string;
};

export default function ContactCard({
  title,
  icon,
  subtitle,
  link,
}: ContactCardProps) {
  return (
    <div className="w-full rounded-lg p-6 shadow-float duration-300 ease-in hover:-translate-y-1 xl:p-8">
      <div className="flex flex-col items-center gap-x-4 gap-y-5">
        {link
          ? (
            <Link
              aria-label={title}
              href={link}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-float">
                {icon({ size: 40, color: "#fff" })}
              </div>
            </Link>
          )
          : (
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-float">
              {icon({ size: 40, color: "#fff" })}
            </div>
          )}
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          {/* <p className="text-center text-lg text-cinza-text">{subtitle}</p> */}
          <p className="text-center text-lg text-cinza-text">
            {link
              ? (
                <Link
                  aria-label={title}
                  className="transition-colors ease-in hover:text-primary"
                  href={link}
                >
                  {subtitle}
                </Link>
              )
              : subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
