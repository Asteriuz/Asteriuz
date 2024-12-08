import Image from "next/image";
import Link from "next/link";

type CertificateCardProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};

export default function CertificateCard({
  image,
  title,
  description,
  link,
}: CertificateCardProps) {
  return (
    <div className="group w-full rounded-lg shadow-float duration-300 ease-in hover:-translate-y-3">
      <div className="flex h-full flex-col gap-x-4 gap-y-8">
        <div className="flex h-full flex-col gap-6">
          <div className="flex flex-col gap-4">
            <Link
              href={link}
              target="_blank"
              className="px-5 pt-5 duration-300 ease-in group-hover:p-0"
            >
              <Image
                className="overflow-hidden rounded-lg duration-300 ease-in hover:cursor-pointer group-hover:rounded-b-none"
                src={image}
                alt={title}
                height={260}
                width={364}
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                }}
              />
            </Link>
            <div className="flex flex-col gap-2 px-5 pb-5">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-cinza-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
