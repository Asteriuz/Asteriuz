import Image from "next/image";

type CertificateCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function CertificateCard({
  image,
  title,
  description,
}: CertificateCardProps) {
  return (
    <div className="group w-full rounded-lg shadow-float duration-300 ease-in hover:-translate-y-3">
      <div className="flex h-full flex-col gap-x-4 gap-y-8">
        <div className="flex h-full flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="px-5 pt-5 group-hover:p-0 duration-300 ease-in">
              <Image
                className="overflow-hidden rounded-lg duration-300 ease-in group-hover:rounded-b-none"
                src={image}
                alt={title}
                height={260}
                width={364}
                layout="responsive"
                style={{ objectFit: "cover" }}
              />
            </div>
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
